import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecalenderInfoComponent } from './managecalender-info.component';


const routes: Routes = [{path:'', component: ManagecalenderInfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagecalenderInfoRoutingModule { }
