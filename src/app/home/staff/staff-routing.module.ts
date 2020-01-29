import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./list/list.module').then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add', loadChildren: () => import('./addstaff/addstaff.module').then(mod => mod.AddstaffModule), data: { title: "Add", status: false } },
    { path: 'edit', loadChildren: () => import('./editstaff/editstaff.module').then(mod => mod.EditstaffModule), data: { title: "Edit", status: false } },
    { path: 'info', loadChildren: () => import('./staffdetail/staffdetail.module').then(mod => mod.StaffdetailModule), data: { title: "Info", status: false } },
    { path: 'info/review', loadChildren: () => import('./staffreview/staffreview.module').then(mod => mod.StaffreviewModule), data: { title: "Info / Review", status: false } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
