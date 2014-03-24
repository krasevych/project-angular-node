require.config({
	paths: {
		'jquery': '/bower_components/jquery/dist/jquery.min.js',//v2.1
		'angular': '/bower_components/angular/angular.min',
		'ngResource':'/bower_components/angular-resource/angular-resource.min',
		'ngRoute':'/bower_components/angular-route/angular-route.min',
		'angular_strap': '/bower_components/angular-strap/dist/angular-strap.min',
		'angular_strap_tpl': '/bower_components/angular-strap/dist/angular-strap.tpl.min',
		'ocLazyLoad':'/bower_components/ocLazyLoad/ocLazyLoad.min',


	},
	shim: {
		'angular_strap_tpl': {
			deps: ['angular_strap'],
			exports: 'angular_strap_tpl'
		},
		'angular_strap': {
			deps: ['angular'],
			exports: 'angular_strap'
		},
		'ngRoute': {
			deps:['angular'],
			exports: 'ngRoute'
		},
		'angular': {
			exports: 'angular'
		}

	},
	deps: [
		'angular',
		'ngRoute',
		'angular_strap',
		'angular_strap_tpl'
	]
});
require([
		'app'
	],function (app) {
		angular.bootstrap(document, ['app']);
	}
);