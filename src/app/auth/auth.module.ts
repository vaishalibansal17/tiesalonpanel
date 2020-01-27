import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [AuthComponent, HeaderComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AuthModule { }
