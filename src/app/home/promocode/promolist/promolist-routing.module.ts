import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromolistComponent } from './promolist.component';


const routes: Routes = [{path:'', component: PromolistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromolistRoutingModule { }
