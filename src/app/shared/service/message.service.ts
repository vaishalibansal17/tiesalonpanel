import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    public booking :any;
    private subject = new Subject<any>();
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    setBooking(data) {
        this.booking = data;
    }

    getBooking() {
        return this.booking;
    }

}
