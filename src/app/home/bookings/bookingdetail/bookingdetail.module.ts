import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingdetailRoutingModule } from './bookingdetail-routing.module';
import { BookingdetailComponent } from './bookingdetail.component';


@NgModule({
  declarations: [BookingdetailComponent],
  imports: [
    CommonModule,
    BookingdetailRoutingModule
  ]
})
export class BookingdetailModule { }
