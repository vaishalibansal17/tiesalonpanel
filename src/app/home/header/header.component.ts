import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  detail: any;

  constructor(private httpservice: HttpRequestService, private message: MessageService, ) { }

  ngOnInit() {
    this.detail = JSON.parse(localStorage.getItem('salon'));
    this.message.getMessage().subscribe(message => {
      if (message.text === 'profile changed') {
        this.detail = JSON.parse(localStorage.getItem('salon'));
        this.detail.logo ? this.detail.logo: 'assets/images/profile.png';
      }
    }
    );
  }

  logout() {
    this.httpservice.logout();
  }
}
