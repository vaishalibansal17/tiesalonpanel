import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import * as _ from "lodash";
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { MatDialog, MatSelect } from '@angular/material';

export interface Service {
  name: string;
  viewValue: string;
}

export interface Day {
  name: string;
  value: number;
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

  weekoff: Day[] = [
    { value: 0, name: 'Sunday' },
    { value: 1, name: 'Monday' },
    { value: 2, name: 'Tuesday' },
    { value: 3, name: 'Wednesday' },
    { value: 4, name: 'Thursday' },
    { value: 5, name: 'Friday' },
    { value: 6, name: 'Saturday' },
  ];
  chips = []
  id: any;
  profile: FormGroup;
  detail: any;
  url: any = 'assets/images/user-add.png';
  formData: FormData;
  profileImage: any;
  submitted = false;
  dataSource = [];
  selectable = true;
  removable = true;
  sendServ = [];
  constructor(private httpService: HttpRequestService, private router: Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getServices();

    this.profile = new FormGroup({
      name: new FormControl(null, [
        Validators.required, ValidationService.namevalidator
      ]),
      designation: new FormControl(null, [
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
      isAvailable: new FormControl(true)
    })
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
      this.formData.append('designation', this.profile.value.designation);
      this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
      this.formData.append('services', JSON.stringify(this.sendServ));
      if (this.profile.value.day_off) {
        this.formData.append('day_off', this.profile.value.day_off);
      }
      this.formData.append('avlblity', this.profile.value.isAvailable);
      this.httpService.getRequest('POST', 'STAFF', this.formData, this.id)
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            this.router.navigateByUrl('/staff').then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('ADDSTAFFSUCCESS')))
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
    const matSelect: MatSelect = state.source;
    matSelect.writeValue(null);
    state=state.value;
    if(!this.httpService.arraySearch(this.sendServ,state)){
      this.chips.push({ _id: state._id, cat_name: _.startCase(_.camelCase(state.cat_name)) });
      this.sendServ.push(state._id);
      return
    } else {
    }
  }


  remove(service: string, data?: any): void {
    this.chips = this.chips.filter(v => v._id !== data._id);
    this.sendServ = this.sendServ.filter(v => v !== data._id);
  }
}
