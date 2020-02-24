import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelpolicyRoutingModule } from './cancelpolicy-routing.module';
import { CancelpolicyComponent } from './cancelpolicy.component';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CancelpolicyComponent],
  imports: [
    CommonModule,
    CancelpolicyRoutingModule,
    SharedModule,
    ApplicationpipeModule,
  ],
  providers :[TranslatePipe],
})
export class CancelpolicyModule { }
