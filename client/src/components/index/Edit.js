// import React, {Component} from 'react';
// import axios from 'axios';
// import '../../styles/css/Edit.css'
// import {Redirect} from 'react-router-dom';
//
// class Edit extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       title:'',
//       img:'',
//       text:'',
//       redirect:false
//     }
//     this.handleEdit= this.handleEdit.bind(this);
//     this.onSubmit= this.onSubmit.bind(this);
//   }
//   componentDidMount(){
//     axios.get('https://arcane-anchorage-87259.herokuapp.com/edit/'+this.props.match.params.id)
//       .then(res=>{
//         this.setState(st=>({
//           ...st,
//           title:res.data.title,
//           img:res.data.img,
//           text:res.data.text,
//
//         }))
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//   }
//   handleEdit(e){
//     this.setState({[e.target.name]:e.target.value})
//   }
//   onSubmit(e){
//     e.preventDefault();
//     const obj={
//       title:this.state.title,
//       img:this.state.img,
//       text:this.state.text,
//       redirect:true
//     }
//     axios.put('http://localhost:27017/update/'+this.props.match.params.id, obj)
//     .then(res=>{
//       this.setState(st=>({
//         ...st,
//         title:res.data.title,
//         img:res.data.img,
//         text:res.data.text,
//         redirect:true
//       }))
//     }).catch(err=>{
//       console.log(err)
//     })
//   }
//   render(){
//     if(this.state.redirect){
//       return <Redirect  to="/blog" />
//     }
//     return(
//       <div className="Edit-container">
//           <h3 className="Edit-h3">Edit</h3>
//           <form onSubmit={this.onSubmit}>
//             <fieldset>
//               <p className="Edit-p">Title  </p>
//                 <input  className="Edit-input"type="text" name="title" value={this.state.title} onChange={this.handleEdit} />
//             </fieldset>
//             <fieldset>
//               <p className="Edit-p">Image Url</p>
//                 <input  className="Edit-input"type="text" name="img" value={this.state.img} onChange={this.handleEdit} />
//             </fieldset>
//             <fieldset>
//               <p className="Edit-p">Text</p>
//               <textarea
//                 className="Edit-input Edit-textarea"
//                 name="text"
//                 value={this.state.text}
//                 rows="7"
//                 onChange={this.handleEdit}>
//               </textarea>
//             </fieldset>
//             <input className="Edit-button Edit-input" type="submit" value="submit" />
//           </form>
//       </div>
//     )
//   }
// }
// export default Edit;
import React, {Component} from 'react';
import axios from 'axios';
import '../../styles/css/Edit.css'
import {Redirect} from 'react-router-dom';

class Edit extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      img:'',
      text:'',
      redirect:false
    }
    this.handleEdit= this.handleEdit.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:27017/edit/'+this.props.match.params.id)
      .then(res=>{
        this.setState(st=>({
          ...st,
          title:res.data.title,
          img:res.data.img,
          text:res.data.text,

        }))
      })
      .catch(err=>{
        console.log(err)
      })
  }
  handleEdit(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const obj={
      title:this.state.title,
      img:this.state.img,
      text:this.state.text,
      redirect:true
    }
    axios.put('http://localhost:27017/update/'+this.props.match.params.id, obj)
    .then(res=>{
      this.setState(st=>({
        ...st,
        title:res.data.title,
        img:res.data.img,
        text:res.data.text,
        redirect:true
      }))
    }).catch(err=>{
      console.log(err)
    })
  }
  render(){
    if(this.state.redirect){
      return <Redirect  to="/blog" />
    }
    return(
      <div className="Edit-container">
          <h3 className="Edit-h3">Edit</h3>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <p className="Edit-p">Title  </p>
                <input  className="Edit-input"type="text" name="title" value={this.state.title} onChange={this.handleEdit} />
            </fieldset>
            <fieldset>
              <p className="Edit-p">Image Url</p>
                <input  className="Edit-input"type="text" name="img" value={this.state.img} onChange={this.handleEdit} />
            </fieldset>
            <fieldset>
              <p className="Edit-p">Text</p>
              <textarea className="Edit-input" name="text" value={this.state.text}  cols="50" rows="7" onChange={this.handleEdit}></textarea>
            </fieldset>
            <input className="Edit-button Edit-input" type="submit" value="submit" />
          </form>
      </div>
    )
  }
}
export default Edit;
