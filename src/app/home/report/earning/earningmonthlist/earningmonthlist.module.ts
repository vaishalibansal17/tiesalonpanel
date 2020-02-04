import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningmonthlistRoutingModule } from './earningmonthlist-routing.module';
import { EarningmonthlistComponent } from './earningmonthlist.component';


@NgModule({
  declarations: [EarningmonthlistComponent],
  imports: [
    CommonModule,
    EarningmonthlistRoutingModule
  ]
})
export class EarningmonthlistModule { }
