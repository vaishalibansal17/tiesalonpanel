import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetfreelancerComponent } from './resetfreelancer.component';

const routes: Routes = [{
  path:'', component: ResetfreelancerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetfreelancerRoutingModule { }
