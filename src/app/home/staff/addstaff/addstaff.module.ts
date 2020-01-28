import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstaffRoutingModule } from './addstaff-routing.module';
import { AddstaffComponent } from './addstaff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AddstaffComponent],
  imports: [
    CommonModule,
    AddstaffRoutingModule,
    SharedModule
  ]
})
export class AddstaffModule { }
