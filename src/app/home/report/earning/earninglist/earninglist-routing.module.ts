import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarninglistComponent } from './earninglist.component';


const routes: Routes = [{path:'', component: EarninglistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarninglistRoutingModule { }
