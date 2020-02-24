import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Helper } from 'src/app/shared/service/helper.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback: FormGroup;
  submitted = false;

  constructor(private httpService: HttpRequestService,
    private errService: ErrorService,
    private trns: TranslatePipe, private router: Router) { }

  ngOnInit() {
    let salon = JSON.parse(localStorage.getItem('salon'))
    this.feedback = new FormGroup({
      email: new FormControl(salon.email, [
        Validators.required,
        ValidationService.validateEmail
      ]),
      // phone: new FormControl(null, [
      //   Validators.required,
      //   ValidationService.phonevalidator
      // ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ])
    });
  }
  get getControl() { return this.feedback.controls; }

  feedbackSubmit() {
    this.submitted = true;
    if (this.feedback.valid) {
      this.feedback.value['msg'] = this.feedback.value.description;
      this.httpService.getRequest('POST', 'FEEDBCK', this.feedback.value).subscribe((response: any) => {

        if (response.status === 1) {
          this.router.navigateByUrl('dashboard')
            .then(() => {
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('FEEDSUCCESS'));
            });
        } else {
          console.log(response);
          this.errService.handleError(response.err.errCode)
        }
      });
    }
  }

}
