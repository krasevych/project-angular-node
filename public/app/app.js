define(['routes', '/common/services/dependencyResolver.js','ngRoute','ocLazyLoad'], function (routes, dependencyResolver) {
	return angular.module('app', ['ngRoute','oc.lazyLoad'])

/*	app.config(
		[
			'$routeProvider',
			'$locationProvider',
			'$controllerProvider',
			'$compileProvider',
			'$filterProvider',
			'$provide',

			function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
				app.lazy =
				{
					controller: $controllerProvider.register,
					directive: $compileProvider.directive,
					filter: $filterProvider.register,
					factory: $provide.factory,
					service: $provide.service
				};
//				$locationProvider.html5Mode(true);

				if (routes !== undefined) {

					angular.forEach(routes,function (route, path) {
						console.log(route,path);
						$routeProvider.when(path, {templateUrl: route.templateUrl, resolve: dependencyResolver(route.dependencies)});
					});
				}

				$routeProvider.otherwise({redirectTo: '/'});

			}
		])*/
	.config(
		[
			'$routeProvider',
			function ($routeProvider) {

				if (routes !== undefined) {
					angular.forEach(routes,function (route, path) {
						$routeProvider.when(path, {
							templateUrl:route.templateUrl,
							resolve:  {
								load: ['$ocLazyLoad', function($ocLazyLoad) {
									return $ocLazyLoad.load({
										name: route.name,
										files:route.files
									});
								}]
							}
						});
					});
				}

				$routeProvider.otherwise({redirectTo: '/'});
			}
		])
		.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
			$ocLazyLoadProvider.config({
//			modules: [
//				{
//					name: 'TestModule',
//					files: ['testModule.js'],
//					template: 'partials/testLazyLoad.html'
//				}
//			],
				asyncLoader: require
			});
		}]);
});
