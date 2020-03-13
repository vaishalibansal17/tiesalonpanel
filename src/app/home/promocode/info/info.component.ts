import { Component, OnInit } from '@angular/core';
import { IMG } from 'src/app/shared/constants/constant';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-promoinfo',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  detail: any;
  url: any = IMG.PRO;
  usrurl: any = IMG.PRO
  id: any;
  service: any;

  constructor(private httpService: HttpRequestService, private routes: ActivatedRoute, private error: ErrorService) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'PROMO_DETAIL', this.id, '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          console.log(this.detail);
          this.detail.service = this.detail.service.map(y => y.cat_name).join(', ') 
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
