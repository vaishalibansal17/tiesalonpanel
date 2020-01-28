import { Component, OnInit } from '@angular/core';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {
services: Service[] = [
  {value: 'hair-cut', viewValue: 'Hair Cut'},
  {value: 'spa', viewValue: 'Spa'},
];

  constructor() { }

  ngOnInit() {
  }

}
