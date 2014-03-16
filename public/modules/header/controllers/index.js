define(['/modules/header/filters/filterName.js'], function()
{
	angular.module('headerCtrl',['headerFilter']).controller('header',
		[
			'$scope',

			function($scope)
			{
				$scope.example ='example';
			}
		]);
});