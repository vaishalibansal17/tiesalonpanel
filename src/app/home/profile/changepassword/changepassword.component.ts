import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { PassValid, ValidationService, passValidator } from 'src/app/shared/service/validation-service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  ohide = true;
  chide = true;
  nhide = true;
  unsubscribeAll: Subject<any>;
  change: FormGroup
  submitted: boolean;
  public profileImage: any = '../../../assets/images/profile.png';
  userDetails: any;
  passShow = true;
  cPassShow = true;
  nPassShow = true;
  isEqualNewPass: boolean = false;
  constructor(
    private httpService: HttpRequestService,
    private router: Router,
    private fb: FormBuilder,
    private helper: Helper,
    private trns : TranslatePipe, 
    private error : ErrorService) { 
      this.unsubscribeAll = new Subject;
    }

  ngOnInit() {

    this.userDetails = this.helper.parseObject(localStorage.getItem('userDetails'));
    this.change = this.fb.group({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required, ValidationService.passwordValidator]),
      confirmPassword: new FormControl(null, [Validators.required, passValidator]),
    }
    );
    this.change.get('newPassword').valueChanges
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe(() => {
      this.change.get('confirmPassword').updateValueAndValidity();
    });
  }

  get getControl() { return this.change.controls; }
  changePassword() {
    this.submitted = true;
    if (this.change.invalid) {
      return;
    } else {
      this.change.value['new_pass'] = this.change.value.newPassword;
      this.change.value['old_pass'] = this.change.value.oldPassword;
      this.httpService.getRequest('PUT', 'CHANGEPASS', this.change.value, '').subscribe((response: any) => {
        if (response.status=== 1) {
          this.submitted = true;
          this.router.navigateByUrl('/')
            .then(() => {
              this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('RESETPASSSUCC'));
            });
        } else {
            this.error.handleError(response.err.errCode)
        }
      }, (error) => {
        this.error.handleError(0)
      });
    }
  }

}
