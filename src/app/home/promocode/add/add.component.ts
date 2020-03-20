import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService, date } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";
import { MatSelect } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  services: Service[];
  chips = [];
  todaydate: Date = new Date();
  mindate: Date = new Date();
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  sendServ = [];
  promo: FormGroup;
  validDte: boolean = true;
  
  constructor(private httpService: HttpRequestService, private router: Router, private fb: FormBuilder,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe,
  ) { }

  ngOnInit() {
    this.getServices();

    this.promo = this.fb.group({
      name: new FormControl(null, [
        Validators.required
      ]),
      code: new FormControl(null, [
        Validators.required, ValidationService.codeValidator
      ]),
      discount: new FormControl(null, [
        Validators.required, ValidationService.numberValidator
      ]),
      upto: new FormControl(null, [ValidationService.numberValidator]),
      min_price: new FormControl(null, [ValidationService.numberValidator]),
      frm: new FormControl(null, [
        Validators.required
      ]),
      to: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      uses: new FormControl(null, [ValidationService.numberValidator]),
      desc: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150)
      ]),
      cat_ids: new FormControl(null)
    })
  }

  getServices() {
    this.httpService.getRequest('GET', 'SERVICES', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          console.log(response.res);

          this.services = response.res.services;
        }
        else {
          if (response.err) {
            this.errorserv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }


  add() {
    this.submitted = true;
    // return false
    var startDateUtc = this.promo.value.frm && this.helper.parseDate(this.promo.value.frm, new Date(new Date().setHours(0, 0, 0, 0)));
    var endDateUtc = this.promo.value.to && this.helper.parseDate(this.promo.value.to, new Date(new Date().setHours(23, 59, 59)));
    if (!(startDateUtc < endDateUtc)) {
      this.validDte = false;
      return false;
    } else
      this.validDte = true;


    if (this.promo.valid) {

      if (!this.validDte)
        return false
      /** if selected date is from today then promocode time is from current date and time. */
      var currentdate = new Date();
      let data = new Date(this.promo.value.frm);
      if (data.getDate() == currentdate.getDate() && data.getMonth() == currentdate.getMonth())
        this.promo.value.frm = new Date();
      this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      this.httpService.getRequest('POST', 'PROMO', this.promo.value)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/promocode').then(()=>{
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('PROMOCODESUCC'))
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
      console.log(this.promo);
    }
  }
  get getControl() { return this.promo.controls; }

  /** ---------------------Compare Promocodes dates----------------------- */

  slctsrv(state: any) {    
    const matSelect: MatSelect = state.source;
    matSelect.writeValue(null);
    
    // let isFound = this.httpService.arraySearch(this.sendServ, state)
    state=state.value
    console.log(state);
    if (!this.arraySearch(this.sendServ, state)) {
      this.chips.push({ id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)), title: _.startCase(_.camelCase(state.cat_name)), price: state.price });
      this.sendServ.push(state.cat_id);
      return
    } else {
    }
  }

  arraySearch(arr, value) {
    let isFound = false;
    if (arr.length) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === value.cat_id) {
          isFound = true; break;
        }
      }
      return isFound;
    }
    return false
  }


  remove(service: string, data?: any): void {
    let rmvsrv = this.chips.find(v => v.id == data.id);
    this.chips = this.chips.filter(v => v.id !== data.id);
    this.sendServ = this.sendServ.filter(v => v !== data.id);
  }
  checkDate(type: string, event: MatDatepickerInputEvent<Date>){
      this.mindate = new Date(event.value);    
  }
}
