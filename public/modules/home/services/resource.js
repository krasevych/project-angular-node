define(function(require)
{
	return function(module){

	module.factory('home.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ id: 'example' }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/home/json/lang.json'
				}
			}
		);

		return resource;
	}]);

	}
});