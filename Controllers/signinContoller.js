const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
};

exports.signin = function(req, res, next) {
  // User has already ahd their email and password auth'd
  // We need to give them a token
  res.send({ token: tokenForUser(req.user) })
};
