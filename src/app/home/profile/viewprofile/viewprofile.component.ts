import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { MessageService } from 'src/app/shared/service/message.service';

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
  chips= [];

  constructor(private httpService: HttpRequestService, private error : ErrorService, private messageService: MessageService,) { }

  ngOnInit() {
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET', 'PROFILE', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.chips.push(...this.detail.services);
          this.url = this.detail.logo ? this.detail.logo : this.url;
          // localStorage.setItem('salon', JSON.stringify({ name: this.detail.name, logo: response.res.logo }));
          let salon = localStorage.getItem('salon');
          console.log(salon);
          salon['logo'] = this.detail.logo;
          salon['name'] = this.detail.name;
          
          localStorage.setItem('salon', JSON.stringify(salon));
            this.messageService.sendMessage('profile changed');
          if (this.detail && this.detail.imgs) {
            this.detail.imgs.map(item => {
              item = this.detail.bp + item;
              this.salonImageUrlArray.push(item);
              this.slide = [...this.slide, {'url':item,  clickAction: () => alert('custom click function') }]
            })
          }
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
