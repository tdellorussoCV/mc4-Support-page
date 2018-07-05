'use strict';

angular.module('blogList').
	component('blogList', {
		//template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>Click Me!</button></div>",
		templateUrl: '/templates/blog-list.html',
		controller: function($scope){
			var blogItems = [
				{title:"Some Title", id: 1, description: "This is a Book", publishDate: "2016-9-11"},
				{title:"a Title", id: 2, description: "This is a Book"},
				{title:"the Title", id: 3, description: "This is a Book"},
				{title:"b Title", id: 4, description: "This is a Book"},
			]

			$scope.items = blogItems;


			$scope.title = 'Hi there'
			$scope.clicks = 0
			$scope.someClickTest = function(){
			console.log("clicked")
			$scope.clicks += 1
			$scope.title = 'Clicked ' + $scope.clicks + ' times.' 
			}
		}	
	});

// 	controller('BlogListController', function($scope){
// 		console.log("hello");
// 		$scope.title = 'Hi there'
// 		$scope.clicks = 0
// 		$scope.someClickTest = function(){
// 			console.log("clicked")
// 			$scope.clicks += 1
// 			$scope.title = 'Clicked ' + $scope.clicks + ' times.' 
// 		}
// });
//component('');