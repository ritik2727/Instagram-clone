const asyncHandler = require("express-async-handler");
const postModel = require("../models/postModel");

exports.createPost = asyncHandler(async (req, res) => {
  console.log(req.profile);

  const post = await postModel.create({
    ...req.body,
    profile: req.profile,
    user: req.user.id,
  });
  res.status(200).json({
    status: "success",
    post,
  });
});

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await postModel
    .find({})
    .sort({ createdAt: "descending" })
    .populate("profile")
    .limit(20);
  // const populatedPost = await posts.populate('profile').execPopulate();
  res.status(200).json({
    status: "success",
    data: posts.length,
    posts,
  });
});

exports.getPostById = asyncHandler(async (req, res) => {
  const post = await postModel.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }

  res.status(200).json({
    status: "success",
    post,
  });
});

exports.deletePostById = asyncHandler(async (req, res) => {
  const post = await postModel.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }
//   console.log(post.user.toString(),req.user._id)

  if (post.user.toString() != req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }
  await postModel.deleteOne({_id:post._id});
  res.status(200).json({ success: true, message: "Post deleted successfully" });
});
