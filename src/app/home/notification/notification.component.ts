import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { IMG } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  list: any;
  imgurl: any;
  url = IMG.PRO
  limit: number = 10;
  // NOTI_LIST
  constructor(private httprequest: HttpRequestService, private router: Router) { }

  ngOnInit() {
    this.listNoti(0);
  }

  listNoti(limit) {
    this.limit = this.limit + limit;
    this.httprequest.getRequest('GET', 'NOTI_LIST', `${'limit=' + this.limit}`)
      .subscribe((res) => {
        if (res.status) {
          this.imgurl = res.res.uP;
          this.list = res.res.notf;
          console.log(this.list);
        } else {
          new Error();
        }

      },
        (error) => {
          // this.httprequest.showError('Failed to get');
        });
  }

  loadMore() {
    this.listNoti(5)
  }
  slct() {
    console.log('-----');

  }

}
