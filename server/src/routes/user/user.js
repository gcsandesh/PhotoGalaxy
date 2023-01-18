const router = require("express").Router();

router.get("/id/:id", (req, res) => {
	res.send("Each User");
});

module.exports = router;
