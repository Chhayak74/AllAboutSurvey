
//Conrtoller to create a question
myApp.controller('questionCreateCtrl' , [ '$http' , '$location' ,'$routeParams','$route' , 'surveyService', function($http , $location,$routeParams,$route, surveyService){

    var scope = this;
    this.heading = "";
    this.$route = $route;
     surveyService.requestingSomeURL();
    this.surveyId = $routeParams.surveyId;
    console.log(this.surveyId)
    

    this.addQuestion = function(){
        console.log(scope.addQuestion)
        console.log(scope.questionText)
        var questionText = {
            questionText : scope.questionText
        }
        var surveyId = scope.surveyId;
        surveyService.createQuestion(surveyId , questionText)
        .then(function successCallBack(response){
            // alert("addQuestion")
            $location.path('/'+surveyId)
            console.log(response)
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log("addQuestionss")
            console.log(response)
        });
    }//end add a question

    this.editQuestion = function(){
        surveyService.editAQuestion(scope.surveyId , scope.questionText)
        .then(function successCallBack(response){
            // alert("addQuestion")
        } , function errorCallBack(response){
            alert("errorCallBack")
            console.log(response)
        });
    }//end edit a question

    this.deleteQuestion = function(questionId){
        surveyService.deletQuestion(questionId)
        .then(function successCallBack(response){
            // alert("question deleted")
        } , function errorCallBack(response){
            alert("errorCallBack question deleted")
            console.log(response)
        });
    }//end delet question




}] );//end controller

