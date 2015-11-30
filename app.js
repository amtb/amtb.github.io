var app = angular.module('ResumeApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $mdThemingProvider){
	$routeProvider
		.when('/education', {
			templateUrl: 'views/education.html',
			controller: 'EducationCtrl'
		})
		.when('/workexperience', {
			templateUrl: 'views/workexperience.html',
			controller: 'AppCtrl'
		})
		.when('/', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		});

	$mdThemingProvider.theme('default')
		.primaryPalette('teal');
		//.accentPalette('orange');
});

app.controller('AppCtrl', ['$scope', '$location', '$mdSidenav', function($scope, $location, $mdSidenav){
	$scope.navigate = function(page){
		$scope.selected = page;
		var view = page.toLowerCase().trim().replace(' ', '', 'g');
		$location.path(view);
	};

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.options = ['Work Experience', 'Education', 'Skills', 'Projects'];
}]);