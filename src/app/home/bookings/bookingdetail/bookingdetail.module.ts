import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingdetailRoutingModule } from './bookingdetail-routing.module';
import { BookingdetailComponent, BookingEmailDialogPopup } from './bookingdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BookingdetailComponent, BookingEmailDialogPopup],
  imports: [
    CommonModule,
    BookingdetailRoutingModule,
    SharedModule
  ],
  entryComponents : [ BookingEmailDialogPopup ]

})
export class BookingdetailModule { }
