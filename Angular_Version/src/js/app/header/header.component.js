'use strict';
angular.module('header').
component('header', {
    templateUrl: './templates/header.html',
    controller: function($scope) {
        $scope.alexSearch = function($event) {
        	console.trace();
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                // Do that thing you finally wanted to do
                var alexinput = $(this).val();
                var alexstatic = "https://alexandria.commvault.com/#!/search;searchTerms=";
                var alexurl = alexstatic + alexinput;
                window.open(alexurl);
                $(this).val("");
            }
        };
    }
});