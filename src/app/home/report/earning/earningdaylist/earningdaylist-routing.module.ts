import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarningdaylistComponent } from './earningdaylist.component';

const routes: Routes = [{path:'', component: EarningdaylistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningdaylistRoutingModule { }
