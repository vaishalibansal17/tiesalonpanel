import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/service/message.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Helper } from 'src/app/shared/service/helper.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
import * as _ from 'lodash';
import { forkJoin } from 'rxjs';
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
  profile: FormGroup;
  services: Service[];
  chips = [];
  sendServ = [];
  selectable = true;
  removable = true;
  staff: any;
  price = 0;
  submitted: boolean = false;
  constructor(private httpService: HttpRequestService, private router: Router,
    private messageService: MessageService, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe) { }

  ngOnInit() {
    this.responseData = this.messageService.getBooking();
    if (!this.responseData) {
      this.router.navigateByUrl('walking-user/add-user').then(() => {
        this.errorserv.handleError(0);
      })
    } else
      this.getServices();

    this.profile = new FormGroup({
      staf_id: new FormControl(null, [
        Validators.required
      ]),
      price: new FormControl(null, [
        Validators.required, ValidationService.numberValidator
      ]),
    })
  }
  get getControl() { return this.profile.controls; }

  submit() {
    this.submitted = true;

    if (this.profile.valid) {
      // this.profile.controls['price'].enable();
      console.log(this.profile);
      this.profile.value['service'] = JSON.stringify(this.chips);
      this.profile.value['user_id'] = this.responseData.user_id;
      this.profile.value['staf_name'] = this.profile.value.staf_id.name;
      this.profile.value['staf_id'] = this.profile.value.staf_id._id;
      // return
      this.httpService.getRequest('POST', 'WALKING_BOOK', this.profile.value).subscribe((response: any) => {
        if (response.status === 1) {
          this.submitted = true;
          this.router.navigateByUrl('/walking-user').then(() => {
            this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('WALKNGSUCCESS'));
          })
        } else {
          if (response.err) {
            this.errorserv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        this.errorserv.handleError(0);
      });
    } else {
      console.log(this.profile);
    }
  }


  getServices() {
    const service = this.httpService.getRequest('GET', 'SERVICES', '')
    const staff = this.httpService.getRequest('GET', 'STAFF', '?all=true')
    forkJoin([service, staff]).subscribe(result => {
      this.services = result[0].res.services;
      this.staff = result[1].res.staffs;
    }, (error) => {
      console.log(error);
    })
  }

  slctsrv(state: any) {
    // let isFound = this.httpService.arraySearch(this.sendServ, state)
    if (!this.httpService.arraySearch(this.sendServ, state)) {
      this.chips.push({ id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)), title: _.startCase(_.camelCase(state.cat_name)),price: state.price });
      this.sendServ.push(state._id);
      this.price = this.price + state.price;
      this.profile.controls['price'].setValue(this.price);
      return
    } else {
    }
  }


  remove(service: string, data?: any): void {
    let rmvsrv = this.chips.find(v => v.id == data.id);
    this.chips = this.chips.filter(v => v.id !== data.id);
    this.sendServ = this.sendServ.filter(v => v !== data.id);
    if (this.chips.length == 0) {
      this.price = 0;
      this.profile.controls['price'].setValue(0);
    }
    else {
      this.price = this.price - rmvsrv.price;
      this.profile.controls['price'].setValue(this.price)
    }

  }

}
