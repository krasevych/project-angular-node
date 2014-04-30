define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('home.ctrl.main',
			[
				'$scope',
				'home.$resource',

				function ($scope, $res) {
//					values
//					  var


//					  $scope
					$scope.lang=$res.lang();

//					  $rootScope

//					buttons

//					watches

//					events

				}
			]);
	}

});