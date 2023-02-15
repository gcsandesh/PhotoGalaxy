const router = require("express").Router()
const { getUser, getAllUsers } = require("../controllers/userController")

router.get("/", getAllUsers)
router.get("/id/:id", getUser)

module.exports = router
