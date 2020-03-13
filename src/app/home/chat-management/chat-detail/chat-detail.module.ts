import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDetailRoutingModule } from './chat-detail-routing.module';
import { ChatDetailComponent } from './chat-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ChatDetailComponent],
  imports: [
    CommonModule,
    ChatDetailRoutingModule,
    SharedModule
  ]
})
export class ChatDetailModule { }
