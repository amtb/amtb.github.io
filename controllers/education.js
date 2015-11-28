angular.module('ResumeApp')
.controller('EducationCtrl', ['$scope', function($scope){
	$scope.schools = [{
		name: 'INSA Lyon',
		degree: 'Master of Engineering in Computer Science',
		years: '2010-2013',
		logo: "/assets/insa.png",
		url: 'www.insa-lyon.fr'
	},{
		name: 'Université Toulouse III - Paul Sabatier',
		degree: "1st & 2nd year of Bachelor of Science in Computer Science",
		years: "2008-2010",
		logo: '/assets/paulsab.png',
		url: 'www.univ-tlse3.fr'
	},{
		name: 'Université Toulouse III - Paul Sabatier',
		degree: "1st & 2nd year of Bachelor of Science in Computer Science",
		years: "2008-2010",
		logo: '/assets/paulsab.png',
		url: 'www.univ-tlse3.fr'
	}];
}]);
