import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-jumborow',
  templateUrl: './jumborow.component.html',
  styleUrls: ['./jumborow.component.css']
})
export class JumborowComponent implements OnInit {
  critState: any;
  ctrMessages: any = [];
  site = '/assets/json/mc4.a.json';
  alertState = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetchposts();
  }

  private fetchposts() {
    this.http
      .get(this.site)
      // .pipe(
      //   map(responseData => {
      //     const controlMsg = [];
      //     for (const key in responseData) {
      //       if (responseData.hasOwnProperty(key)) {
      //         controlMsg.push({ ...responseData[key], id: key });
      //       }
      //     }
      //     return controlMsg;
      //   })
      // )
      .subscribe(res => {
        this.ctrMessages = res ;
        console.log(this.alertState);
      });

  }
}
