import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/service/translate.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  
  detail: any;
  lang: string = localStorage.getItem('lang')|| 'en';

  constructor(private trns: TranslateService ){}

  ngOnInit() {
    console.log("dfghjkl;")
  }


  setLang(lang: string) {
    localStorage.setItem('lang',lang);
    this.lang = lang;
    this.trns.use(this.lang);
  }

}
