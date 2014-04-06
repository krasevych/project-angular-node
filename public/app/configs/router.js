define(function (require) {
	return function (app) {
		app.config(
			function ($routeProvider) {
				$routeProvider

					.when('/', {templateUrl: '/modules/home/views/main.html'});

				$routeProvider.otherwise({redirectTo: '/'});
			})
	}
});