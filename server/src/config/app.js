const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const xss = require("xss-clean")
const helmet = require("helmet")

// finding node environment
require("dotenv").config({ path: "../.env" })

// setup middlewares
app.set("view engine", "ejs")
app.use(xss())
app.use(helmet())
app.use(cors({ origin: "https://photogalaxy-client.vercel.app/" }))
app.use(express.json({ limit: "50mb" }))
process.env.NODE_ENV === "development" && app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use("/api", require("../routes"))

// routes
app.get("/", (req, res) => {
  res.status(404).json({ message: "You're in development mode..." })
})

app.get("*", (req, res) => {
  res.status(404).json({ message: "***Cricket noises***" })
})

// logging for development mode
if (process.env.NODE_ENV == "development") {
  console.log("(development mode)\nMorgan is running...")
}

module.exports = app
