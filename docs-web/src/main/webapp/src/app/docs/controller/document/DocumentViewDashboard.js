/**
 * Document view dashboard controller.
 * Added as part of feature review dashboard.
 */

 //angular.module('docs').controller('DocumentViewDashboard', function($scope) {
    // Convert string from dropdown to number
    //var numval = document.getElementById("gpa");
    //var value = numval.value;

    // Submitting scores
    angular.module('dashboardApp', [])
      .controller('DashboardCtrl', ['$scope',
        function($scope) {
          $scope.GPAOptions = [1,2,3,4,5,6,7,8,9,10];
          $scope.result = 0;
          //$scope.myModel = 1; // note it's an Integer
          $scope.checkselection = function () {
            $scope.result = $scope.GPASelect + 2
          }
 
        }
      ]);


    // Average of scores

  //});