import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoaddRoutingModule } from './promoadd-routing.module';
import { PromoaddComponent } from './promoadd.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PromoaddComponent],
  imports: [
    CommonModule,
    PromoaddRoutingModule,
    SharedModule
  ]
})
export class PromoaddModule { }
