//Conrtoller to get a Survey
myApp.controller('pollCtrl' , [ '$http' , '$location' ,'$routeParams','$route' , 'surveyService', function($http , $location,$routeParams, $route,surveyService){
    
    console.log("Poll Conrtoller")
    var scope = this;
    this.surveyId = $routeParams.surveyId;
    console.log("ID :" +this.surveyId);
    
    //Fetching current survey
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
   
    //Get All Question   
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
    //end get all questions

    this.currentIndex = 0;

    this.currentQuesIndex = function(index){
        
        scope.currentIndex = index +1;
        console.log("currentIndex = "+ scope.currentIndex)
    }
    
    this.ans = 0;
    this.ansValue = function(index){
        // console.log("ansValue : "+(index+1))
        return (index + 1);
    }

    scope.optionNumber = "";
    this.selectedOptionNumber = function(index){
        scope.optionNumber = index + 1;
    }
    

    this.createAns = function(questionId ){

      if(scope.optionNumber !== ""){
        var selectedOptionNumber = {
            selectedOptionNumber : scope.optionNumber
        }
        console.log("createAns called")
        surveyService.createAnswer(questionId , selectedOptionNumber)
        .then(function successCallBack(response){
            //alert("Answer Created : "+selectedOptionNumber.selectedOptionNumber)
            scope.currentIndex += 1;
            console.log(response)
        } , function errorCallBack(response){
            alert("Error Creating Answer !! Check console")
            console.log(response)
        });
    }else{
        alert("Please select one of the options first.")
    }
    }//end create answer

    this.skipAns = function(questionId ){
        var selectedOptionNumber = {
            selectedOptionNumber : 0
        }
        console.log("skipAns called")
        surveyService.createAnswer(questionId , selectedOptionNumber)
        .then(function successCallBack(response){
            // alert("Answer Created : "+selectedOptionNumber.selectedOptionNumber)
            console.log(response)
        } , function errorCallBack(response){
            alert("Error Creating Answer !! Check console")
            console.log(response)
        });
    }//end skip answer

    this.deleteAllAns = function(){
        surveyService.deleteAnswers()
        .then(function successCallBack(response){
            console("deleteAnswers")    
        }, function errorCallBack(response){
            alert("Error deleting answer")
        });
    }//end delete all answers

    

}] );//end controller

