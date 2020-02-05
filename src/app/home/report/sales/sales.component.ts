import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  invoice: string;
  service: string;
  serviceat: string;
  date: string;
  amount: string;
  // action: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'invoice', 'service', 'serviceat', 'date', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$100' },
  {position: 2, name: 'Allen', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$86' },
  {position: 3, name: 'Jane Doe', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Clinic', date:'22 Oct, 2019', amount:'$100' },
  {position: 4, name: 'Allen', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$100' },
  {position: 5, name: 'Jane Doe', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$100' },
  {position: 6, name: 'Allen', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Clinic', date:'22 Oct, 2019', amount:'$86' },
  {position: 7, name: 'Jane Doe', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$100' },
  {position: 8, name: 'Jane Doe', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Home', date:'22 Oct, 2019', amount:'$100' },
  {position: 9, name: 'Allen', invoice:'#TIE1234', service:'Haircut, Hair Spa', serviceat:'Clinic', date:'22 Oct, 2019', amount:'$86' },
];
