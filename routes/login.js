var User = require('models/user').User;
var AuthError = require('models/user').AuthError;
var HttpError = require('error');

exports.post = function (req, res, next) {

	var name = req.body.name;
	var password = req.body.password;
	User.authorize(name, password, function (err, user) {
		if (err){
			if(err instanceof AuthError){
				return next(new HttpError(403,err.message));
			}else{
			return next(err);
			}
		}
		req.session.user = user._id;

		if (user.find)
			res.send({name: user.name});
		else
			res.send({status: 'create'});
	});

};