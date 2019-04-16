'use strict';
angular.module('labsystems').
component('labsystems', {
    templateUrl: '/mc4/templates/labsystems.html',
    controller: function ($scope, $http) {
        //get json
        $http.get("/mc4/json/labSys.json").then(function (res, ) {
            $scope.labSys = res.data;
            //$scope.labSys = res.data.labs;
            console.log($scope.labSys);
            //console.log($scope.labSys)
        });
        //console.log($scope.labSys)
    }
});