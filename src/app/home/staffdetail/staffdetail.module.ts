import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffdetailRoutingModule } from './staffdetail-routing.module';
import { StaffdetailComponent } from './staffdetail.component';


@NgModule({
  declarations: [StaffdetailComponent],
  imports: [
    CommonModule,
    StaffdetailRoutingModule
  ]
})
export class StaffdetailModule { }
