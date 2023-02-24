const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

module.exports = async function () {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/PhotoGalaxy", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB...")
    })
    .catch((ex) => {
      console.log("Error connecting to DB!")
      console.error(new Error(ex))
    })
}
