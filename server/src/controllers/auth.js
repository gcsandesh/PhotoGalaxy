const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

  //   hashing the password
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  //   creating user object
  const user = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: hashedPassword,
  }
  //   add user to users collection
  // await users.save()
  res.send(user)
}

module.exports = { handleLogin, handleSignup }
