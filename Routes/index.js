const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const Authentication = require('../Controllers/authentication')
const passportService = require('../Services/Passport')
const passport = require('passport')
const axios = require("axios")

const requireAuth = passport.authenticate('jwt', { session: false });
// session is 'false' because passport tries to make a cookie based session,
// but we will use a jwt session instead.
const requireSignin = passport.authenticate('local', {session:false });

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get('/', requireAuth, function(req, res) {
  res.send({ hi: 'there' });
});

router.post('/signin', requireSignin, Authentication.signin);

router.post('/signup', Authentication.signup);

// router.get("/scrape", (req, res) => {
//     axios.get("http://www.nytimes.com/")
//         .then(function(response) {
//         let $ = cheerio.load(response.data);
  
//         // Grabbing articles 
//         $("article").each(function(i, element) {
  
//             // starting with empty results
//             let results = {}
  
//             results.title = $(this).find("h2").text()
//             results.link = $(this).find("a").attr("href")
//             results.summary = ($(this).find("li").text() || $(this).find("p").text())
//             results.image = $(this).find("img").attr("src")

//            res.send(results)

//             })
//             .catch((err) => {
//                 if (err) throw "Error creating articles. " + err;
//             })
//         });
//     });

module.exports = router;