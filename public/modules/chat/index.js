define(function (require) {

	require('ngResource');

	var module = angular.module('chat', ['ngResource']);

	require('./controllers/main.js')(module);


	return module;
});