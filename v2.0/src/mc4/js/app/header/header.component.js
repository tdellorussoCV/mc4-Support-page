'use strict';
angular.module('header').
component('header', {
    templateUrl: '/mc4/templates/header.html',
    controller: function($scope) {
        // Static URLS
        var alexstatic = "https://alexandria.commvault.com/search?q=";
        // OLD https://alexandria.commvault.com/#!/search;searchTerms=
        // NEW https://alexandria.commvault.com/search?q=
        var engwebstatic = "https://engweb.commvault.com/search/?searchQuery=";
        var engwebappend = "&sourceType=all"
        var goostatic = "https://www.google.com/search?safe=active&q=";
        var bingstatic = "https://www2.bing.com/search?q=";
        var docstatic = "http://documentation.commvault.com/commvault/v11/search.jsp?q=";
        // Alexandria Click Script
        $scope.alexSearch = function($event) {
            console.trace();
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                // Do that thing you finally wanted to do
                if (event.which === 13) {
                    // Input variable
                    var alexinput = $scope.alexSrc;
                    var alexurl = alexstatic + alexinput;
                    window.open(alexurl);
                    $scope.alexSrc = "";
                }
            }
        };
        $scope.engSearch = function(event) {
            //console.trace();
            if (event.which === 13) {
                var engwebinput = $scope.engSrc;
                var engweburl = engwebstatic + engwebinput + engwebappend;
                window.open(engweburl);
                $scope.engSrc = "";
            }
        };
        $scope.gooSearch = function(event) {
            //console.trace();
            if (event.which === 13) {
                var gooinput = $scope.gooSrc;
                var goourl = goostatic + gooinput;
                window.open(goourl);
                $scope.gooSrc = "";
            }
        };
        $scope.bingSearch = function(event) {
            //console.trace();
            if (event.which === 13) {
                var binginput = $scope.bingSrc;
                var bingurl = bingstatic + binginput;
                window.open(bingurl);
                $scope.bingSrc = "";
            }
        };
        $scope.docSearch = function(event) {
            //console.trace();
            if (event.which === 13) {
                var docinput = $scope.docSrc;
                var docurl = docstatic + docinput;
                window.open(docurl);
                $scope.docSrc = "";;
            }
        };
    }
});