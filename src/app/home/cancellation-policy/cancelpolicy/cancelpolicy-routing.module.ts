import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelpolicyComponent } from './cancelpolicy.component';


const routes: Routes = [{path:'', component: CancelpolicyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelpolicyRoutingModule { }
