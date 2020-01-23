import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { PassValid, ValidationService } from 'src/app/shared/service/validation-service';

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
    private helper: Helper) { }

  ngOnInit() {

    this.userDetails = this.helper.parseObject(localStorage.getItem('userDetails'));
    this.organiserChangePassword = this.fb.group({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), ValidationService.passwordValidator]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
      {
        validator: [PassValid.MatchPassword]
      }
    );
  }

  get getControl() { return this.organiserChangePassword.controls; }
  changePassword() {
    // this.spinner.show();
    this.submitted = true;
    if (this.organiserChangePassword.invalid) {
      // this.spinner.hide();
      return;
    } else {
      this.organiserChangePassword.value['new_pass'] = this.organiserChangePassword.value.newPassword;
      this.organiserChangePassword.value['old_pass'] = this.organiserChangePassword.value.oldPassword;

      this.httpService.getRequest('PUT', 'CHANGEPASS', this.organiserChangePassword.value, '').subscribe((response: any) => {
        // this.spinner.hide();

        if (response.status=== 1) {
          this.submitted = true;
          this.router.navigateByUrl('/')
            .then(() => {
              console.log('response',response);
              
              // this.httpService.showSuccess(MESSAGE.ATTENDEE.RESET_PASS, '', MESSAGE.MSGTIME);
            });
        } else {
          // if (!_.isEmpty(response.error.errors)) {
          //   this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
          // } else {
          //   if (response.error.errorCode === 5) {
          //     this.httpService.showError('Old password and new password can not be same', '', MESSAGE.MSGTIME);
          //   } else if (response.error.errorCode === 22) {
          //     this.httpService.showError('Your current password is wrong.', "Wrong password!", MESSAGE.MSGTIME);
          //   }
          //   else {
          //     this.httpService.showError('Please check your internet connection and try again.', 'No Internet Connection.', MESSAGE.MSGTIME);
          //   }
          // }
        }
      }, (error) => {
        // this.spinner.hide();
        // this.httpService.showError('Please check your internet connection and try again.', 'No Internet Connection.', MESSAGE.MSGTIME);
      });
    }
  }

}
