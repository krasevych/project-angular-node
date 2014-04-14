define(function(require)
{
	return function(module){

	module.factory('registration.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{ }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/registration/json/lang/:lang',
					params:{lang:'en.json'}
				},
				registration:{
					method:'POST',
					url:'/registration',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'x-requested-with':'XMLHttpRequest'
					}
				}
			}
		);

		return resource;
	}]);

	}
});