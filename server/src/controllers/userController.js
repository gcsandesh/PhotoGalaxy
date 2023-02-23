function getUser(req, res) {
  res.send("Each User")
}

function getAllUsers(req, res) {
  res.send("All users")
}

module.exports = {
  getUser,
  getAllUsers,
}
