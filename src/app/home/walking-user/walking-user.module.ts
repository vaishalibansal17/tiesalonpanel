import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkingUserRoutingModule } from './walking-user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WalkingUserRoutingModule,
    SharedModule
  ]
})
export class WalkingUserModule { }
