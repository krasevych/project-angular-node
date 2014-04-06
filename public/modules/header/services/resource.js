define(function(require)
{
	return function(module){

	module.factory('header.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ id: 'example' }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/header/json/lang.json'
				}
			}
		);

		return resource;
	}]);

	}
});