angular.module('app', []);

  .controller('AppController', ['$scope', function($scope) {
    console.log("test");
    $scope.targetItem.onTargetAPIChange = function($event){
        console.log("test");
        $scope.targetAPI.value(scope.vale);
    };
  }]);

    /*
    this.inDataPeriodValue = [
      { value: 0, text: 0 },
      { value: 1, text: 1 },
      { value: 2, text: 2 },
      { value: 3, text: 3 },
      { value: 4, text: 4 },
      { value: 5, text: 5 },
      { value: 6, text: 6 },
      { value: 7, text: 7 },
      { value: 8, text: 8 },
      { value: 9, text: 9 },
      { value: 10, text: 10 },
      { value: 11, text: 11 },
      { value: 12, text: 12 },
      { value: 13, text: 13 },
      { value: 14, text: 14 },
      { value: 15, text: 15 },
      { value: 16, text: 16 },
      { value: 17, text: 17 },
      { value: 18, text: 18 },
      { value: 19, text: 19 },
      { value: 20, text: 20 },
      { value: 21, text: 21 },
      { value: 22, text: 22 },
      { value: 23, text: 23 },
      { value: 24, text: 24 },
      { value: 25, text: 25 },
      { value: 26, text: 26 },
      { value: 27, text: 27 },
      { value: 28, text: 28 },
      { value: 29, text: 29 },
      { value: 30, text: 30 },
      { value: 31, text: 31 },
      { value: 32, text: 32 },
      { value: 33, text: 33 },
      { value: 34, text: 34 },
      { value: 35, text: 35 },
      { value: 36, text: 36 }
    ]
    */