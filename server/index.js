const http = require("http")
const app = require("./src/config/app")
const dotenv = require("dotenv")
const { connectDB } = require("./src/config/db")

dotenv.config({ path: "../.env" })

// initializing server
const host = process.env.SERVER_HOST || "localhost"
const port = process.env.SERVER_PORT || 9988

async function start() {
  const mongoURL = process.env.DB_CONNECTION_STRING

  try {
    ///  CONNECTING TO DATABASE  ///
    await connectDB(mongoURL)
    console.log("Connected to database...")
    const server = http.createServer(app)

    // listening for requests
    server.listen({ host, port }, () => {
      console.log(`listening on: http://${host}:${port}`)
    })
  } catch (error) {
    console.log("Error connecting to database!", error)
    return { message: "Error connecting to database!", error }
  }
}

start()
