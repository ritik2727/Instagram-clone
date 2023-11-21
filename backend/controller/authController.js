const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

exports.login = asyncHandler(async (req, res) => {
  const user = await userModel
    .findOne({ email: req.body.email })
    .select("+password");

  if (user && (await user.matchPassword(req.body.password, user.password))) {
    const token = generateToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

exports.signup = asyncHandler(async (req, res) => {
  const userExit = await userModel.findOne({ email: req.body.email });

  if (userExit) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = await userModel.create({
    email: req.body.email,
    password: req.body.password,
  });
  const token = generateToken(newUser._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
