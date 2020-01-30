import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [{
  path: '', component: BookingsComponent,
  data: { title: "Booking" },
  children: [
    { path: '', loadChildren: () => import('./list/list.module').then(mod => mod.ListModule), data: { title: "List", status: false } },
    // { path: 'add', loadChildren: () => import('./addstaff/addstaff.module').then(mod => mod.AddstaffModule), data: { title: "Add", status: false } },
    // { path: 'edit', loadChildren: () => import('./editstaff/editstaff.module').then(mod => mod.EditstaffModule), data: { title: "Edit", status: false } },
    { path: 'info', loadChildren: () => import('./bookingdetail/bookingdetail.module').then(mod => mod.BookingdetailModule), data: { title: "Info", status: false } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
