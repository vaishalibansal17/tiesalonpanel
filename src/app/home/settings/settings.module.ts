import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent, DialogContentExampleDialog, DialogBookingSettings } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';


@NgModule({
  declarations: [SettingsComponent, DialogContentExampleDialog, DialogBookingSettings],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe],
  entryComponents : [DialogContentExampleDialog, DialogBookingSettings]
})
export class SettingsModule { }
