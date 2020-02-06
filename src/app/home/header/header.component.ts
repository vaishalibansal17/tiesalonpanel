import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { TranslateService } from 'src/app/shared/service/translate.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  detail: any;
  lang: string = localStorage.getItem('lang') || 'en';
  route: any;

  constructor(private httpservice: HttpRequestService, private router: Router, private message: MessageService, private trns: TranslateService, ) { 


   
    this.detail = JSON.parse(localStorage.getItem('salon'));
    this.message.getMessage().subscribe(message => {
      if (message.text === 'profile changed') {
        this.detail = JSON.parse(localStorage.getItem('salon'));
        this.detail.logo ? this.detail.logo : 'assets/images/profile.png';
      }
    }
    );
  
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          this.route = (event.url == '/dashboard' || event.url == '/') ?`${this.trns.data["WELCOMETOOUR"]}${this.detail?' ' + this.detail.name + ' Admin' : ''}`: (event.url.split('/')[1].includes('-')?event.url.split('/')[1].replace('-', ' '): event.url.split('/')[1]);
      }
  
      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.route = (event.url == '/dashboard' || event.url == '/') ?`${this.trns.data["WELCOMETOOUR"]}${this.detail?' ' + this.detail.name + ' Admin' : ''}`: (event.url.split('/')[1].includes('-')?event.url.split('/')[1].replace('-', ' '): event.url.split('/')[1]);
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

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)  
    // ).subscribe((event: NavigationEnd) => {
    //   console.log(event.url);
    //   this.route = event.url == '/dashboard' || '/' ?`${this.trns.data["WELCOMETOOUR"]}${this.detail?' ' + this.detail.name + ' Admin' : ''}`: event.url.split('/')[1];
    // });
    // this.route = window.location.pathname == 'dashboard' || '/' ?`${this.trns.data["WELCOMETOOUR"]}${this.detail?' ' + this.detail.name + ' Admin' : ''}`: window.location.pathname.split('/')[1];
    // this.message.getRoute().subscribe(route => {
    //   if (route) {
    //     if (route.route == 'dashboard' || '')
    //       this.route = `${this.trns.data["WELCOMETOOUR"]}${this.detail?' ' + this.detail.name + ' Admin' : ''}`;
    //     else
    //       this.route = route.route

    //   }
    // });

    
    
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.lang = lang;
    this.trns.use(this.lang);
  }

  logout() {
    this.httpservice.logout();
  }
}
