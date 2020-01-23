import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private httpservice: HttpRequestService) { }

  ngOnInit() {
  }

  logout() {
    this.httpservice.logout();
  }
}
