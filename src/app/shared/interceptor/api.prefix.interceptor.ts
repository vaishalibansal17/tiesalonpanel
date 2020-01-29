import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpRequestService } from '../service/http-request.service';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private HttpService: HttpRequestService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tkn = this.HttpService.isLoggednIn();
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Basic dGllU2Fsb246I0B7dH1pL2UvfClTJSYo`,
        accessToken: tkn ? tkn : ''
      }
    });
    return next.handle(request);
  }
}
