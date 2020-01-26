import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewprofileRoutingModule } from './viewprofile-routing.module';
import { ViewprofileComponent } from './viewprofile.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ViewprofileComponent],
  imports: [
    CommonModule,
    ViewprofileRoutingModule,
    SlideshowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
      libraries: ["places"]
    }),
  ]
})
export class ViewprofileModule { }
