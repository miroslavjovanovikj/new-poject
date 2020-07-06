const mongoose = require('mongoose');
const Comment   =require('../models/comment');
const Blog = require('../models/blog')
const jwt = require('jsonwebtoken');


const getComments = (req,res)=>{
    Blog.findById(req.params.id)
      .then((commentData)=>{
        res.send({data:data})
      })
      .catch((err)=>{
        console.log(err)
      })

}

const postComments= (req,res)=>{
  jwt.verify(req.token,"Nie cistime oni davet", (err, authData)=>{
    if(err){
      res.sendStatus(403)
    }else{

      Blog.findById(req.params.id)
      .then((blogs)=>{
        Comment.create(req.body.comment)
          .then((comment)=>{
           req.user=authData;
           console.log(comment)
            comment.author.id = req.user._id;
            comment.author.username=req.user.username;
            comment.save();
            blogs.comments.push(comment)
            blogs.save();
            res.header('Access-Control-Allow-Credentials', true)
            res.status(200).send("Comment created")
          })
      }).catch((err)=>{
        console.log(err);
        res.status(403).send("Something went wrong")
      })
  }
  })

}


//   const onetwo=comment._id;
//   console.log(onetwo)
// const createdComment={_id:onetwo, comment:createComment}
// console.log(createdComment)


module.exports = {
  postComments,
  getComments
}
