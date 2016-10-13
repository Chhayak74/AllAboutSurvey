//Conrtoller to get all Surveys
myApp.controller('mainCtrl' , [ '$http' , '$location' ,'$timeout', '$q', '$log', 'surveyService', function($http , $location ,$timeout, $q, $log, surveyService){
    
    // var width = angular.element(document.getElementById(view1)).clientWidth;
    var height1 = document.getElementById('height').offsetHeight;
    console.log("Height= "+height1)
    console.log("controller is called")
    var scope = this;
    this.message = "Welcome!!";
    this.getAllsurveys = function(){
        surveyService.getAllsurveys()
        .then(function successCallBack(response){
            scope.surveys = response.data.data;
            console.log(scope.surveys)
            
        } ,
        function errorCallBack(response){
             alert("Error!! Check console")
            console.log(response)
        } );
    }//end getAllsurveys
    

    this.resetSearchText = function(){
      scope.searchText = "";
      scope.selectedItem = "";
    }//end resetSearchText

    this.getAllsurveys();

    this.allQuestion = function(surveyId){
        surveyService.getAllQuestion(surveyId)
        .then(function successCallBack(response){
            scope.questions = response.data.data;
            console.log(response.data.data)
        }, function errorCallBack(response){
            alert("Error - check console")
            console.log(response)
        });
    }//end allQuestions
    
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
        alert("edit")
        // questionTextOriginal = response.questionText;
        scope.showEditBox = '';
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });

    }//end edit question

    this.add = '';

    this.currentOption = function(index){
      scope.currentIndex = index;
      console.log("currentIndex = "+scope.currentIndex)
    }

    this.lastOptionIndex = '';

    this.addOption = function( options ,questionId , index){
        var optionText = {
          optionText : scope.optionText
        }
        surveyService.createOption(questionId , optionText)
        .then(function successCallBack(response){
            alert("Option added successfully");
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
        alert("Options deleted successfully")
        console.log("Last :"+scope.lastOptionIndex)
        var length = scope.lastOptionIndex + 1;
        options.splice(0 , length) 
        scope.lastOptionIndex-=1;
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });
    }//end delete all options

    this.questionDelete = function(questionId , index){
      surveyService.deleteQuestion(questionId)
      .then(function successCallBack(response){
        alert("Question deleted successfully")
        scope.questions.splice(index , 1)
      }, function errorCallBack(response){
        alert("Error!! Check console")
        console.log(response)
      });
    }

    this.delete = function(surveyId , index){
        surveyService.deleteSurvey(surveyId)
        .then(function successCallBack(response){
            alert("Survey deleted successfully")
            scope.surveys.splice(index, 1)
            scope.resetSearchText()
        }, function errorCallBack(response){
            alert("Error!! Check console")
            console.log(response)
        } );
    }//end delete survey

    
    scope.simulateQuery = false;
    scope.isDisabled    = false;
    scope.querySearch   = querySearch;
    scope.selectedItemChange = selectedItemChange;
    scope.searchTextChange   = searchTextChange;

    /*Search for repos... use $timeout to simulate
     *remote dataservice call.
     */
    function querySearch (query) {
        // console.log(scope.surveys)
      var results = query ? scope.surveys.filter( createFilterFor(query) ) : scope.surveys,
          deferred;
          scope.results = results;

      if (scope.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
        
      } else {
        // console.log(JSON.stringify(results) +"RESULTS")
        return results;
        
      }
    }

    function searchTextChange(text) {
        
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {

      $log.info('Item changed to ' + JSON.stringify(item));
    }


    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item.surveyTitle.indexOf(query)!== -1);
      };
      

    }





}] );//end controller





