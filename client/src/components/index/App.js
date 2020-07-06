import React, {Component} from 'react';
import {Switch, Route, NavLink, Link} from 'react-router-dom';
import FontAwesomeIcon from 'react-fontawesome';

import Index from  './Index';
import Create from './Create';
import Edit from './Edit';
import Show from './Show';
import Navbar from './Navbar';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Error from './Error';
import Comment from '../comments/Comment'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/blog" render={(routeParams)=><Index isAuthenticated={false} {...routeParams}/>}/>
            <Route exact path="/new" component={Create}/>
            <Route exact path="/edit/:id" component={Edit}/>
            <Route exact path="/show" component={Show}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route render={()=><Error />}/>
          </Switch>
          <Comment/>
      </div>
    )
  }
}



export default App;
