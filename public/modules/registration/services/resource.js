define(function(require)
{
	return function(module){

	module.factory('registration.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ id: 'example' }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/registration/json/lang.json'
				}
			}
		);

		return resource;
	}]);

	}
});