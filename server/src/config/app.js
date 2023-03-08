const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
// const connectDB = require("./db")

// finding node environment
require("dotenv").config({ path: "../.env" })

// setup
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", require("../routes"))

// routes
app.get("/", (req, res) => {
  if (process.env.SERVER_NODE_ENV === "production") {
    return res.send("here goes index.html page")
  }
  res.status(404).send("You're in development mode")
})

app.get("*", (req, res) => {
  res.status(404).send("***Cricket noises***")
})

// logging for development mode
if (process.env.SERVER_NODE_ENV == "development") {
  app.use(morgan("dev"))
  console.log("(development mode)\nMorgan is running...")
}

module.exports = app
