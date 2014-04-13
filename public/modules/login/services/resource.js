define(function(require)
{
	return function(module){

	module.factory('login.$resource',
		[
			'$resource',
			function ($resource) {

		var resource= $resource('url/:id',
			{  }, {
				lang:{
					method:'GET',
					cache:true,
					url:'/modules/login/json/lang/:lang',
					params:{lang:'en.json'}
				},
				login:{
					method:'POST',
					url:'/login',
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