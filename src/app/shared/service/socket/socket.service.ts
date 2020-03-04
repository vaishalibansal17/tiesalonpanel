import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor() { }
	private socket = io('http://157.175.63.108:2050/chat');

	connectSocket(): void {
		this.socket.on('connection', function () {
			console.log('check 2', this.socket);
		});
	}

	joinRoom(data) {
		this.socket.emit('join', data);
	}

	sendMessage(data) {
		console.log(data);
		
		this.socket.emit('msg', data);
	}
	newMessageReceived() {
		const observable = new Observable<{msg: String ,sndr: String}>(observer => {
			this.socket.on('new msg', (data) => {
				console.log(data);
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
