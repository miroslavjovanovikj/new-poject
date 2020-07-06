import React, {Component} from 'react';
import '../../styles/css/Error.css'
class Error extends Component{
  render(){
    return(
      <div className="Error">
        <h1 className="Error-text">404 Page not found</h1>
        <i className="Error-icon fas fa-exclamation-triangle"></i>
      </div>
    )
  }
}
export default Error
