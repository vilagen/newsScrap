const router = require("express").Router();
const signinController = require("../../Controllers/authentication");
const passport = require("passport");

const requireSignin = passport.authenticate('local', {session:false });

// api.signin
router.route("/")
  .post( requireSignin, signinController.signin);

  module.exports = router;