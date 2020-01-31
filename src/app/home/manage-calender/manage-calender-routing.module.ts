import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCalenderComponent } from './manage-calender.component';


const routes: Routes = [{
  path: '', component: ManageCalenderComponent,
  data: { title: "Manage Calender" },
  children: [
    { path: '', loadChildren: () => import('./managecalender/managecalender.module').then(mod => mod.ManagecalenderModule), data: { title: "Manage Calender", status: false } },
    { path: 'calender-list', loadChildren: () => import('./managecalender-list/managecalender-list.module').then(mod => mod.ManagecalenderListModule), data: { title: "Calender List", status: false } },
    { path: 'calender-info', loadChildren: () => import('./managecalender-info/managecalender-info.module').then(mod => mod.ManagecalenderInfoModule), data: { title: "Calender Info", status: false } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCalenderRoutingModule { }
