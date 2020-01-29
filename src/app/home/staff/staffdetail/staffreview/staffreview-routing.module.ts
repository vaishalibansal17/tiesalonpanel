import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffreviewComponent } from './staffreview.component';


const routes: Routes = [{
  path:'', component:StaffreviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffreviewRoutingModule { }
