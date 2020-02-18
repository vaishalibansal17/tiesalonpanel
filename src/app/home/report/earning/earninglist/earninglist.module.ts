import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarninglistRoutingModule } from './earninglist-routing.module';
import { EarninglistComponent } from './earninglist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EarninglistComponent],
  imports: [
    CommonModule,
    EarninglistRoutingModule,
    SharedModule
  ]
})
export class EarninglistModule { }
