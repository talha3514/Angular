angular.module("myAppTestCtrl", []).controller("testCtrl", [
  "$scope",
  "testFactory",
  function ($scope, testFactory) {
    testFactory.getData().then((res) => {
      console.log(res);
    });

    $scope.value = 1;

    $scope.arti = () => {
      $scope.value += 1;
    };
  },
]);
