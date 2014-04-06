define(function (require) {

	require('ngResource');

	var module = angular.module('footer', ['ngResource']);

	require('./controllers/main.js')(module);

	return module;
});