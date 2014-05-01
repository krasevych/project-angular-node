define(function (require) {
	return function (module) {
		require('../services/resource.js')(module);

		module.controller('header.ctrl.main',
			[
				'$scope',
				'$rootScope',
				'header.$resource',

				function ($scope,$rootScope, $res) {
//					values
//					  var


//					  $scope
					$scope.lang=$res.lang();
//					$scope.btn_login=true;

//					  $rootScope

//					buttons
					$scope.logout=function(){
						$scope.btn_login=true;
						$res.logout();
						delete sessionStorage.login;
					};
//					watches

//					events
					$scope.$on('login',function(e,res){
						$scope.btn_login=false;
					  $scope.email = res.name? res.name:res.email;
					});

//					run code after loaded
					if (sessionStorage.login) {
						$res.login(function(res){
							$rootScope.$broadcast('login',res);
						});
					}else{
						$scope.btn_login=true;
					}


				}
			]);
	}

});