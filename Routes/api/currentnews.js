const router = require("express").Router();
const nprControllers = require("../../Controllers/currentnews");

// Mathes with "api/npr"
router.route("/").get(currentnews.current);

module.exports = router