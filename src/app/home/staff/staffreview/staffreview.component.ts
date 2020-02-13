import { Component, OnInit, ViewChild } from '@angular/core';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { ActivatedRoute } from '@angular/router';
import { IMG } from 'src/app/shared/constants/constant';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-staffreview',
  templateUrl: './staffreview.component.html',
  styleUrls: ['./staffreview.component.scss']
})
export class StaffreviewComponent implements OnInit {
  limitPage = 5;
  search: string;
  id: any;
  detail: any;
  url: any = IMG.PRO;
  usrurl:any = IMG.PRO
  page: number = 0;
  constructor(private routes: ActivatedRoute, private httpService: HttpRequestService, private error: ErrorService) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getStaffReview();
  }

  getStaffReview() {
    this.httpService.getRequest('GET_PARMS', 'STAFF_REVIEW', this.id, `${'limit='+this.limitPage}`)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
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


  paginate(){
    this.limitPage = this.limitPage + 5;
    this.getStaffReview();
  }
}
