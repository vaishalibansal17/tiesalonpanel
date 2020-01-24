import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofileRoutingModule } from './editprofile-routing.module';
import { EditprofileComponent } from './editprofile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditprofileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditprofileRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
      libraries: ["places"]
    }),
  ]
})
export class EditprofileModule { }
