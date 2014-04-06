define(function (require) {

	require('ngResource');

	var module = angular.module('home', ['ngResource']);

	require('./controllers/main.js')(module);

	return module;
});