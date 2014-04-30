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

				function ($scope, $res, service, provider) {
//					values
//					  var
					var hello = provider.greet();
					var who=service.run();

//					  $scope
					console.log($res);
					$scope.example = hello+'. '+who;
					$scope.lang=$res.lang();

//					  $rootScope

//					buttons

//					watches

//					events

				}
			]);
	}

});