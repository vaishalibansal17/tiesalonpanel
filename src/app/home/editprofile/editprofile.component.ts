import { Component, OnInit } from '@angular/core';

export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent implements OnInit {
  services: Service[] = [
    {value: 'hair-cut', viewValue: 'Hair Cut'},
    {value: 'spa', viewValue: 'Spa'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
