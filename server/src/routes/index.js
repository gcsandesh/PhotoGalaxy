const express = require("express")
const router = express.Router()
const users = require("./users")
const photos = require("./photos")
const auth = require("./auth")

router.use("/users", users)
router.use("/photos", photos)
router.use("/auth", auth)

module.exports = router
