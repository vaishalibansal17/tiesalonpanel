import { Component, OnInit } from '@angular/core';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.scss']
})
export class EditstaffComponent implements OnInit {
services: Service[] = [
  {value: 'hair-cut', viewValue: 'Hair Cut'},
  {value: 'spa', viewValue: 'Spa'},
];
  constructor() { }

  ngOnInit() {
  }

}
