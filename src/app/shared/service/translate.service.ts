import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  constructor(private http: HttpClient) { }

  use(lang: string): Promise<{}> {
    // console.log(localStorage.getItem('lang'), lang,'-----------');
    return new Promise<{}>((resolve, reject) => {
      // lang = localStorage.getItem('lang');
      const langPath = `assets/i18n/${lang||'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}