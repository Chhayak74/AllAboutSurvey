myApp.config( ['$routeProvider'  , function($routeProvider ){
    $routeProvider
	.when('/',{
		templateUrl		: 'views/index-view.html',
	    controller 		: 'mainCtrl',
		controllerAs 	: 'allSurveys',
		activetab       : 'dashboard'
	})
	.when('/home',{
		templateUrl		: 'views/home-view.html',
	    controller 		: 'mainCtrl',
		controllerAs 	: 'allSurveys',
		activetab       : 'home'
	})
	.when('/:surveyId/poll',{
		templateUrl		: 'views/poll-view.html',
	    controller 		: 'pollCtrl',
		controllerAs 	: 'pollSurvey',
		activetab       : 'poll'
	})
	.when('/all',{
		templateUrl		: 'views/allSurvey-view.html',
	    controller 		: 'mainCtrl',
		controllerAs 	: 'allSurveys',
		activetab       : 'all'
	})
	.when('/create',{
		templateUrl     : 'views/create-view.html',
		controller 		: 'createSurveyCtrl',
		controllerAs 	: 'currentSurvey',
		activetab       : 'createSurvey'
	})
	.when('/:surveyId/edit',{

		templateUrl     : 'views/edit-view.html',
		controller 		: 'editSurveyCtrl',
		controllerAs 	: 'editableSurvey',
		activetab       : 'editSurvey'
	})
	.when('/:surveyId' , {

	    templateUrl     : 'views/singleSurvey-view.html',
	    controller      : 'singleSurveyCtrl',
	    controllerAs    : 'singleSurvey',
		activetab       : 'singlesurvey'
	})
	.when('/:surveyId/question/create' , {
		templateUrl : 'views/create-question.html',
		controller : 'questionCreateCtrl' ,
		controllerAs : 'questionCreate',
		activetab       : 'createquestion'
	})

	.otherwise(
	    {
	        //redirectTo:'/'
	        template   : '<h1>404 page not found</h1>'
	    }
	);

}]);