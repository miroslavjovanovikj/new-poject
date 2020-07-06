import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../styles/css/Create.css';
import '../../styles/css/Loading.css';
import Show from './Show';


class Index extends Component{
  constructor(props){
    super(props);
    this.state={blogs:[], auth:false, loader:false}
    this.delete=this.delete.bind(this)
  }

  componentDidMount(){

    const token = sessionStorage.getItem('myData')
    axios.get('https://arcane-anchorage-87259.herokuapp.com/blog/', {headers:{Authorization:`Bearer ${token}`}})
      .then(res => {
        this.setState(st=>({...st,blogs:[...res.data.data], loader:true}))
      })
      .catch(err => {
        console.log(err)
      })
  }
  delete(id){
    axios.delete(`https://arcane-anchorage-87259.herokuapp.com/blog/${id}`)
      .then(()=>{
        this.setState(st=>({
          ...st,
          blogs:st.blogs.filter(b=>b._id!==id)
        }))
      })
      .catch((err)=>console.log(err));
  }

  render(){
    return(
      <div>
        {
          sessionStorage.getItem('myData') ?
          <div>
          {this.state.loader ? this.state.blogs.map(b=>(
                <Show
                  obj={b}
                  deleteItem={this.delete}
                  value={b._id}
                  key={b._id}
                />
              )) :
              <div>
                <h3 className="loading">Loading</h3>
                <div className="load">
                  <div className="loader">
                  </div>
                </div>
              </div>}
            </div>
          :
          <div>
            <p className="Loggin-message">You need to be logged in</p>
          </div>
        }
      </div>
    )
  }
}
export default Index;
