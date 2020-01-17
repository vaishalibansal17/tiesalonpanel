import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('access_token');
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Basic Y29uZmVyZW5jZV9hZG1pbjphZG1pbkBONF9NSA==`,
        accessToken: idToken ? idToken : ''
      }
    });
    return next.handle(request);
  }
}
