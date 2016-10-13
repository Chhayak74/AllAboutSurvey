//Conrtoller to cteate a Survey
myApp.controller('createSurveyCtrl' , [ '$http' , '$location' , 'surveyService', function($http , $location, surveyService){

    var scope = this;
    this.heading = "Fill up the details of your new Survey";
    this.create = function(){
        var surveyData = {
            surveyTitle : scope.surveyTitle,
            surveySubtitle : scope.surveySubtitle,
            instructions : scope.instructions
        }
        surveyService.createAsurvey(surveyData)
        .then(function successCallBack(response){
            alert("Success createAsurvey")
            console.log(JSON.stringify(response) + "createAsurvey");
            $location.path('/'+response.data.data.surveyId); 
        } ,
        function errorCallBack(response){
            console.log(response +"error")
            alert("errorCallBack createAsurvey")
        } );
    }


}] );//end controller

