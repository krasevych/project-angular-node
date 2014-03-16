define([
	'/modules/example/controllers/main.js',
	'/modules/example/directives/directiveName.js'
/*	'/modules/example/filters/filterName',
	'/modules/example/services/resource',
	'/modules/example/services/service'*/
], function () {
	angular.module('exampleModule', [
		'controller',
		'directive'
/*		'filter',
		'appResource',
		'appService',*/
	]);
});