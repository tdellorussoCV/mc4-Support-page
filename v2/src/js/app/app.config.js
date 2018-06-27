'use strict';

angular.module('cvsupport').
	config(
		function(
			$locationProvider,
			$routeProvider
			){
			$locationProvider.html5Mode({
				enabled:true
			})

		$routeProvider.
			when('/:id',{
				templateUrl: '/templates/:id'
			}).
			// when('/mc2',{
			// 	templateUrl: '/templates/mc2'
			// }).
			// when('/mc3',{
			// 	templateUrl: '/templates/mc3'
			// }).
			// when('/mc4',{
			// 	templateUrl: '/templates/mc4'
			// }).
			// when('/mc5',{
			// 	templateUrl: '/templates/mc5'
			//}).
			otherwise({
				template: "Page Not Found"
			})
		});