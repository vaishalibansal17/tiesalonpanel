import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetFreelancerComponent } from './reset-freelancer.component';


const routes: Routes = [{path:'', component:ResetFreelancerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetFreelancerRoutingModule { }
