import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpRequestService } from '../http-request.service';
import { List } from 'src/app/model/List';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(
    private httpService: HttpRequestService, ) {
  }
  staffListing(listObj, dataObj): Observable<List[]> {
    let queryParams = new HttpParams();
    for (let key in listObj) {
      // if (key != ('api' || 'id')) {
        // queryParams = (listObj[key] === 'asc') ? queryParams.set(key, '1') : queryParams.set(key, '-1');
        queryParams = queryParams.set(key, listObj[key]);

      // }
    }
    
    return this.httpService.getRequest('GET', dataObj.api,queryParams)
      .pipe(
        map((res: any) => {
          res.res.list = res.res['staffs'] || res.res['wlkUsr'] ||res.res['promo'] || res.res['bkngs'] ;
          delete res.res['staffs'] || res.res['wlkUsr'] ||res.res['promo'] || res.res['bkngs'];
          return res;
        }),
        catchError((err, caught) => {
          if (err.status === 401) {
          }
          return Observable.throw(err.statusText);
        }),
      );
  }
}

