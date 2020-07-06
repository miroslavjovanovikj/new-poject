const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  username:String,
  password:{
    type:String,
    rquired:true
  }
})
userSchema.plugin(passportLocalMongoose);
module.exports =mongoose.model('User', userSchema);
