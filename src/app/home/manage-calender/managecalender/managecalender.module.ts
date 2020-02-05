import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderRoutingModule } from './managecalender-routing.module';
import { ManagecalenderComponent } from './managecalender.component';


@NgModule({
  declarations: [ManagecalenderComponent],
  imports: [
    CommonModule,
    ManagecalenderRoutingModule
  ]
})
export class ManagecalenderModule { }
