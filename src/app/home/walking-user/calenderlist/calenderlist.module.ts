import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderlistRoutingModule } from './calenderlist-routing.module';
import { CalenderlistComponent,CalenderActionDialogBox } from './calenderlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CalenderlistComponent, CalenderActionDialogBox],
  imports: [
    CommonModule,
    CalenderlistRoutingModule,
    SharedModule
  ],
  entryComponents: [ CalenderActionDialogBox ]
})
export class CalenderlistModule { }
