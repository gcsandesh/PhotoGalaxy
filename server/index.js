const http = require("http")
const app = require("./src/config/app")
const dotenv = require("dotenv")

dotenv.config({ path: "../.env" })

// initializing server
const server = http.createServer(app)
const host = process.env.SERVER_HOST || "localhost"
const port = process.env.SERVER_PORT || 9988

// listening for requests
server.listen({ host, port }, () => {
  console.log(`listening on: http://${host}:${port}`)
})
