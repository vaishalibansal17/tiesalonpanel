import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  photo: string;
  email: string;
  number: number;
  rating: string;
  // action: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'photo', 'email', 'number', 'rating', 'action' ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('-----');
    
    const dialogRef = this.dialog.open(StaffDeleteDialogBox, { width: '500px', disableClose: true });

  }
  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png' },
  {position: 2, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png' },
  {position: 3, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png' },
  {position: 4, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png' },
  {position: 5, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png' },

];


@Component({
  selector: 'staff-delete.component',
  templateUrl: 'staff-delete.component.html',
})
export class StaffDeleteDialogBox {
  constructor(){

  }
}