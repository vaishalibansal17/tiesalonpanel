import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderdetailComponent } from './calenderdetail.component';


const routes: Routes = [{path:'', component: CalenderdetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderdetailRoutingModule { }
