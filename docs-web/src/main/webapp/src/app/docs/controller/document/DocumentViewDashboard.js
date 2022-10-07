

/**
 * Document view dashboard controller.
 * Added as part of feature review dashboard.
 */
    //getting values from the document
    var gpa = this;
    var skills = this;
    var experience = this;
    var education = this;
    //for scores
    var gpaTotal = 0;
    var skillsTotal = 0;
    var experienceTotal = 0;
    var educationTotal = 0;
    var reviewCount = 0;
    
    document.getEvent = function() {
        Restangular.one('document', gpa).get().then(function(gpa) {
          $scope.document = gpa;
      },
      Restangular.one('document', skills).get().then(function(skills) {
        $scope.document = skill;
      },
      Restangular.one('document', experience).get().then(function(experience) {
        $scope.document = experience;
      },
        Restangular.one('document', education).get().then(function(education) {
          $scope.document = education;
      },



    
    // Submitting scores



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
        ))))}



