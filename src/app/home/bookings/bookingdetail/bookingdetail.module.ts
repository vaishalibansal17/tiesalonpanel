import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingdetailRoutingModule } from './bookingdetail-routing.module';
import { BookingdetailComponent, BookingEmailDialogPopup } from './bookingdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MAP } from 'src/app/shared/constants/constant';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


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
    ApplicationpipeModule,
  ],
  providers: [TranslatePipe],
  entryComponents: [BookingEmailDialogPopup]

})
export class BookingdetailModule { }
