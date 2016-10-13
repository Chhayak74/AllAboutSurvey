myApp.config( ['$routeProvider'  , function($routeProvider ){
    $routeProvider
	.when('/',{
	    // location of the template
		templateUrl		: 'views/index-view.html',
		// Which controller it should use 
	    controller 		: 'mainCtrl',
	    // what is the alias of that controller.
		controllerAs 	: 'allSurveys'
	})
	.when('/all',{
	    // location of the template
		templateUrl		: 'views/allSurvey-view.html',
		// Which controller it should use 
	    controller 		: 'mainCtrl',
	    // what is the alias of that controller.
		controllerAs 	: 'allSurveys'
	})
	/*.when('/questions/:questionId/options/create',{
	    // location of the template
		templateUrl		: 'views/index-view.html',
		// Which controller it should use 
	    controller 		: 'mainCtrl',
	    // what is the alias of that controller.
		controllerAs 	: 'allSurveys'
	})*/
	.when('/create',{
		templateUrl     : 'views/create-view.html',
		controller 		: 'createSurveyCtrl',
		controllerAs 	: 'currentSurvey'
	})
	.when('/:surveyId/edit',{

		templateUrl     : 'views/edit-view.html',
		controller 		: 'editSurveyCtrl',
		controllerAs 	: 'editableSurvey'
	})
	.when('/:surveyId' , {

	    templateUrl     : 'views/singleSurvey-view.html',
	    controller      : 'singleSurveyCtrl',
	    controllerAs    : 'singleSurvey'
	})
	.when('/:surveyId/question/create' , {
		templateUrl : 'views/create-question.html',
		controller : 'questionCreateCtrl' ,
		controllerAs : 'questionCreate'
	})

	.otherwise(
	    {
	        //redirectTo:'/'
	        template   : '<h1>404 page not found</h1>'
	    }
	);

}]);