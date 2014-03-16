define([], function()
{
	angular.module('controller',[]).controller('example',
		[
			'$scope',

			function($scope)
			{
				$scope.example ='example';
			}
		]);
});