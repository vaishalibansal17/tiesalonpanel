import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from 'src/app/shared/service/translate.service';
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
  constructor(public dialog: MatDialog, private trns: TranslateService,) {}

  appointments: Appointment[] = [
    {value: '15-minutes', viewValue: 'On 15 minute intervals'},
    {value: '30-minutes', viewValue: 'On 30 minute intervals'},
    {value: 'hourly', viewValue: 'On hourly intervals'},
    {value: 'service-duration', viewValue: 'Based on service duration'},
  ];
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, { width: '500px', disableClose: true });

  }
  
  openDialog2() {
    const dialogRef = this.dialog.open(DialogBookingSettings, { width: '500px', disableClose: true });

  }

  ngOnInit() {
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.lang = lang;
    this.trns.use(this.lang);
  }

}

@Component({
  selector: 'settings-dialog.component',
  templateUrl: 'settings-dialog.component.html',
  styleUrls: ['./settings.component.scss']
})
export class DialogContentExampleDialog {
  constructor(){

  }
}


@Component({
  selector: 'settings-bookings',
  templateUrl: 'settings-bookings.html',
  styleUrls: ['./settings.component.scss']
})
export class DialogBookingSettings {
  constructor(){

  }
}




