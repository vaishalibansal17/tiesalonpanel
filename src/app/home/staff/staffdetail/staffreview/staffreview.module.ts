import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffreviewRoutingModule } from './staffreview-routing.module';
import { StaffreviewComponent } from './staffreview.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [StaffreviewComponent],
  imports: [
    CommonModule,
    StaffreviewRoutingModule,
    SharedModule
  ]
})
export class StaffreviewModule { }
