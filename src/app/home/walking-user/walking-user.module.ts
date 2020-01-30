import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkingUserRoutingModule } from './walking-user-routing.module';
import { WalkingUserComponent } from './walking-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WalkingUserComponent],
  imports: [
    CommonModule,
    WalkingUserRoutingModule,
    SharedModule
  ]
})
export class WalkingUserModule { }
