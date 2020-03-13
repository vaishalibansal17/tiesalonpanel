import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor() { }
	private socket = io('http://157.175.63.108:2050/support/chat');
	private notification = io('http://157.175.63.108:2050/send/notification');

	connectSocket(): void {
		this.notification.on('connection', function () { });
		this.socket.on('connection', function () { });
	}

	joinRoom(data) {
		this.notification.emit('notification', { userid: data.user })
		this.socket.emit('join', data);
	}

	sendMessage(data) {
		this.socket.emit('msg', data);
	}
	sendNotification(data) {
		this.notification.emit('send', data);
	}
	newMessageReceived() {
		const observable = new Observable<{ msg: String, sndr: String }>(observer => {
			this.socket.on('new msg', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		});
		return observable;
	}

	getNotification() {
		const observable = new Observable<{ msg: String, sndr: String }>(observer => {
			this.notification.on('notif reply', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		});
		return observable;
	}

	typing(data) {
		this.socket.emit('typing', data);
	}

	receivedTyping() {
		console.log('-----');
		const observable = new Observable<{ isTyping: boolean }>(observer => {
			this.socket.on('typing', (data) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			};
		});
		return observable;
	}


}
