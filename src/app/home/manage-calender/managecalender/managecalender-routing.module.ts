import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecalenderComponent } from './managecalender.component';


const routes: Routes = [{path:'', component: ManagecalenderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagecalenderRoutingModule { }
