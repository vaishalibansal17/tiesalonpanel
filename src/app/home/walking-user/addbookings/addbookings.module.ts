import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbookingsRoutingModule } from './addbookings-routing.module';
import { AddbookingsComponent } from './addbookings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AddbookingsComponent],
  imports: [
    CommonModule,
    AddbookingsRoutingModule,
    SharedModule
  ]
})
export class AddbookingsModule { }
