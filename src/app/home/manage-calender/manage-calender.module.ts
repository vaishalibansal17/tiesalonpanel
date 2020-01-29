import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCalenderRoutingModule } from './manage-calender-routing.module';
import { ManageCalenderComponent } from './manage-calender.component';


@NgModule({
  declarations: [ManageCalenderComponent],
  imports: [
    CommonModule,
    ManageCalenderRoutingModule
  ]
})
export class ManageCalenderModule { }
