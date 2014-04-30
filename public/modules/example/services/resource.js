define(function(require)
{
	return function(module){

	module.factory('example.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ id: 'example' }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/example/json/lang.json'
				}
			}
		);

		return resource;
	}]);

	}
});