const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  var token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "90d",
  });
  return token;
};

module.exports = generateToken;
