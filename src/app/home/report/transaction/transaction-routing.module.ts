import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';


const routes: Routes = [{
  path: '', component: TransactionComponent,
  children: [
    { path: '', loadChildren: () => import('./transactionlist/transactionlist.module').then(mod => mod.TransactionlistModule), data: { title: "Transaction", status: false } },
    { path: 'weekly', loadChildren: () => import('./weeklylist/weeklylist.module').then(mod => mod.WeeklylistModule), },
    { path: 'info', loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule), data: { title: "Transaction Detail", status: false } } 
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
