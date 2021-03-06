define(function(require)
{
	return function(module){

	module.factory('footer.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/footer/json/lang/:lang',
					params:{lang:'en.json'}
				}
			}
		);

		return resource;
	}]);

	}
});