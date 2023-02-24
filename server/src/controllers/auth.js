const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models/users")

async function handleLogin(req, res) {
  const email = req.body.email
  const password = req.body.password
  // check email & password in database
  // if email & password match, send a json web token as response
  const user = { email: email }
  const token = jwt.sign(user)
  res.send(token)
}

async function handleSignup(req, res) {
  const { email, password, firstName, lastName } = req.body

  try {
    //   hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //   creating user object
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    })
    console.log(user)

    //   add user to users collection
    const result = await user.save()
    res.send(result)
  } catch (ex) {
    console.log("error while adding user to db")
    console.error(new Error(ex))
  }
}

module.exports = { handleLogin, handleSignup }
