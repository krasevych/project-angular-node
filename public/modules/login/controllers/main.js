define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('login.ctrl.main',
			[
				'$scope',
				'login.$resource',

				function ($scope, $res) {
//					values
//					  var


//					  $scope
					$scope.lang=$res.lang();

//					  $rootScope

//					buttons
					$scope.submit = function () {
						console.log(this);
						$res.login('data='+encodeURIComponent(angular.toJson($scope.login)));

					};
//					watches

//					events

				}
			]);
	}

});