define(function (require) {
	return function (module) {

		module.service('service', [function () {

			var val = 'I am example';
			this.run = function () {
				return val;
			};

		}]);
	}
});