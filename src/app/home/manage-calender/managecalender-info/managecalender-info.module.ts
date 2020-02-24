import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecalenderInfoRoutingModule } from './managecalender-info-routing.module';
import { ManagecalenderInfoComponent } from './managecalender-info.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ManagecalenderInfoComponent],
  imports: [
    CommonModule,
    ManagecalenderInfoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHEv0pFxjFfAOWbrLVw1szHKb2aakZ3YU',
      libraries: ["places"]
    }),
  ]
})
export class ManagecalenderInfoModule { }
