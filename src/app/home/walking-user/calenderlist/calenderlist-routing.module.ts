import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderlistComponent } from './calenderlist.component';


const routes: Routes = [{path:'', component: CalenderlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderlistRoutingModule { }
