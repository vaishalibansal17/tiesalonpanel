import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklylistRoutingModule } from './weeklylist-routing.module';
import { WeeklylistComponent } from './weeklylist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WeeklylistComponent],
  imports: [
    CommonModule,
    WeeklylistRoutingModule,
    SharedModule
  ]
})
export class WeeklylistModule { }
