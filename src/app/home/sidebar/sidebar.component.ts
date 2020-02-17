import { Component, OnInit, ElementRef } from '@angular/core';
import { MessageService } from 'src/app/shared/service/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

public type: any;
toggleButton: any;
sidebarVisible= true;
  constructor(
    private element: ElementRef,
    private messageserv : MessageService,
    private router : Router
  ) { }

  ngOnInit() {
    this.type = localStorage.getItem('type');
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.sidebarOpen();
  }

  
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');
    body.classList.remove('nav-close');


    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
    body.classList.add('nav-close');
  }
  sidebarToggle() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  }

  route(route){
    this.messageserv.sendRoute(route);
    this.router.navigateByUrl('/'+route).then(()=>this.router.isActive(this.router.url, true))
  }


}
