define(function (require) {
//	require modules
	require('ngRoute');
	require('../modules/example/index.js');

// created module of app
	 var app=angular.module('app',
		 [
			 'ngRoute',
			 'exampleModule'
		 ]);

//	require  components of app
	require('./configs/router')(app);

	return app;
});
