const router = require("express").Router()

const {
  getAdmin,
  getAllAdmins,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/admins")

// const { verifyToken } = require("../middlewares/auth")

router.route("/").get(getAllAdmins)

module.exports = router
