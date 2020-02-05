import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarningmonthlistComponent } from './earningmonthlist.component';

const routes: Routes = [{path:'', component: EarningmonthlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningmonthlistRoutingModule { }
