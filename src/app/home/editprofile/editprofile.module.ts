import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofileRoutingModule } from './editprofile-routing.module';
import { EditprofileComponent } from './editprofile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditprofileComponent],
  imports: [
    CommonModule,
    EditprofileRoutingModule,
    SharedModule
  ]
})
export class EditprofileModule { }
