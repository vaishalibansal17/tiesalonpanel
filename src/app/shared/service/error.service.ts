import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
import { HttpRequestService } from './http-request.service';
// import { TranslatePipe } from '../_pipes/translate.pipe';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private helper: HttpRequestService,
    private trns: TranslateService,
  ) { }

  handleError(errCode = 0) {
    switch (errCode) {
      case 0:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
        break;
      case 1:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
        break;
      case 4:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
        break;
      case 5:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['TKNREQ']);
        break;
      case 6:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDPASS']);
        break;
      case 7:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDOLDPASS']);
        break;
      case 8:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['LINKEXP']);
        break;
      case 9:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDLINK']);
        break;
      case 31:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
        break;
      case 34:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['PROMOALRDYEXIST']);
        break;
      case 32:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['STAFFALRDYEXIST']);
        break;
      case 15:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONALRDYEXIST']);
        break;
      case 39:
        this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
        break;
      default:
        break;
    }
  }
}
