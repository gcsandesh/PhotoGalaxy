const _ = require("lodash")
const { Admin } = require("../models/admin.js")

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find()
    // console.log(admins)
    // console.log({ admins: _.pick(admins, ["-password"]) })
    if (!admins.length) {
      return res.status(404).json({ message: "No admins yet!" })
    }

    res.send(
      _.map(admins, (admin) => {
        return _.omit(admin, ["_doc.password", "_doc.__v"])
      })
    )
  } catch (error) {
    return res.status(500).json({ message: "Error getting admins!" })
  }
}

module.exports = {
  getAllAdmins,
}
