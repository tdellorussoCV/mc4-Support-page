'use strict';
angular.module('leftnav').
component('leftnav', {
    templateUrl: './templates/leftnav.html',
    controller: function($scope) {
        $scope.clfbutton = function() {
            $("input.logfiles").removeClass("ng-hide").addClass('ng-show');
            $("button.logfiles").removeClass("ng-hide").addClass('ng-show');
        }
    }
});