var User = require('./models/user').User;
var HttpError = require('./error');
var ObjectID = require('mongodb').ObjectID;
var jade = require('jade');


module.exports = function (app) {

	app.post('/login',require('./login').post);
	app.post('/logout',require('./logout').post);
	app.post('/registration',require('./registration').post);

};
