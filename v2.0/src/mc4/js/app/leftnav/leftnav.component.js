'use strict';
angular.module('leftnav').
component('leftnav', {
    templateUrl: '/mc4/templates/leftnav.html',
    controller: function($scope, $http) {
      //console.trace();
        var ccid = '';
        // Log Location array
        $scope.clfLocation = {
            model: null,
            availableOptions: [{
                id: '1',
                value: '\\\\ENG\\CELOGS\\',
                name: 'CELOGS [GUI SendLogs]',
                placeholder: "CCID"
            }, {
                id: '2',
                value: '\\\\eng\\escalationlogs\\',
                name: 'Eng [Escalation Log Share]',
                placeholder: "CCID"
            }, {
                id: '3',
                value: '\\\\titan\\cloudriver\\CloudUploads\\',
                name: 'CRM Collect Logs',
                placeholder: "Request ID"
            }, {
                id: '4',
                value: 'ftp://ccust01:ahPohni$b4Mo@qnftp01.commvault.com/incoming/',
                name: 'QNFTP [FTP Upload]',
                placeholder: "CCID"
            }],
            selectedOption: {
                id: '1',
                value: '\\\\ENG\\CELOGS\\',
                name: 'CELOGS [GUI SendLogs]',
                placeholder: "CCID"
            } //This sets the default value of the select in the ui
        };
        console.log($scope.clfLocation);
        //End
        // $http.get("/json/leftnav.json").then(function(res, ) {
        //     $scope.leftNav = res.data;
        //     console.log($scope.leftNav);
        // });
        //Customer Log File 
        $scope.celogfiles = function($event) {
            var keyCode = $event.which || $event.keyCode;
            console.log(keyCode);
            if (keyCode === 13) {
                // Do that thing you finally wanted to do
                if ($event.which === 13) {
                    // Input variable
                    var ccid = $scope.logInput;
                    var copyId = $scope.leftNav.selectedOptionlogs.id;
                    var copyText = $scope.leftNav.selectedOptionlogs.value;
                    var logurl = copyText + ccid;
                    if (copyId == 4) {
                        window.open(logurl);
                    } else {
                        var dummy = $('<input id="dummy_id">').val(logurl).appendTo('body').select();
                        document.execCommand('copy');
                        $("input").remove("#dummy_id");
                    };
                    $scope.logInput = "";
                }
            }
        }

        //End Customer Log File
        //Animations 
        $scope.clfButton = function($event) {
            $("select.logfiles").fadeToggle("slow");
            $("button.logfiles").fadeToggle("slow");
            $("input.logfiles").fadeToggle("slow");
            $("label.logfiles").fadeToggle("slow");
        }
        $scope.labbutton = function($event) {
            $("button.labsys").fadeToggle("slow");
            $("select.labsys").fadeToggle("slow");
        }
        // $scope.labGo = function($event) {
        //    var goUrl = $scope.labModel.selectedOption.value;
        //    console.log(goUrl);           
        // }
    }
});