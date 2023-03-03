const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const { User } = require('../models/users')

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
  if (!user) return res.status(404).json({ message: 'User not found!' })

  // check password //
  const passwordIsCorrect = await bcrypt.compare(password, user.password)
  if (!passwordIsCorrect)
    return res.status(401).json({ message: 'Invalid Password!' })

  // send token to user //
  user = _.pick(user, ['email', 'firstName', 'lastName'])
  jwt.sign(
    { user },
    JWT_SECRET,
    { expiresIn: 5 * 60 },
    (error, accessToken) => {
      if (error) {
        console.log('Error logging in!\nError:', error)
        return res.json({ message: 'Could not generate token' })
      }
      return res.send(accessToken)
    }
  )

  // return res.json({ message: 'Could not log in!' })
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

    //   add user to users collection
    const result = await user.save()
    res.send(result)
  } catch (ex) {
    console.error(new Error(ex))
    res.json({ message: new Error(ex) })
  }
}

module.exports = { handleLogin, handleSignup }
