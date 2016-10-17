//Conrtoller to get a Survey
myApp.controller('singleSurveyCtrl' , [ '$http' , '$location' ,'$routeParams' ,'$route', 'surveyService', function($http , $location,$routeParams,$route, surveyService){

    var scope = this;
    this.heading = "";
    this.$route = $route;
    
    this.surveyId = $routeParams.surveyId;
    console.log(this.surveyId)

    // Get all Surveys
    this.survey = function(surveyId){
        
        surveyService.getSingleSurvey(surveyId)
        .then(function successCallBack(response){
            scope.surveyobj = response.data.data;
            console.log(response)
        } ,
        function errorCallBack(response){
            alert("Error!! Check console")
            console.log(response)
        } );
    }
    this.survey(this.surveyId);

    this.allQuestion = function(){
        surveyService.getAllQuestion(scope.surveyId)
        .then(function successCallBack(response){
            scope.questions = response.data.data;
            console.log(response.data.data)
            console.log(scope.questions)
        }, function errorCallBack(response){
            alert("Error - check console")
            console.log(response)
        });
    }//end allQuestions

    this.allQuestion(this.surveyId)
    
    this.showEditBox = '';

    this.editClicked = function(){
      scope.showEditBox = "true";
    }
    
    this.editQuestion = function(questionId , questionTextOriginal){

      var questionText = {
        questionText : scope.questionTextOriginal
      }

      surveyService.editAQuestion(questionId , questionText)
      .then(function successCallBack(response){
        console.log(response)
        // alert("edit")
        scope.showEditBox = '';
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });

    }//end edit question

    this.add = '';
    
    // Funtion to track current question index
    this.currentOption = function(index){
      scope.currentIndex = index;
      console.log("currentIndex = "+scope.currentIndex)
    }//end current option function

    this.lastOptionIndex = '';

    this.addOption = function( options ,questionId , index){
        var optionText = {
          optionText : scope.optionText
        }
        surveyService.createOption(questionId , optionText)
        .then(function successCallBack(response){
            // alert("Option added successfully");
            console.log(response)
            scope.add = ''
            options.push(scope.optionText)
            // scope.lastOptionIndex = 'true';
            
        } , function errorCallBack(response){
            alert("Error!! Check console")
            console.log(response)
        });
    }//end add option

    this.optionsDelete = function(options , questionId){
      surveyService.deleteOptions(questionId)
      .then(function successCallBack(response){
        // alert("Options deleted successfully")
        console.log("Last :"+scope.lastOptionIndex)
        var length = scope.lastOptionIndex + 1;
        options.splice(0 , length) 
        scope.lastOptionIndex-=1;
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });
    }//end delete all options

    this.answerBox = '';

    this.answersDelete = function(questionId){
       surveyService.deleteAnswers(questionId)
       .then(function successCallBack(response){
        // alert("All Answers Deleted Successfully")
        scope.answerBox = 'true';
        console.log(response)
       }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
       });
    }//end delete answers


    this.questionDelete = function(questionId , index){
      surveyService.deleteQuestion(questionId)
      .then(function successCallBack(response){
        // alert("Question deleted successfully")
        scope.questions.splice(index , 1)
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });
    }//end delete a question

    this.delete = function(surveyId , index){
        surveyService.deleteSurvey(surveyId)
        .then(function successCallBack(response){
            // alert("Survey deleted successfully")
            scope.surveys.splice(index, 1)
            scope.resetSearchText()
        }, function errorCallBack(response){
            alert("Error!! Check console")
            console.log(response)
        } );
    }//end delete survey

}] );//end controller








