import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { IMG } from 'src/app/shared/constants/constant';
import { MessageService } from 'src/app/shared/service/message.service';
import * as _ from "lodash";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  profile: any;
  submitted: boolean;
  formData: FormData;
  profileImage: any;
  url: any = IMG.PRO;
  services: any;
  isExist: boolean = false;
  detail: any;

  constructor(private httpService: HttpRequestService, private router: Router,
    private messageService: MessageService, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe) { }

  ngOnInit() {
    this.profile = new FormGroup({
      name: new FormControl(null, [
        Validators.required, ValidationService.namevalidator
      ]),
      email: new FormControl(null, [
        Validators.required, ValidationService.validateEmail
      ]),
      phone: new FormControl(null, [
        Validators.required,
        ValidationService.phonevalidator,
      ]),
      description: new FormControl(null, [
        // Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ]),
      multiImage: new FormControl(null),
      serviceat: new FormControl(null)
    })
  }

  add() {
    this.submitted = true;
    // return false
    this.formData = new FormData();
    console.log(this.profile.value);
    // return
    this.profile.enable();
    if (this.profile.valid) {
      if (!this.isExist) {
        this.profile.value['desc'] = this.profile.value.description;
        this.profile.value['pno'] = this.profile.value.phone;
        this.profile.value['fullname'] = this.profile.value.name;
        this.httpService.getRequest('POST', 'WALKING_ADD', this.profile.value).subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.messageService.setBooking({ 'user_id': response.res._id });
            this.router.navigateByUrl('/walking-user/add-booking')
          } else {
            if (response.err) {
              this.errorserv.handleError(response.err.errCode);
            }
          }
        }, (error) => {
          this.errorserv.handleError(0);
        });
      } else {
        this.messageService.setBooking({ 'user_id': this.detail._id });
        this.router.navigateByUrl('/walking-user/add-booking')
      }


    } else {
      console.log(this.profile);
    }
  }

  get getControl() { return this.profile.controls; }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      if (this.helper.isImage(event.target.files[0].type)) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        }
        reader.readAsDataURL(event.target.files[0]);
        this.profileImage = event.target.files[0];
      } else {
        // this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
      }
    }
  }

  checkUser(event) {
    if (this.profile.controls.email.status == 'INVALID')
      return
    else {
      this.httpService.getRequest('POST', 'WALKING_CHK', { email: event.target.value })
        .subscribe((response: any) => {
          if (response.status === 1) {
            console.log(response.res);
            this.detail = response.res;
            this.profile.patchValue({
              name: response.res.hasOwnProperty('fullname') ? response.res.fullname : '',
              email: response.res.hasOwnProperty('email') ? response.res.email : '',
              phone: response.res.hasOwnProperty('pno') ? response.res.pno : '',
            });
            this.isExist = true;
            this.profile.disable();
          }
          else {
            if (response.err) {
              this.errorserv.handleError(response.err.errCode);
            }
          }
        }, (error) => {
          console.log(error);
        });
    }
  }


}
