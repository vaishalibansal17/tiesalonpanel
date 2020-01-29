import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Helper } from 'src/app/shared/service/helper.service';
import { MESSAGE, DELETE } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(private httpService: HttpRequestService,
    private errService : ErrorService,
    private helper : Helper,
    private router: Router ) { }


  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z_.~+-{|}!#$%&()/:;<=>?@`\'",]{1,}@[A-Z0-9a-z]{2,}[.]{1}[A-Za-z.]{2,}$')
      ]),
    });

  }
  get getControl() { return this.forgetPasswordForm.controls; }
  forgetPass() {
    this.submitted = true;
    if (this.forgetPasswordForm.invalid) {
    } else {
      // code for api hit
      this.isLoading = true;
      this.httpService.getRequest('POST', 'FORGOT', this.forgetPasswordForm.value).subscribe((response: any) => {
        
        if (response.status === 1) {
          this.isLoading = false;
          this.router.navigateByUrl('/auth')
            .then(() => {
              this.httpService.sucsTostr(MESSAGE.SUCCESS, MESSAGE.FORGOT_SUC);
            });
        } else {
          console.log(response);
          this.errService.handleError(response.err.errCode)
          // if (!_.isEmpty(response.error.errors)) {
          //   this.isLoading = false;
          //   // this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
          // } else {
          //   // this.httpService.showError(MESSAGE.LOGIN.UNREGISTERED_USER_MSG, MESSAGE.LOGIN.UNREGISTERED_USER, MESSAGE.MSGTIME);
          //   this.isLoading = false;
          // }
        }
      });
    }
  }

}
