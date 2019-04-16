import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    alexstatic: string;
    engwebstatic: string;
    engwebappend: string;
    goostatic: string;
    bingstatic: string;
    docstatic: string;

  constructor() {
    // Static URLS
    // OLD https://alexandria.commvault.com/#!/search;searchTerms=
    // NEW https://alexandria.commvault.com/search?q=
    this.alexstatic = 'https://alexandria.commvault.com/search?q=';
    this.engwebstatic = 'https://engweb.commvault.com/search/?searchQuery=';
    this.engwebappend = '&sourceType=all';
    this.goostatic = 'https://www.google.com/search?safe=active&q=';
    this.bingstatic = 'https://www2.bing.com/search?q=';
    this.docstatic = 'http://documentation.commvault.com/commvault/v11/search.jsp?q=';
    // // Alexandria Click Script
    // alexSearch($event) {
    //     console.trace();
    //     var keyCode = $event.which || $event.keyCode;
    //     if (keyCode === 13) {
    //         // Do that thing you finally wanted to do
    //         if (event.which === 13) {
    //             // Input variable
    //             var alexinput = $scope.alexSrc;
    //             var alexurl = alexstatic + alexinput;
    //             window.open(alexurl);
    //             $scope.alexSrc = "";
    //         }
    //     }
    // };
    // $scope.engSearch = function(event) {
    //     //console.trace();
    //     if (event.which === 13) {
    //         var engwebinput = $scope.engSrc;
    //         var engweburl = engwebstatic + engwebinput + engwebappend;
    //         window.open(engweburl);
    //         $scope.engSrc = "";
    //     }
    // };
    // $scope.gooSearch = function(event) {
    //     //console.trace();
    //     if (event.which === 13) {
    //         var gooinput = $scope.gooSrc;
    //         var goourl = goostatic + gooinput;
    //         window.open(goourl);
    //         $scope.gooSrc = "";
    //     }
    // };
    // $scope.bingSearch = function(event) {
    //     //console.trace();
    //     if (event.which === 13) {
    //         var binginput = $scope.bingSrc;
    //         var bingurl = bingstatic + binginput;
    //         window.open(bingurl);
    //         $scope.bingSrc = "";
    //     }
    // };
    // $scope.docSearch = function(event) {
    //     //console.trace();
    //     if (event.which === 13) {
    //         var docinput = $scope.docSrc;
    //         var docurl = docstatic + docinput;
    //         window.open(docurl);
    //         $scope.docSrc = "";;
    //     }
    // };
   }

  ngOnInit() {
  }

}
