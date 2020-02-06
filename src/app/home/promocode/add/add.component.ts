import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService, date } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";

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
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  sendServ = [];
  promo: FormGroup;
  constructor(private httpService: HttpRequestService, private router: Router, private fb :FormBuilder,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    this.getServices();

    this.promo = this.fb.group({
      name: new FormControl(null, [
        Validators.required, ValidationService.namevalidator
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
      to: new FormControl({value: '',disabled: true}, [
        Validators.required,
      ]),
      uses: new FormControl(null, [ValidationService.numberValidator]),
      desc: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
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
    if (this.promo.valid) {
      // if (this.promo.value.cat_ids)
      //   this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      // else
      //   this.promo.value.cat_ids = JSON.stringify([]);
      this.promo.value.cat_ids = JSON.stringify(this.sendServ);
      console.log(this.promo.value);
      
      this.httpService.getRequest('POST', 'PROMO', this.promo.value)
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

  /** ---------------------Compare Promocodes dates----------------------- */
  // validateDates(startDate?: Date, endDate?: Date) {
  //   startDate = this.promo.value.frm;
  //   endDate = this.promo.value.to;
  //   if (new Date(endDate).getTime() >= new Date(startDate).getTime()) {
  //     this.isStartTimeEnable = false;
  //     return true;
  //   }
  //   else {
  //     this.httpService.showError(MESSAGE.DATE.END_DATE, '', MESSAGE.MSGTIME);
  //     return false;
  //   }
  // }

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
