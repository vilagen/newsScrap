// const Authentication = require('../Controllers/authentication')
// const passportService = require('../Services/Passport')
// const passport = require('passport')

// const requireAuth = passport.authenticate('jwt', { session: false });
// // session is 'false' because passport tries to make a cookie based session,
// // but we will use a jwt session instead.
// const requireSignin = passport.authenticate('local', {session:false });

// module.exports = function(app) {
//     app.get('/', requireAuth, function(req, res) {
//         res.send({ hi: 'there' });
//     });
//     app.post('/signin', requireSignin, Authentication.signin);
//     app.post('/signup', Authentication.signup);
// }

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

// module.exports = router;