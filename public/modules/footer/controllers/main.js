define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('footer.ctrl.main',
			[
				'$scope',
				'footer.$resource',

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