import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import { Helper } from 'src/app/shared/service/helper.service';

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
  public pass: string = '';
  message: string;
  isLoading = false;
  isError: boolean;
  passShow: boolean = true;
  constructor(private httpService: HttpRequestService,
    private router: Router,
    private error: ErrorService,
    private trns: TranslatePipe,
    private helper : Helper
  ) { }

  ngOnInit() {

    this.loginfrm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        ValidationService.validateEmail
      ]),
      pass: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }
  get getControl() { return this.loginfrm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.loginfrm.valid) {
      this.httpService.getRequest('POST', 'LOGIN', this.loginfrm.value)
        .subscribe((data: any) => {
          // this.spinner.hide();
          if (data.status) {
            let {acsTkn, _id} = data.res;
            localStorage.setItem('acsTkn', acsTkn);
            localStorage.setItem('salonid', _id);
            this.isLoading = !this.isLoading;
            this.router.navigate(['/']).then(()=> this.helper.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('LOGINSUCCESS')))
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
