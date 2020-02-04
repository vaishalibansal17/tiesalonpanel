import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/service/message.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addbookings',
  templateUrl: './addbookings.component.html',
  styleUrls: ['./addbookings.component.scss']
})
export class AddbookingsComponent implements OnInit {
  servicea: Service[] = [
    { value: '1', viewValue: 'Hair Spa' },
    { value: '2', viewValue: 'Spa' },
  ];
  responseData: any;

  constructor(private messageService: MessageService, private router: Router, private errorserv: ErrorService, ) { }

  ngOnInit() {
    this.responseData = this.messageService.getBooking();
    console.log(this.responseData);
    if (!this.responseData) {
      this.router.navigateByUrl('walking-user/add-user').then(() => {
        this.errorserv.handleError(0);
      })
    }

  }

}
