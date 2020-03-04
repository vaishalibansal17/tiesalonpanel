import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { APIURLS } from '../apiurl/apiurl';
import { MessageService } from 'primeng/api';
import { TranslateService } from './translate.service';

@Injectable()

export class HttpRequestService {
	constructor(private http: HttpClient,
		private myRoute: Router,
		private messageService: MessageService,
		private trns: TranslateService
	) { }

	getApi(apiName: string) {
		const Url = APIURLS[apiName];
		return Url;
	}
	getRequest(type: string, requestUrl: string, data?: any, queryParams?: any): Observable<any> {
		if (type === 'GET') {
			return this.http.get<any>(this.getApi(requestUrl) + '?' + data);
		} else if (type === 'GET_PARMS') {
			return this.http.get<any>(this.getApi(requestUrl) + '/' + data + (queryParams?`?${queryParams}`:''));
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
		let lang = localStorage.getItem('lang');
		localStorage.clear();
		console.log(lang);
		localStorage.setItem('lang', lang)
		this.myRoute.navigate(['/auth']);
	}


	isLoggednIn() {
		return localStorage.getItem('acsTkn');
	}

	errTostr(title, msg) {
		this.messageService.clear();
		this.messageService.add({ severity: 'error', summary: title, detail: msg });
	}
	sucsTostr(title, msg) {
		this.messageService.clear();
		this.messageService.add({ severity: 'success', summary: title, detail: msg });
	}
	infoTostr(title, msg) {
		this.messageService.clear();
		this.messageService.add({ severity: 'info', summary: title, detail: msg });
	}

	toggleRoute(route) {
		this.myRoute.navigate(['/main/event/' + route + '/' + localStorage.getItem('editEventId')]);
	}

	arraySearch(arr, value) {
		let isFound = false;
		if (arr.length) {
			for (let k = 0; k < arr.length; k++) {
				if (arr[k] === value._id) {
					isFound = true; break;
				}
			}
			return isFound;
		}
		return false
	}

	exportCSV(api: any) {
		var finalData = [];
		var obj: any;
		var i = 0;

		this.getRequest('GET', api, `?all=true`).subscribe(rs => {
			console.log(rs);

			//   rs.forEach(element => {
			// 	obj = {
			// 	  "Serial": ++i,
			// 	  "Name": element.name,
			// 	  "Email": element.email
			// 	};
			// 	finalData.push(obj);
			//   });
			//   var options = { noDownload: false, headers: ["Serial", "Name", "Email"] };
			//   new Angular5Csv(finalData, 'staff_list', options);
			this.sucsTostr(this.trns.data['SUCCESS'], this.trns.data['EXPORTD']);
		})
	}

}
