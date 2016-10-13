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

    this.delete = function(index){
        surveyService.deleteSurvey(scope.surveyId)
        .then(function successCallBack(response){
            alert("delete");
            scope.surveys.splice(index, 1);
            $location.path('/all');
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

    



    this.addOption = function(index){
        surveyService.createOptions(scope.surveyId , optionText)
        .then(function successCallBack(response){
            alert("added");
            console.log("index"+index)
            if(index==3){
                $location.path('/'+scope.surveyId);
            }
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log(response)
        });
    }//end an option


}] );//end controller

