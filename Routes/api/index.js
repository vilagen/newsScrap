const router = require("express").Router();
const currentNewsRoutes = require("./currentnews");

// npr routes
router.use("/currentnews", currentNewsRoutes);

module.exports = router;
