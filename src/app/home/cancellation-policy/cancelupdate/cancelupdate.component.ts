import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelupdate',
  templateUrl: './cancelupdate.component.html',
  styleUrls: ['./cancelupdate.component.scss']
})
export class CancelupdateComponent implements OnInit {

  submitted = false;
  c_policy: string = '1';

  constructor(private httpService: HttpRequestService,
    private errService: ErrorService,
    private trns: TranslatePipe, private router: Router) { }

  ngOnInit() {
    this.c_policy = JSON.parse(localStorage.getItem('salon')).c_policy.toString();
    console.log(this.c_policy);

  }

  feedbackSubmit() {
    console.log(this.c_policy);
    // return
    this.submitted = true;
    if (this.c_policy) {
      this.httpService.getRequest('PUT', 'CANCELPOLICY', { c_policy: this.c_policy }, '').subscribe((response: any) => {

        if (response.status === 1) {
          let salon = JSON.parse(localStorage.getItem('salon'));
          salon.c_policy = this.c_policy;
          localStorage.setItem('salon', JSON.stringify(salon));
          this.router.navigateByUrl('cancellation-policy')
            .then(() => {
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('POLICYSUCCESS'));
            });
        } else {
          console.log(response);
          this.errService.handleError(response.err.errCode)
        }
      });
    }
  }

}
