const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bio: {
    type: String,
    default: "",
  },
  profilePicture: { type: String, default: "https://picsum.photos/200/300" },
  website: { type: String, default: "" },
})

const User = mongoose.model("User", userSchema)

module.exports = { userSchema, User }
