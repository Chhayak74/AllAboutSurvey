//Conrtoller to get all Surveys
myApp.controller('mainCtrl' , [ '$http' , '$location' , 'surveyService', function($http , $location , surveyService){

    var scope = this;
    this.heading = "Welcome!!";
    this.getAllsurveys = function(){
        surveyService.getAllsurveys()
        .then(function successCallBack(response){
            scope.surveys = response.data.data;
            console.log("sjjk");
            console.log(response)
        } ,
        function errorCallBack(response){
            console.log(response +"error")
        } );
    }

    this.getAllsurveys();

    this.delete = function(surveyId){
        surveyService.deleteSurvey(surveyId)
        .then(function successCallBack(response){
            alert("deleted")
        }, function errorCallBack(response){
            alert("errorCallBack"+ response)
        } );
    }


}] );//end controller