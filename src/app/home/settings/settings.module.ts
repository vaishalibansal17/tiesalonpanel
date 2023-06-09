import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent, SettingsDialog,  } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettingsComponent, SettingsDialog],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    ApplicationpipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TranslatePipe],
  entryComponents : [SettingsDialog]
})
export class SettingsModule { }
