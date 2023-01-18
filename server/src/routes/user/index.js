const router = require("express").Router();

router.get("/", require("./getAllUsers"));

module.exports = router