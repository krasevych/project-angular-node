var mongoose = require('lib/mongoose');
mongoose.set('debug',true);
var async = require('async');
var unit = require('util');
var db = mongoose.connection.db;


async.series([
	open,
	dropDatabase,
	requireModels,
	createUsers,
	showCollection
], function (err, result) {
	mongoose.disconnect();
});

function open(callback) {
	mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
	db.dropDatabase(callback);
}

function requireModels(callback) {
	require('models/user');
	async.each(Object.keys(mongoose.models), function (nameModel, callback) {
	console.log(nameModel);
		mongoose.models[nameModel].ensureIndexes(callback)
	}, callback)
}

function createUsers(callback) {
	var users = [
		{name: "Vasy", password: "pass"},
		{name: "Cola", password: "pass"},
		{name: "Pasha", password: "pass"}
	];
	async.each(users, function (item, callback) {
		var user = new mongoose.models.User(item);
		user.save(callback);
	}, callback);
}

function showCollection(callback) {
	var collection = db.collection('users');

	collection.count(function (err, count) {
		console.log(unit.format("count = %s", count));
	});

	console.log(collection.find({}));
	// Locate all the entries using find
	collection.find().toArray(function (err, results) {
		console.dir(results);
		// Let's close the db
		db.close();
		callback();
	});
}

