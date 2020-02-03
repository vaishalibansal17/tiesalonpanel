import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromolistRoutingModule } from './promolist-routing.module';
import { PromolistComponent, PromoDeleteDialogBox } from './promolist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PromolistComponent, PromoDeleteDialogBox],
  imports: [
    CommonModule,
    PromolistRoutingModule,
    SharedModule
  ],
  entryComponents: [ PromoDeleteDialogBox ]
})
export class PromolistModule { }
