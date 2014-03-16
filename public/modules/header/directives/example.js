define([], function()
{
	angular.module('headerDirective',[]).directive('directiveName', function factory(injectables) {
		return {
			priority: 0,
			require:'^name',
			template: '<div></div>',
			templateUrl: 'directive.html',
			replace: false,
			transclude: false,
			restrict: 'EACM',
			scope: false,
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {  },
					post: function postLink(scope, iElement, iAttrs, controller) {  }
				}
			},
			link: function postLink(scope, iElement, iAttrs) {  }
		};
	});
});