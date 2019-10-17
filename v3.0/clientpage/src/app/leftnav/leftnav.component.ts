import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  ccid = '';
  // Log Location array
  clfLocation = {
    model: null,
    availableOptions: [{
      id: '1',
      value: '\\\\ENG\\CELOGS\\',
      name: 'CELOGS [GUI SendLogs]',
      placeholder: 'CCID'
    }, {
      id: '2',
      value: '\\\\eng\\escalationlogs\\',
      name: 'Eng [Escalation Log Share]',
      placeholder: 'CCID'
    }, {
      id: '3',
      value: '\\\\titan\\cloudriver\\CloudUploads\\',
      name: 'CRM Collect Logs',
      placeholder: 'Request ID'
    }, {
      id: '4',
      value: 'ftp://ccust01:ahPohni$b4Mo@qnftp01.commvault.com/incoming/',
      name: 'QNFTP [FTP Upload]',
      placeholder: 'CCID'
    }],
    selectedOption: {
      id: '1',
      value: '\\\\ENG\\CELOGS\\',
      name: 'CELOGS [GUI SendLogs]',
      placeholder: 'CCID'
    } // This sets the default value of the select in the ui
  };
  constructor() { }

  ngOnInit() {
  }

  clfButton($event) {
    $('select.logfiles').fadeToggle('slow');
    $('button.logfiles').fadeToggle('slow');
    $('input.logfiles').fadeToggle('slow');
    $('label.logfiles').fadeToggle('slow');
  }
  labbutton($event) {
    $('button.labsys').fadeToggle('slow');
    $('select.labsys').fadeToggle('slow');
  }

  // Customer Log File
  celogfiles = function($event) {
    const keyCode = $event.which || $event.keyCode;
    console.log(keyCode);
    if (keyCode === 13) {
      // Do that thing you finally wanted to do
      if ($event.which === 13) {
        // Input variable
        const ccid = this.logInput;
        const copyId = this.leftNav.selectedOptionlogs.id;
        const copyText = this.leftNav.selectedOptionlogs.value;
        const logurl = copyText + ccid;
        if (copyId === 4) {
          window.open(logurl);
        } else {
          // const dummy = $('<input id="dummy_id">').val(logurl).appendTo('body').select();
          // document.execCommand('copy');
          // $('input').remove('#dummy_id');
        }
        this.logInput = '';
      }
    }
  };
}


