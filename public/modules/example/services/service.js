define(function (require) {
	return function (module) {

		module.service('service', [function () {

			this.val = 'service';
			this.run = function () {
			};
		}]);
	}
});