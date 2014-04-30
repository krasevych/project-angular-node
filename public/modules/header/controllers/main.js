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
					$scope.btn_login=true;

//					  $rootScope

//					buttons
					$scope.logout=function(){
						$scope.btn_login=true;
						$res.logout();
					};
//					watches

//					events
					$scope.$on('login',function(e,res){
						$scope.btn_login=false;
						console.log(res);
					  $scope.email = res.name? res.name:res.email;
					});

				}
			]);
	}

});