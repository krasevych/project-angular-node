define(function (require) {
//	require modules
	var angular=require('angular');
	require('ngRoute');
	require('ngAnimate');
	require('ui_bootstrap_tpls');
//	my module
	require('../modules/header/index.js');
	require('../modules/home/index.js');
	require('../modules/login/index.js');
	require('../modules/registration/index.js');
	require('../modules/footer/index.js');
	require('../modules/chat/index.js');

// created module of app
	 var app=angular.module('app',
		 [
			 'ui.bootstrap',
			 'ngAnimate',
			 'ngRoute',
//			 my module
			 'header',
			 'home',
			 'login',
			 'registration',
			 'footer',
          'chat'
		 ]);

//	require  components of app
	require('./configs/router')(app);

	return app;
});
