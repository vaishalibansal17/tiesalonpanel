import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkingUserComponent } from './walking-user.component';


const routes: Routes = [{
  path: '', component: WalkingUserComponent,
  data: { title: "Walking Users" },
  children: [
    { path: '', loadChildren: () => import('./walkinglist/walkinglist.module').then(mod => mod.WalkinglistModule), data: { title: "List", status: false } },
    { path: 'add-user', loadChildren: () => import('./add/add.module').then(mod => mod.AddModule), data: { title: "Add User", status: false } },
    { path: 'add-booking', loadChildren: () => import('./addbookings/addbookings.module').then(mod => mod.AddbookingsModule), data: { title: "Add Booking", status: false } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkingUserRoutingModule { }
