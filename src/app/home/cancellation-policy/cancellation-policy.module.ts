import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationPolicyRoutingModule } from './cancellation-policy-routing.module';
import { CancellationPolicyComponent } from './cancellation-policy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CancellationPolicyComponent],
  imports: [
    CommonModule,
    CancellationPolicyRoutingModule,
    SharedModule
  ]
})
export class CancellationPolicyModule { }
