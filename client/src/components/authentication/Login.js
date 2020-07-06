import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Index from '../index/Index';
import {NavLink} from 'react-router-dom';
import '../../styles/css/Authentication.css';

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      redirect:false,
    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const obj = {
      username:this.state.username,
      password:this.state.password
    }
    axios.post('https://arcane-anchorage-87259.herokuapp.com/login', obj)

      .then((res)=>{
        console.log(res.data)
        sessionStorage.setItem('myData',res.data.token)
        console.log(res.data.token)
        this.setState({
          redirect:true
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }
  render(){
    if(this.state.redirect){
        return <Redirect  to="/blog" />

    }
    return(
      <div className="Login">
        <div className="Login-header">
          <p className="Login-name">Log In</p>
        </div>
        <div className="Login-form">
          <form onSubmit={this.onSubmit}>
          <fieldset className="Login-inputs">
              <input type="text" name="username" placeholder="User name"value={this.state.username} onChange={this.handleChange} />
          </fieldset>
          <fieldset className="Login-inputs">
            <input type="password" name="password" placeholder="Password"value={this.state.password}  onChange={this.handleChange}  />
          </fieldset>
          <fieldset className="Login-inputs">
            <input type="submit" className="Login-button" value="Login" />
          </fieldset>
          </form>
        </div>
      </div>

    )
  }
}
export default Login;
