const passport = require('passport');
const localStrategy = require('passport-local');
const expressSession = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require('body-parser');
const User = require('../models/user');
const AuthController ={};
const jwt = require('jsonwebtoken');


AuthController.register= async(req,res)=>{
  try{
    User.register(new User({username:req.body.username}), req.body.password, (err, account)=>{
      if(err){
        return res.status(500).send('error occurrded:'+err)
      }
      passport.authenticate('local',{
        session:false
      })(req,res,()=>{
        res.status(200).send("succesfuly created new acaunt")
      })
    })
  }catch(err){
    return res.status(500).send("error"+err);
  }
}


AuthController.login = async(req,res,next)=>{
    try{
      if(!req.body.username || !req.body.password){
        return res.status(400).json({
          message:"Something is not right with your input"
        })
      }
      passport.authenticate('local',{session:false}, (err, user, info)=>{
        if(err || !user){
          return res.status(400).json({
            message:"Something is not right",
            user:user
          })
        }
        req.login(user,{session:false},(err)=>{
          if(err){
            res.send(err)
          }
          const token = jwt.sign({id:user.id, username:user.username},'Nie cistime oni davet');
          return res.json({user:user.username, token})
        })
      })(req,res,next);
    }catch(err){
            console.log(err)
          }
}

const getLogout = (req,res)=>{
  req.logout();
  res.redirect("/")
}

module.exports= {
  AuthController,
  getLogout


}
