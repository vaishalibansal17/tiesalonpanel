import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { AgmCoreModule } from '@agm/core';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { MAP } from 'src/app/shared/constants/constant';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: MAP.KEY,
      libraries: [MAP.type]
    }),
    ApplicationpipeModule,
  ],
  providers :[TranslatePipe]
})
export class InfoModule { }
