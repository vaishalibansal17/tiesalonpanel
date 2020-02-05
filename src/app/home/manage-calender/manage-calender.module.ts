import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCalenderRoutingModule } from './manage-calender-routing.module';
import { ManageCalenderComponent } from './manage-calender.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManageCalenderComponent],
  imports: [
    CommonModule,
    ManageCalenderRoutingModule,
    SharedModule
  ]
})
export class ManageCalenderModule { }
