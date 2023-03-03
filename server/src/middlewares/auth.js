const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

// verifies token and adds access time to body
async function verifyToken(req, res, next) {
  const header = req.headers
  const bearer = header['authorization'].split(' ')
  const token = bearer[1]

  console.log('verifying user...')
  //   object that stores information from token
  jwt.verify(token, JWT_SECRET, (error, data) => {
    if (error) {
      return res
        .status(401)
        .json({ message: 'Error verifying user!', error: error })
    }
    let accessInfo = data
    accessInfo.accessTime = Date.now()
    req.accessInfo = accessInfo
    next()
  })
}

module.exports = { verifyToken }
