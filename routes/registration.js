var User = require('models/user').User;
var AuthError = require('models/user').AuthError;
var HttpError = require('error');

exports.post = function (req, res, next) {

	req.body=JSON.parse(req.body.data);
	var name=req.body.name;
	var email = req.body.email;
	var password = req.body.password;

	User.registration(name,email, password, function (err, user) {
		if (err){
			if(err instanceof AuthError){
				return next(new HttpError(403,err.message));
			}else{
			return next(err);
			}
		}
		req.session.user = user._id;
		if (user.register)
			res.send({name:user.name,email: user.email});
	});

};