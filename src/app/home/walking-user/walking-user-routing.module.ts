import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkingUserComponent } from './walking-user.component';


const routes: Routes = [{path:'', component:WalkingUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkingUserRoutingModule { }
