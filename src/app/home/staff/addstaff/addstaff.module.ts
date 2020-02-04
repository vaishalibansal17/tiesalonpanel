import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstaffRoutingModule } from './addstaff-routing.module';
import { AddstaffComponent } from './addstaff.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


@NgModule({
  declarations: [AddstaffComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddstaffRoutingModule,
    SharedModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe]
})
export class AddstaffModule { }
