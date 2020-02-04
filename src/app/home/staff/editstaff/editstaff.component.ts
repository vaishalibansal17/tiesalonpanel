import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';

import * as _ from "lodash";
export interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.scss']
})
export class EditstaffComponent implements OnInit {
  services: Service[];

  chips = [];
  id: any;
  profile: FormGroup;
  detail: any;
  url: any = 'assets/images/change.png';
  formData: FormData;
  profileImage: any;
  loader = false;
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  sendServ = [];
  constructor(private httpService: HttpRequestService, private router: Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getServices()
    this.getUserProfile();
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

  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'STAFF_DETAIL', this.id)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.profile.patchValue({
            name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
            email: this.detail.hasOwnProperty('email') ? this.detail.email : '',
            phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
            serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : '',
            description: this.detail.hasOwnProperty('desc') ? this.detail.desc : ''
          });
          this.chips.push(...this.detail.services);
          for (let index = 0; index < this.detail.services.length; index++) {
            this.sendServ.push(this.detail.services[index]['_id']);
          }
          this.url = this.detail.img ? this.detail.img : this.url;
          this.dataSource = this.detail.services;
        } else {
          if (response.err) {
            this.errorserv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }


  update() {
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
      this.formData.append('services', JSON.stringify(this.sendServ));
      this.httpService.getRequest('PUT', 'STAFF', this.formData, this.id)
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

  getServices() {
    this.httpService.getRequest('GET', 'SERVICES', '')
      .subscribe((response: any) => {
        if (response.status === 1) {
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

  slctsrv(state: any) {
    this.chips.push({ id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)) });
    this.sendServ.push(state._id)
  }


  remove(service: string): void {
    const index = this.chips.indexOf(service);
    this.chips.splice(index, 1);
    this.sendServ.splice(index, 1);
  }

}
