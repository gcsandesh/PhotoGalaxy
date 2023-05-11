const { Admin } = require("../../models/admin")
const bcrypt = require("bcrypt")
const _ = require("lodash")
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.TOKEN_SECRET

const handleAdminLogin = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  let admin
  try {
    admin = await Admin.findOne({ email })

    if (!admin) {
      return res.status(404).json({ message: "User not found!" })
    }

    const passwordIsCorrect = await bcrypt.compare(password, admin.password)

    if (!passwordIsCorrect) {
      return res.status(401).json({ message: "Invalid Password!" })
    }

    admin = _.pick(admin, "email")
    jwt.sign(
      { admin },
      JWT_SECRET,
      { expiresIn: 60 * 60 },
      (error, accessToken) => {
        if (error) {
          console.log("Error logging in!\nError:", error)
          return res.json({ message: "Could not generate token" })
        }
        return res.json({ admin, accessToken })
      }
    )
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const handleAdminSignup = async (req, res) => {
  const { email, password } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const admin = new Admin({
    email,
    password: hashedPassword,
  })

  const adminResult = await admin.save()

  res.json({ admin: _.pick(adminResult, "email") })
}

module.exports = { handleAdminLogin, handleAdminSignup }
