define(function (require) {
	return function (module) {
		require('../services/provider.js')(module);

		module.config(
			function (providerProvider) {
				providerProvider.setSalutation('Hello World');
			})
	}
});