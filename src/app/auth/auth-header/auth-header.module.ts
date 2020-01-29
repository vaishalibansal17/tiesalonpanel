import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AuthHeaderComponent } from './auth-header.component';

@NgModule({
  declarations: [AuthHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [AuthHeaderComponent]
})
export class AuthHeaderModule { }
