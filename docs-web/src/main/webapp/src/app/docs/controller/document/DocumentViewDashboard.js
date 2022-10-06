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
          $scope.GPAOptions = [
            {score:1},
            {score:2},
            {score:3},
            {score:4},
            {score:5},
            {score:6},
            {score:7},
            {score:8},
            {score:9},
            {score:10}];
          $scope.submittedScore = 0;
          $scope.reviewCount = 0;
          $scope.GPAavg = 0;
          //$scope.myModel = 1; // note it's an Integer
          $scope.checkselection = function () {
            $scope.submittedScore = $scope.GPASelect.score + $scope.submittedScore;
            $scope.reviewCount = $scope.reviewCount + 1;
            $scope.GPAavg = $scope.submittedScore / $scope.reviewCount;
          }
 
        }
      ]);


    // Average of scores

  //});
