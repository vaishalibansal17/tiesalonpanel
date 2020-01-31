import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderInfoRoutingModule } from './managecalender-info-routing.module';
import { ManagecalenderInfoComponent } from './managecalender-info.component';


@NgModule({
  declarations: [ManagecalenderInfoComponent],
  imports: [
    CommonModule,
    ManagecalenderInfoRoutingModule
  ]
})
export class ManagecalenderInfoModule { }
