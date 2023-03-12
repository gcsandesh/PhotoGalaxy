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
  let user

  try {
    // looking for user in database //
    await User.findOne({ email })
      .then((data) => (user = data))
      .catch((error) => console.log(error))

    // if email does not exist //
    if (!user) return res.status(404).json({ message: "User not found!" })

    // check password //
    const passwordIsCorrect = await bcrypt.compare(password, user.password)
    if (!passwordIsCorrect)
      return res.status(401).json({ message: "Invalid Password!" })

    // send token and user details to user //
    user = _.pick(user, ["email"])
    jwt.sign(
      { user },
      JWT_SECRET,
      { expiresIn: 24 * 60 * 60 },
      (error, accessToken) => {
        if (error) {
          console.log("Error logging in!\nError:", error)
          return res.json({ message: "Could not generate token" })
        }
        return res.json({ user, accessToken })
      }
    )
  } catch (error) {
    return res.json({ message: error })
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
    //   hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // creating user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })

    const userResult = await user.save()

    return res.status(201).json({
      user: _.pick(userResult, ["email", "firstName", "lastName"]),
    })
  } catch (ex) {
    return res.status(500).json({ message: new Error(ex) })
  }
}

module.exports = {
  handleUserLogin,
  handleUserSignup,
}
