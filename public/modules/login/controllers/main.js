define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('login.ctrl.main',
			[
				'$scope',
				'login.$resource',
				'$alert',

				function ($scope, $res,$alert) {
//					values
//					  var
					var myAlert = $alert({
						container:'.error-box',
						placement:'top-right',
						type: 'danger',
						show: false});

//					  $scope
					$scope.lang=$res.lang();


//					  $rootScope

//					buttons
					$scope.submit = function () {
						$res.login('data='+encodeURIComponent(angular.toJson($scope.login)),
						function(res){


						},function(err){
								if (err.status=='403') {
//									myAlert.$scope.title=err.data.message;

//									myAlert.$scope.$show();
									$scope.err403=true;
									$scope.login.password = '';
								}
							});

					};
//					watches

//					events

				}
			]);
	}

});