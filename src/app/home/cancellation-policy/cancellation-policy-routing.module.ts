import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancellationPolicyComponent } from './cancellation-policy.component';


const routes: Routes = [{path:'', component:CancellationPolicyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancellationPolicyRoutingModule { }
