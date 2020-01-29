import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingdetailComponent } from './bookingdetail.component';


const routes: Routes = [{path:'', component: BookingdetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingdetailRoutingModule { }
