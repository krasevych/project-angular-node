define(function(require)
{
	return function(module){

	module.factory('chat.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ id: 'chat' }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/chat/json/lang/:lang'
				}
			}
		);

		return resource;
	}]);

	}
});