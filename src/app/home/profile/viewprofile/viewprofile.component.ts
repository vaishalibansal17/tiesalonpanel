import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';




@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  detail: any;
  url: any = 'assets/images/change.png';
  salonImageUrlArray=[];
  slide = [];

  constructor(private httpService: HttpRequestService,) { }

  ngOnInit() {
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET', 'PROFILE', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          
          this.url = this.detail.logo ? this.detail.logo : this.url;
          if (this.detail && this.detail.imgs) {
            this.detail.imgs.map(item => {
              item = this.detail.bp + item;
              this.salonImageUrlArray.push(item);
              this.slide = [...this.slide, {'url':item,  clickAction: () => alert('custom click function') }]
            })
          }
        } else {
          // if (!_.isEmpty(response.error)) {
          //   if (response.error.errorCode == 20) {
          //     this.httpService.showError(MESSAGE.LOGIN.NOT_EXIST, MESSAGE.LOGIN.DEL_ORG, MESSAGE.MSGTIME);
          //     this.httpService.logout();
          //   }
          //   else {
          //     this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
          //   }
          // } else {
          //   this.spinner.hide();
          //   this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
          // }
        }
      }, (error) => {

        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }
}
