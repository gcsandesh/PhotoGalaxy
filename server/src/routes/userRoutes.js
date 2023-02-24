const router = require("express").Router()
const {
  getUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController")

// router.get("/id/:id", getUser)
router.route("/id/:id").get(getUser).delete(deleteUser)
router.get("/", getAllUsers)

module.exports = router
