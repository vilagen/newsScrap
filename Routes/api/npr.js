const router = require("express").Router();
const nprControllers = require("../../Controllers/nprController");

// Mathes with "api/npr"
router.route("/").get(nprControllers.npr);

module.exports = router