const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await userModel.findById(decode.id).select("-password");
      console.log(req.user)
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
