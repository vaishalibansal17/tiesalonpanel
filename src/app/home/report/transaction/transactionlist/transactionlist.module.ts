import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionlistRoutingModule } from './transactionlist-routing.module';
import { TransactionlistComponent } from './transactionlist.component';


@NgModule({
  declarations: [TransactionlistComponent],
  imports: [
    CommonModule,
    TransactionlistRoutingModule
  ]
})
export class TransactionlistModule { }
