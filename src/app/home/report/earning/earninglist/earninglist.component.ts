import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  discount: string;
  service: string;
  amountpre: string;
  date: string;
  amountpost: string;
  code: string;
  amount: string;
  tamount: string;
}
export interface Time {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-earninglist',
  templateUrl: './earninglist.component.html',
  styleUrls: ['./earninglist.component.scss']
})
export class EarninglistComponent implements OnInit {
  times: Time[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'day', viewValue: 'Day'},
    {value: 'week', viewValue: 'Weekly'},
    {value: 'month', viewValue: 'Monthly'},
  ];


  displayedColumns: string[] = ['position', 'name', 'discount', 'service', 'date', 'amountpre', 'amountpost', 'code', 'amount', 'tamount'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 2, name: 'James', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 3, name: 'Jane Doe', discount:'10%', service:'Haircut', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 4, name: 'James', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 5, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 6, name: 'Jane Doe', discount:'10%', service:' Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 7, name: 'James', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 8, name: 'Jane Doe', discount:'10%', service:'Haircut, Hair Spa', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
  {position: 9, name: 'Jane Doe', discount:'10%', service:'Haircut', amountpre:'$180', date:'22 Oct, 2019', amountpost:'$100', code:'New coupon code', amount:'$280', tamount:'$200' },
];
