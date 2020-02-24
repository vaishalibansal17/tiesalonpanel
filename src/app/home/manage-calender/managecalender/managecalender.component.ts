import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import { EventInput } from '@fullcalendar/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
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
  selector: 'app-managecalender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './managecalender.component.html',
  styleUrls: ['./managecalender.component.scss']
})
export class ManagecalenderComponent implements OnInit {
  calendarPlugins =  [dayGridPlugin, timeGrigPlugin, interactionPlugin]; // important!

  calendarEvents: EventInput[] = [
    { title: 'Event Now Event Now Event Now', start: new Date('Mon Feb 03 2020 00:00:00 GMT+0530 (India Standard Time)') },
    { title: 'Event Now', start: new Date('Mon Feb 03 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date('Mon Feb 15 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },
    { title: 'Event Now', start: new Date('Mon Feb 06 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
    { title: 'Event Now', start: new Date('Mon Feb 11 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
  ];

  constructor(private http: HttpClient, private route : Router, private helper : Helper) {}

  ngOnInit(): void {
  }
 
  handleDateClick(calDate) {
    console.log(calDate, this.helper.parseDate(calDate.date));
    this.route.navigateByUrl('manage-calender/calender-list/' + this.helper.parseDate(calDate.date));
  }

  eventClicked(calDate) {
    console.log(calDate);
  }

}
