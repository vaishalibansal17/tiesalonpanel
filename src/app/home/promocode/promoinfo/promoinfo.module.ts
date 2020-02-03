import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoinfoRoutingModule } from './promoinfo-routing.module';
import { PromoinfoComponent } from './promoinfo.component';


@NgModule({
  declarations: [PromoinfoComponent],
  imports: [
    CommonModule,
    PromoinfoRoutingModule
  ]
})
export class PromoinfoModule { }
