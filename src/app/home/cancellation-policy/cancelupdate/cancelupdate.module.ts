import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelupdateRoutingModule } from './cancelupdate-routing.module';
import { CancelupdateComponent } from './cancelupdate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CancelupdateComponent],
  imports: [
    CommonModule,
    CancelupdateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CancelupdateModule { }
