define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('login.ctrl.main',
			[
				'$scope',
				'login.$resource',
				'$location',
				'$rootScope',
				function ($scope, $res, $location, $rootScope) {
//					run code before loaded
					if (sessionStorage.login) {
						$location.path('/');
					}
//					values
//					  var


//					  $scope
					$scope.lang = $res.lang();


//					  $rootScope

//					buttons
					$scope.submit = function (form) {
						console.log(form);
						if (form.$valid) {
							$res.login('data=' + encodeURIComponent(angular.toJson($scope.login)),
								function (res) {
									$rootScope.$broadcast('login', res);
									$location.path('/');
									sessionStorage.login = true;
								}, function (err) {
									if (err.status == '403') {
										$scope.err403 = true;
									}
								});
						} else {
							angular.forEach(form.$error.required, function (el) {
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