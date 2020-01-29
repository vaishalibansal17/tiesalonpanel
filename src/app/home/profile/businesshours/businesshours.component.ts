import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { MessageService } from 'primeng/api';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-businesshours',
  templateUrl: './businesshours.component.html',
  styleUrls: ['./businesshours.component.scss']
})
export class BusinesshoursComponent implements OnInit {
  form: FormGroup;
  dataArr: { "open_time": { "hh": number; "mm": number; }; "close_time": { "hh": number; "mm": number; }; "strt_break_time": { "hh": number; "mm": number; }, "end_break_time": { "hh": number; "mm": number; }, is_open: boolean, is_break: boolean, "day": number; }[];
  submitted: boolean = false;
  isSunBreak: boolean = false;
  isMonBreak: boolean = false;
  isTuesBreak: boolean = false;
  isWedBreak: boolean = false;
  isThursBreak: boolean = false;
  isFriBreak: boolean = false;
  isSatBreak: boolean = false;
  constructor(private httpService: HttpRequestService,
    private router: Router, private helper: Helper,
    private messageService: MessageService,
    private errorserv: ErrorService,
    private trns: TranslatePipe) { }

  ngOnInit() {

    this.form = new FormGroup({
      sunOpen: new FormControl(null, []),
      sunClose: new FormControl(null, []),
      isSunOpen: new FormControl(true, []),
      sunBreakStart: new FormControl(null, []),
      sunBreakEnd: new FormControl(null, []),
      monOpen: new FormControl(null, []),
      monClose: new FormControl(null, []),
      monBreakStart: new FormControl(null, []),
      monBreakEnd: new FormControl(null, []),
      isMonOpen: new FormControl(true, []),
      tuesOpen: new FormControl(null, []),
      tuesClose: new FormControl(null, []),
      tuesBreakStart: new FormControl(null, []),
      tuesBreakEnd: new FormControl(null, []),
      isTuesOpen: new FormControl(true, []),
      wedOpen: new FormControl(null, []),
      wedClose: new FormControl(null, []),
      wedBreakStart: new FormControl(null, []),
      wedBreakEnd: new FormControl(null, []),
      isWedOpen: new FormControl(true, []),
      thursOpen: new FormControl(null, []),
      thursClose: new FormControl(null, []),
      thursBreakStart: new FormControl(null, []),
      thursBreakEnd: new FormControl(null, []),
      isThursOpen: new FormControl(true, []),
      friOpen: new FormControl(null, []),
      friClose: new FormControl(null, []),
      friBreakStart: new FormControl(null, []),
      friBreakEnd: new FormControl(null, []),
      isFriOpen: new FormControl(true, []),
      satOpen: new FormControl(null, []),
      satClose: new FormControl(null, []),
      satBreakStart: new FormControl(null, []),
      satBreakEnd: new FormControl(null, []),
      isSatOpen: new FormControl(true, []),
    });

    this.getBusinessHours();
  }

