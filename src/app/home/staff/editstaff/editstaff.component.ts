import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
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
  services: Service[] = [
    { value: 'hair-cut', viewValue: 'Hair Cut' },
    { value: 'spa', viewValue: 'Spa' },
  ];

  chips = ['Hair', 'Spa', 'Nail', 'Massage']
  id: any;
  profile: FormGroup;
  detail: any;
  url: any = 'assets/images/change.png';
  formData: FormData;
  profileImage: any;
  loader = false;
  profileImageUrl: any;
  selectedCity: string;
  submitted = false;
  userDetails: any;
  salonid: string;
  salonImageUrlArray = [];
  salonImageArray = [];
  deletedImageArray = [];
  dataSource = [];
  constructor(private httpService: HttpRequestService, private router : Router,
    private routes: ActivatedRoute, private helper: Helper,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;;
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
    this.httpService.getRequest('GET_PARMS', 'STAFF_DETAIL', '', this.id)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.profile.patchValue({
            name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
            email: this.detail.hasOwnProperty('email') ? this.detail.email : '',
            phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
            location: this.detail.hasOwnProperty('address') ? this.detail.address : '',
            // company details
            website: this.detail.hasOwnProperty('website') ? this.detail.website : '',
            description: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
            serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : ''
          });
          
          this.url = this.detail.imgs ? this.detail.imgs : this.url;
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
    if (this.salonImageUrlArray.length > 10) {
      this.errorserv.handleError(39);
      return
    }
    else if (this.profile.valid) {
      if (this.profileImage)
        this.formData.append('staff_img', this.profileImage, this.profileImage.name);
      this.formData.append('name', this.profile.value.name);
      this.formData.append('email', this.profile.value.email);
      this.formData.append('phone', this.profile.value.phone);
      this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
      this.formData.append('services', '[]');
      this.httpService.getRequest('PUT', 'STAFF', this.formData, this.id )
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

}
