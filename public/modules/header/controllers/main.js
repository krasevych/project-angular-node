define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('header.ctrl.main',
			[
				'$scope',
				'header.$resource',

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