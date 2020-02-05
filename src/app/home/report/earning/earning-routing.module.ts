import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarningComponent } from './earning.component';

const routes: Routes = [{
  path: '', component: EarningComponent,
  children: [
    { path: '', loadChildren: () => import('./earninglist/earninglist.module').then(mod => mod.EarninglistModule), data: { title: "Earning", status: false } },
    { path: 'day-list', loadChildren: () => import('./earningdaylist/earningdaylist.module').then(mod => mod.EarningdaylistModule), },
    { path: 'month-list', loadChildren: () => import('./earningmonthlist/earningmonthlist.module').then(mod => mod.EarningmonthlistModule), } 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningRoutingModule { }
