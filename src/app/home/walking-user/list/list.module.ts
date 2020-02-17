import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkinglistRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    WalkinglistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ApplicationpipeModule
  ], providers:[TranslatePipe]
})
export class ListModule { }
