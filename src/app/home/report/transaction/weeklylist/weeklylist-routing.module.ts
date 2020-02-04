import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeklylistComponent } from './weeklylist.component';


const routes: Routes = [{path:'', component: WeeklylistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklylistRoutingModule { }
