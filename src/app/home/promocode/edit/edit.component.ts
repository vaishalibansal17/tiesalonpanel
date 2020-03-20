import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";
import { MatSelect } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  todaydate: Date = new Date();
  mindate: Date = new Date();
  services = [];
  chips = [];
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  sendServ = [];
  promo: FormGroup;
  detail: any;
  id: any;
  validDte: boolean = true;
  constructor(private httpService: HttpRequestService, private router: Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getServices();
    this.getUserProfile();
    this.promo = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required, ValidationService.codeValidator]),
      discount: new FormControl(null, [Validators.required, ValidationService.numberValidator]),
      upto: new FormControl(null, [ValidationService.numberValidator]),
      min_price: new FormControl(null, [ValidationService.numberValidator]),
      frm: new FormControl(null, [Validators.required,]),
      to: new FormControl(null, [Validators.required,]),
      uses: new FormControl(null, []),
      desc: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
      cat_ids: new FormControl(null)
    })
  }

  getServices() {
    this.httpService.getRequest('GET', 'SERVICES', '')
      .subscribe((response: any) => {
        if (response.status === 1)
          this.services = response.res.services;
        else {
          if (response.err)
            this.errorserv.handleError(response.err.errCode);
        }
      }, (error) => {
        console.log(error);
      });
  }


  edit() {
    this.submitted = true;
    // return false
    console.log(this.promo);
    // return
    var startDateUtc = this.promo.value.frm && this.helper.parseDate(this.promo.value.frm, new Date(new Date().setHours(0, 0, 0, 0)));
    var endDateUtc = this.promo.value.to && this.helper.parseDate(this.promo.value.to, new Date(new Date().setHours(23, 59, 59)));
    if (!(startDateUtc < endDateUtc)) {
      this.validDte = false;
    } else
      this.validDte = true;
    if (this.promo.valid) {

      // if (this.promo.value.cat_ids)
      //   this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      // else
      //   this.promo.value.cat_ids = JSON.stringify([]);
      this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      if (!this.validDte)
        return false;
      var currentdate = new Date();
      let data = new Date(this.promo.value.frm);
      if (data.getDate() == currentdate.getDate() && data.getMonth() == currentdate.getMonth())
        this.promo.value.frm = new Date();
      this.httpService.getRequest('PUT', 'PROMO', this.promo.value, this.id)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/promocode').then(() => {
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('PROMOCODEUPSUCC'))
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


  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'PROMO_DETAIL', this.id, '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.promo.patchValue({
            name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
            code: this.detail.hasOwnProperty('code') ? this.detail.code : '',
            min_price: this.detail.hasOwnProperty('min_price') ? this.detail.min_price : 0,
            discount: this.detail.hasOwnProperty('discount') ? this.detail.discount : 0,
            uses: this.detail.hasOwnProperty('uses') ? this.detail.uses : 0,
            upto: this.detail.hasOwnProperty('upto') ? this.detail.upto : 0,
            desc: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
            frm: this.detail.hasOwnProperty('frm') ? this.detail.frm : '',
            to: this.detail.hasOwnProperty('to') ? this.detail.to : '',
          });
          let frmdt = new Date(this.promo.value.frm)
          if (frmdt < new Date()) {
            this.todaydate = new Date(this.promo.value.frm);
          } else {
            this.todaydate = new Date();
          }          
          this.chips.push(...this.detail.service);
          for (let index = 0; index < this.detail.service.length; index++) {
            this.sendServ.push(this.detail.service[index]['cat_id']);
          }
          
        } else {
          if (response.err) {
            this.errorserv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }

  slctsrv(state: any) {
    const matSelect: MatSelect = state.source;
    matSelect.writeValue(null);
    state = state.value;    
    if (!this.arraySearch(this.sendServ, state)) {
      this.chips.push({ _id: state._id, cat_id: state.cat_id, cat_name: _.startCase(_.camelCase(state.cat_name)), title: _.startCase(_.camelCase(state.cat_name)) });
      this.sendServ.push(state.cat_id);
      return
    } else {
    }
  }

  remove(data?: any): void {
    this.chips = this.chips.filter(v => v._id !== data._id);
    this.sendServ = this.sendServ.filter(v => v !== data.cat_id);
  }

  checkDate(type: string, event: MatDatepickerInputEvent<Date>){
    this.mindate = new Date(event.value);    
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
}
