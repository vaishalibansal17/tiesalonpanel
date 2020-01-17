import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginfrm: FormGroup;
  submitted = false;
  public formSubmit = false;
  public data: any;
  public loading = false;
  public email: string = '';
  public password: string = '';
  message: string;
  isLoading = false;
  isError: boolean;
  passShow: boolean = true;
  constructor(private httpService: HttpRequestService,
    private router: Router,
    private error: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    console.log(this.trns.transform('TITLE'));

    this.loginfrm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z_.~+-{|}!#$%&()/:;<=>?@`\'",]{1,}@[A-Z0-9a-z-]{2,}[.]{1}[A-Za-z.]{2,}$')
      ]),
      password: new FormControl(this.password, [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }
  get getControl() { return this.loginfrm.controls; }


  onSubmit() {
    if (this.loginfrm.valid) {
      this.httpService.getRequest('POST', 'LOGIN', this.loginfrm.value)
        .subscribe((data: any) => {
          // this.spinner.hide();
          if (data.statusCode) {
            if (this.loginfrm.value.remember === 1) {
              // this.cookieService.set('email', this.loginfrm.value.email);
            } else {
              // this.cookieService.delete('email');
            }
            localStorage.setItem('access_token', data.responseData.accessToken);
            localStorage.setItem('userDetails', JSON.stringify(data.responseData.userProfile));
            localStorage.setItem('byAdmin', data.responseData.userProfile.byAdmin);
            this.isLoading = !this.isLoading;
          } else {
            this.error.handleError(data.error);
          }
        }, (error) => {
          this.isLoading = !this.isLoading;
          // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);

        }
        );
    } else {
      // this.spinner.hide();
      this.isLoading = !this.isLoading;
    }
  }

}
