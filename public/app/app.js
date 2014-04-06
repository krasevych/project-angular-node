define(function (require) {
//	require modules
	require('ngRoute');
	require('../modules/header/index.js');
	require('../modules/home/index.js');
	require('../modules/footer/index.js');

// created module of app
	 var app=angular.module('app',
		 [
			 'ngRoute',
			 'header',
			 'home',
			 'footer'
		 ]);

//	require  components of app
	require('./configs/router')(app);

	return app;
});
