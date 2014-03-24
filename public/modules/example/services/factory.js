define(function(require)
{
	return function(module){
	module.factory('$factory',[function () {
		// Service logic
		// ...

		var meaningOfLife = 42;

		// Public API here
		return {
			someMethod: function () {
				return meaningOfLife;
			}
		};

	}]);
	}
});