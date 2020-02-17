import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  discount: string;
  service: string;
  serviceat: string;
  date: string;
  status: string;
  code: string;
  amount: string;
  tamount: string;
}
export interface Time {
  value: string;
  viewValue: string;
}
export interface Service {
  value: string;
  viewValue: string;
}
export interface Serviceat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-weeklylist',
  templateUrl: './weeklylist.component.html',
  styleUrls: ['./weeklylist.component.scss']
})
export class WeeklylistComponent implements OnInit {
  times: Time[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'day', viewValue: 'Day'},
    {value: 'week', viewValue: 'Weekly'},
    {value: 'month', viewValue: 'Monthly'},
  ];
  services: Service[] = [
    {value: 'hair-spa', viewValue: 'Hair Spa'},
    {value: 'hair-cut', viewValue: 'Hair Cut'},
  ];
  serviceats: Serviceat[] = [
    {value: 'home', viewValue: 'Home'},
    {value: 'clinic', viewValue: 'Clinic'},
  ];

  displayedColumns: string[] = ['position', 'name', 'discount', 'service', 'serviceat', 'date', 'status', 'code', 'amount', 'tamount'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 2, name: 'James', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 3, name: 'Jane Doe', discount:'10%', service:'Haircut', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 4, name: 'James', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 5, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 6, name: 'Jane Doe', discount:'10%', service:' Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 7, name: 'James', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 8, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 9, name: 'Jane Doe', discount:'10%', service:'Haircut', serviceat:'Home', date:'22 Oct, 2019', status:'completed', code:'New coupon code', amount:'$280', tamount:'$200' },
];
