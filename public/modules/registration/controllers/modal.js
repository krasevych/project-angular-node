define(function (require) {
	return function ($scope, $modalInstance, items,lang) {
console.log($scope,$modalInstance);
			$scope.items = items;
		$scope.lang=lang;
			$scope.selected = {
				item: $scope.items[0]
			};

			$scope.ok = function () {
				$modalInstance.close($scope.selected.item);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};

	}

});