'use strict';
angular.module('jumborow').
component('jumborow', {
    templateUrl: '/templates/jumborow.html',
    controller: function($scope, $http) {
        // init scope
        $scope.ctrMessages = [];
        // get json for messages 
        $http.get("/mc4/json/mc4a.json").then(function(res, ) {
            $scope.ctrMessages = res.data;
            $scope.critState = res.data.critical.state;
            var alertState = $scope.critState;
            // console.log(alertState);
            if (alertState == 1) {
                $('#alertstate').addClass('ng-show').removeClass('ng-hide');
                console.log('swapped');
            };
        });
        // console.log(res.data);
        // end get json for messages
    }
});