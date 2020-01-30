import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkinglistRoutingModule } from './walkinglist-routing.module';
import { WalkinglistComponent } from './walkinglist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WalkinglistComponent],
  imports: [
    CommonModule,
    WalkinglistRoutingModule,
    SharedModule
  ]
})
export class WalkinglistModule { }
