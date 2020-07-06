const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  img:{
    type:String,
    rquired:true
  },
  text:{
    type:String,
    required:true
  },
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
  ]
})
module.exports= mongoose.model("Blog", blogSchema);
