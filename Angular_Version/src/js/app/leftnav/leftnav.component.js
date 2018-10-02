'use strict';
angular.module('leftnav').
component('leftnav', {
    templateUrl: './templates/leftnav.html',
    controller: function($scope) {
        // console.trace();
        var ccid = '';
        // Log Location array
        $scope.clfLocation = {
            model: null,
            availableOptions: [{
                id: '1',
                value: '\\\\ENG\\CELOGS\\',
                name: 'CELOGS [GUI SendLogs]'
            }, {
                id: '2',
                value: '\\\\eng\\escalationlogs\\',
                name: 'Eng [Escalation Log Share]'
            }, {
                id: '3',
                value: 'ftp://ccust01:ahPohni$b4Mo@qnftp01.commvault.com/incoming/',
                name: 'QNFTP [FTP Upload]'
            }],
            selectedOption: {
                id: '1',
                value: '\\\\ENG\\CELOGS\\',
                name: 'CELOGS [GUI SendLogs]'
            } //This sets the default value of the select in the ui
        };
        // End Log Location array
        //Customer Log File 
        $scope.celogfiles = function($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                // Do that thing you finally wanted to do
                if (event.which === 13) {
                    // Input variable
                    var ccid = $scope.logInput;
                    var copyId = $scope.clfLocation.selectedOption.id;
                    var copyText = $scope.clfLocation.selectedOption.value;
                    var logurl = copyText + ccid;
                    if (copyId == 3) {
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
        $scope.clfButton =function($event){
        	$("select.logfiles").fadeToggle("slow");
        	$("button.logfiles").fadeToggle("slow");
    		$("input.logfiles").fadeToggle("slow");
        } 
        $scope.labbutton = function($event) {
            $("button.labsys").fadeToggle("slow");
            $("input.labsys").fadeToggle("slow");
        }
    }
});