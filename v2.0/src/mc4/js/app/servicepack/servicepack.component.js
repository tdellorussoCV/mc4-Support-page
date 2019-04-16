'use strict';
angular.module('servicepack').
component('servicepack', {
    templateUrl: '/mc4/templates/servicepack.html',
    controller: function ($scope, $http) {
        $http.get("/mc4/json/servicepack.json").then(function (res, ) {
            $scope.serPack = res.data;
            //console.log($scope.serPack);
        })
    }
});