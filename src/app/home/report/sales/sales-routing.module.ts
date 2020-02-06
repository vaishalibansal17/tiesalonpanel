import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';


const routes: Routes = [{
  path: '', component: SalesComponent,
  children: [
    { path: 'sales', loadChildren: () => import('./sales.module').then(mod => mod.SalesModule), data: { title: "Gross Sales", status: false } },
  ]
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
