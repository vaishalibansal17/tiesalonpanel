import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { APIURLS } from '../apiurl/apiurl';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable()

export class HttpRequestService {
	constructor(private http: HttpClient,
		// public toaster: ToastrManager,
		private myRoute: Router, 
		// private cookieService: CookieService
		) { }

	getApi(apiName: string) {
		const Url = APIURLS[apiName];
		return Url;
	}
	getRequest(type: string, requestUrl: string, data?: any, queryParams?: any): Observable<any> {		
		if (type === 'GET') {
			return this.http.get<any>(this.getApi(requestUrl) + '/');
		} else if (type === 'POST') {
			return this.http.post<any>(this.getApi(requestUrl), data);;
		} else if (type === 'POST_WITHDATA') {			
			return this.http.post<any>(this.getApi(requestUrl) + '/' + queryParams, data);;
		} else if (type === 'PUT') {
			return this.http.put<any>(this.getApi(requestUrl) + '/' + queryParams, data);;
		} else if (type === 'DELETE') {
			return this.http.delete<any>(this.getApi(requestUrl) + '/' + data);;
		}
	}

	/**
	 * Logs out the user and clear credentials.
	 */
	logout() {
		// Customize credentials invalidation here
		localStorage.clear();
		this.myRoute.navigate(['/login']);
	}


	isLoggednIn() {
		return localStorage.getItem('access_token');
	}

	// showError(errormsg: string, err?: string, timeOut?: number) {
	// 	return this.toaster.errorToastr(errormsg, err, {
	// 		position: 'bottom-center',
	// 		animate: 'slideFromTop', showCloseButton: true, toastTimeout: timeOut, maxShown:1
	// 	});
	// }

	// showSuccess(successmsg: string, sucessBody?: string, timeOut?: number) {
	// 	this.toaster.successToastr(successmsg, sucessBody, {
	// 		position: 'bottom-center',
	// 		animate: 'slideFromTop', showCloseButton: true, toastTimeout: timeOut
	// 	});
	// }

	toggleRoute(route) {
		this.myRoute.navigate(['/main/event/' + route + '/' + localStorage.getItem('editEventId')]);
	}

}
