define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('registration.ctrl.main',
			[
				'$scope',
				'registration.$resource',
				'$modal',

				function ($scope, $res,$modal) {
//					values
//					  var
					var myModal = $modal({
						title: 'My Title',
						content: 'My Content',
						show: false,
						animation:"am-fade-and-scale"
					});

//					  $scope
					$scope.lang=$res.lang();

//					  $rootScope
					myModal.$promise.then(function() {
						myModal.show();
					});
					$scope.$on('modal.hide.after',function(){
						alert('dsfdfs');
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