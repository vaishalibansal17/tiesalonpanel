import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelupdateComponent } from './cancelupdate.component';


const routes: Routes = [{path:'', component: CancelupdateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelupdateRoutingModule { }
