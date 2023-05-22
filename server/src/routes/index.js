const express = require("express")
const router = express.Router()

const users = require("./users")
const photos = require("./photos")
const admins = require("./admins")
const userAuth = require("./auth/userAuth")
const adminAuth = require("./auth/adminAuth")

router.use("/users", users)
router.use("/photos", photos)
router.use("/admins", admins)
router.use("/auth/user", userAuth)
router.use("/auth/admin", adminAuth)

module.exports = router
