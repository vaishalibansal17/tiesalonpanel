import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewprofileRoutingModule } from './viewprofile-routing.module';
import { ViewprofileComponent } from './viewprofile.component';
import { AgmCoreModule } from '@agm/core';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@NgModule({
  declarations: [ViewprofileComponent],
  imports: [
    CommonModule,
    ViewprofileRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
      libraries: ["places"]
    }),
    ApplicationpipeModule
  ],
  providers:[TranslatePipe]
})
export class ViewprofileModule { }
