import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.scss']
})

export class BookingdetailComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('-----');
    
    const dialogRef = this.dialog.open(BookingEmailDialogPopup, { width: '500px', disableClose: true });

  }

  ngOnInit() {
  }

}


@Component({
  selector: 'booking-email',
  templateUrl: 'booking-email.html',
  styleUrls: ['./bookingdetail.component.scss']
})
export class BookingEmailDialogPopup {
  constructor(){

  }
}