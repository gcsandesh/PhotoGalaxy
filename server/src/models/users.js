const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 2, maxlength: 50 },

  email: { type: String, required: true, minlength: 3 },

  password: { type: String, minlength: 8 },

  bio: {
    type: String,
    default: "",
  },

  profile_picture: {
    type: String,
    default: "https://picsum.photos/200/300",
  },

  website: {
    type: String,
    default: "",
  },

  uploads_count: { type: Number, required: true, default: 0 },

  uploaded_photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo" }],

  liked_photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo" }],
})

const User = mongoose.model("User", userSchema)

module.exports = { userSchema, User }
