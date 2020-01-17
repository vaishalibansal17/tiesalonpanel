import { Injectable } from '@angular/core';
import { Helper } from 'src/app/shared/service/helper.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private helper: Helper) { }

  handleError(errData: {}) { 
    // switch (errData?.error?.errorCode) {
    //   case 1:
    //     this.helper.errTostr({ title: '', msg: '' });
    //     break;
    //   case 2:
    //     this.helper.errTostr({ title: '', msg: '' });
    //     break;

    //   default:
    //     break;
    // }
  }
}
