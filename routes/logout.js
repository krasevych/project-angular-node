var User = require('../models/user').User;
var HttpError = require('../error');

exports.post = function (req, res, next) {

	if (req.session.user) {
		delete req.session.user;
	}
	res.send({status: 'logout'});

};