define([], function () {
	angular.module('appResource',[]).factory('resource', function ($resource) {
		return  $resource('https://api.mongolab.com/api/1/databases' +
			'/angularjs/collections/projects/:id',
			{ apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
				update: { method: 'PUT' }
			}
		);

	});
});