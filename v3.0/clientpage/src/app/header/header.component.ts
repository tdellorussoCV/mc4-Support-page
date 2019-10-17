import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  SearchUrls = {
    search: [{
      id: '0',
      name: 'Alexandria',
      url: 'https://alexandria.commvault.com/search?q='
    }, {
      id: '1',
      name: 'EngWeb',
      url: 'https://engweb.commvault.com/search/?searchQuery=',
      append: '&sourceType=all'
    }, {
      id: '2',
      name: 'Documentation',
      url: 'http://documentation.commvault.com/commvault/v11/search.jsp?q='
    }, {
      id: '3',
      name: 'Google',
      url: 'https://www.google.com/search?safe=active&q='

    }, {
      id: '4',
      name: 'Bing',
      url: 'https://www2.bing.com/search?q='

    }]
  };

  constructor() { }

  ngOnInit() {
    // console.log(this.SearchUrls);


  }

  // Alexandria Click Script
  alexSearch = function($event) {
    // console.trace();
    const keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
        // Do that thing you finally wanted to do
        // if (event.which === 13) {
            // Input variable
            const alexinput = this.alexSrc;
            const alexurl = this.SearchUrls.search[0].url + alexinput;
            window.open(alexurl);
            this.alexSrc = '';
        // }
    }
};

  engSearch = function(event) {
    // console.trace();
    if (event.which === 13) {
        const engwebinput = this.engSrc;
        const engweburl = this.SearchUrls.search[1].url + engwebinput + this.SearchUrls.search[1].append;
        window.open(engweburl);
        this.engSrc = '';
    }
};

  gooSearch = function(event) {
    // console.trace();
    if (event.which === 13) {
        const gooinput = this.gooSrc;
        const goourl = this.SearchUrls.search[3].url + gooinput;
        window.open(goourl);
        this.gooSrc = '';
    }
};

  bingSearch = function(event) {
    // console.trace();
    if (event.which === 13) {
        const binginput = this.bingSrc;
        const bingurl = this.SearchUrls.search[4].url + binginput;
        window.open(bingurl);
        this.bingSrc = '';
    }
};

  docSearch = function(event) {
    // console.trace();
    if (event.which === 13) {
        const docinput = this.docSrc;
        const docurl = this.SearchUrls.search[2].url + docinput;
        window.open(docurl);
        this.docSrc = '';
    }
};
}
