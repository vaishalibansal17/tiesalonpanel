import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookingsComponent } from './addbookings.component';


const routes: Routes = [{path:'', component: AddbookingsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbookingsRoutingModule { }
