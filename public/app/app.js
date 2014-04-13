define(function (require) {
//	require modules
	require('ngRoute');
	require('ngAnimate');
	require('../modules/header/index.js');
	require('../modules/home/index.js');
	require('../modules/login/index.js');
	require('../modules/registration/index.js');
	require('../modules/footer/index.js');

// created module of app
	 var app=angular.module('app',
		 [
			 'mgcrea.ngStrap',
			 'ngAnimate',
			 'ngRoute',
			 'header',
			 'home',
			 'login',
			 'registration',
			 'footer'
		 ]);

//	require  components of app
	require('./configs/router')(app);

	return app;
});
