const db = require('../models')
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already ahd their email and password auth'd
    // We need to give them a token
    res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

	if (!username || !password || !email) {
		return res.status(422).send({ error: "Username, password, and email are all required."})
  }
  
//   // see if username exist
  
//   db.User.findOne({where: {username: username} }),function(err, existingUser) {
// 		if (err) { return next(err); }

// 		// if a username does exist, return an error

// 		if (existingUser)
// 				return res.status(422).send({ error: "Username is taken" });

// 		// if a username doesn't exist, create and save user record.

		const user = new db.User({
			username: username,
			email: email,
			password: password
		});

		user.save().then(function(err) {
			if(err) { return next(err); }

				// Respond to request indicating user was created.
				res.json({ token: tokenForUser(user) });
		});

		// db.User.create({
		// 	username: username,
		// 	password: password,
		//   	email: email	
		// })
		// .then(function(err, user) {
		// 	if(err) { return next(err); }
		// 		// Respond to request indicating user was created.
		// 		res.json({ token: tokenForUser(User) });
		// });
  };
// };

// app.post("/api/signup", upload.single('avatar'), function(req, res) {
//     console.log(req.file);
//     console.log(req.body)
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password,
//       avatarPath: "uploads/" + req.file.filename
//     }).then(function(user) {
//       //console.log(arguments);
//       passport.authenticate('local')(req, res, function () {
//         res.end("/members");
//         }
//       )
//     }).catch(function(err) {
//       console.log(err);
//       res.json(err);
//       // res.status(422).json(err.errors[0].message);
//     });
//   });










// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;
// var db = require("../models");

// passport.use(new LocalStrategy(
//   {
//     usernameField: "username"
//   },
//   function(username, password, done) {
//     db.User.findOne({
//       where: {
//         username: username
//       },
//       // include: ['Albums']
//     }).then(function(dbUser) {
//       console.log(dbUser)
//       // dbUser["Albums"].forEach(x => console.log(x.name));
//       if (!dbUser) {
//         return done(null, false, {
//           message: "No username found."
//         });
//       }
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       // If none of the above, return the user
//       return done(null, dbUser);
//     });
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });
// //
// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// module.exports = passport;



