

/**
 * Document view dashboard controller.
 * Added as part of feature review dashboard.
 */

 //angular.module('docs').controller('DocumentViewDashboard', function($scope) {
    // Convert string from dropdown to number
    //var numval = document.getElementById("gpa");
    //var value = numval.value;

    // Submitting scores

    var gpaTotal = 0;
    var skillsTotal = 0;
    var experienceTotal = 0;
    var educationTotal = 0;
    var reviewCount = 0;

    function getScores() {
      reviewCount += 1;
      //finding the GPA value saved
      selectGPA = document.querySelector('#GPA');
      gpaScore = Number(selectGPA.options[selectGPA.selectedIndex].value);
      gpaTotal += gpaScore;

      //finding skills value saved
      selectSkills = document.querySelector('#skills');
      skillsScore = Number(selectSkills.options[selectSkills.selectedIndex].value);
      skillsTotal += skillsScore;

      //finding experience value saved 
      selectExperience = document.querySelector('#experience');
      experienceScore = Number(selectExperience.options[selectExperience.selectedIndex].value);
      experienceTotal += experienceScore;

      //finding education value saved 
      selectEducation = document.querySelector('#education');
      educationScore = Number(selectEducation.options[selectEducation.selectedIndex].value);
      educationTotal += educationScore;

      document.querySelector('.reviewers').textContent = reviewCount;

      //shows the avg score of all reviewers scoring this applicant
      document.querySelector('.gpaScore').textContent = gpaScore;
      document.querySelector('.gpaAvg').textContent = gpaTotal / reviewCount;

      document.querySelector('.skillsScore').textContent = skillsScore;
      document.querySelector('.skillsAvg').textContent = skillsTotal / reviewCount;

      document.querySelector('.experienceScore').textContent = experienceScore;
      document.querySelector('.experienceAvg').textContent = experienceTotal / reviewCount;

      document.querySelector('.educationScore').textContent = educationScore;
      document.querySelector('.educationAvg').textContent = educationTotal / reviewCount;

      document.querySelector('.overallAvg').textContent = (gpaTotal / reviewCount) + (skillsTotal / reviewCount) + (experienceTotal / reviewCount) + (educationTotal / reviewCount) + "/40";
      
    }


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

