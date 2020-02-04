import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent, StaffDeleteDialogBox,  } from './list.component';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  declarations: [ListComponent, StaffDeleteDialogBox],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    ApplicationpipeModule,
    NgxStarsModule
  ],
  providers :[TranslatePipe],
  entryComponents : [ StaffDeleteDialogBox]
})
export class ListModule { }
