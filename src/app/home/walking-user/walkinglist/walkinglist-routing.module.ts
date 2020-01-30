import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkinglistComponent } from './walkinglist.component';


const routes: Routes = [{path:'', component: WalkinglistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkinglistRoutingModule { }
