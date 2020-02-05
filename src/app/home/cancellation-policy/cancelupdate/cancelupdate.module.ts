import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelupdateRoutingModule } from './cancelupdate-routing.module';
import { CancelupdateComponent } from './cancelupdate.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CancelupdateComponent],
  imports: [
    CommonModule,
    CancelupdateRoutingModule,
    SharedModule
  ]
})
export class CancelupdateModule { }
