import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http : HttpRequestService) { 
    // this.http.getRequest('POST', 'ORGANISER_EVENT_LIST', { 'pageNo': 1, 'limitPage': 10, })
  }

  ngOnInit() {
  }


}
