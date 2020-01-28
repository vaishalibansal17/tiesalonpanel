import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHeaderModule } from '../auth-header/auth-header.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPasswordRoutingModule,
    MaterialModule,
    SharedModule,
    ApplicationpipeModule,
    AuthHeaderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers:[TranslatePipe]

})
export class ForgotPasswordModule { }
