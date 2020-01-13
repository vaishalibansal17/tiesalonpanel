import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
// import { colors } from '../demo-utils/colors';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { EventInput } from '@fullcalendar/core';
function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  calendarPlugins =  [dayGridPlugin, timeGrigPlugin, interactionPlugin]; // important!

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() },
    { title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
    { title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
    { title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
 
  handleDateClick(calDate) {
    console.log(calDate);
  }

  eventClicked(calDate) {
    console.log(calDate);
  }

}
