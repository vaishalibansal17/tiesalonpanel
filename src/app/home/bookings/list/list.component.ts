import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
export interface PeriodicElement {
  name: string;
  position: number;
  service: string;
  serviceat: string;
  staff: string;
  number: number;
  status: string;
  time: string;
  bookingid: string;
  date: string;
}
export interface Booking {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'time', 'bookingid', 'date', 'action' ];
  dataSource = ELEMENT_DATA;

  bookings: Booking[] = [
    { value: '1', viewValue: 'All Bookings' },
    { value: '2', viewValue: 'New Bookings' },
    { value: '3', viewValue: 'Accepted Bookings' },
    { value: '4', viewValue: 'In-Process Bookings' },
    { value: '5', viewValue: 'Completed Bookings' },
  ];
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('-----');
    
    const dialogRef = this.dialog.open(BookingDeleteDialogBox, { width: '500px', disableClose: true });

  }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe',service: 'Haircut, Hair Spa', serviceat: 'Salon', staff:'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 2, name: 'Jane Doe',service: 'Haircut, Hair Spa', serviceat: 'Home', staff:'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 3, name: 'Jane Doe',service: 'Haircut, Hair Spa', serviceat: 'Salon', staff:'Allen', number: +919999999999, status: '--', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 4, name: 'Jane Doe',service: 'Haircut', serviceat: 'Home', staff:'James', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 5, name: 'Jane Doe',service: 'Massage', serviceat: 'Salon', staff:'Allen', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 6, name: 'Jane Doe',service: 'Haircut', serviceat: 'Home', staff:'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 7, name: 'Jane Doe',service: 'Haircut, Hair Spa', serviceat: 'Salon', staff:'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 8, name: 'Jane Doe',service: 'Massage', serviceat: 'Home', staff:'Allen', number: +919999999999, status: 'Rejected', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'}

];


@Component({
  selector: 'booking-delete.component',
  templateUrl: 'booking-delete.component.html',
})
export class BookingDeleteDialogBox {
  constructor(){

  }
}