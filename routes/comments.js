const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const middleware =require("../middleware");
const commentsCtrl = require("../controllers/comments");



router.get("/new", commentsCtrl.getComments);
router.post("/blog/:id/comments",middleware.verifyToken,commentsCtrl.postComments);


module.exports = router
