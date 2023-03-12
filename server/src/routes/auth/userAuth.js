const router = require("express").Router()

const {
  handleUserLogin,
  handleUserSignup,
} = require("../../controllers/auth/userAuth")

router.post("/login", handleUserLogin)
router.post("/signup", handleUserSignup)

module.exports = router
