define( function (require) {
//	require modules
	require('ngRoute');
	require('/modules/example/index.js');


	 var app=angular.module('app',
		 [
			 'ngRoute',
			 'exampleModule'
		 ]);
	app.config(
		[
			'$routeProvider',
			function ($routeProvider) {
				$routeProvider
					.when('/', {templateUrl:'/modules/example/views/main.html'});

				$routeProvider.otherwise({redirectTo: '/'});
			}
		]);
	return app;
});
