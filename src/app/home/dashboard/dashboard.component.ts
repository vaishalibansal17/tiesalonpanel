import { Component, OnInit } from '@angular/core';

// import { colors } from '../demo-utils/colors';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}


@Component({
  selector: 'mwl-demo-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboard :any ={staffs:0};
  isloaded = false
  constructor(private httprequest: HttpRequestService) { }

  ngOnInit() {
    this.httprequest.getRequest('GET', 'DASHBOARD', '')
      .subscribe((res) => {
        this.isloaded = true
        if (res.status) {

          this.dashboard = res.res;
          console.log(this.dashboard);
        } else {
          new Error();
        }

      },
        (error) => {
          // this.httprequest.showError('Failed to get');
        });
  }

}
