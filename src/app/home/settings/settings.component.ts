import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from 'src/app/shared/service/translate.service';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';

import * as _ from "lodash";
export interface Appointment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  lang: string = localStorage.getItem('lang') || 'en';
  allow_multi: boolean = false;
  onl_booking: boolean = false;
  is_delete: boolean = false;
  is_notif: boolean = false;
  sch_apt: string = '15';
  constructor(public dialog: MatDialog, private trns: TranslatePipe, private trnsrv: TranslateService, private httpService: HttpRequestService, private errService: ErrorService) { }

  appointments: Appointment[] = [
    { value: '15', viewValue: 'On 15 minute intervals' },
    { value: '30', viewValue: 'On 30 minute intervals' },
    { value: '60', viewValue: 'On hourly intervals' },
    { value: '0', viewValue: 'Based on service duration' },
  ];

  openDialog() {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want to deactivate your account?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpService.getRequest('PUT', 'CANCELPOLICY', { is_del: this.is_delete }, '').subscribe((response: any) => {
            if (response.status === 1) {
              // let salon = JSON.parse(localStorage.getItem('salon'));
              // salon.slt_dur = this.sch_apt;
              // localStorage.setItem('salon', JSON.stringify(salon));
              // localStorage.clear();
              this.httpService.logout();

              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
            } else {
              console.log(response);
              this.errService.handleError(response.err.errCode)
            }
          });
        } else
          this.is_delete = false;
      }
    );
  }

  openBox(){
    this.dialog.open(SettingsDialog, { width: '500px', disableClose: true });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want to delete your account?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpService.getRequest('PUT', 'CANCELPOLICY', { is_delete: this.is_delete }, '').subscribe((response: any) => {
            if (response.status === 1) {
              // let salon = JSON.parse(localStorage.getItem('salon'));
              // salon.slt_dur = this.sch_apt;
              // localStorage.setItem('salon', JSON.stringify(salon));
              localStorage.clear();
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
            } else {
              console.log(response);
              this.errService.handleError(response.err.errCode)
            }
          });
        } else
          this.is_delete = false;
      }
    );
  }

  ngOnInit() {
    let salon = JSON.parse(localStorage.getItem('salon'));
    this.allow_multi = salon.allow_multi;
    this.is_notif = salon.is_notif;
    this.onl_booking = salon.onl_booking;
    this.sch_apt = String(salon.slt_dur);
    this.is_delete = salon.is_delete;
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.lang = lang;
    this.trnsrv.use(this.lang);
  }

  feedbackSubmit() {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want to update Slot duration?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpService.getRequest('PUT', 'SLOT', { slt_dur: this.sch_apt }, '').subscribe((response: any) => {
            if (response.status === 1) {
              let salon = JSON.parse(localStorage.getItem('salon'));
              salon.slt_dur = this.sch_apt;
              localStorage.setItem('salon', JSON.stringify(salon));
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
            } else {
              console.log(response);
              this.errService.handleError(response.err.errCode)
            }
          });
        }
      }
    );
  }
  toggle(key, value) {
    let obj = { [key]: value }
    this.httpService.getRequest('PUT', 'CANCELPOLICY', obj, '').subscribe((response: any) => {
      if (response.status === 1) {
        let salon = JSON.parse(localStorage.getItem('salon'));
        _.extend(salon, obj);
        localStorage.setItem('salon', JSON.stringify(salon));
        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
      } else {
        console.log(response);
        this.errService.handleError(response.err.errCode)
      }
    });
  }
}


@Component({
  selector: 'settings-dialog',
  templateUrl: 'settings-dialog.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsDialog {
  id: any;
  func: any;
  msg: any;
  btn: any;
  cncl: any;
  email: string
  place: any;
  constructor(public dialogRef: MatDialogRef<SettingsDialog>, ) { }


  ngOnInit(): void {

  }

  submit() {
    console.log(this.email);

  }

  close(val) {
    console.log(val);

    this.dialogRef.close(val);
  }
}


