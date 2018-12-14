'use strict';
angular.module('centernav').
component('centernav', {
    templateUrl: './templates/centernav.html',
    controller: function($scope, $http) {
        //pre declares
        $scope.docPage = [];
        $scope.ind = 0;
        //setting random to prevent disk caching 
        //get current Doc versions
        var url = "/json/center.json";
        $http.get(url).then(function success(res) {
            $scope.docPage = res.data;
            console.log($scope.docPage);
        })
    }
});
