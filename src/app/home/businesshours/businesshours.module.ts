import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinesshoursRoutingModule } from './businesshours-routing.module';
import { BusinesshoursComponent } from './businesshours.component';


@NgModule({
  declarations: [BusinesshoursComponent],
  imports: [
    CommonModule,
    BusinesshoursRoutingModule
  ]
})
export class BusinesshoursModule { }
