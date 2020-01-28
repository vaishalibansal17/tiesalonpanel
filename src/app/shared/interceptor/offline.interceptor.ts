import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
    toastRef;
    constructor(private toastr: ToastrService,
        private messageService: MessageService
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!window.navigator.onLine) {
            this.messageService.add({ key: 'myKey1', severity: 'warn', summary: 'No Internet Connection.', detail: 'Please check your internet connection and try again.' });
            return _throw(new HttpErrorResponse({ error: 'Internet is required.' }));

            // this.toastr.error('No Internet Connection.', 'Please check your internet connection and try again.',
            //     {
            //         timeOut: 10000,
            //         closeButton: true,
            //         progressBar: true,
            //         progressAnimation: 'decreasing',
            //         positionClass: 'toast-bottom-right'
            //     });

            // return _throw(new HttpErrorResponse({ error: 'Internet is required.' }));
        } else {
            // else return the normal request
            return next.handle(request);
        }
    }
}
