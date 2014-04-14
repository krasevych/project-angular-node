define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('login.ctrl.main',
			[
				'$scope',
				'login.$resource',
				'$alert',
				'$location',
				'$rootScope',
				function ($scope, $res,$alert,$location,$rootScope) {
//					values
//					  var


//					  $scope
					$scope.lang=$res.lang();


//					  $rootScope

//					buttons
					$scope.submit = function (form) {
						if (form.$valid) {
							$res.login('data=' + encodeURIComponent(angular.toJson($scope.login)),
								function (res) {
										$rootScope.$broadcast('login',res);
										$location.path('/');
								}, function (err) {
									if (err.status == '403') {
										$scope.err403 = true;
									}
								});
						}else{
							form.$error.required.forEach(function (el) {
								el.$pristine = false;
							})
						}

					};
//					watches

//					events

				}
			]);
	}

});