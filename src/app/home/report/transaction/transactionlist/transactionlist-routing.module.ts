import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionlistComponent } from './transactionlist.component';


const routes: Routes = [{path:'', component: TransactionlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionlistRoutingModule { }
