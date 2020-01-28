import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCalenderComponent } from './manage-calender.component';


const routes: Routes = [{path:'', component:ManageCalenderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCalenderRoutingModule { }
