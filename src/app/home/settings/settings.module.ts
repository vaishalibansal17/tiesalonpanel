import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent, DialogContentExampleDialog, DialogBookingSettings } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SettingsComponent, DialogContentExampleDialog, DialogBookingSettings],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  entryComponents : [DialogContentExampleDialog, DialogBookingSettings]
})
export class SettingsModule { }
