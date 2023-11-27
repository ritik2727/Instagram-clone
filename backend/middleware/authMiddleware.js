const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const profileModel = require("../models/profileModel");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await userModel.findById(decode.id).select("-password");
      console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("NOT authorized ,token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("NOT authorized ,no token");
  }
});

exports.getProfileId = asyncHandler(async (req, res, next) => {
  const profile = await profileModel.findOne({ user: req.user._id });

  req.profile = profile._id;
  next();
});
