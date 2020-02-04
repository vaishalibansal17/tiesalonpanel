import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';


const routes: Routes = [{
  path: '', component: ReportComponent,
  children: [
    { path: '', loadChildren: () => import('./sales/sales.module').then(mod => mod.SalesModule),  data: { title: "Sales", status: false } }, 
    { path: 'transaction', loadChildren: () => import('./transaction/transaction.module').then(mod => mod.TransactionModule), data: { title: "Transaction", status: false } },
    { path: 'earning', loadChildren: () => import('./earning/earning.module').then(mod => mod.EarningModule), },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
