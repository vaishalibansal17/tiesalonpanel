import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  month: string;
  day: string;
  order: number;
  avgorder: number;
  amount: string;
  tamount: string;
}
export interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-earningmonthlist',
  templateUrl: './earningmonthlist.component.html',
  styleUrls: ['./earningmonthlist.component.scss']
})
export class EarningmonthlistComponent implements OnInit {
  times: Time[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'day', viewValue: 'Day'},
    {value: 'week', viewValue: 'Weekly'},
    {value: 'month', viewValue: 'Monthly'},
  ];


  displayedColumns: string[] = ['position', 'month', 'day', 'order', 'avgorder', 'amount', 'tamount'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, month: 'January, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 2, month: 'February, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 3, month: 'March, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 4, month: 'April, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 5, month: 'May, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 6, month: 'June, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 7, month: 'July, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 8, month: 'August, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
];
