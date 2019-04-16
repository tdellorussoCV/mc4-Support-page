'use strict';
angular.module('servicepack').
component('servicepack', {
    templateUrl: '/templates/servicepack.html',
    controller: function ($scope, $http) {
        $http.get("/json/servicepack.json").then(function (res, ) {
            $scope.serPack = res.data;
            //console.log($scope.serPack);
        })
    }
});