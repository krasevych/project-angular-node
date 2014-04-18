define(function (require) {
	return function ($scope, $modalInstance,lang) {
//		values
		$scope.lang=lang;

//		buttons
			$scope.ok = function () {
				$modalInstance.close();
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};

	}

});