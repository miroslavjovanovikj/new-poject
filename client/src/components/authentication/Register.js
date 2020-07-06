import React,{Component} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import Login from './Login';


import '../../styles/css/Authentication.css';

class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      redirect:false,
      oldUser:false

    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const obj={
      username:this.state.username,
      password:this.state.password,
    }
    axios.post('https://arcane-anchorage-87259.herokuapp.com/register', obj)
      .then((res)=>{
        this.setState({
          username:'',
          password:'',
          redirect:true,

        })

      })
    .catch((err)=>{
      this.setState({oldUser:true})
    })
  }
  render(){
    return(
      <div className="Login">
      {this.state.redirect ?
        <div>
          <p className="Register-message">You are successfully registered</p>
          <Login />
        </div>  :
      <div>
      <div className="Register-header" >
        <p className="Register-name">Sign in</p>
      </div>
      <div className="Register-form">
      {this.state.oldUser===true?"this username is alrady taken" :''}

          <form onSubmit={this.onSubmit}>
            <fieldset className="Login-inputs">
              <input type="text" name="username" placeholder="User name"value={this.state.username} onChange={this.handleChange} />
            </fieldset>
            <fieldset className="Login-inputs">
              <input type="password" name="password"placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            </fieldset>
            <fieldset className="Login-inputs">
              <input  type="submit" className="Register-button"value="Sign in" />
            </fieldset>
          </form>
        </div>
      </div>
      }
      </div>
    )
  }
}
export default Register;
