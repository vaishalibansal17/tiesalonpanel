import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkingUserRoutingModule } from './walking-user-routing.module';
import { WalkingUserComponent } from './walking-user.component';


@NgModule({
  declarations: [WalkingUserComponent],
  imports: [
    CommonModule,
    WalkingUserRoutingModule
  ]
})
export class WalkingUserModule { }
