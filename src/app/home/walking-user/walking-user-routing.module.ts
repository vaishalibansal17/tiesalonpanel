import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./list/list.module').then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add-user', loadChildren: () => import('./add/add.module').then(mod => mod.AddModule), data: { title: "Add User", status: false } },
    { path: 'add-booking', loadChildren: () => import('./addbookings/addbookings.module').then(mod => mod.AddbookingsModule), data: { title: "Add Booking", status: false } },
    { path: 'calender', loadChildren: () => import('./calender/calender.module').then(mod => mod.CalenderModule), data: { title: "Manage Calender", status: false } },
    { path: 'calender-list', loadChildren: () => import('./calenderlist/calenderlist.module').then(mod => mod.CalenderlistModule), data: { title: "Calender List", status: false } },
    { path: 'calender-info', loadChildren: () => import('./calenderdetail/calenderdetail.module').then(mod => mod.CalenderdetailModule), data: { title: "Calender Info", status: false } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkingUserRoutingModule { }
