import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklylistRoutingModule } from './weeklylist-routing.module';
import { WeeklylistComponent } from './weeklylist.component';


@NgModule({
  declarations: [WeeklylistComponent],
  imports: [
    CommonModule,
    WeeklylistRoutingModule
  ]
})
export class WeeklylistModule { }
