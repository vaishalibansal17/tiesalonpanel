import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  detail: any;
  id: any;
  ttlamt: any;

  constructor(private httpService: HttpRequestService, private routes: ActivatedRoute, private error: ErrorService) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'WLK_DETAIL', this.id)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.ttlamt = this.detail.service.reduce((acc, val) => acc.cost + val.cost );
          this.ttlamt = this.detail.service.length==1?this.ttlamt.cost:this.ttlamt;
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
