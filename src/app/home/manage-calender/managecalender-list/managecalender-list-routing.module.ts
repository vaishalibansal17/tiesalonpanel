import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecalenderListComponent } from './managecalender-list.component';


const routes: Routes = [{path:'', component: ManagecalenderListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagecalenderListRoutingModule { }
