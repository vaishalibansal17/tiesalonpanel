(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='add()'>\n            <!-- <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'Add Profile Picture'| translate}}</label>\n            </div> -->\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\" (keyup)=\"checkUser($event)\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSTAFFNAME'| translate}}</p>\n                <!-- <p class=\"color\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p>\n            </div>\n\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"150\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Proceed</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/walking-user/add/add-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/walking-user/add/add-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoutingModule", function() { return AddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.component */ "./src/app/home/walking-user/add/add.component.ts");




const routes = [{ path: '', component: _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] }];
let AddRoutingModule = class AddRoutingModule {
};
AddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/add/add.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/walking-user/add/add.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 90px;\n  width: 90px;\n  border: 5px solid whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX2lucHV0IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG4iLCIuZmlsZV9pbnB1dCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/walking-user/add/add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/walking-user/add/add.component.ts ***!
  \********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/message.service */ "./src/app/shared/service/message.service.ts");











let AddComponent = class AddComponent {
    constructor(httpService, router, messageService, helper, errorserv, trns) {
        this.httpService = httpService;
        this.router = router;
        this.messageService = messageService;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_9__["IMG"].PRO;
    }
    ngOnInit() {
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].namevalidator
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].validateEmail
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].phonevalidator,
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                // Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
            ]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
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
            let obj = {
                'name': this.profile.value.name,
                'email': this.profile.value.email,
                'phone': this.profile.value.phone
            };
            this.messageService.setBooking(obj);
            this.router.navigateByUrl('/walking-user/add-booking');
        }
        else {
            console.log(this.profile);
        }
    }
    get getControl() { return this.profile.controls; }
    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            if (this.helper.isImage(event.target.files[0].type)) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.url = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
                this.profileImage = event.target.files[0];
            }
            else {
                // this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
            }
        }
    }
    checkUser(event) {
        console.log(event.target.value, this.profile.controls.email.status);
        if (this.profile.controls.email.status == 'INVALID')
            return;
        else {
            this.httpService.getRequest('POST', 'WALKING_CHK', { email: event.target.value })
                .subscribe((response) => {
                if (response.status === 1) {
                    console.log(response.res);
                    this.profile.patchValue({
                        name: response.res.hasOwnProperty('fullname') ? response.res.fullname : '',
                        email: response.res.hasOwnProperty('email') ? response.res.email : '',
                        phone: response.res.hasOwnProperty('pno') ? response.res.pno : '',
                    });
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
};
AddComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.scss */ "./src/app/home/walking-user/add/add.component.scss")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/home/walking-user/add/add.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/walking-user/add/add.module.ts ***!
  \*****************************************************/
/*! exports provided: AddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/home/walking-user/add/add-routing.module.ts");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.component */ "./src/app/home/walking-user/add/add.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let AddModule = class AddModule {
};
AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _add_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })
], AddModule);



/***/ }),

/***/ "./src/app/shared/service/error.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/service/error.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.service */ "./src/app/shared/service/translate.service.ts");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-request.service */ "./src/app/shared/service/http-request.service.ts");




// import { TranslatePipe } from '../_pipes/translate.pipe';
let ErrorService = class ErrorService {
    constructor(helper, trns) {
        this.helper = helper;
        this.trns = trns;
    }
    handleError(errCode = 0) {
        switch (errCode) {
            case 0:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 1:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 4:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
                break;
            case 5:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['TKNREQ']);
                break;
            case 6:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDPASS']);
                break;
            case 7:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDOLDPASS']);
                break;
            case 8:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['LINKEXP']);
                break;
            case 9:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDLINK']);
                break;
            case 31:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
            case 39:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
                break;
            default:
                break;
        }
    }
};
ErrorService.ctorParameters = () => [
    { type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorService);



/***/ })

}]);
//# sourceMappingURL=19-es2015.js.map