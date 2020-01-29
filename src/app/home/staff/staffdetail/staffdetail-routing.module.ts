import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffdetailComponent } from './staffdetail.component';

const routes: Routes = [{
  path:'', component: StaffdetailComponent,
  children:[ { path: 'review', loadChildren: () => import('./staffreview/staffreview.module').then(mod => mod.StaffreviewModule), data: { title: "Review", status: false } }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffdetailRoutingModule { }
