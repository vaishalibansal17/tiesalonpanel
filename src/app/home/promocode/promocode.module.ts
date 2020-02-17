import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocodeRoutingModule } from './promocode-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PromocodeRoutingModule,
    SharedModule
  ]
})
export class PromocodeModule { }
