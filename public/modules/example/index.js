define([
	'./controllers/main.js',
	'./directives/directiveName.js'
/*	'./filters/filterName',
	'./services/resource',
	'./services/service'*/
], function () {
	angular.module('exampleModule', [
		'controller',
		'directive'
/*		'filter',
		'appResource',
		'appService',*/
	]);
});