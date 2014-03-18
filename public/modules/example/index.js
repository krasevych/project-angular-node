define([
	'./controllers/main.js',
	'./directives/directiveName.js',
	'./services/factory.js',
	'./services/service.js'
/*	'./filters/filterName',
	'./services/resource',
	'./services/service'*/
], function () {
	angular.module('exampleModule', [
		'controller',
		'directive',
		'factoryApp',
		'appService'
/*		'filter',
		'appResource',
		'appService',*/
	]);
});