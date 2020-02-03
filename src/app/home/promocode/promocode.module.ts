import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocodeRoutingModule } from './promocode-routing.module';
import { PromocodeComponent } from './promocode.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PromocodeComponent],
  imports: [
    CommonModule,
    PromocodeRoutingModule,
    SharedModule
  ]
})
export class PromocodeModule { }
