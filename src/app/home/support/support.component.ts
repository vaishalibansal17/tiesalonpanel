import { Component, OnInit } from '@angular/core';
import $ from 'jquery'; 
declare var jQuery:any;
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chatbox = $.noConflict();

    chatbox(() => {
      chatbox(".chatbox-open").click(() =>
        chatbox(".chatbox-popup, .chatbox-close").fadeIn()
      );
    
      chatbox(".chatbox-close").click(() =>
        chatbox(".chatbox-popup, .chatbox-close").fadeOut()
      );
    
    });
  }

 
  
}
