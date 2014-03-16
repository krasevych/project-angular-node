define(['app'], function(app)
{
	app.lazy.service('service',
		[
			'$scope',

			function($scope)
			{
				$scope.page =
				{
					heading: 'Contact Us'
				};
			}
		]);
});