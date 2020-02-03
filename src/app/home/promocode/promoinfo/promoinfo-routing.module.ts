import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoinfoComponent } from './promoinfo.component';


const routes: Routes = [{path:'', component: PromoinfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoinfoRoutingModule { }
