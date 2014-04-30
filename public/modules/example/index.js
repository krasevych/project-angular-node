define(function (require) {

	require('ngResource');

	var module = angular.module('exampleModule', ['ngResource']);

	require('./controllers/main.js')(module);
	require('./configs/provider.js')(module);


	return module;
});