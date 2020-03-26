import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { MessageService } from 'primeng/api';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import moment from 'moment-timezone';

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
  error = [];
  isError: boolean = false;

  isSunClosReq: boolean = false;
  isSunValid: boolean = false;
  isSunOpnReq: boolean = false;
  isSunOpnBrkReq: boolean = false;
  isSunClosBrkReq: boolean = false;
  isSunBrkValid: boolean = false;

  isMonClosReq: boolean = false;
  isMonValid: boolean = false;
  isMonOpnReq: boolean = false;
  isMonOpnBrkReq: boolean = false;
  isMonClosBrkReq: boolean = false;
  isMonBrkValid: boolean = false;

  isTuesClosReq: boolean = false;
  isTuesValid: boolean = false;
  isTuesOpnReq: boolean = false;
  isTuesOpnBrkReq: boolean = false;
  isTuesClosBrkReq: boolean = false;
  isTuesBrkValid: boolean = false;

  isWedClosReq: boolean = false;
  isWedValid: boolean = false;
  isWedOpnReq: boolean = false;
  isWedOpnBrkReq: boolean = false;
  isWedClosBrkReq: boolean = false;
  isWedBrkValid: boolean = false;

  isThursClosReq: boolean = false;
  isThursValid: boolean = false;
  isThursOpnReq: boolean = false;
  isThursOpnBrkReq: boolean = false;
  isThursClosBrkReq: boolean = false;
  isThursBrkValid: boolean = false;

  isFriClosReq: boolean = false;
  isFriValid: boolean = false;
  isFriOpnReq: boolean = false;
  isFriOpnBrkReq: boolean = false;
  isFriClosBrkReq: boolean = false;
  isFriBrkValid: boolean = false;

  isSatClosReq: boolean = false;
  isSatValid: boolean = false;
  isSatOpnReq: boolean = false;
  isSatOpnBrkReq: boolean = false;
  isSatClosBrkReq: boolean = false;
  isSatBrkValid: boolean = false;



  constructor(private httpService: HttpRequestService,
    private router: Router, private helper: Helper,
    private messageService: MessageService,
    private errorserv: ErrorService,
    private fb: FormBuilder,
    private trns: TranslatePipe) { }

  ngOnInit() {

    this.form = this.fb.group({
      Sunday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Monday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Tuesday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Wednesday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Thursday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Friday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      }),
      Saturday: this.fb.group({
        open: [null],
        close: [null],
        breakStart: [null],
        breakEnd: [null],
        isOpen: [true]
      })
    })
    let date = new Date();
    // this.form.controls['Sunday'].patchValue({ open: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 9, 4) })
    this.getBusinessHours();
  }
  get getControl() { return this.form.controls; }

  submit() {

    // this.submitted = true;
    // // this.validatetime('Sun');
    // if (this.isSunOpnReq || this.isSunClosReq || this.isSunValid) {
    //   return
    // }
    // console.log('VALID BUT TESTING');

    // return
    console.log(this.validatetime('Sunday', 'Sun'));

    if (!this.validatetime('Sunday', 'Sun')) {
      console.log('VALID BUT TESTING Sunday');
      return
    } else if (!this.validatetime('Monday', 'Mon')) {
      console.log('VALID BUT TESTING Monday');
      return
    } else if (!this.validatetime('Tuesday', 'Tues')) {
      console.log('VALID BUT TESTING Tuesday');
      return
    } else if (!this.validatetime('Wednesday', 'Wed')) {
      console.log('VALID BUT TESTING Wednesday');
      return
    } else if (!this.validatetime('Thursday', 'Thurs')) {
      console.log('VALID BUT TESTING Thursday');
      return
    } else if (!this.validatetime('Friday', 'Fri')) {
      console.log('VALID BUT TESTING Friday');
      return
    } else if (!this.validatetime('Saturday', 'Sat')) {
      console.log('VALID BUT TESTING Satday');
      return
    }
    console.log('VALID BUT TESTING');
    let workingHrs = [];
    this.form.value['Sunday'].isOpen ? workingHrs.push(this.createData('Sunday', 0, 'Sun')) : '';
    this.form.value['Monday'].isOpen ? workingHrs.push(this.createData('Monday', 1, 'Mon')) : '';
    this.form.value['Tuesday'].isOpen ? workingHrs.push(this.createData('Tuesday', 2, 'Tues')) : '';
    this.form.value['Wednesday'].isOpen ? workingHrs.push(this.createData('Wednesday', 3, 'Wed')) : '';
    this.form.value['Thursday'].isOpen ? workingHrs.push(this.createData('Thursday', 4, 'Thurs')) : '';
    this.form.value['Friday'].isOpen ? workingHrs.push(this.createData('Friday', 5, 'Fri')) : '';
    this.form.value['Saturday'].isOpen ? workingHrs.push(this.createData('Saturday', 6, 'Sat')) : '';

    console.log(workingHrs);
    // return
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
      this.submitted = false;
      this.httpService.errTostr(this.trns.transform('ERROR'), this.trns.transform('HOURSREQ'));
      console.log(this.form);
    }
  }

  getBusinessHours() {
    this.httpService.getRequest('GET', 'WRKNGHRS', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          let detail = response.res.wrk_hrs;
          let date = new Date();
          for (let index = 0; index < 7; index++) {
            let day = index == 0 ? 'Sunday' : (index == 1 ? 'Monday' : (index == 2 ? 'Tuesday' : (index == 3 ? 'Wednesday' : (index == 4 ? 'Thursday' : (index == 5 ? 'Friday' : 'Saturday')))))
            let obj = detail.find(o => o.day === index) || { open_time: { hh: null, mm: null }, close_time: { hh: null, mm: null }, is_open: false, strt_break_time: { hh: null, mm: null }, end_break_time: { hh: null, mm: null }, is_break: false };
            let open_time = new Date(), close_time = new Date(), op_br_tm = new Date(), cl_br_tm = new Date();
            console.log(obj);

            if (obj.open_time.hh !== null && obj.close_time.hh !== null) {
              open_time.setUTCHours(obj.open_time.hh, obj.open_time.mm);
              close_time.setUTCHours(obj.close_time.hh, obj.close_time.mm);
            } else {
              open_time.setHours(0, 0);
              close_time.setHours(0, 0);
            }
            if ((obj.strt_break_time && obj.strt_break_time.hh !== null) && (obj.end_break_time.hh && obj.end_break_time.hh !== null)) {
              op_br_tm.setUTCHours(obj.strt_break_time ? obj.strt_break_time.hh : 0, obj.strt_break_time ? obj.strt_break_time.mm : 0);
              cl_br_tm.setUTCHours(obj.end_break_time ? obj.end_break_time.hh : 0, obj.end_break_time ? obj.end_break_time.mm : 0);
            } else {
              op_br_tm.setHours(0,0);
              cl_br_tm.setHours(0,0);
            }
            // if(detail[index]['day'] == index)
            this.form.controls[day].patchValue({
              open: open_time,
              close: close_time,
              isOpen: obj.hasOwnProperty('is_open') ? obj.is_open : false,
              breakStart: op_br_tm,
              breakEnd: cl_br_tm,
            });
            let dayName = index == 0 ? 'Sun' : (index == 1 ? 'Mon' : (index == 2 ? 'Tues' : (index == 3 ? 'Wed' : (index == 4 ? 'Thurs' : (index == 5 ? 'Fri' : 'Sat')))))
            this.toggle(day, dayName)
            this['is' + dayName + 'Break'] = obj.is_break;
          }
        } else {
          if (response.err) {
            this.errorserv.handleError(response.err.errCode)
          }
        }
      }, (error) => {

        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }

  createData(dayName, dayNo, daybrk) {
    return {
      "open_time": {
        "hh": this.helper.parsehhmm(this.form.value[dayName].open).hh,
        "mm": this.helper.parsehhmm(this.form.value[dayName].open).mm
      },
      "close_time": {
        "hh": this.helper.parsehhmm(this.form.value[dayName].close).hh,
        "mm": this.helper.parsehhmm(this.form.value[dayName].close).mm
      },
      "strt_break_time": {
        "hh": this.helper.parsehhmm(this.form.value[dayName].breakStart).hh,
        "mm": this.helper.parsehhmm(this.form.value[dayName].breakStart).mm
      },
      "end_break_time": {
        "hh": this.helper.parsehhmm(this.form.value[dayName].breakEnd).hh,
        "mm": this.helper.parsehhmm(this.form.value[dayName].breakEnd).mm
      },
      "is_open": this.form.value[dayName].isOpen,
      "is_break": this['is' + daybrk + 'Break'],
      "day": dayNo
    }
  }

  validatetime(dayName, daybrk) {
    if (this.form.value[dayName].isOpen) {
      console.log('----------', new Date(this.form.value[dayName].open).getHours(), this.form.value[dayName].close, moment(this.form.value[dayName].open, "hh:mm:ss").diff(moment(), 'seconds'));
      if ((this.form.value[dayName].open == null || (new Date(this.form.value[dayName].open).getHours() == 0 && new Date(this.form.value[dayName].open).getMinutes() == 0)) && (this.form.value[dayName].close == null || (new Date(this.form.value[dayName].close).getHours() == 0 && new Date(this.form.value[dayName].close).getMinutes() == 0))) {
        console.log('9090-090----');
        this['is' + daybrk + 'OpnReq'] = true;
        this['is' + daybrk + 'ClosReq'] = true;
        return false;
      }
      if ((this.form.value[dayName].open == null)) {
        this['is' + daybrk + 'ClosReq'] = false;
        this['is' + daybrk + 'OpnReq'] = true;
        return false;
      } if ((this.form.value[dayName].close == null)) {
        console.log('9090-090----jhbnjhghjhgbnjhgf');
        this['is' + daybrk + 'OpnReq'] = false;
        this['is' + daybrk + 'ClosReq'] = true;
        return false;
      } else if (new Date(this.form.value[dayName].open) > new Date(this.form.value[dayName].close)) {
        console.log('----------', new Date(this.form.value[dayName].open) > new Date(this.form.value[dayName].close));

        this['is' + daybrk + 'ClosReq'] = false;
        this['is' + daybrk + 'OpnReq'] = false;

        this['is' + daybrk + 'Valid'] = true;
        return false;
      } else if (!this['is' + daybrk + 'Break']) {
        if (new Date(this.form.value[dayName].open) < new Date(this.form.value[dayName].close)) {
          console.log('----------+++++++', new Date(this.form.value[dayName].open) > new Date(this.form.value[dayName].close));

          this['is' + daybrk + 'ClosReq'] = false;
          this['is' + daybrk + 'OpnReq'] = false;
          this['is' + daybrk + 'Valid'] = false;


          this['is' + daybrk + 'ClosBrkReq'] = false;
          this['is' + daybrk + 'OpnBrkReq'] = false;
          this['is' + daybrk + 'BrkValid'] = false;
          return true;
        }
        return false;
      }
      else if ((new Date(this.form.value[dayName].open) < new Date(this.form.value[dayName].close)) && this['is' + daybrk + 'Break']) {
        console.log('---_________');
        this['is' + daybrk + 'ClosReq'] = false;
        this['is' + daybrk + 'OpnReq'] = false;
        this['is' + daybrk + 'Valid'] = false;
        //sun break validation
        if ((this.form.value[dayName].breakStart == null) && (this.form.value[dayName].breakEnd == null)) {
          this['is' + daybrk + 'OpnBrkReq'] = true;
          this['is' + daybrk + 'ClosBrkReq'] = true;
          return false;
        }
        if ((this.form.value[dayName].breakStart == null)) {
          this['is' + daybrk + 'ClosBrkReq'] = false;
          this['is' + daybrk + 'OpnBrkReq'] = true;
          if (this.form.value[dayName].breakEnd !== null) {
            if ((new Date(this.form.value[dayName].breakEnd) < new Date(this.form.value[dayName].open))) {
              this['is' + daybrk + 'BrkValid'] = true;
            } else if (new Date(this.form.value[dayName].breakEnd) > new Date(this.form.value[dayName].close)) {
              console.log(new Date(this.form.value[dayName].breakEnd) > new Date(this.form.value[dayName].close), '-=-=-=-=-=-=');
              this['is' + daybrk + 'BrkValid'] = true;
            }
          }
          return false;
        } else if ((this.form.value[dayName].breakEnd == null)) {
          this['is' + daybrk + 'OpnBrkReq'] = false;
          this['is' + daybrk + 'ClosBrkReq'] = true;
          if (this.form.value[dayName].breakStart !== null) {
            if ((new Date(this.form.value[dayName].breakStart) < new Date(this.form.value[dayName].open))) {
              this['is' + daybrk + 'BrkValid'] = true;
            } else if (new Date(this.form.value[dayName].breakStart) > new Date(this.form.value[dayName].close)) {
              console.log(new Date(this.form.value[dayName].breakStart) > new Date(this.form.value[dayName].close), '-=-=-=-=-=-=');
              this['is' + daybrk + 'BrkValid'] = true;
            }
          }
          return false;
        } else if ((new Date(this.form.value[dayName].breakStart) < new Date(this.form.value[dayName].open))) {
          this['is' + daybrk + 'ClosBrkReq'] = false;
          console.log('------------------------');

          this['is' + daybrk + 'OpnBrkReq'] = false;

          this['is' + daybrk + 'BrkValid'] = true;
          return false;
        }
        else if (new Date(this.form.value[dayName].breakStart) > new Date(this.form.value[dayName].close)) {
          console.log(new Date(this.form.value[dayName].breakStart) > new Date(this.form.value[dayName].close), '-=-=-=7878787878787-=-=-=');

          this['is' + daybrk + 'ClosBrkReq'] = false;
          this['is' + daybrk + 'OpnBrkReq'] = false;

          this['is' + daybrk + 'BrkValid'] = true;
          return false;
        }
        else if ((new Date(this.form.value[dayName].breakEnd) < new Date(this.form.value[dayName].open))) {
          this['is' + daybrk + 'ClosBrkReq'] = false;

          this['is' + daybrk + 'BrkValid'] = true;
          return false;
        }
        else if (new Date(this.form.value[dayName].breakEnd) > new Date(this.form.value[dayName].close)) {
          console.log(new Date(this.form.value[dayName].breakEnd) > new Date(this.form.value[dayName].close), '-=-=-=-=-=-=');
          this['is' + daybrk + 'ClosBrkReq'] = false;

          this['is' + daybrk + 'BrkValid'] = true;
          return false;
        }
        else if (new Date(this.form.value[dayName].breakStart) > new Date(this.form.value[dayName].breakEnd)) {
          console.log(new Date(this.form.value[dayName].breakEnd) > new Date(this.form.value[dayName].close), '-=-=-=-=-=-=');
          this['is' + daybrk + 'ClosBrkReq'] = false;
          this['is' + daybrk + 'BrkValid'] = true;
          return false;
        } else {
          this['is' + daybrk + 'ClosBrkReq'] = false;
          this['is' + daybrk + 'OpnBrkReq'] = false;
          this['is' + daybrk + 'BrkValid'] = false;
          return true;
        }
      } else {
        this['is' + daybrk + 'ClosBrkReq'] = false;
        this['is' + daybrk + 'OpnBrkReq'] = false;

        this['is' + daybrk + 'BrkValid'] = false;
        return true;
      }
    } else {
      this['is' + daybrk + 'OpnReq'] = false;
      this['is' + daybrk + 'ClosReq'] = false;
      this['is' + daybrk + 'ClosBrkReq'] = false;
      this['is' + daybrk + 'OpnBrkReq'] = false;
      this['is' + daybrk + 'BrkValid'] = false;
      return true;
    }

  }

  toggle(dayName, day) {
    this['is' + day + 'OpnReq'] = false;
    this['is' + day + 'ClosReq'] = false;
    this['is' + day + 'ClosBrkReq'] = false;
    this['is' + day + 'OpnBrkReq'] = false;
    this['is' + day + 'BrkValid'] = false;
    if (!this.form.value[dayName].isOpen) {
      this.form.controls[dayName].disable();
      this.form.controls[dayName]['controls']['isOpen'].enable();
    } else {
      this.form.controls[dayName].enable();
    }
  }
  isBreak(day) {
    this['is' + day + 'Break'] = !this['is' + day + 'Break'];
    this['is' + day + 'ClosBrkReq'] = false;
    this['is' + day + 'OpnBrkReq'] = false
    this['is' + day + 'BrkValid'] = false;
  }

}
