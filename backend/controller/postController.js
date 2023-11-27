const asyncHandler = require('express-async-handler');
const postModel = require('../models/postModel');

exports.createPost = asyncHandler(async(req,res)=>{
    console.log(req.profile);

    const post = await postModel.create({
        ...req.body,
        profile:req.profile,
        user:req.user.id,
    })
    res.status(200).json({
        status:'success',
        post
    })
})