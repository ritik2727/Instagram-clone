const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const profileModel = require("../models/profileModel");

exports.getProfile = asyncHandler(async (req, res) => {
  const user = await profileModel.findOne({user:req.user._id});

  if(!user){
    res.status(404);
    throw new Error('No user found');
  }
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
