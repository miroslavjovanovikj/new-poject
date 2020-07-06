const mongoose = require('mongoose');

const init =()=>{
  mongoose.connect( 'mongodb+srv://test123:test123@cluster0-meyke.mongodb.net/<dbname>?retryWrites=true&w=majority', {useUnifiedTopology:true})
}
module.exports={init}

// mongodb://127.0.0.1:27017/cicelj
