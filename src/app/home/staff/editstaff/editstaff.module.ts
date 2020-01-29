import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstaffRoutingModule } from './editstaff-routing.module';
import { EditstaffComponent } from './editstaff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditstaffComponent],
  imports: [
    CommonModule,
    EditstaffRoutingModule,
    SharedModule
  ]
})
export class EditstaffModule { }
