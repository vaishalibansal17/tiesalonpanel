import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinesshoursRoutingModule } from './businesshours-routing.module';
import { BusinesshoursComponent } from './businesshours.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BusinesshoursComponent],
  imports: [
    CommonModule,
    BusinesshoursRoutingModule,
    SharedModule
  ]
})
export class BusinesshoursModule { }
