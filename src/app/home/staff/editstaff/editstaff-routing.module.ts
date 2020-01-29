import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditstaffComponent } from './editstaff.component';

const routes: Routes = [{
  path:'', component: EditstaffComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditstaffRoutingModule { }
