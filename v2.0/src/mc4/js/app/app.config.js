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
			when("/servicepack", {
				template: "<servicepack></servicepack>"
			}).
			when("/labsystems", {
				template: "<labsystems></labsystems>"
			})
		});