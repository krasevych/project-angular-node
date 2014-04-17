define(function (require) {
	return function ($scope, $modalInstance,lang) {
		$scope.lang=lang;
		console.log(lang);
			$scope.ok = function () {
				$modalInstance.close();
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};

	}

});