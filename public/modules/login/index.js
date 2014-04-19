define(function (require) {

	require('ngResource');

	var module = angular.module('login', ['ngResource']);

	require('./controllers/main.js')(module);
	require('./directives/formAutofillFix.js')(module);

	return module;
});