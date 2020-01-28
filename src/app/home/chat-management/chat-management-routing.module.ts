import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatManagementComponent } from './chat-management.component';


const routes: Routes = [{path:'', component:ChatManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatManagementRoutingModule { }
