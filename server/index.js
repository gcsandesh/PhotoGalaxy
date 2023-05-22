const http = require("http")
const app = require("./src/config/app")
const dotenv = require("dotenv")
const { connectDB } = require("./src/config/db")

dotenv.config({ path: "../.env" })

// initializing server
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 9999

async function start() {
  const mongoURL = process.env.MONGODB_URL

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
