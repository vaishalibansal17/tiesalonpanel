import { Injectable } from '@angular/core';
import { Helper } from 'src/app/shared/service/helper.service';
// import { TranslatePipe } from '../_pipes/translate.pipe';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private helper: Helper,
    // private trns:TranslatePipe
  ) { }

  handleError(errCode) {
    switch (errCode) {
      case 1:
        // this.helper.errTostr({ title: '', msg: '' });
        break;
      case 2:
        // this.helper.errTostr({ title: '', msg: '' });
        break;
      case 4:
        this.helper.errTostr('', 'Admin not found.');
      case 6:
        this.helper.errTostr('', 'Password is incorrect.');
        break;
      case 31:
        // this.helper.errTostr('', this.trns.transform('SALONOTEXIST'));
        break;
      default:
        break;
    }
  }
}
