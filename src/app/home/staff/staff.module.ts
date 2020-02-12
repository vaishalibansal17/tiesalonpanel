import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule,
  ],
  entryComponents : []

})
export class StaffModule { }
