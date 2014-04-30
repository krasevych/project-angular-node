define(function (require) {

	var angular=require('angular');
	require('ngResource');

	var module = angular.module('home', ['ngResource']);

	require('./controllers/main.js')(module);

	return module;
});