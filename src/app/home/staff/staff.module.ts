import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent, StaffDeleteDialogBox } from './staff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [StaffComponent, StaffDeleteDialogBox],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule
  ],
  entryComponents : [StaffDeleteDialogBox]

})
export class StaffModule { }
