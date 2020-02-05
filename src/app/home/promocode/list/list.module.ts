import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent, PromoDeleteDialogBox } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


@NgModule({
  declarations: [ListComponent, PromoDeleteDialogBox],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe, DatePipe],
  entryComponents: [ PromoDeleteDialogBox ]
})
export class ListModule { }
