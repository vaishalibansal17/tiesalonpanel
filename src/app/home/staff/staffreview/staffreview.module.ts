import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffreviewRoutingModule } from './staffreview-routing.module';
import { StaffreviewComponent } from './staffreview.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { RatingModule } from 'ng-starrating';
import { NgxStarsModule } from 'ngx-stars';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@NgModule({
  declarations: [StaffreviewComponent],
  imports: [
    CommonModule,
    StaffreviewRoutingModule,
    SharedModule,
    RatingModule,
    NgxStarsModule,
    ApplicationpipeModule
  ], providers:[TranslatePipe]
})
export class StaffreviewModule { }
