const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const profileModel = require("./profileModel");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email Already Exits"],
      validate: validator.isEmail,
      trim: true, // Removes leading and trailing whitespace from the input.
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.post("save", async function (doc) {
  await profileModel.create({
    email: doc.email,
    user: doc._id,
    username:doc.email
  });
});
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
