import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/service/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private trns: TranslateService,) { }

  ngOnInit() {
  }

}
