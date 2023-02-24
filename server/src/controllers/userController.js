const _ = require("lodash")
const { User } = require("../models/users")

/***********  GET A USER BY ID  ***********/
async function getUser(req, res) {
  const userId = req.params.id
  const result = await User.findById(userId)
  if (!result) return res.status(404).send("User not found!")

  res.send(_.omit(result, ["_doc.password", "_doc.__v"]))
}

/**********  GET ALL USERS  **********/
async function getAllUsers(req, res) {
  const result = await User.find()
  if (!result.length)
    return res.status(404).json({ message: "No Users found!" })
  res.send(
    _.map(result, (user) => {
      return _.omit(user, ["_doc.password", "_doc.__v"])
    })
  )
}

/*********  DELETE USER  **********/
async function deleteUser(req, res) {
  const userId = req.params.id
  const result = await User.findByIdAndDelete(userId)
  if (!result)
    return res
      .status(404)
      .json({ message: "User with given id was not found!" })
  console.log("deleted user", result.firstName, result.lastName)
  res.send(_.pick(result, ["_id", "firstName", "lastName"]))
}

module.exports = {
  getUser,
  getAllUsers,
  deleteUser,
}
