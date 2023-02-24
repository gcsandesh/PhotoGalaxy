const router = require("express").Router()
const { handleLogin, handleSignup } = require("../controllers/auth")

router.post("/login", handleLogin)
router.post("/signup", handleSignup)

module.exports = router
