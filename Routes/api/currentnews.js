const router = require("express").Router();
const currentnewsController = require("../../Controllers/news");

// Matches with "api/currentnews"
router.route("/")
  .get(currentnewsController.current);

  module.exports = router;