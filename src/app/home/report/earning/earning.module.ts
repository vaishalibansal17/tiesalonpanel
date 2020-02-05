import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningRoutingModule } from './earning-routing.module';
import { EarningComponent } from './earning.component';


@NgModule({
  declarations: [EarningComponent],
  imports: [
    CommonModule,
    EarningRoutingModule
  ]
})
export class EarningModule { }
