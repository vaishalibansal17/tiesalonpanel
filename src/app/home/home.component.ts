import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../shared/service/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpRequestService) {  
    this.http.getRequest('GET', 'ORGANISER_EVENT_LIST', { 'pageNo': 1, 'limitPage': 10, }).subscribe(rs=>{
      console.log('-------');
      
    })
  }

  ngOnInit() {
  }

}
