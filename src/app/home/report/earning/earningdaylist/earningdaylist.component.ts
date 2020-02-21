import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  date: string;
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
  selector: 'app-earningdaylist',
  templateUrl: './earningdaylist.component.html',
  styleUrls: ['./earningdaylist.component.scss']
})
export class EarningdaylistComponent implements OnInit {
  times: Time[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'day', viewValue: 'Day'},
    {value: 'week', viewValue: 'Weekly'},
    {value: 'month', viewValue: 'Monthly'},
  ];


  displayedColumns: string[] = ['position', 'date', 'day', 'order', 'avgorder', 'amount', 'tamount'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 2, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 3, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 4, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 5, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 6, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 7, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 8, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
  {position: 9, date: '22 Oct, 2019', day: 'Tuesday', order:20, avgorder:12,  amount:'$280', tamount:'$200' },
];
