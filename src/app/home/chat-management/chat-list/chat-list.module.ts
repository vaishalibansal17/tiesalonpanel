import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatListRoutingModule } from './chat-list-routing.module';
import { ChatListComponent } from './chat-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatDetailComponent } from '../chat-detail/chat-detail.component';


@NgModule({
  declarations: [ChatListComponent, ChatDetailComponent],
  imports: [
    CommonModule,
    ChatListRoutingModule,
    SharedModule
  ]
})
export class ChatListModule { }
