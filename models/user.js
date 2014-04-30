var crypto = require('crypto');
var mongoose = require('lib/mongoose');
var async = require('async');
var util = require('util');

Schema = mongoose.Schema;
var schema = new Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

schema.methods.encryptPassword = function (password) {
	return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
	.set(function (password) {
		this._plainPassword = password;
		this.salt = Math.random() + '';
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function () {
		return this._plainPassword;
	});

schema.methods.checkPassword = function (password) {
	return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.registration = function (name, email, password, callback) {
	var User = this;
	async.waterfall([
		function (callback) {
			User.findOne({email: email}, callback);
		},
		function (user, callback) {
			if (user) {
				callback(new AuthError('User is register'))
			}
			else {
				var user = new User({
					name: name,
					email: email,
					password: password
				});
				user.save(function (err) {
					if (err) return callback(err);
					user.register=true;
					callback(null, user);
				});
			}
		}
	], callback);
};
schema.statics.login = function (email, password, callback) {
	var User = this;
	async.waterfall([
		function (callback) {
			User.findOne({email: email}, callback);
		},
		function (user, callback) {
			if (user) {
				if (user.checkPassword(password)) {
					user.find = true;
					callback(null, user);
				} else {
					callback(new AuthError('User not found'))
				}
			}
			else {
				callback(new AuthError('User not found'));
			}
		}
	], callback);
};
schema.statics.authorize = function (email, password, callback) {
	var User = this;
	async.waterfall([
		function (callback) {
			User.findOne({email: email}, callback);
		},
		function (user, callback) {
			if (user) {
				if (user.checkPassword(password)) {
					user.find = true;
					callback(null, user);
				} else {
					callback(new AuthError('User not found'))
				}
			}
			else {
				var user = new User({email: email, password: password});
				user.save(function (err) {
					if (err) return callback(err);
					callback(null, user);
				});
			}
		}
	], callback);
};


exports.User = mongoose.model('User', schema);

function AuthError(message) {
	Error.apply(this, arguments);
	Error.captureStackTrace(this, AuthError);

	this.message = message;
}
util.inherits(AuthError, Error);
AuthError.prototype.name = 'AuthError';

exports.AuthError = AuthError;

