import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./list/list.module').then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add', loadChildren: () => import('./add/add.module').then(mod => mod.AddModule), data: { title: "Add", status: false } },
    { path: 'info/:id', loadChildren: () => import('./info/info.module').then(mod => mod.InfoModule), data: { title: "Offers", status: false } },
    { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then(mod => mod.EditModule), data: { title: "Edit", status: false } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocodeRoutingModule { }
