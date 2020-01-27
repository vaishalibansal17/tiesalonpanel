import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinesshoursComponent } from './businesshours.component';


const routes: Routes = [{
  path:'', component: BusinesshoursComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinesshoursRoutingModule { }
