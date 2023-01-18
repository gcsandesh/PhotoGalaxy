const router = require("express").Router();

router.get("/", require("./getPhoto"));

module.exports = router;
