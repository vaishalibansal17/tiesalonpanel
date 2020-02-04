import { Component, OnInit, NgZone, ViewChild, ElementRef, Inject, TemplateRef } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/service/helper.service';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/service/validation-service';
import _ from 'lodash';
import { MessageService } from 'src/app/shared/service/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
export interface Service {
  value: string;
  viewValue: string;
}
export interface Clinic {
  value: string;
  viewValue: string;
}

declare var google;
interface SalonServices {
  name: string;
  price: number;
  discount_price: number;
  status: boolean;
  cat_name: String
}

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
    { value: '1', viewValue: 'Salon' },
    { value: '2', viewValue: 'Home' },
    { value: '3', viewValue: 'Both' },
  ];

  clinics: Clinic[] = [
    { value: '1', viewValue: 'Salon' },
    { value: '2', viewValue: 'Home' },
    { value: '3', viewValue: 'Both' },
  ];


  
  // google map
  @ViewChild("search", { static: false })
  public searchElementRef: ElementRef;


  @ViewChild('slideshow', { static: true }) slideshow: any


  displayedColumns = ['No.', 'name', 'price', 'discount_price'];
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
  modalRef: BsModalRef;
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
  dataSource = [];
  slide = [];
  constructor(private httpService: HttpRequestService,
    private router: Router, private helper: Helper,
    public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private messageService: MessageService,
    private modalService: BsModalService,
    private errorserv: ErrorService,
    private trns: TranslatePipe
  ) { }

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
        Validators.required,
        ValidationService.phonevalidator,
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ]),
      website: new FormControl(null, [
        ValidationService.validateWebsite
      ]),
      multiImage: new FormControl(null),
      serviceat: new FormControl(null)
    })
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
        this.formData.append('salon_logo', this.profileImage, this.profileImage.name);
      for (let i = 0; i < this.salonImageArray.length; i++) {
        this.formData.append('salon_imgs', this.salonImageArray[i]);
      }
      if (this.deletedImageArray.length)
        this.formData.append('del_imgs', JSON.stringify(this.deletedImageArray));
      this.formData.append('name', this.profile.value.name);
      // this.formData.append('email', this.profile.value.email);
      this.formData.append('phone', this.profile.value.phone);
      this.formData.append('website', this.profile.value.website ? this.profile.value.website : '');
      this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
      this.formData.append('address', this.location.full_address ? this.location.full_address : this.profile.value.location)
      this.formData.append('city', this.location ? this.location.address_level_2 : "");
      this.formData.append('state', this.location ? this.location.address_state : "");
      this.formData.append('pincode', this.location ? this.location.address_zip : "");
      this.formData.append('country', this.location ? this.location.address_country : "");
      this.formData.append('lat', this.location ? String(this.location.lat) : "");
      this.formData.append('lng', this.location ? String(this.location.lng) : "");
      this.formData.append('service_at', this.profile.value.serviceat);
      this.httpService.getRequest('PUT', 'EDIT', this.formData, '')
        .subscribe((response: any) => {
          if (response.status === 1) {
            this.submitted = true;
            localStorage.setItem('salon', JSON.stringify({ name: this.profile.value.name, logo: response.res.logo ? response.res.logo : this.detail.logo }));
            this.messageService.sendMessage('profile changed');
            this.router.navigateByUrl('/profile')
              .then(() => {
                this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SALONSUCCESS'));
              });
          } else {
            if (!_.isEmpty(response.err)) {
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
          this.salonImageArray.push(file);
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
      console.log(this.salonImageUrlArray );
      
      return index !== itemIndex
    })
    if (typeof this.salonImageArray[itemIndex] === 'object') {
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
            description: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
            serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : ''
          });
          this.location.address_level_2 = this.detail.city;
          this.location.address_state = this.detail.state;
          this.location.address_zip = this.detail.pincode;
          this.location.address_country = this.detail.country;
          this.location.lat = this.detail.lat;
          this.location.lng = this.detail.lng;
          this.url = this.detail.logo ? this.detail.logo : this.url;
          this.dataSource = this.detail.services;
          if (this.detail && this.detail.imgs) {
            this.detail.imgs.map(item => {
              item = this.detail.bp + item;
              this.salonImageUrlArray.push(item);
              this.salonImageArray.push(item);
              this.slide = [...this.slide, { 'url': item, clickAction: () => alert('custom click function') }]
              // this.slide.push({'url':item});
            })
          }
        } else {
          if (!_.isEmpty(response.err)) {
            this.errorserv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        console.log(error);
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
          // console.log(this.location.address_level_2);

          // console.log(place);

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

  openModal(template: TemplateRef<any>) {
    let config = {
      backdrop: true,
      ignoreBackdropClick: true
    };
    console.log(this.slideshow);

    // this.slideshow.goToSlide(3);
    this.modalRef = this.modalService.show(template, config);
  }
}