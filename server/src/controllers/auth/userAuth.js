const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const _ = require("lodash")
const { User } = require("../../models/users")

const JWT_SECRET = process.env.JWT_SECRET

///////////////////////////////////////////
////////////////  LOG IN  /////////////////
///////////////////////////////////////////

const handleUserLogin = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    // looking for user in database //
    const existingUser = await User.findOne({ email })
    if (!existingUser)
      return res.status(400).json({ message: `Account does not exist!` })

    // check password //
    const passwordIsCorrect = await bcrypt.compare(
      password,
      existingUser.password
    )
    if (!passwordIsCorrect)
      return res.status(401).json({ message: "Invalid Password!" })

    // send token and user details to user //
    const user = _.pick(existingUser, [
      "email",
      "first_name",
      "last_name",
      "profile_picture",
    ])

    jwt.sign(
      { user },
      JWT_SECRET,
      { expiresIn: 24 * 60 * 60 },
      (error, accessToken) => {
        if (error) {
          console.log("Error logging in!\nError:", error)
          return res.status(500).json({ message: "Could not generate token" })
        }
        return res.json({ user, accessToken })
      }
    )
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error })
  }
}

///////////////////////////////////////////
///////////////  SIGN UP  /////////////////
///////////////////////////////////////////

const handleUserSignup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  if (!email || !password || !firstName || !lastName)
    return res.status(400).json({ message: "Missing Credentials!" })

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res
        .status(400)
        .json({ message: `Account with email '${email}' already exists!` })

    //   hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // creating user
    const user = new User({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPassword,
    })

    const userResult = await user.save()

    return res.status(201).json({
      user: _.pick(userResult, ["email", "first_name", "last_name"]),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  handleUserLogin,
  handleUserSignup,
}
