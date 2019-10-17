import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlinks',
  templateUrl: './userlinks.component.html',
  styleUrls: ['./userlinks.component.css']
})
export class UserlinksComponent implements OnInit {
  userInfo = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
