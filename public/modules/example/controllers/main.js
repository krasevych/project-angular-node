define(['../services/factory.js','ngResource'], function(r)
{
	console.log(r);
	angular.module('controller',['ngResource']).controller('example',
		[
			'$scope',
//			'$factory',
			'service',

			function($scope,service){
				console.log(service);
				$scope.example ='dss';
			}
		]);
});