import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule,
    ApplicationModule
  ], providers:[TranslatePipe]
})
export class BookingsModule { }