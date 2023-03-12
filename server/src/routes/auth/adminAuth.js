const router = require("express").Router()

const {
  handleAdminLogin,
  handleAdminSignup,
} = require("../../controllers/auth/adminAuth")

router.route("/login").post(handleAdminLogin)
router.route("/signup").post(handleAdminSignup)

module.exports = router
