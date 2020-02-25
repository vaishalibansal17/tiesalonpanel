import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./list/list.module').then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add-user', loadChildren: () => import('./add/add.module').then(mod => mod.AddModule), data: { title: "Add customer", status: false } },
    { path: 'add-booking', loadChildren: () => import('./addbookings/addbookings.module').then(mod => mod.AddbookingsModule), data: { title: "Add Booking", status: false } },
    { path: 'info/:id', loadChildren: () => import('./info/info.module').then(mod => mod.InfoModule), data: { title: "Info", status: false } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkingUserRoutingModule { }
