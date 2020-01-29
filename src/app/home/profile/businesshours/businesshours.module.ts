import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinesshoursRoutingModule } from './businesshours-routing.module';
import { BusinesshoursComponent } from './businesshours.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [BusinesshoursComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusinesshoursRoutingModule,
    SharedModule,
    CalendarModule
  ]
})
export class BusinesshoursModule { }
