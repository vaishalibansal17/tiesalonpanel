import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';

import * as _ from "lodash";
import { Day } from '../addstaff/addstaff.component';
import { MatDialog } from '@angular/material';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
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
  weekoff: Day[] = [
    { value: 0, name: 'Sunday' },
    { value: 1, name: 'Monday' },
    { value: 2, name: 'Tuesday' },
    { value: 3, name: 'Wednesday' },
    { value: 4, name: 'Thursday' },
    { value: 5, name: 'Friday' },
    { value: 6, name: 'Saturday' },
  ];
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
  isFound: boolean;
  constructor(private httpService: HttpRequestService, private router: Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe,
    public dialog: MatDialog
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
      serviceat: new FormControl(null),
      day_off: new FormControl(null),
      isAvailable: new FormControl(true),
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
            description: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
            day_off: this.detail.hasOwnProperty('day_off') ? this.detail.day_off : '',
            isAvailable: this.detail.hasOwnProperty('avlblity') ? this.detail.avlblity : true,

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

  openDialog() {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });

    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (!val) {
          if (!val && this.profile.value.isAvailable)
            this.profile.controls['isAvailable'].setValue(false);
          else
            this.profile.controls['isAvailable'].setValue(true);
        }
      }
    );
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
      this.formData.append('day_off', this.profile.value.day_off);
      this.formData.append('avlblity', this.profile.value.isAvailable);
      this.httpService.getRequest('PUT', 'STAFF', this.formData, this.id)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/staff').then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('STAFFSUCCESS')))
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
    let isFound =this.httpService.arraySearch(this.sendServ,state)
    if(!this.httpService.arraySearch(this.sendServ,state)){
      this.chips.push({ id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)) });
      this.sendServ.push(state._id);
      return
    } else {
    }
  }


  remove(service: string): void {
    const index = this.chips.indexOf(service);
    this.chips.splice(index, 1);
    this.sendServ.splice(index, 1);
  }

}
