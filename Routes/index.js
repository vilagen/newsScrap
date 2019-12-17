// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");
// const Authentication = require('../Controllers/authentication')
// const passportService = require('../Services/Passport')
// const passport = require('passport')
// const axios = require("axios")


// const requireAuth = passport.authenticate('jwt', { session: false });
// // session is 'false' because passport tries to make a cookie based session,
// // but we will use a jwt session instead.
// const requireSignin = passport.authenticate('local', {session:false });

// // API Routes
// // router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// // router.use(function(req, res) {
// //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// // });

// router.get('/', requireAuth, function(req, res) {
//   res.send({ hi: 'there' });
// });

// router.post('/signin', requireSignin, Authentication.signin);

// router.post('/signup', Authentication.signup);

// router.get("/scrape", (req, res) => {
//     axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c483ecd385a74ddbabd645b0c64c548b")
//         .then(function(response) {
//             console.log(response.data)
//             res.json(response.data)
//         })

// router.get("/currentnews", (req, res) => {
//   axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c483ecd385a74ddbabd645b0c64c548b`)
//   .catch(err => res.status(422).json(err));
//   console.log("Test");
//   });
// });

// module.exports = router;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;