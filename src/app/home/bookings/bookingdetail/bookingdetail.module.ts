import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingdetailRoutingModule } from './bookingdetail-routing.module';
import { BookingdetailComponent, BookingEmailDialogPopup } from './bookingdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MAP } from 'src/app/shared/constants/constant';


@NgModule({
  declarations: [BookingdetailComponent, BookingEmailDialogPopup],
  imports: [
    CommonModule,
    BookingdetailRoutingModule,
    SharedModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: MAP.KEY,
      libraries: [MAP.type]
    }),
  ],
  entryComponents : [ BookingEmailDialogPopup ]

})
export class BookingdetailModule { }
