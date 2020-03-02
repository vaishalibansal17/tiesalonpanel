import { Component, OnInit } from '@angular/core';
import { IMG } from 'src/app/shared/constants/constant';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-managecalender-info',
  templateUrl: './managecalender-info.component.html',
  styleUrls: ['./managecalender-info.component.scss']
})
export class ManagecalenderInfoComponent implements OnInit {

  detail: any;
  url: any = IMG.PRO;
  usrurl: any = IMG.PRO
  id: any;
  ttlamt: any;

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
          this.ttlamt = this.detail.service.reduce((acc, val) => acc.cost + val.cost );
          this.ttlamt = this.detail.service.length==1?this.ttlamt.cost:this.ttlamt;
        } else {
          if (response.err) {
            this.error.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        this.error.handleError(0);
      });
  }
}