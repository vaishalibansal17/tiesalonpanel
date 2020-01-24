import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
import _ from 'lodash';

export interface Service {
  value: string;
  viewValue: string;
}

declare var google;


interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  full_address?: string;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent implements OnInit {
  services: Service[] = [
    { value: 'hair-cut', viewValue: 'Hair Cut' },
    { value: 'spa', viewValue: 'Spa' },
  ];
  // google map
  @ViewChild("search", { static: false })
  public searchElementRef: ElementRef;
  geocoder: any;
  public location: Location = {
    lat: 28.7041,
    lng: 77.1025,
    marker: {
      lat: 28.7041,
      lng: 77.1025,
      draggable: true
    },
    zoom: 12
  };
  profile: FormGroup;
  formData: FormData;
  profileImage: any;
  loader = false;
  detail: any;
  profileImageUrl: any;
  selectedCity: string;
  submitted = false;
  userDetails: any;
  salonid: string;
  url: any = 'assets/images/change.png';
  salonImageUrlArray = [];
  salonImageArray = [];
  deletedImageArray = [];
  constructor(private httpService: HttpRequestService,
    private router: Router, private helper: Helper,
    public mapsApiLoader: MapsAPILoader,
    private zone: NgZone) { }

  ngOnInit() {
    this.salonid = localStorage.getItem('salonid');
    this.searchPlace();
    this.getUserProfile();
    this.profile = new FormGroup({
      location: new FormControl(null, [
        Validators.required
      ]),
      name: new FormControl(null, [
        Validators.required, ValidationService.namevalidator
      ]),
      email: new FormControl(null, [
        Validators.required, ValidationService.validateEmail
      ]),
      phone: new FormControl(null, [
        Validators.required, ValidationService.phonevalidator
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
      website: new FormControl(null, [
        Validators.required, ValidationService.validateWebsite
      ]),
      multiImage: new FormControl(null)
    })
  }

  update() {
    this.submitted = true;

    this.formData = new FormData();
    if (this.profile.valid) {
      if (this.profileImage)
        this.formData.append('salon_logo', this.profileImage, this.profileImage.name);

      this.formData.append('name', this.profile.value.name);
      this.formData.append('email', this.profile.value.email);
      this.formData.append('phone', this.profile.value.phone);
      this.formData.append('address', this.location.full_address);
      this.formData.append('website', this.profile.value.website ? this.profile.value.website : '');
      this.formData.append('address', this.location ? this.location.full_address : "")
      this.formData.append('city', this.location ? this.location.address_level_2 : "")
      this.formData.append('state', this.location ? this.location.address_state : "")
      this.formData.append('pincode', this.location ? this.location.address_zip : "")
      this.formData.append('country', this.location ? this.location.address_country : "")
      this.formData.append('lat', this.location ? String(this.location.lat) : "")
      this.formData.append('lng', this.location ? String(this.location.lng) : "")

      this.httpService.getRequest('PUT', 'EDIT', this.formData, '')
        .subscribe((response: any) => {
          this.loader = false;

          if (response.status === 1) {
            this.submitted = true;
            localStorage.setItem('userDetails', JSON.stringify(response.responseData.organiserInfo));
            // this.messageService.sendMessage('profile changed');
            this.router.navigateByUrl('/')
              .then(() => {
                // this.httpService.showSuccess(MESSAGE.PROFILE_UPDATE, '', MESSAGE.MSGTIME);
              });
          } else {
            if (!_.isEmpty(response.error)) {
              //   if (response.error.errorCode == 20) {
              //     this.httpService.showError(MESSAGE.LOGIN.NOT_EXIST, MESSAGE.LOGIN.DEL_ORG, MESSAGE.MSGTIME);
              //     this.httpService.logout();
              //   }
              //   else {
              //     this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
              //   }
              // } else {

              //   this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
            }
          }
        }, (error) => {

          // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
        });
    }
  }


  readUrlMultipleImage(event: any) {
    var imageData = this.helper.checkImageValidationMultiple(event);
    if (imageData == true) {
      let files = event.target.files;
      if (files.length) {
        for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.salonImageUrlArray.push(e.target.result);
          }
          reader.readAsDataURL(file);
          this.salonImageArray.push((file));
        }
      }
    }
  }

  removeSalonImages(value, itemIndex) {
    this.salonImageUrlArray = this.salonImageUrlArray.filter((item, index) => {
      if ((index == itemIndex) && item.includes("https://tieimg.s3.me-south-1.amazonaws.com")) {
        let image = item.split("/").pop();
        this.deletedImageArray.push(image)
      }
      return index !== itemIndex
    })
    if (value.length > 500) {
      let deleteIndex = itemIndex - this.deletedImageArray.length;
      this.salonImageArray.splice(deleteIndex, 1)
    }
  }
  readUrl(event: any) {
    //  var fileResponse= this.fileUpload.readUrl(event);
    //  console.log(fileResponse);

    //  this.url = fileResponse['url'];
    //  this.profileImage = fileResponse['fileObject '];
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

  getUserProfile() {
    this.httpService.getRequest('GET', 'PROFILE', '')
      .subscribe((response: any) => {
        this.loader = false;
        if (response.status === 1) {
          this.detail = response.res;
          this.profile.patchValue({
            name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
            email: this.detail.hasOwnProperty('email') ? this.detail.email : '',
            phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
            location: this.detail.hasOwnProperty('address') ? this.detail.address : '',
            // company details
            website: this.detail.hasOwnProperty('website') ? this.detail.website : '',
          });
          this.location.address_level_2 = this.detail.city;
          this.location.address_state = this.detail.state;
          this.location.address_zip = this.detail.pincode;
          this.location.address_country = this.detail.country;
          this.location.lat = this.detail.lat;
          this.location.lng = this.detail.lng;
          this.url = this.detail.logo ? this.detail.logo : this.url;
        } else {
          // if (!_.isEmpty(response.error)) {
          //   if (response.error.errorCode == 20) {
          //     this.httpService.showError(MESSAGE.LOGIN.NOT_EXIST, MESSAGE.LOGIN.DEL_ORG, MESSAGE.MSGTIME);
          //     this.httpService.logout();
          //   }
          //   else {
          //     this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
          //   }
          // } else {
          //   this.spinner.hide();
          //   this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
          // }
        }
      }, (error) => {

        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }
  get getControl() { return this.profile.controls; }

  public searchPlace() {
    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['establishment']
      });
      autocomplete.addListener("place_changed", () => {
        this.zone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          for (var i = 0; i < place.address_components.length; i++) {
            let types = place.address_components[i].types
            if (types.indexOf('locality') != -1) {
              this.location.address_level_2 = place.address_components[i].long_name
            } else if (types.indexOf('administrative_area_level_1') != -1) {
              this.location.address_level_2 = place.address_components[i].long_name
            }
            if (types.indexOf('country') != -1) {
              this.location.address_country = place.address_components[i].long_name
            }
            if (types.indexOf('postal_code') != -1) {
              this.location.address_zip = place.address_components[i].long_name
            }
            if (types.indexOf('administrative_area_level_1') != -1) {
              this.location.address_state = place.address_components[i].long_name
            }
          }
          console.log(this.location.address_level_2);

          console.log(place);

          if (place.formatted_address) {
            this.location.full_address = place.formatted_address
          }


          if (place.geometry.location) {
            this.location.lat = place.geometry.location.lat();
            this.location.lng = place.geometry.location.lng();
            this.location.marker.lat = place.geometry.location.lat();
            this.location.marker.lng = place.geometry.location.lng();
            this.location.marker.draggable = true;
            this.location.viewport = place.geometry.viewport;
          }
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

}
