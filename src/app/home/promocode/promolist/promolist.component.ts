import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
export interface PeriodicElement {
  position: number;
  coupon: string;
  discount: string;
  service: string;
  added: string;
  uses: string;
  from: string;
  to: string;
}

@Component({
  selector: 'app-promolist',
  templateUrl: './promolist.component.html',
  styleUrls: ['./promolist.component.scss']
})
export class PromolistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'coupon', 'discount', 'service', 'added', 'uses', 'from', 'to', 'action' ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('-----');
    
    const dialogRef = this.dialog.open(PromoDeleteDialogBox, { width: '500px', disableClose: true });

  }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 2, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 3, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 4, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 5, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 6, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },
  {position: 7, coupon: 'New Coupon', discount: '10%', service:'Hair Spa', added:'Salon', uses:'Unlimited', from:'01 Jan, 2020', to:'01 Feb, 2020' },

];


@Component({
  selector: 'promo-delete.component',
  templateUrl: 'promo-delete.component.html',
})
export class PromoDeleteDialogBox {
  constructor(){

  }
}