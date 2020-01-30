import { Component, OnInit } from '@angular/core';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addbookings',
  templateUrl: './addbookings.component.html',
  styleUrls: ['./addbookings.component.scss']
})
export class AddbookingsComponent implements OnInit {
  servicea: Service[] = [
    { value: '1', viewValue: 'Hair Spa' },
    { value: '2', viewValue: 'Spa' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
