//Conrtoller to get all Surveys
myApp.controller('editSurveyCtrl' , [ '$http' , '$location' ,'$routeParams' ,'surveyService', function($http , $location ,$routeParams, surveyService){

    var scope = this;
    this.heading = "";
    this.surveyId = $routeParams.surveyId;
    this.getSurvey = function(){
        surveyService.getSingleSurvey(scope.surveyId)
        .then(function successCallBack(response){
            var survey = response.data.data;
            scope.surveyTitle = survey.surveyTitle;
            scope.surveySubtitle = survey.surveySubtitle;
            scope.instructions = survey.instructions;
            
        } ,
        function errorCallBack(response){
        	alert("Error - Check console")
            console.log(response)
        } );
    }
    this.getSurvey();

    this.edit = function(){

    	var surveyData = {

    		surveyTitle : scope.surveyTitle,
    		surveySubtitle : scope.surveySubtitle,
    		instructions : scope.instructions

    	}
    	
    	surveyService.editAsurvey(scope.surveyId , surveyData)
    	.then(function errorCallBack(response){
    		alert("done");
            $location.path('/'+scope.surveyId);
    	} , function errorCallBack(response){
    		alert("Error!! Check console")
            console.log(response)
    	});
    }


}] );//end controller

