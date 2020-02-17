import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe]
})
export class EditModule { }
