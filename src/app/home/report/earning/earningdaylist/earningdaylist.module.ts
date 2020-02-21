import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningdaylistRoutingModule } from './earningdaylist-routing.module';
import { EarningdaylistComponent } from './earningdaylist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EarningdaylistComponent],
  imports: [
    CommonModule,
    EarningdaylistRoutingModule,
    SharedModule
  ]
})
export class EarningdaylistModule { }
