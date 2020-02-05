import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelpolicyRoutingModule } from './cancelpolicy-routing.module';
import { CancelpolicyComponent } from './cancelpolicy.component';


@NgModule({
  declarations: [CancelpolicyComponent],
  imports: [
    CommonModule,
    CancelpolicyRoutingModule
  ]
})
export class CancelpolicyModule { }
