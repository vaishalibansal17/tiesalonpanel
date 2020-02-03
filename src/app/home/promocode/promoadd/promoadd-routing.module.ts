import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoaddComponent } from './promoadd.component';


const routes: Routes = [{path:'', component: PromoaddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoaddRoutingModule { }
