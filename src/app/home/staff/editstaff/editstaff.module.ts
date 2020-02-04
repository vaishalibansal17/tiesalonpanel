import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstaffRoutingModule } from './editstaff-routing.module';
import { EditstaffComponent } from './editstaff.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditstaffComponent],
  imports: [
    CommonModule,
    EditstaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe]
})
export class EditstaffModule { }
