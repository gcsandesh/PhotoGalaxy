const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const _ = require("lodash")
const { User } = require("../models/users")

const JWT_SECRET = process.env.JWT_SECRET

async function handleLogin(req, res) {
  const email = req.body.email
  const password = req.body.password
  let user

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

  // send token to user //
  user = _.pick(user, ["email", "firstName", "lastName"])
  jwt.sign(
    { user },
    JWT_SECRET,
    { expiresIn: 60 * 60 },
    (error, accessToken) => {
      if (error) {
        console.log("Error logging in!\nError:", error)
        return res.json({ message: "Could not generate token" })
      }
      return res.json({ user, accessToken })
    }
  )

  // return res.json({ message: 'Could not log in!' })
}

///////////////////////////////////////////
///////////////  SIGN UP  /////////////////
///////////////////////////////////////////

async function handleSignup(req, res) {
  const { email, password, username } = req.body

  if (!email || !password || !username)
    return res.status(400).json({ message: "Missing Credentials!" })
  try {
    //   hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //   creating user object
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    })

    //   add user to users collection
    const result = await user.save()
    return res.status(201).json(_.pick(result, ["email", "username"]))
  } catch (ex) {
    console.error(new Error(ex))
    return res.status(500).json({ message: new Error(ex) })
  }
}

module.exports = { handleLogin, handleSignup }
