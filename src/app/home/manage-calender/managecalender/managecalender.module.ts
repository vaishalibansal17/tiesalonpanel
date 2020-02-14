import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderRoutingModule } from './managecalender-routing.module';
import { ManagecalenderComponent } from './managecalender.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [ManagecalenderComponent],
  imports: [
    CommonModule,
    ManagecalenderRoutingModule,
    FullCalendarModule
  ]
})
export class ManagecalenderModule { }
