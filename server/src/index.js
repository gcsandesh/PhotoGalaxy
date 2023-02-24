const http = require("http")
const app = require("./config/app")

// initializing server
const server = http.createServer(app)
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 9988

// listening for requests
server.listen({ host, port }, () => {
  console.log(`listening on: http://${host}:${port}`)
})
