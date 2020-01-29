import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { TranslatePipe } from '../../_pipes/translate.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    TranslatePipe
  ],
  exports: [
    TranslatePipe
  ]
})
export class ApplicationpipeModule {}