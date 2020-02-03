import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocodeComponent } from './promocode.component';


const routes: Routes = [{
  path: '', component: PromocodeComponent,
  data: { title: "Promocode" },
  children: [
    { path: '', loadChildren: () => import('./promolist/promolist.module').then(mod => mod.PromolistModule), data: { title: "Promocode List", status: false } },
    { path: 'promocode-add', loadChildren: () => import('./promoadd/promoadd.module').then(mod => mod.PromoaddModule), data: { title: "Promocode Add", status: false } },
    { path: 'promocode-info', loadChildren: () => import('./promoinfo/promoinfo.module').then(mod => mod.PromoinfoModule), data: { title: "Promocode Offers", status: false } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocodeRoutingModule { }
