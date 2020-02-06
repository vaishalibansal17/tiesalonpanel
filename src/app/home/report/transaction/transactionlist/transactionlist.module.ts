import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionlistRoutingModule } from './transactionlist-routing.module';
import { TransactionlistComponent } from './transactionlist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TransactionlistComponent],
  imports: [
    CommonModule,
    TransactionlistRoutingModule,
    SharedModule
  ]
})
export class TransactionlistModule { }
