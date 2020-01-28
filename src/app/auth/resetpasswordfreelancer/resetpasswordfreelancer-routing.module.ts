import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordfreelancerComponent } from './resetpasswordfreelancer.component';


const routes: Routes = [{
  path:'', component: ResetpasswordfreelancerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpasswordfreelancerRoutingModule { }
