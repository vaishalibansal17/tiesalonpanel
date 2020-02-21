import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IMG } from 'src/app/shared/constants/constant';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.scss']
})

export class BookingdetailComponent implements OnInit {
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
    this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.url = this.detail.logo ? this.detail.usr_bp + this.detail.img : this.url;
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
}


@Component({
  selector: 'booking-email',
  templateUrl: 'booking-email.html',
  styleUrls: ['./bookingdetail.component.scss']
})
export class BookingEmailDialogPopup {
  constructor(){

  }
}