import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffdetailComponent } from './staffdetail.component';

const routes: Routes = [{
  path:'', component: StaffdetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffdetailRoutingModule { }
