import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PassValid, ValidationService } from 'src/app/shared/service/validation-service';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  unsubscribeAll: Subject<any>;
  chide = true;
  nhide = true;
  reset: FormGroup;
  submitted: boolean;
  token: string;
  isLoading = false;
  passShow = true;
  cPassShow = true;
  public formData = new FormData();
  constructor(private httpService: HttpRequestService, private router: Router, private fb: FormBuilder, private routes: ActivatedRoute) {
    this.unsubscribeAll = new Subject;
  }

  ngOnInit() {
    this.token = this.routes.snapshot.queryParamMap.get('token');
    if (this.token)
      this.token = this.token.replace(/\s/g, "+");

    this.reset = this.fb.group({
      newPassword: new FormControl(null, [
        Validators.required, Validators.minLength(6),
        ValidationService.passwordValidator
      ]),
      confirmPassword: new FormControl(null, [Validators.required])
    },
      {
        validator: [PassValid.MatchPassword]
      }
    );

    // this.reset.get('newPassword').valueChanges
    //   .pipe(takeUntil(this.unsubscribeAll))
    //   .subscribe(() => {
    //     this.reset.get('confirmPassword').updateValueAndValidity();
    //   });
  }
  get getControl() { return this.reset.controls; }

  resetPassword() {
    this.isLoading = true;
    this.submitted = true;
    if (this.reset.invalid) {
      this.isLoading = false;
    } else {
      // tslint:disable-next-line:max-line-length
      // this.spinner.show();
      this.httpService.getRequest('POST', 'ORGANISER_RESET_PASS', { password: this.reset.value.newPassword, token: this.token }).subscribe((response: any) => {
        if (response.status === 1) {
          // this.spinner.hide();
          this.isLoading = false;
          this.router.navigateByUrl('/auth')
            .then(() => {
              // this.helper.showSuccess(MESSAGE.ATTENDEE.RESET_PASS, '', MESSAGE.MSGTIME);
            });
        } else {
          // this.spinner.hide();
          // if (!_.isEmpty(response.error)) {
          //   if (response.error.errorCode === 2)
          //     this.httpService.showError('Link expired.', '', MESSAGE.MSGTIME);

          //   this.isLoading = false;
          //   this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
          // } else {
          //   this.isLoading = false;
          //   this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
          // }
        }
      });
    }
  }



  ngDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
