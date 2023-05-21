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
  console.log("deleted user", result.first_name, result.last_name)
  res.send(_.pick(result, ["_id", "first_name", "last_name"]))
}

/*********  UPDATE USER  **********/
async function updateUser(req, res) {
  const userId = req.params.id
  const user = await User.findOne({ _id: userId })
  // if user is not found in db
  if (!user) return res.status(404).json({ message: "User not found!" })

  const { first_name, last_name, email, bio, website } = req.body

  if (first_name) user.$set({ first_name })
  if (last_name) user.$set({ last_name })
  if (email) user.$set({ email })
  if (bio) user.$set({ bio })
  if (website) user.$set({ website })

  const result = await user.save({ new: true })
  return res.send(result)
}

module.exports = {
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
}
