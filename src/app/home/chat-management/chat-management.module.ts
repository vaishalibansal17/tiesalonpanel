import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatManagementRoutingModule } from './chat-management-routing.module';
import { ChatManagementComponent } from './chat-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ChatManagementComponent],
  imports: [
    CommonModule,
    ChatManagementRoutingModule,
    SharedModule
  ]
})
export class ChatManagementModule { }
