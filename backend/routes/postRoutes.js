const express = require('express');
const { createPost, getAllPosts, getPostById, deletePostById } = require('../controller/postController');
const { protect, getProfileId } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect,getProfileId,createPost).get(protect,getAllPosts)
router.route('/:id').get(getPostById).delete(protect,deletePostById);


module.exports = router

