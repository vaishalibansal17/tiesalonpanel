import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningmonthlistRoutingModule } from './earningmonthlist-routing.module';
import { EarningmonthlistComponent } from './earningmonthlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EarningmonthlistComponent],
  imports: [
    CommonModule,
    EarningmonthlistRoutingModule,
    SharedModule
  ]
})
export class EarningmonthlistModule { }
