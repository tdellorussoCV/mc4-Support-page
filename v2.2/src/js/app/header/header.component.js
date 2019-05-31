'use strict';
angular.module('header').
component('header', {
    templateUrl: '/templates/header.1.html',
    controller: function ($scope) {
        // Static URLS
        $scope.SearchUrls = {
            search: [{
                id: '0',
                name: 'Alexandria',
                url: "https://alexandria.commvault.com/search?q="
            }, {
                id: '1',
                name: 'EngWeb',
                url: "https://engweb.commvault.com/search/?searchQuery=",
                append: "&sourceType=all"
            }, {
                id: '2',
                name: 'Documentation',
                url: "http://documentation.commvault.com/commvault/v11/search.jsp?q="
            }, {
                id: '3',
                name: 'Google',
                url: "https://www.google.com/search?safe=active&q="

            }, {
                id: '4',
                name: 'Bing',
                url: "https://www2.bing.com/search?q="

            }]
        }
        console.log($scope.SearchUrls);
        // OLD https://alexandria.commvault.com/#!/search;searchTerms=
        // NEW https://alexandria.commvault.com/search?q=
        // var alexstatic = "https://alexandria.commvault.com/search?q=";
        // var engwebstatic = "https://engweb.commvault.com/search/?searchQuery=";
        // var engwebappend = "&sourceType=all"
        // var goostatic = "https://www.google.com/search?safe=active&q=";
        // var bingstatic = "https://www2.bing.com/search?q=";
        // var docstatic = "http://documentation.commvault.com/commvault/v11/search.jsp?q=";

        // Alexandria Click Script
        $scope.alexSearch = function ($event) {
            //console.trace();
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                // Do that thing you finally wanted to do
                if (event.which === 13) {
                    // Input variable
                    var alexinput = $scope.alexSrc;
                    var alexurl = $scope.SearchUrls.search[0].url + alexinput;
                    window.open(alexurl);
                    $scope.alexSrc = "";
                }
            }
        };
        $scope.engSearch = function (event) {
            //console.trace();
            if (event.which === 13) {
                var engwebinput = $scope.engSrc;
                var engweburl = $scope.SearchUrls.search[1].url + engwebinput + $scope.SearchUrls.search[1].append;
                window.open(engweburl);
                $scope.engSrc = "";
            }
        };
        $scope.gooSearch = function (event) {
            //console.trace();
            if (event.which === 13) {
                var gooinput = $scope.gooSrc;
                var goourl = $scope.SearchUrls.search[3].url + gooinput;
                window.open(goourl);
                $scope.gooSrc = "";
            }
        };
        $scope.bingSearch = function (event) {
            //console.trace();
            if (event.which === 13) {
                var binginput = $scope.bingSrc;
                var bingurl = $scope.SearchUrls.search[4].url + binginput;
                window.open(bingurl);
                $scope.bingSrc = "";
            }
        };
        $scope.docSearch = function (event) {
            //console.trace();
            if (event.which === 13) {
                var docinput = $scope.docSrc;
                var docurl = $scope.SearchUrls.search[2].url + docinput;
                window.open(docurl);
                $scope.docSrc = "";;
            }
        };
    }
});