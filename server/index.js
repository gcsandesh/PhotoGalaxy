const express = require("express");
const morgan = require("morgan");

const app = express();

// logging for development mode
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
	console.log("Morgan is running...");
}

// initializing server
const port = process.env.PORT || 9988;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});

// routes
app.get("/", (req, res) => {
	res.send("Hello world!");
	res.end();
});
