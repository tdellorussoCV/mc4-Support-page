'use strict';
angular.module('userlinks').
component('userlinks', {
    templateUrl: './templates/userlinks.html',
    controller: function($scope, $http) {
        //Faders
        $(".btn-client").click(function() {
            $("label.client").fadeToggle("slow");
        });
        $(".btn-mm ").click(function() {
            $("label.mm").fadeToggle("slow");
        });
        $(".btn-msg ").click(function() {
            $("button.msg").fadeToggle("slow");
        });
        $(".btn-server ").click(function() {
            $("button.server").fadeToggle("slow");
        });
        $(".btn-unix ").click(function() {
            $("button.unix").fadeToggle("slow");
        });
        //End Faders
        //Click Code
        $(".cvlogs").click(function() {
            var copyText = $(this);
            var cvid = $(copyText).attr("title");
            var dummyContent = cvid;
            var dummy = $('<input id="dummy_id">').val(dummyContent).appendTo('body').select();
            document.execCommand('copy');
            $("input").remove("#dummy_id");
        });
        //End Click CodeS
        // Init user database
        $scope.userInfo = [];
        //Get user userInfo
        $http.get('./json/mc4.json').then(function(res, ) {
            $scope.userInfo = res.data;
            //console.log($scope.userInfo);
        });
        var clientTeam = $scope.userInfo.client;
        //console.log(clientTeam);
        $scope.clientUser = function() {
            // angular.element('<button class="btn btn-secondary unix cvlogs" name="$scope.userInfo" title="$scope.userInfo">$scope.userInfo</button>')
        };
    }
});