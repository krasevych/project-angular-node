define( function (require) {
//	require modules
	require('ngRoute');
	require('../modules/example/index.js');


	 var app=angular.module('app',
		 [
			 'ngRoute',
			 'exampleModule'
		 ]);
	require('./configs/router')(app);

	return app;
});
