import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderdetailRoutingModule } from './calenderdetail-routing.module';
import { CalenderdetailComponent } from './calenderdetail.component';


@NgModule({
  declarations: [CalenderdetailComponent],
  imports: [
    CommonModule,
    CalenderdetailRoutingModule
  ]
})
export class CalenderdetailModule { }
