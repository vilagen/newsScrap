const router = require("express").Router();
const nprRoutes = require("./npr");

// npr routes
router.use("/npr", nprRoutes);

module.exports = router;
