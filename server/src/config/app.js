const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

// connecting to db
require("./db")()

// logging for development mode
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"))
  console.log("Morgan is running...")
}

// setup
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api", require("../routes"))

// routes
app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.send("here goes index.html page")
  }
  res.status(404).send("You're in development mode")
})

app.get("*", (req, res) => {
  res.status(404).send("***Cricket noises***")
})

module.exports = app
