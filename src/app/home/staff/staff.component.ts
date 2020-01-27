import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  photo: number;
  email: string;
  number: number;
  rating: number;
  action: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})



export class StaffComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'photo', 'email', 'number', 'rating', 'action' ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', photo: 1.0079, email: 'H', number: 1325, rating: 13214, action:'fdg' },
];
