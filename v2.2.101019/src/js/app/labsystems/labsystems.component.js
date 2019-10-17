'use strict';
angular.module('labsystems').
component('labsystems', {
    templateUrl: '/templates/labsystems.html',
    controller: function ($scope, $http) {
        //get json
        $http.get("/json/labSys.json").then(function (res, ) {
            $scope.labSys = res.data;
            //$scope.labSys = res.data.labs;
            console.log($scope.labSys);
            //console.log($scope.labSys)
        });
        //console.log($scope.labSys)
    }
});