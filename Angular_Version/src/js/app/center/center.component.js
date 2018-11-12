'use strict';

angular.module('center').
	component('center', {
		templateUrl: './templates/center.html',
		controller: function($scope, $http){
			$scope.docPage = [];
			// $http.get('http://documentation.commvault.com/commvault/').then(function(res, ) {
   //          $scope.docPage = res.data;
   //          console.log($scope.docPage);
			// 	})
			}
		});