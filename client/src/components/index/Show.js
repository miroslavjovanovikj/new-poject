import React,{Component} from 'react';
import axios from 'axios';
import Details from './Details';
import {Link} from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/Show.css';

class Show extends Component{
  constructor(props){
    super(props)
    this.handleDelete =this.handleDelete.bind(this);
  }
handleDelete(evt){
  this.props.deleteItem(this.props.value)
}
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 Show-post">
            <div className="Show">
            <h3 className="Show-Title">{this.props.obj.title}</h3>
            <img className="Show-img" src={this.props.obj.img} />

              <ShowMoreText
                lines={2}
                more='Show more'
                less='Show less'
                anchorClass=''
                expanded={false}
                width={500}
              >
                <p className="Show-text">{this.props.obj.text}</p>
              </ShowMoreText>
            </div>
            <div className="Show-buttons">
                <button className="Show-delete-button" type="button" onClick={this.handleDelete}>
                  <i className="fas fa-trash-alt"></i>
                </button>
                <Link to={`/edit/${this.props.obj._id}`}><i className="fas fa-pen"></i></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Show;
