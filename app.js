var express = require('express');
var mongoose = require('lib/mongoose');
var http = require('http');
var path = require('path');
var config = require('config');
var HttpError = require('error');
var MongoStore=require('connect-mongo')(express);
//var db = require('createDB');

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
	secret:config.get('session:secret'),
	key:config.get('session:key'),
	cookie:config.get("session:cookie"),
	store:new MongoStore({mongoose_connection:mongoose.connection})
}));
app.use(require('middleware/sendHttpError'));
app.use(app.router);
require('./routes')(app);
app.use(express.static(path.join(__dirname, 'public')));

//  error
app.use(function (err, reg, res, next) {
	if (typeof err == 'number') {
		err = new HttpError(err);
	}
	if (err instanceof HttpError) {
		res.sendHttpError(err);
	} else {
		// development only
		if ('development' == app.get('env')) {
			app.use(express.errorHandler());
		} else {
			console.log(err);
			err = new HttpError(500);
			res.sendHttpError(err);

		}
	}
});


http.createServer(app).listen(config.get('port'),'127.0.0.1', function () {
	console.log('Express server listening on port ' + config.get('port'));
});