import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  aboutus: String;
  constructor(private httprequest: HttpRequestService) { }

  ngOnInit() {
    this.httprequest.getRequest('GET', 'HELP_CENTER', 'type=sln_about')
      .subscribe((res) => {
        this.aboutus = res.res.webpage.content;
      },
        (error) => {
          // this.httprequest.showError('Failed to get');
        });
  }

}
