// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 

myApp.factory('surveyService',function SurveyFactory($http){

	// this method first 
	var surveyAPIS  =  {};
	var baseUrl = 'http://poll.theguywithideas.com/api/surveys';



	surveyAPIS.getAllsurveys = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/'

		})	


	}// end get All surveys

	surveyAPIS.getSingleSurvey = function(surveyId){

		return $http.get(baseUrl+'/'+surveyId)
	}//end get single survey

	surveyAPIS.createAsurvey = function(surveyData){
      
		return $http.post(baseUrl+'/create',surveyData);

	}// end create survey 

	surveyAPIS.editAsurvey = function(surveyId,surveyData){

		return $http.put(baseUrl+'/'+surveyId+'/edit',surveyData)

	}// end edit survey 

	surveyAPIS.deleteSurvey = function(surveyId){

		return $http.post(baseUrl+'/'+surveyId+'/delete',null);

	}// end delete survey

	surveyAPIS.createQuestion = function(surveyId , questionText){

		return $http.post(baseUrl+'/'+surveyId+'/question/create',questionText);

	}// end create question in a survey

	surveyAPIS.getAllQuestion = function(surveyId){

		return $http.get(baseUrl+'/'+surveyId+'/questions/all');

	}// end get all questions in a survey

	surveyAPIS.editAQuestion = function(questionId , questionText){

		return $http.put(baseUrl+'/questions/'+questionId+'/edit',questionText);

	}// end edit a particular question

	surveyAPIS.deleteQuestion = function(questionId){

		return $http.post(baseUrl+'/questions/'+questionId+'/delete',null);

	}// end delete a question

	surveyAPIS.createOption = function(questionId , optionText){

		return $http.post(baseUrl+'/questions/'+questionId+'/options/create',optionText);

	}// end create an option

	surveyAPIS.deleteOptions = function(questionId){

		return $http.post(baseUrl+'/questions/'+questionId+'/options/delete',null);

	}// end delete options

	surveyAPIS.createAnswer= function(questionId , selectedOptionNumber){

		return $http.post(baseUrl+'/questions/'+questionId+'/answer/create',selectedOptionNumber);

	}// end create an answer

	surveyAPIS.deleteAnswers = function(questionId){

		return $http.post(baseUrl+'/questions/'+questionId+'/answers/delete',null);

	}// end delete all answers

	return surveyAPIS;



});//end survey service 