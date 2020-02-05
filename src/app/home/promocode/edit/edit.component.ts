import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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
      name: new FormControl(null, [Validators.required, ValidationService.namevalidator]),
      code: new FormControl(null, [Validators.required, ValidationService.codeValidator]),
      discount: new FormControl(null, [Validators.required, ValidationService.numberValidator]),
      upto: new FormControl(null, []),
      min_price: new FormControl(null, []),
      frm: new FormControl(null, [Validators.required,]),
      to: new FormControl(null, [Validators.required,]),
      uses: new FormControl(null, []),
      desc: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(500)]),
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
    if (this.promo.valid) {
      // if (this.promo.value.cat_ids)
      //   this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      // else
      //   this.promo.value.cat_ids = JSON.stringify([]);
      this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      console.log(this.promo.value);

      this.httpService.getRequest('PUT', 'PROMO', this.promo.value, this.id)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/promocode')
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
    this.chips.push({ id: state.cat_id, cat_name: _.startCase(_.camelCase(state.cat_name)) });
    this.sendServ.push(state.cat_id)
  }


  remove(service: string): void {
    const index = this.chips.indexOf(service);
    this.chips.splice(index, 1);
    this.sendServ.splice(index, 1);
  }

}
