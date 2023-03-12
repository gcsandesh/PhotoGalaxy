// const {Admin} = require("../../models/")

const handleAdminLogin = async (req, res) => {
  res.json({ message: "logged in as admin!" })
}

const handleAdminSignup = async (req, res) => {
  res.json({ message: "signed up admin!" })
}

module.exports = { handleAdminLogin, handleAdminSignup }
