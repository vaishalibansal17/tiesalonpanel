import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment-timezone';

import { EventInput } from '@fullcalendar/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';

@Component({
  selector: 'app-managecalender',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './managecalender.component.html',
  styleUrls: ['./managecalender.component.scss']
})
export class ManagecalenderComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin]; // important!
  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  calendarEvents: any = [
    // { title: 'Event Now Event Now Event Now', start: new Date('Mon Feb 03 2020 00:00:00 GMT+0530 (India Standard Time)') },
    // { title: 'Event Now', start: new Date('Mon Feb 03 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date('Mon Feb 15 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },
    // { title: 'Event Now', start: new Date('Mon Feb 06 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
    // { title: 'Event Now', start: new Date('Mon Feb 11 2020 00:00:00 GMT+0530 (India Standard Time)') },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },{ title: 'Event Now', start: new Date() },
  ];
  currentDate: Date;

  constructor(private http: HttpClient, private route: Router, private httpService: HttpRequestService, private helper: Helper) { }

  ngOnInit(): void {
  }

  getList(month, year) {
    // ?month=${month}&year=${year}

    this.httpService.getRequest('GET', 'BOOKING', `month=${month}&year=${year}`).subscribe(rs => {
      if (rs.res) {
        let bkngs = rs.res.bkngs;
        bkngs.forEach(element => {
          this.calendarEvents.push({
            title: element.service, start: new Date(element.bookDateTime)
          })
        });
      } else {

      }
    }, (err) => {

    })
    console.log(this.calendarEvents);

  }

  handleDateClick(calDate) {
    console.log(calDate, this.helper.parseDate(calDate.date));
    this.route.navigateByUrl('manage-calender/list/' + this.helper.parseDate(calDate.date));
  }

  eventClicked(calDate) {
    console.log(calDate);
  }

  handleDatesRender($event) {
    this.currentDate = this.calendarComponent.getApi().getDate();
    this.calendarEvents=[];
    this.getList(new Date(this.currentDate).getMonth(), new Date(this.currentDate).getFullYear());
  }
  eventRender(e){ 
    let {view, event,el} = e;
    console.log(el, event.title, e);
    
    el.querySelectorAll(".fc-content")[0].setAttribute("data-tooltip", event.title);

  }
}
