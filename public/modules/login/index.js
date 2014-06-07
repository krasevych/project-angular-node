define(function (require) {

	var angular=require('angular');
	require('ngResource');
	require('ngMessages');


	var module = angular.module('login', ['ngResource','ngMessages']);

// common components
	require('formAutofillFix')(module);

//	components of module
	require('./controllers/main.js')(module);

	return module;
});