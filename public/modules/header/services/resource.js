define(function(require)
{
	return function(module){

	module.factory('header.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{  }, {
				update: { method: 'PUT' },
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/header/json/lang/:lang',
					params:{lang:'en.json'}
				},
				logout:{
					method:'POST',
					url:'/logout',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'x-requested-with':'XMLHttpRequest'
					}
				},
				login:{
					method:'PUT',
					url:'/login',
					headers: {
						'x-requested-with':'XMLHttpRequest'
					}
				}

			}
		);

		return resource;
	}]);

	}
});