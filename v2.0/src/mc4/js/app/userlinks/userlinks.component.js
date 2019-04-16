'use strict';
angular.module('userlinks').
component('userlinks', {
    templateUrl: '/mc4/templates/userlinks.html',
    controller: function ($scope, $http) {
        //Faders
        $(".btn-client").click(function () {
            $("label.client").fadeToggle("slow");
        });
        $(".btn-mm ").click(function () {
            $("label.mm").fadeToggle("slow");
        });
        $(".btn-msg ").click(function () {
            $("label.msg").fadeToggle("slow");
        });
        $(".btn-server ").click(function () {
            $("label.server").fadeToggle("slow");
        });
        $(".btn-unix ").click(function () {
            $("label.unix").fadeToggle("slow");
        });
        //End Faders
       
        // Init user database
        $scope.userInfo = [];
        
        $http.get('/mc4/json/mc4.json').then(function (res, ) {
            $scope.userInfo = res.data;
            console.log($scope.userInfo);
        });
        //Get user userInfo

         //Click Code
        $scope.copyClick = function ($event) {
            var copyText = $(this);
            var cvid = copyText[0].items.path;
            // console.log(copyText);
            // console.log(cvid);
            var dummyContent = cvid;
            var dummy = $('<input id="dummy_id">').val(dummyContent).appendTo('body').select();
            document.execCommand('copy');
            $("input").remove("#dummy_id");
        };
        //End Click CodeS
    }
});

// [""0""].items.path
// [""0""].$$watchers[1].last
