define([], function () {
	return angular.module('factoryApp',[]).factory('$factory', function () {
		// Service logic
		// ...

		var meaningOfLife = 42;

		// Public API here
		return {
			someMethod: function () {
				return meaningOfLife;
			}
		};

	});
});