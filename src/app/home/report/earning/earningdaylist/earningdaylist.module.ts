import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningdaylistRoutingModule } from './earningdaylist-routing.module';
import { EarningdaylistComponent } from './earningdaylist.component';


@NgModule({
  declarations: [EarningdaylistComponent],
  imports: [
    CommonModule,
    EarningdaylistRoutingModule
  ]
})
export class EarningdaylistModule { }
