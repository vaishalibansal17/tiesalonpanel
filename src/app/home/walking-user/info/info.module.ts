import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHEv0pFxjFfAOWbrLVw1szHKb2aakZ3YU',
      libraries: ["places"]
    }),
  ]
})
export class InfoModule { }
