define(function (require) {

	var angular=require('angular');
	require('ngResource');


	var module = angular.module('login', ['ngResource']);

// common components
	require('formAutofillFix')(module);

//	components of module
	require('./controllers/main.js')(module);

	return module;
});