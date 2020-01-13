import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
  pos: number;

  constructor() { }

  ngOnInit() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
      }
  });
  }

  scrollTop(){
    let scrollToTop = window.setInterval(() => {
      this.pos = window.pageYOffset;
      if (this.pos > 0) {
          window.scrollTo(0, this.pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }

}
