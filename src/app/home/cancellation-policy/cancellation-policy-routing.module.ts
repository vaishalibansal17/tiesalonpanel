import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancellationPolicyComponent } from './cancellation-policy.component';


const routes: Routes = [{
  path: '', component: CancellationPolicyComponent,
  data: { title: "Cancellation Policy" },
  children: [
    { path: '', loadChildren: () => import('./cancelpolicy/cancelpolicy.module').then(mod => mod.CancelpolicyModule), },
    { path: 'update-policy', loadChildren: () => import('./cancelupdate/cancelupdate.module').then(mod => mod.CancelupdateModule), data: { title: "Update Policy", status: false } },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancellationPolicyRoutingModule { }
