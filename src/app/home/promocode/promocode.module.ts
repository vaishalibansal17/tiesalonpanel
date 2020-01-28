import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocodeRoutingModule } from './promocode-routing.module';
import { PromocodeComponent } from './promocode.component';


@NgModule({
  declarations: [PromocodeComponent],
  imports: [
    CommonModule,
    PromocodeRoutingModule
  ]
})
export class PromocodeModule { }
