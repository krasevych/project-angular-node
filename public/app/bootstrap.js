require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min.js',//v2.1
		'angular': '../bower_components/angular/angular',
		'ngResource':'../bower_components/angular-resource/angular-resource.min',
		'ngAnimate':'../bower_components/angular-animate/angular-animate.min',
		'ngRoute':'../bower_components/angular-route/angular-route.min',
		'ui_bootstrap_tpls':'../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
		
//		common components
		'formAutofillFix':'../common/directives/formAutofillFix'
	},
	shim: {
		'ui_bootstrap_tpls': {
			deps: ['angular'],
			exports: 'ui_bootstrap_tpls'
		},
		'ngRoute': {
			deps:['angular'],
			exports: 'ngRoute'
		},
		'angular': {
			exports: 'angular'
		},
		 'ngAnimate': {
		 deps:['angular'],
		 exports: 'ngAnimate'
		 },
		 'ngResource': {
		 deps:['angular'],
		 exports: 'ngResource'
		 }

	}
});
require([
		'angular',
		'./app'
	],function (angular) {
		angular.bootstrap(document, ['app']);
	}
);