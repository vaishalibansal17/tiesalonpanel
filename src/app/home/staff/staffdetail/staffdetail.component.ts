import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ActivatedRoute } from '@angular/router';
import { IMG } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-staffdetail',
  templateUrl: './staffdetail.component.html',
  styleUrls: ['./staffdetail.component.scss']
})
export class StaffdetailComponent implements OnInit {
  detail: any;
  url: any = IMG.PRO;
  usrurl: any = IMG.PRO
  id: any;

  constructor(private httpService: HttpRequestService, private routes: ActivatedRoute, private error: ErrorService) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'STAFF_DETAIL', this.id, `${'limit=' + 5 + '&page=' + 0}`)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.url = this.detail.img ? this.detail.img : this.url;
          this.detail.doff =this.chckDay(this.detail.day_off);
        } else {
          if (response.err) {
            this.error.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        this.error.handleError(0);
        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }

  chckDay(day){
    console.log(day);
    
    switch (day) {
      case 0:
      return 'Sunday'
        break;
      case 1:
        return 'Monday'
        break;
      case 2:
        return 'Tuesday'
        break;
      case 3:
        return 'Wednesday'
        break;
      case 4:
        return 'Thursday'
        break;
      case 5:
        return 'Friday'
        break;
      case 6:
        return 'Saturday'
        break;
      default:
        break;
    }
  }

}

