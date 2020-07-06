var express =require('express')
var app= express()
var middelwareObj ={};

middelwareObj.verifyToken = function(req,res,next){
  const bearerHeader= req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer= bearerHeader.split(' ');
      const bearerToken= bearer[1];
      
      req.token= bearerToken
       next()

  }else{
    res.sendStatus(403)
  }
}
module.exports = middelwareObj;
