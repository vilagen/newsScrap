const router = require("express").Router();
const signupController = require("../../Controllers/signupController");

// using api/signup;
router.route("/")
  .post(signupController.signup);

  module.exports = router;