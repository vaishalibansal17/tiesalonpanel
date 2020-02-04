import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkinglistRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    WalkinglistRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
