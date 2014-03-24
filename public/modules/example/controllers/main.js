define(function (require) {
	return function (module) {
		require('../services/service.js')(module);
		require('../services/resource.js')(module);
		require('../services/provider.js')(module);

		module.controller('example',
			[
				'$scope',
				'example.$resource',
				'service',
				'provider',

				function ($scope, $resourceM, service, provider) {

					console.log(service);
					console.log(provider.greet());
					$scope.example = 'dss';
				}
			]);
	}

});