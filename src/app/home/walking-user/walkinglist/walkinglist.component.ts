import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  service: string;
  staff: string;
  number: number;
  status: string;
  time: string;
  bookingid: string;
  date: string;
}

export interface Walkinglist {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-walkinglist',
  templateUrl: './walkinglist.component.html',
  styleUrls: ['./walkinglist.component.scss']
})
export class WalkinglistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'service', 'staff', 'number', 'status', 'time', 'bookingid', 'date' ];
  dataSource = ELEMENT_DATA;

  walkinglists: Walkinglist[] = [
    { value: '1', viewValue: 'All Bookings' },
    { value: '2', viewValue: 'New Bookings' },
    { value: '3', viewValue: 'Accepted Bookings' },
    { value: '4', viewValue: 'In-Process Bookings' },
    { value: '5', viewValue: 'Completed Bookings' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe',service: 'Haircut, Hair Spa', staff:'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 2, name: 'Jane Doe',service: 'Haircut, Hair Spa', staff:'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 3, name: 'Jane Doe',service: 'Haircut, Hair Spa', staff:'Allen', number: +919999999999, status: '--', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 4, name: 'Jane Doe',service: 'Haircut', staff:'James', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 5, name: 'Jane Doe',service: 'Massage', staff:'Allen', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 6, name: 'Jane Doe',service: 'Haircut', staff:'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 7, name: 'Jane Doe',service: 'Haircut, Hair Spa', staff:'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'},
  {position: 8, name: 'Jane Doe',service: 'Massage', staff:'Allen', number: +919999999999, status: 'Rejected', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019'}

];
