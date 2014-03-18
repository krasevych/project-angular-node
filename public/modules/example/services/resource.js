define([], function () {
	angular.module('appResource',['ngResource']).factory('$resource', function ($resource) {
		return  $resource('url/:id',
			{ id: 'example' }, {
				update: { method: 'PUT' }
			}
		);

	});
});