import { Component, OnInit } from '@angular/core';
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-promoadd',
  templateUrl: './promoadd.component.html',
  styleUrls: ['./promoadd.component.scss']
})
export class PromoaddComponent implements OnInit {
  services: Service[] = [
    {value: 'hair-cut', viewValue: 'Hair Cut'},
    {value: 'spa', viewValue: 'Spa'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
