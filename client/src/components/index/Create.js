import React,{Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import '../../styles/css/Create.css';
import Login from '../authentication/Login';
class Create extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      img:'',
      text:'',
      redirect:false
    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this)
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const obj ={
      title:this.state.title,
      img:this.state.img,
      text:this.state.text
    }
    const token = sessionStorage.getItem('myData')
    axios.post('https://arcane-anchorage-87259.herokuapp.com/blog', obj,{headers:{Authorization:`Bearer ${token}`}})
      .then(res=>{
        this.setState(st=>({
          ...st,
          title:this.state.title,
          img:this.state.img,
          text:this.state.text,
          redirect:true
        }))
      })

  }
  render(){
    if(this.state.redirect){
      return <Redirect  to="/blog" />

    }
    return(
      <div className="Create">
        {
          sessionStorage.getItem('myData') ?
          <div className="Create-container">
          <h3 className="Create-h3">Create</h3>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <input type="text" className="Create-input" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
            </fieldset>
            <fieldset>
                <input type="text" className="Create-input" name="img" value={this.state.img} onChange={this.handleChange} placeholder="Image URL" />
            </fieldset>
            <fieldset>
                <textarea
                    name="text" className="Create-input Text-area"  placeholder="Text"
                    value={this.state.text}
                    onChange={this.handleChange}  rows="7"
                >
                  {this.state.text}
                </textarea>
            </fieldset>
              <input  className="Create-button Create-input"type="submit" value="create" />
          </form>
        </div> :

        <div>
          <p className="Loggin-message">You need to be logged in</p>
            <Login />
        </div>
        }
      </div>
    )
  }
}
export default Create;
