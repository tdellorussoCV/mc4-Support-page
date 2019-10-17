'use strict';
angular.module('centernav').
component('centernav', {
    templateUrl: '/templates/centernav.html',
    controller: function ($scope, ) {
        $scope.items = ['center', 'servicepack', 'labsystems'];
        $scope.selection = $scope.items[0];
    }
});