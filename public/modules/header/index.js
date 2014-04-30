define(function (require) {

	var angular=require('angular');
	require('ngResource');

	var module = angular.module('header', ['ngResource']);

	require('./controllers/main.js')(module);

	return module;
});