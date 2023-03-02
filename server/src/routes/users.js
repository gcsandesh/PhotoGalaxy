const router = require("express").Router()
const {
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
} = require("../controllers/users")

router.route("/id/:id").get(getUser).delete(deleteUser).patch(updateUser)
router.get("/", getAllUsers)

// ADD USER is handled in auth

module.exports = router