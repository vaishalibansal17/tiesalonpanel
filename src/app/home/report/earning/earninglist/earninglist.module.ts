import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarninglistRoutingModule } from './earninglist-routing.module';
import { EarninglistComponent } from './earninglist.component';


@NgModule({
  declarations: [EarninglistComponent],
  imports: [
    CommonModule,
    EarninglistRoutingModule
  ]
})
export class EarninglistModule { }
