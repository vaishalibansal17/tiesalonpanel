import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderListRoutingModule } from './managecalender-list-routing.module';
import { ManagecalenderListComponent, CalenderActionDialogBox } from './managecalender-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManagecalenderListComponent, CalenderActionDialogBox],
  imports: [
    CommonModule,
    ManagecalenderListRoutingModule,
    SharedModule
  ],
  entryComponents: [ CalenderActionDialogBox ]
})
export class ManagecalenderListModule { }
