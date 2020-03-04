import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatManagementComponent } from './chat-management.component';


const routes: Routes = [{
  path: '', component: ChatManagementComponent,
  data: { title: "Chat Management" },
  children: [
    { path: '', loadChildren: () => import('./chat-list/chat-list.module').then(mod => mod.ChatListModule), },
    { path: '', loadChildren: () => import('./chat-detail/chat-detail.module').then(mod => mod.ChatDetailModule), },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatManagementRoutingModule { }
