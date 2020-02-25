import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbookingsRoutingModule } from './addbookings-routing.module';
import { AddbookingsComponent } from './addbookings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [AddbookingsComponent],
  imports: [
    CommonModule,
    AddbookingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CalendarModule,
    ApplicationpipeModule,
  ],
  providers :[TranslatePipe]
})
export class AddbookingsModule { }
