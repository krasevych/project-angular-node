define(function (require) {

	return function (module) {
		module.directive('formAutofillFix', [function factory(injectables) {
			return  function(scope, elem, attrs) {
						if(attrs.ngSubmit) {
							setTimeout(function() {
								elem.unbind('submit').bind('submit', function(e) {
									e.preventDefault();
									elem.find('input').triggerHandler('change');
									scope.$apply(attrs.ngSubmit);
								});
							}, 0);
						}
					};

		}]);
	}
});