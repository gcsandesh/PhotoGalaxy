const express = require("express")
const router = express.Router()
const userRoutes = require("./userRoutes")
const photoRoutes = require("./photoRoutes")
const auth = require("./auth")

router.use("/users", userRoutes)
router.use("/photos", photoRoutes)
router.use("/auth", auth)

module.exports = router
