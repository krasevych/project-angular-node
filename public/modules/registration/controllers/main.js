define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);
		var modalCrtl = require('./modal.js');

		module.controller('registration.ctrl.main',
			[
				'$scope',
				'registration.$resource',
				'$modal',
				'$log',

				function ($scope, $res, $modal, $log) {
//					values
//					  var

//					  $scope
					$scope.lang = $res.lang();
					$scope.items = ['item1', 'item2', 'item3'];
//					  $rootScope
					$modal.open({
						templateUrl: '/modules/registration/views/modal.html',
						controller: modalCrtl,
						windowClass:'asdas',
						resolve: {
							lang: function () {
								return $scope.lang;
							},
							items: function () {
								return $scope.items;
							}
						}
					}).result.then(function (selectedItem) {
							$log.log(selectedItem)
						}, function () {
							$log.info('Modal dismissed at: ' + new Date());
						});

//					buttons
					$scope.submit = function (form) {
						if (form.$valid) {
							$res.registration('data=' + encodeURIComponent(angular.toJson($scope.registration)),
								function (res) {
									/*				$rootScope.$broadcast('registration',res);
									 $location.path('/');*/

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