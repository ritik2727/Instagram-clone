const express = require("express");
const { login, signup } = require("../controller/authController");
const { getProfile } = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get('/me',protect,getProfile)

module.exports = router;
