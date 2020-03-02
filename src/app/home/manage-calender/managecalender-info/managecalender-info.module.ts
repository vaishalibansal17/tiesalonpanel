import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderInfoRoutingModule } from './managecalender-info-routing.module';
import { ManagecalenderInfoComponent } from './managecalender-info.component';
import { AgmCoreModule } from '@agm/core';
import { MAP } from 'src/app/shared/constants/constant';


@NgModule({
  declarations: [ManagecalenderInfoComponent],
  imports: [
    CommonModule,
    ManagecalenderInfoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: MAP.KEY,
      libraries: [MAP.type]
    }),
  ]
})
export class ManagecalenderInfoModule { }
