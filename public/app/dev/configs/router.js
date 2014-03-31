define(function (require) {
	return function (app) {
		app.config(
			[
				'$routeProvider',
				function ($routeProvider) {
					$routeProvider
						.when('/', {templateUrl:'/modules/example/views/main.html'});

					$routeProvider.otherwise({redirectTo: '/'});
				}
			]);
	}
});