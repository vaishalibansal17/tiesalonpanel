import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCalenderRoutingModule } from './manage-calender-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageCalenderRoutingModule,
    SharedModule
  ]
})
export class ManageCalenderModule { }