  submit() {
    let workingHrs = this.createData();
    console.log(this.form.value, workingHrs);
    if (this.form.valid) {
      this.httpService.getRequest('PUT', 'WRKNGHRS', { 'w_hr': workingHrs }, '')
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/profile')
              .then(() => {
                this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SALONSUCCESS'));
              });
          } else {
            if (response.err) {
              this.errorserv.handleError(response.err.errCode);
            }
          }
        }, (error) => {
          this.errorserv.handleError(0);
        });
    } else {
      console.log(this.form);
    }
  }

  getBusinessHours() {
    this.httpService.getRequest('GET', 'WRKNGHRS', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          let detail = response.res;
          let date = new Date()
          this.form.patchValue({
            sunOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[0].open_time.hh, detail.wrk_hrs[0].open_time.mm),
            sunClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[0].close_time.hh, detail.wrk_hrs[0].close_time.mm),
            isSunOpen: detail.wrk_hrs[0].is_open,
            sunBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[0].strt_break_time.hh, detail.wrk_hrs[0].strt_break_time.mm),
            sunBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[0].end_break_time.hh, detail.wrk_hrs[0].end_break_time.mm),

            monOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[1].open_time.hh, detail.wrk_hrs[1].open_time.mm),
            monClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[1].close_time.hh, detail.wrk_hrs[1].close_time.mm),
            monBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[1].strt_break_time.hh, detail.wrk_hrs[1].strt_break_time.mm),
            monBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[1].end_break_time.hh, detail.wrk_hrs[1].end_break_time.mm),
            isMonOpen: detail.wrk_hrs[1].is_open,

            tuesOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[2].open_time.hh, detail.wrk_hrs[2].open_time.mm),
            tuesClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[2].close_time.hh, detail.wrk_hrs[2].close_time.mm),
            tuesBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[2].strt_break_time.hh, detail.wrk_hrs[2].strt_break_time.mm),
            tuesBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[2].end_break_time.hh, detail.wrk_hrs[2].end_break_time.mm),
            isTuesOpen: detail.wrk_hrs[2].is_open,

            wedOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[3].open_time.hh, detail.wrk_hrs[3].open_time.mm),
            wedClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[3].close_time.hh, detail.wrk_hrs[3].close_time.mm),
            wedBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[3].strt_break_time.hh, detail.wrk_hrs[3].strt_break_time.mm),
            wedBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[3].end_break_time.hh, detail.wrk_hrs[3].end_break_time.mm),
            isWedOpen: detail.wrk_hrs[3].is_open,

            thursOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[4].open_time.hh, detail.wrk_hrs[4].open_time.mm),
            thursClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[4].close_time.hh, detail.wrk_hrs[4].close_time.mm),
            thursBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[4].strt_break_time.hh, detail.wrk_hrs[4].strt_break_time.mm),
            thursBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[4].end_break_time.hh, detail.wrk_hrs[4].end_break_time.mm),
            isThursOpen: detail.wrk_hrs[4].is_open,

            friOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[5].open_time.hh, detail.wrk_hrs[5].open_time.mm),
            friClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[5].close_time.hh, detail.wrk_hrs[5].close_time.mm),
            friBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[5].strt_break_time.hh, detail.wrk_hrs[5].strt_break_time.mm),
            friBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[5].end_break_time.hh, detail.wrk_hrs[5].end_break_time.mm),
            isFriOpen: detail.wrk_hrs[5].is_open,

            satOpen: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[6].open_time.hh, detail.wrk_hrs[6].open_time.mm),
            satClose: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[6].close_time.hh, detail.wrk_hrs[6].close_time.mm),
            satBreakStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[6].strt_break_time.hh, detail.wrk_hrs[6].strt_break_time.mm),
            satBreakEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), detail.wrk_hrs[6].end_break_time.hh, detail.wrk_hrs[6].end_break_time.mm),
            isSatOpen: detail.wrk_hrs[6].is_open,
          });

          this.isSunBreak = detail.wrk_hrs[0].is_break;
          this.isMonBreak = detail.wrk_hrs[1].is_break;
          this.isTuesBreak = detail.wrk_hrs[2].is_break;
          this.isWedBreak = detail.wrk_hrs[3].is_break;
          this.isThursBreak = detail.wrk_hrs[4].is_break;
          this.isFriBreak = detail.wrk_hrs[5].is_break;
          this.isSatBreak = detail.wrk_hrs[6].is_break;

        } else {
          if (response.err) {
              this.errorserv.handleError(response.err.errCode)
          } 
        }
      }, (error) => {

        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }
  createData() {
    return [
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.sunOpen).hh,
          "mm": this.helper.parseDate(this.form.value.sunOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.sunClose).hh,
          "mm": this.helper.parseDate(this.form.value.sunClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.sunBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.sunBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.sunBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.sunBreakEnd).mm
        },
        "is_open": this.form.value.isSunOpen,
        "is_break": this.isSunBreak,
        "day": 0
      },
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.monOpen).hh,
          "mm": this.helper.parseDate(this.form.value.monOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.monClose).hh,
          "mm": this.helper.parseDate(this.form.value.monClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.monBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.monBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.monBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.monBreakEnd).mm
        },
        "is_open": this.form.value.isMonOpen,
        "is_break": this.isMonBreak,
        "day": 1
      },
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.tuesOpen).hh,
          "mm": this.helper.parseDate(this.form.value.tuesOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.tuesClose).hh,
          "mm": this.helper.parseDate(this.form.value.tuesClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.tuesBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.tuesBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.tuesBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.tuesBreakEnd).mm
        },
        "is_open": this.form.value.isTuesOpen,
        "is_break": this.isTuesBreak,
        "day": 2
      },
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.wedOpen).hh,
          "mm": this.helper.parseDate(this.form.value.wedOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.wedClose).hh,
          "mm": this.helper.parseDate(this.form.value.wedClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.wedBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.wedBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.wedBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.wedBreakEnd).mm
        },
        "is_open": this.form.value.isWedOpen,
        "is_break": this.isWedBreak,
        "day": 3
      },
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.thursOpen).hh,
          "mm": this.helper.parseDate(this.form.value.thursOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.thursClose).hh,
          "mm": this.helper.parseDate(this.form.value.thursClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.thursBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.thursBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.thursBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.thursBreakEnd).mm
        },
        "is_open": this.form.value.isThursOpen,
        "is_break": this.isThursBreak,
        "day": 4
      },
      {
        "open_time": {
          "hh": this.helper.parseDate(this.form.value.friOpen).hh,
          "mm": this.helper.parseDate(this.form.value.friOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.friClose).hh,
          "mm": this.helper.parseDate(this.form.value.friClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.friBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.friBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.friBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.friBreakEnd).mm
        },
        "is_open": this.form.value.isFriOpen,
        "is_break": this.isFriBreak,
        "day": 5
      },
      {

        "open_time": {
          "hh": this.helper.parseDate(this.form.value.satOpen).hh,
          "mm": this.helper.parseDate(this.form.value.satOpen).mm
        },
        "close_time": {
          "hh": this.helper.parseDate(this.form.value.satClose).hh,
          "mm": this.helper.parseDate(this.form.value.satClose).mm
        },
        "strt_break_time": {
          "hh": this.helper.parseDate(this.form.value.satBreakStart).hh,
          "mm": this.helper.parseDate(this.form.value.satBreakStart).mm
        },
        "end_break_time": {
          "hh": this.helper.parseDate(this.form.value.satBreakEnd).hh,
          "mm": this.helper.parseDate(this.form.value.satBreakEnd).mm
        },
        "is_open": this.form.value.isSatOpen,
        "is_break": this.isSatBreak,
        "day": 6
      }
    ]
  }

  isBreak(day) {
    switch (day) {
      case 'sun':
        this.isSunBreak = !this.isSunBreak;
        break;
      case 'mon':
        this.isMonBreak = !this.isMonBreak;
        break;
      case 'tues':
        this.isTuesBreak = !this.isTuesBreak;
        break;
      case 'wed':
        this.isWedBreak = !this.isWedBreak;
        break;
      case 'thurs':
        this.isThursBreak = !this.isThursBreak;
        break;
      case 'fri':
        this.isFriBreak = !this.isFriBreak;
        break;
      case 'sat':
        this.isSatBreak = !this.isSatBreak;
        break;
      default:
        break;
    }
  }

}
