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
import { MatSelect } from '@angular/material';
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
  todaydt = new Date();
  max: Date;
  salonid: string;
  slots: any;
  date: Date;
  duration: any;
  isSlot: boolean = false;
  constructor(private httpService: HttpRequestService, private router: Router,
    private messageService: MessageService, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe) { }

  ngOnInit() {
    this.salonid = localStorage.getItem('salonid');
    this.max = new Date(Number(this.todaydt.getFullYear()), Number(this.todaydt.getMonth() + 3), Number(this.todaydt.getDate()), (23), (59), (59), (59));
    this.responseData = this.messageService.getBooking();
    if (!this.responseData) {
      this.router.navigateByUrl('walk-in-customer/add-user').then(() => {
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
      dttime: new FormControl(null, [
        Validators.required
      ]),
      desc: new FormControl(null),
    })
  }
  get getControl() { return this.profile.controls; }

  submit() {
    this.submitted = true;

    if (this.profile.valid) {
      if(this.isSlot){
        return
      }
      // this.profile.controls['price'].enable();
      console.log(this.profile, this.date);
      this.profile.value['service'] = JSON.stringify(this.chips);
      this.profile.value['user_id'] = this.responseData.user_id;
      this.profile.value['staf_name'] = this.profile.value.staf_id.name;
      this.profile.value['staf_id'] = this.profile.value.staf_id._id;
      this.profile.value['bookDateTime'] = this.date;
      this.profile.value['duration'] = this.duration;
      // return
      this.httpService.getRequest('POST', 'WALKING_BOOK', this.profile.value).subscribe((response: any) => {
        if (response.status === 1) {
          this.submitted = true;
          this.router.navigateByUrl('/walk-in-customer').then(() => {
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
    const matSelect: MatSelect = state.source;
    matSelect.writeValue(null);
    state = state.value
    if (!this.httpService.arraySearch(this.sendServ, state)) {
      this.chips.push({ id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)), title: _.startCase(_.camelCase(state.cat_name)), cost: state.price, duration: state.duration });
      this.sendServ.push(state._id);
      this.price = this.price + state.price;
      this.duration = this.duration + state.duration;
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
      this.duration = 0;
      this.profile.controls['price'].setValue(0);
    }
    else {
      console.log(rmvsrv);
      this.duration = this.duration - rmvsrv.duration;
      this.price = this.price - rmvsrv.cost;
      this.profile.controls['price'].setValue(this.price)
    }
  }
  slctstf() {
    if (this.profile.value.dttime && this.profile.value.staf_id) {
      this.isSlot = true;
      // let date = new Date(this.profile.value.dttime);
      let date = this.helper.utcDate(this.profile.value.dttime);
      console.log(this.helper.utcDate(this.profile.value.dttime));

      this.httpService.getRequest('GET_PARMS', 'BOOKING_SLOT', this.salonid, `bk_dt=${date}&staf_id=${this.profile.value.staf_id._id}`)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.slots = response.res;
            this.slots.forEach((element, i) => {
              this.slots[i]['select'] = false;
            });
          } else {
            if (response.err) {
              this.slots=[];
              this.errorserv.handleError(response.err.errCode);
            }
          }
        }, (error) => {
          this.errorserv.handleError(0);
          // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
        });
    }
  }

  slcdt(slot) {
    this.isSlot = false;
    if (slot.is_avlbl) {
      this.slots.forEach((obj, i) => {
        if (obj.time == slot.time) {
          this.slots[i]['select'] = true;
        } else {
          this.slots[i]['select'] = false;
        }
      })
      let tmstmp = slot.time;
      let time = new Date(tmstmp);
      this.date = new Date(this.profile.value.dttime);
      this.date.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
      this.date = this.helper.parseDate(this.date);
    } else
      return false;
  }

}
