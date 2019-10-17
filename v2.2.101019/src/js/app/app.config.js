'use strict';

angular.module('cvsupport').
config(function ($locationProvider, $routeProvider) {
			$locationProvider.html5Mode({
				enabled: true
			})
			$routeProvider.
			when("/", {
				template: "<center></center>"
			}).
			when("/mc4", {
				template: "<center></center>"
			}).
			when("/servicepack", {
				template: "<servicepack></servicepack>"
			}).
			when("/labsystems", {
				template: "<labsystems></labsystems>"
			}).
			when("/:id",{
				template: "<center></center>"
			}).
			when("/:id/labsystems",{
				template: "<center></center>"
			}).
			when("/:id/servicepack", {
				template: "<servicepack></servicepack>"
			}).
			otherwise({
				template: "<center></center>"
			  });
		});

		