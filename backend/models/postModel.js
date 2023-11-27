const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  profile:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Profile',
  },
  caption: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
  hashtag: Array,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  image: Array,
  // Comment:{
  //     type:mongoose.Schema.Types.ObjectId,
  //     ref:'Comment',

  // },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
