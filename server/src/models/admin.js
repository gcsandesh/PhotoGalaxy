const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
})

const Admin = mongoose.model("Admin", adminSchema)

module.exports = { Admin, adminSchema }
