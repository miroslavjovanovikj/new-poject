import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/css/Navbar.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={logout:false}
    this.logout= this.logout.bind(this);
  }
  logout(){
    axios.get('/http://localhost:27017/logout')
     .then(()=>{
        sessionStorage.removeItem('myData')
     })
     .catch(err=>err)
  }
  logout(){
      sessionStorage.removeItem('myData')
      this.setState({logout:true})
  }
  render(){

    return(
      <div className="Navbar">
        <nav>
          <ul className="Navbar-Ul">
            <div className="container">
              <li className="Navbar-Li-logo"><i className="fas fa-hippo logo"></i></li>
              <li className="Navbar-Li"><NavLink to="/new">Create</NavLink></li>
              <li className="Navbar-Li"><NavLink to="/blog">Home</NavLink></li>
              {sessionStorage.getItem('myData')===null?
                <div>
                  <li className="Navbar-Li-right"><NavLink to="/login">Log In</NavLink></li>
                  <li className="Navbar-Li-right"><NavLink to="/register">Sign In</NavLink></li>
                </div>
               :
              <li className="Navbar-Li-right"><NavLink onClick={this.logout} to="/login">Log Out</NavLink></li>
              }
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar;
