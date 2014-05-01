define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);
		var modalCrtl = require('./modal.js');

		module.controller('registration.ctrl.main',
			[
				'$scope',
				'registration.$resource',
				'$modal',
				'$rootScope',
				'$location',
				function ($scope, $res, $modal, $rootScope, $location) {
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
						if (form.$valid) {
							$res.registration('data=' + encodeURIComponent(angular.toJson($scope.registration)),
								function (res) {
									$modal.open({
										templateUrl: '/modules/registration/views/modal.html',
										controller: modalCrtl,
										windowClass: 'req-modal',
										resolve: {
											lang: function () {
												return $scope.lang.$promise.then(function (el) {
													return angular.extend({}, el.modal, res);
												});
											}
										}
									}).result.then(function () {
											$rootScope.$broadcast('login', res);
											$location.path('/');
										}, function () {
											$location.path('/');
										});

								}, function (err) {
									if (err.status == '403') {
										$scope.err403 = true;
									}
								});
						} else {
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