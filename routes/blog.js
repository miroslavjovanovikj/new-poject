const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog')
const authCtrl = require('../controllers/auth')
var middleware =require("../middleware")
router.get('/',blogCtrl.rootRoute);

router.get('/blog',middleware.verifyToken, blogCtrl.getBlogs)
// router.get('/new',blogCtrl.getNewBlogs);
router.post('/blog',middleware.verifyToken,blogCtrl.postBlog);

router.get('/blog/:id', blogCtrl.getShowBlog);
router.get('/edit/:id', blogCtrl.getEditBlog);
router.put('/update/:id' ,blogCtrl.putEditBlog);
router.delete('/blog/:id', blogCtrl.deleteBlog);

module.exports = router
// middleware.isLoggedIn
