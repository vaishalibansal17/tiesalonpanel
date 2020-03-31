import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ValidationService } from 'src/app/shared/service/validation-service';
import { Helper } from 'src/app/shared/service/helper.service';
import { TranslateService } from 'src/app/shared/service/translate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginfrm: FormGroup;
  submitted = false;
  public formSubmit = false;
  public data: any;
  public loading = false;
  public email: string = '';
  public pass: string = '';
  message: string;
  isLoading = false;
  isError: boolean;
  passShow: boolean = true;
  constructor(private httpService: HttpRequestService,
    private router: Router,
    private error: ErrorService,
    private trns: TranslatePipe,
    private trnsalte: TranslateService,
    private helper: Helper
  ) { }

  ngOnInit() {
	  
	  var arrImages = ["http://dev.thetieapp.com/assets/images/img_onboard_1.png", "http://dev.thetieapp.com/assets/images/img_onboard_2.png","http://dev.thetieapp.com/assets/images/img_onboard_3.png"];

	var i = 1; //We start at the second image, because the first one is loaded already by default
	var image = document.getElementById("image");

	function nextImage() {
	  setTimeout(function(){
		image.style.opacity = '0';},4000);
	  
	  image['src'] = arrImages[i]; //Change picture
	  image.style.opacity = '100';
	  
	  if (i+1 >= arrImages.length) {
		i = 0;
	  } else {
		i++;
	  }

	}

	function startSlideshow() {
	  image['src']=arrImages[0]; //Load first picture by default
	  image.style.opacity = '100';
	  
	  //Change opacity back to 0, 1 second before changing the picture
	  setTimeout(function(){image.style.opacity = '0';},4000);
	  
	  setInterval(function() {
		nextImage()
	  }, 7000);
	}

	startSlideshow();
	  
	  
    // console.log(this.trnsalte.currentLang);

    this.loginfrm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        ValidationService.validateEmail
      ]),
      pass: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }
  get getControl() { return this.loginfrm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.loginfrm.valid) {
      this.httpService.getRequest('POST', 'LOGIN', this.loginfrm.value)
        .subscribe((data: any) => {
          if (data.status) {
            let { acsTkn, _id, logo, email, name, c_policy, is_charge, allow_multi, is_notif, onl_booking, slot_duration } = data.res;
            localStorage.setItem('acsTkn', acsTkn);
            localStorage.setItem('salonid', _id);
            localStorage.setItem('salon', JSON.stringify({ 'name': name, 'logo': logo, 'email': email, 'c_policy':c_policy, 'is_charge':is_charge, 'is_notif': is_notif,
            'allow_multi': allow_multi,
            'onl_booking': onl_booking, 'slt_dur':slot_duration }));
            this.isLoading = !this.isLoading;
            this.router.navigate(['/']).then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('LOGINSUCCESS')))
          } else {
            console.log(data.err);
            
            this.error.handleError(data.err.errCode);
          }
        }, (error) => {
          this.error.handleError(0)

        }
        );
    } else {
      // this.spinner.hide();
    }
  }

}
