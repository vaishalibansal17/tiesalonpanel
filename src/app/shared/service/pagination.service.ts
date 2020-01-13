import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import _ from 'lodash';
import { Helper } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  page: object
  pageSize = 10;
  selected: any;
  constructor(private httpService: HttpRequestService,
    private helper: Helper,
  ) { }
}
