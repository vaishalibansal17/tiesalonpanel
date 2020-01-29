import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { PassValid, ValidationService, passValidator } from 'src/app/shared/service/validation-service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ErrorService } from 'src/app/shared/service/error.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  ohide = true;
  chide = true;
  nhide = true;
  organiserChangePassword: FormGroup
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
    private error : ErrorService) { }

  ngOnInit() {

    this.userDetails = this.helper.parseObject(localStorage.getItem('userDetails'));
    this.organiserChangePassword = this.fb.group({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), ValidationService.passwordValidator]),
      confirmPassword: new FormControl(null, [Validators.required, passValidator]),
    }
    );
  }

  get getControl() { return this.organiserChangePassword.controls; }
  changePassword() {
    this.submitted = true;
    if (this.organiserChangePassword.invalid) {
      return;
    } else {
      this.organiserChangePassword.value['new_pass'] = this.organiserChangePassword.value.newPassword;
      this.organiserChangePassword.value['old_pass'] = this.organiserChangePassword.value.oldPassword;
      this.httpService.getRequest('PUT', 'CHANGEPASS', this.organiserChangePassword.value, '').subscribe((response: any) => {
        if (response.status=== 1) {
          this.submitted = true;
          this.router.navigateByUrl('/')
            .then(() => {
              this.helper.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('RESETPASSSUCC'));
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
