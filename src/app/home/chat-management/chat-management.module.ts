import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatManagementRoutingModule } from './chat-management-routing.module';
import { ChatManagementComponent } from './chat-management.component';


@NgModule({
  declarations: [ChatManagementComponent],
  imports: [
    CommonModule,
    ChatManagementRoutingModule
  ]
})
export class ChatManagementModule { }
