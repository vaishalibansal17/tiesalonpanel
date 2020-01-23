import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers:[]
})
export class SidebarModule { }
