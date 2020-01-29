import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent, BookingDeleteDialogBox } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListComponent, BookingDeleteDialogBox],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ],
  entryComponents : [ BookingDeleteDialogBox ]
})
export class ListModule { }
