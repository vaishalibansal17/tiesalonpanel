import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../shared/service/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpRequestService) { }

  ngOnInit() {
  }

}
