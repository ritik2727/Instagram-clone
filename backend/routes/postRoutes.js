const express = require('express');
const { createPost } = require('../controller/postController');
const { protect, getProfileId } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/',protect,getProfileId,createPost);


module.exports = router

