import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderlistRoutingModule } from './calenderlist-routing.module';
import { CalenderlistComponent } from './calenderlist.component';


@NgModule({
  declarations: [CalenderlistComponent],
  imports: [
    CommonModule,
    CalenderlistRoutingModule
  ]
})
export class CalenderlistModule { }
