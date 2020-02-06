import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../shared/service/http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpRequestService,private router : Router) { }

  ngOnInit() {
    console.log(this.router);
    
  }

}
