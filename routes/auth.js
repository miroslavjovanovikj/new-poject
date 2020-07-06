const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/auth.js');

router.post('/register',(req,res, next)=>{
   authCtrl.AuthController.register(req,res,next)
});
router.post('/login',(req,res,next)=>{
  authCtrl.AuthController.login(req,res,next)
});

router.get('/logout', authCtrl.getLogout)
module.exports = router;
