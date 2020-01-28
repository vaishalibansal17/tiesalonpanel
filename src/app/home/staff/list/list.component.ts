import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  photo: string;
  email: string;
  number: number;
  rating: string;
  action: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'photo', 'email', 'number', 'rating', 'action' ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action:'Action Button' },
  {position: 2, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action:'Action Button' },
  {position: 3, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action:'Action Button' },
  {position: 4, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action:'Action Button' },
  {position: 5, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action:'Action Button' },

];
