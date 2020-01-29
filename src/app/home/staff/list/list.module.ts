import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent, StaffDeleteDialogBox,  } from './list.component';


@NgModule({
  declarations: [ListComponent, StaffDeleteDialogBox],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ],
  entryComponents : [ StaffDeleteDialogBox]
})
export class ListModule { }
