import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe]
})
export class HeaderModule { }
