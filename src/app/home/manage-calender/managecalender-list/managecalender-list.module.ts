import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderListRoutingModule } from './managecalender-list-routing.module';
import { ManagecalenderListComponent, CalenderActionDialogBox } from './managecalender-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';


@NgModule({
  declarations: [ManagecalenderListComponent, CalenderActionDialogBox],
  imports: [
    CommonModule,
    ManagecalenderListRoutingModule,
    SharedModule,
    ApplicationpipeModule
  ],providers:[TranslatePipe],
  entryComponents: [ CalenderActionDialogBox ]
})
export class ManagecalenderListModule { }
