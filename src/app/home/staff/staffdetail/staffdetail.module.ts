import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffdetailRoutingModule } from './staffdetail-routing.module';
import { StaffdetailComponent } from './staffdetail.component';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  declarations: [StaffdetailComponent],
  imports: [
    CommonModule,
    StaffdetailRoutingModule,
    ApplicationpipeModule,
    NgxStarsModule
  ],providers:[TranslatePipe]
})
export class StaffdetailModule { }
