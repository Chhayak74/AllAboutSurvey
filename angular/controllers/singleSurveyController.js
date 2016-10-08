//Conrtoller to get a Survey
myApp.controller('singleSurveyCtrl' , [ '$http' , '$location' ,'$routeParams' , 'surveyService', function($http , $location,$routeParams, surveyService){

    var scope = this;
    this.heading = "";
    this.surveyId = $routeParams.surveyId;
    console.log(this.surveyId)
    this.survey = function(surveyId){
        
        surveyService.getSingleSurvey(surveyId)
        .then(function successCallBack(response){
            scope.surveyobj = response.data.data;
            console.log(response)
        } ,
        function errorCallBack(response){
            console.log(response)
        } );
    }
    this.survey(this.surveyId);

    this.delete = function(){
        surveyService.deleteSurvey(scope.surveyId)
        .then(function successCallBack(response){
            alert("delete")
        }, function errorCallBack(response){
            alert("errorCallBack")
        });
    }//end delete function

    this.allQuestion = function(){
        surveyService.getAllQuestion(scope.surveyId)
        .then(function successCallBack(response){
            scope.questions = response.data.data;
            console.log(response.data.data)
        }, function errorCallBack(response){
            alert("Error - check console")
            console.log(response)
        });
    }
    this.allQuestion();
    this.addQuestion = function(){
        surveyService.createQuestion(scope.surveyId , scope.questionText)
        .then(function successCallBack(response){
            alert("addQuestion")
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log(response)
        });
    }//end add a question

    this.editQuestion = function(){
        surveyService.editAQuestion(scope.surveyId , scope.questionText)
        .then(function successCallBack(response){
            alert("addQuestion")
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log(response)
        });
    }//end edit a question

    this.deleteQuestion = function(questionId){
        surveyService.deletQuestion(questionId)
        .then(function successCallBack(response){
            alert("question deleted")
        } , function errorCallBack(response){
            alert("errorCallBack question deleted")
            console.log(response)
        });
    }//end add a question




    this.addOption = function(){
        surveyService.createOptions(scope.surveyId , optionText)
        .then(function successCallBack(response){
            alert("added")
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log(response)
        });
    }//end an option


}] );//end controller

