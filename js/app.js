var app = angular.module('app', ['ngMessages']);

app.controller('order', ['$scope', function($scope) {
	$scope.order = {
		name: null,
		email: null,
		message: null
	};

	$scope.isRequired = function(name) {
		return $scope.form[name].$touched && $scope.form[name].$pristine  || $scope.form[name].$dirty && $scope.form[name].$invalid;
	};

	$scope.submit = function submitOrder() {


		if ($scope.order.email == null) {
			document.getElementById("ifInvalid").className = "";
			console.warn('try again', $scope.order);

		} else {

			console.warn('Well done', $scope.order);
			document.getElementById("ifInvalid").className = "ng-hide";
		};
	}
}]);