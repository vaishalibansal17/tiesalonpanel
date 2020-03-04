import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { TranslateService } from 'src/app/shared/service/translate.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IMG } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  detail: any;
  lang: string = localStorage.getItem('lang') || 'en';
  route: any;
  _unsubs: Subscription;
  imgurl: any;
  list: any;
  url = IMG.PRO
  detailList: any;

  constructor(private httpservice: HttpRequestService, private router: Router, private message: MessageService, private trns: TranslateService, ) {



    this.detail = JSON.parse(localStorage.getItem('salon'));
    this.message.getMessage().subscribe(message => {
      if (message.text === 'profile changed') {
        this.detail = JSON.parse(localStorage.getItem('salon'));
        this.detail.logo ? this.detail.logo : 'assets/images/profile.png';
      }
    }
    );

    this._unsubs = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.route = (event.url == '/dashboard' || event.url == '/') ? `${this.trns.data["WELCOMETOOUR"]}${this.detail ? ' ' + this.detail.name + ' Admin' : ''}` : (event.url.split('/')[1].includes('-') ? this.check(event.url.split('/')[1]) : event.url.split('/')[1]);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.route = (event.url == '/dashboard' || event.url == '/') ? `${this.trns.data["WELCOMETOOUR"]}${this.detail ? ' ' + this.detail.name + ' Admin' : ''}` : (event.url.split('/')[1].includes('-') ? this.check(event.url.split('/')[1]) : event.url.split('/')[1]);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        console.log(event.url);
        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {

    this.httpservice.getRequest('GET', 'NOTI_LIST', 'limit=3')
    .subscribe((res) => {
      if (res.status) {
        this.imgurl = res.res.uP;
        this.list = res.res.notf;
        this.detailList = res.res
        console.log(this.list);
      } else {
        new Error();
      }

    },
      (error) => {
        // this.httprequest.showError('Failed to get');
      });

  }

  check(str) {
    if (str.includes('walk')) {
      let route = str.split('-');
      route.splice(1, 0, '-');
      route.splice(3, 0, ' ');
      return route.join('');
    } else
      return str.replace('-', ' ');
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.lang = lang;
    this.trns.use(this.lang);
  }

  logout() {
    this.httpservice.logout();
  }

  ngDestroy() {
    this._unsubs.unsubscribe();
  }
}
