const express = require('express');
const bodyParser = require('body-parser')
const expressSession = require('express-session');
const localStategy= require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const path = require('path')


const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const cors = require('cors');
const db = require('./db')
const user = require('./routes/auth');
const auth = require('./routes/auth');
const User = require('./models/user');
const Comment = require('./models/comment');
const Blog = require('./models/blog')
const app = express();

app.use(bodyParser.json());
app.use(cors({
  methods:['GET','POST','PUT','DELETE'],
  credentials: true
}))
db.init();


const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const commentRoutes= require('./routes/comments');

app.use(expressSession({
  secret:"Tuka ima tuka nema gdee topceto",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  res.locals.currentUser="fasfasf";

  next();
});

passport.use(new localStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey:"Nie cistime oni davet"
  },
  function(jwtPayload,cb){
    return User.findById({id:jwtPayload.id})
      .then(user=>{
        return cb(null, user)
      })
      .catch(err=>{
        return cb(err)
      })
  }
))
app.use('/auth', auth)
app.use('/user', passport.authenticate('jwt',{session:false}), user)
app.use(blogRoutes)
app.use(authRoutes)
app.use( commentRoutes)

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'client', 'build','index.html'));
  })
}
// app.get("/akoima",(req,res)=>{
//   console.log(user.username)
// })
// process.env.PORT ||
app.listen(process.env.PORT || 27017, ()=>{
  console.log("Server is started...")
})
