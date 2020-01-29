import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetfreelancerRoutingModule } from './resetfreelancer-routing.module';
import { ResetfreelancerComponent } from './resetfreelancer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ResetfreelancerComponent],
  imports: [
    CommonModule,
    ResetfreelancerRoutingModule,
    SharedModule
  ]
})
export class ResetfreelancerModule { }
