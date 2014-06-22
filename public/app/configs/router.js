define(function (require) {
	return function (app) {
		app.config(
			function ($routeProvider) {
				$routeProvider

					.when('/', {templateUrl: '/modules/home/views/main.html'})
					.when('/login', {templateUrl: '/modules/login/views/main.html'})
					.when('/registration', {templateUrl: '/modules/registration/views/main.html'})
					.when('/chat', {templateUrl: '/modules/chat/views/main.html'});

				$routeProvider.otherwise({redirectTo: '/'});
			})
	}
});