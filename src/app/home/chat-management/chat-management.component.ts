import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/service/socket/socket.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-management',
  templateUrl: './chat-management.component.html',
  styleUrls: ['./chat-management.component.scss']
})
export class ChatManagementComponent implements OnInit {
  public rcvrId: any;
  public chatroom;
  public message: String;
  public isTyping = false;
  public salonid: any
  messageArray: Array<{ msg: String }> = [];
  name: any;
  constructor(
    private webSocketService: SocketService, private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.webSocketService.connectSocket();
    this.webSocketService.newMessageReceived().subscribe(data => {
      console.log(data)
      this.messageArray.push(data);
      this.isTyping = false;
    });
    this.webSocketService.receivedTyping().subscribe(bool => {
      this.isTyping = bool.isTyping;
    });

    combineLatest(this.route.params, this.route.queryParams)
      .pipe(map(results => ({ params: results[0], query: results[1] })))
      .subscribe(results => {
        this.salonid = localStorage.getItem('salonid');
        this.rcvrId = results.params.id || 'nvsfdghj98765';
        this.name = results.query.name
        if (this.salonid < this.rcvrId) {
          this.chatroom = this.salonid.concat(this.rcvrId);
        } else {
          this.chatroom = this.rcvrId.concat(this.salonid);
        }
        this.webSocketService.joinRoom({ user: this.rcvrId, room: this.chatroom });

      });
  }

  sendMessage() {
    if (this.message) {
      this.webSocketService.sendMessage({ room: this.chatroom, sndr: this.salonid, rcvr: this.rcvrId, sndr_type: 0, rcvr_type: 2, msg: this.message });
      this.message = '';
    }
  }

  typing(event) {
    if (event.keyCode === 13 && this.message != '') {
      this.sendMessage();
    }
    this.webSocketService.typing({ room: this.chatroom, user: this.rcvrId });
  }

}