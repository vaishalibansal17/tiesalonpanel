import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent,],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule, ApplicationpipeModule,
  ],
  providers :[TranslatePipe],
  entryComponents : [ ]
})
export class ListModule { }
