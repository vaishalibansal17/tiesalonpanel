import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService, passValidator } from 'src/app/shared/service/validation-service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reset-freelancer',
  templateUrl: './reset-freelancer.component.html',
  styleUrls: ['./reset-freelancer.component.scss']
})
export class ResetFreelancerComponent implements OnInit {

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
  constructor(private httpService: HttpRequestService, 
    private router: Router, private fb: FormBuilder, 
    private routes: ActivatedRoute, private error: ErrorService, private trns: TranslatePipe) {
    this.unsubscribeAll = new Subject;
  }
  ngOnInit() {this.token = this.routes.snapshot.params.token;
    if (this.token)
      this.token = this.token.replace(/\s/g, "+");

    this.reset = this.fb.group({
      newPassword: new FormControl(null, [
        Validators.required, Validators.minLength(6),
        ValidationService.passwordValidator
      ]),
      confirmPassword: new FormControl(null, [Validators.required, passValidator])
    }
    );

    this.reset.get('newPassword').valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this.reset.get('confirmPassword').updateValueAndValidity();
      });
  }
  get getControl() { return this.reset.controls; }

  resetPassword() {
    this.submitted = true;
    if (!this.reset.valid) {
      return
    } else {
      this.httpService.getRequest('POST', 'FREELNCERESET', { pass: this.reset.value.newPassword, tkn: this.token }).subscribe((response: any) => {
        if (response.status === 1) {
          this.router.navigateByUrl('/auth')
            .then(() => {
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('RESETPASSSUCC'))
            });
        } else {
          if (response.err) {
              this.error.handleError(response.err.errCode)
          } else {
            this.error.handleError(0)
          }
        }
      }, err=>{
        this.error.handleError(0)
      });
    }
  }



  ngDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
