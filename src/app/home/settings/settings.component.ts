import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, { width: '500px', disableClose: true });

  }
  
  openDialog2() {
    const dialogRef = this.dialog.open(DialogBookingSettings, { width: '500px', disableClose: true });

  }

  ngOnInit() {
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




