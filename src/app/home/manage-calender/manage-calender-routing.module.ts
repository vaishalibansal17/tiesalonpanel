import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./managecalender/managecalender.module').then(mod => mod.ManagecalenderModule), data: { title: "Manage Calender", status: false } },
    { path: 'list/:time', loadChildren: () => import('./managecalender-list/managecalender-list.module').then(mod => mod.ManagecalenderListModule), data: { title: "List", status: false } },
    { path: 'info/:id', loadChildren: () => import('./managecalender-info/managecalender-info.module').then(mod => mod.ManagecalenderInfoModule), data: { title: "Info", status: false } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCalenderRoutingModule { }
