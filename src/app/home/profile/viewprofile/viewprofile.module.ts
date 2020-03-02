import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewprofileRoutingModule } from './viewprofile-routing.module';
import { ViewprofileComponent } from './viewprofile.component';
import { AgmCoreModule } from '@agm/core';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxStarsModule } from 'ngx-stars';
import { MAP } from 'src/app/shared/constants/constant';

@NgModule({
  declarations: [ViewprofileComponent],
  imports: [
    CommonModule,
    ViewprofileRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: MAP.KEY,
      libraries: [MAP.type]
    }),
    ApplicationpipeModule,
    SharedModule,
    NgxStarsModule
  ],
  providers:[TranslatePipe]
})
export class ViewprofileModule { }
