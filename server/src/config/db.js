const mongoose = require("mongoose")

// schema ma navako kura pathayepar save nagarna ko lagi
mongoose.set("strictQuery", false)

async function connectDB(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = { connectDB }
