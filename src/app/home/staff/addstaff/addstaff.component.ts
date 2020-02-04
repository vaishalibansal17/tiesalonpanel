import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";

export interface Service {
  name: string;
  viewValue: string;
}

export interface Chips {
  name: string;
  id: string;
}

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {
  services: Service[];
  chips = []
  id: any;
  profile: FormGroup;
  detail: any;
  url: any = 'assets/images/change.png';
  formData: FormData;
  profileImage: any;
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  constructor(private httpService: HttpRequestService, private router: Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    console.log(this.getServices());

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
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ]),
      multiImage: new FormControl(null),
      serviceat: new FormControl(null)
    })
  }

  getServices() {
    this.httpService.getRequest('GET', 'SERVICES', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          console.log(response.res);

          this.services = response.res.services;
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


  add() {
    this.submitted = true;
    // return false
    this.formData = new FormData(); 
    if (this.profile.valid) {
      if (this.profileImage)
        this.formData.append('staff_img', this.profileImage, this.profileImage.name);
      this.formData.append('name', this.profile.value.name);
      this.formData.append('email', this.profile.value.email);
      this.formData.append('phone', this.profile.value.phone);
      this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
      this.formData.append('services', '[]');
      this.httpService.getRequest('POST', 'STAFF', this.formData, this.id)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/staff')
          } else {
            if (response.err) {
              this.errorserv.handleError(response.err.errCode);
            }
          }
        }, (error) => {
          this.errorserv.handleError(0);
        });
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

  slctsrv(state: any) {
    this.chips.push({ id: state._id, name: _.startCase(_.camelCase(state.cat_name)) })
  }


  remove(service: string): void {
    console.log('00000000-----', service, this.chips);
    
    const index = this.chips.indexOf(service);

    this.chips.splice(index, 1);
    if (index >= 0) {
      console.log('===============', this.chips);
    }

  }

}
