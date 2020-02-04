import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetFreelancerRoutingModule } from './reset-freelancer-routing.module';
import { ResetFreelancerComponent } from './reset-freelancer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { AuthHeaderModule } from '../auth/auth-header/auth-header.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';


@NgModule({
  declarations: [ResetFreelancerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResetFreelancerRoutingModule,
    SharedModule,
    AuthHeaderModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe],
})
export class ResetFreelancerModule { }
