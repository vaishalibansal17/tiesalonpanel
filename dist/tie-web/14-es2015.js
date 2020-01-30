(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/changepassword/changepassword.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/changepassword/changepassword.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='change' (ngSubmit)='changePassword()'>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/changepassword.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PLACEHOLDERLCPASS'| translate}}\" [type]=\"ohide ? 'password' : 'text'\" maxlength=\"20\" class=\"form-control pass-space\" formControlName='oldPassword'>\n                <button mat-icon-button matSuffix (click)=\"ohide = !ohide\" type=\"button\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{ohide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n              </mat-form-field>\n              <div *ngIf=\"(submitted) && getControl.oldPassword.errors\">\n                <p class=\"color\" *ngIf=\"getControl.oldPassword.errors.required\">{{'CURRENTPASS'| translate}} </p>\n              </div>\n              <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/changepassword.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PLACEHOLDERLNPASS'| translate}}\" [type]=\"nhide ? 'password' : 'text'\" maxlength=\"20\" formControlName='newPassword' class=\"form-control pass-space\">\n                <button mat-icon-button matSuffix (click)=\"nhide = !nhide\" type=\"button\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{nhide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n              </mat-form-field>\n              <div *ngIf=\"(submitted ) && getControl.newPassword.errors\">\n                <p class=\"color\" *ngIf=\"getControl.newPassword.errors.required\">{{'RESETPASSREQ'| translate}}</p>\n                <!-- <p class=\"color\" *ngIf=\"getControl.newPassword.errors.minlength\">{{'PASSPATTERN'| translate}}</p> -->\n                <span *ngIf=\"!getControl.newPassword.errors.required\">\n                  <p class=\"color\" *ngIf=\"getControl.newPassword.errors.invalidPassword\">{{'PASSPATTERN'| translate}}</p>\n                </span>\n              </div>\n              <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/changepassword.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PLACEHOLDERLCONFIRMPASS'| translate}}\" [type]=\"chide ? 'password' : 'text'\" maxlength=\"20\"  formControlName='confirmPassword' class=\"form-control pass-space\">\n                <button mat-icon-button matSuffix (click)=\"chide = !chide\" type=\"button\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{chide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n              </mat-form-field>\n              <div *ngIf=\"(submitted) && getControl.confirmPassword.errors\">\n                <p class=\"color\" *ngIf=\"getControl.confirmPassword.errors.required\">{{'RESETPASSCNFREQ'| translate}}</p>\n                <span *ngIf=\"!getControl.confirmPassword.errors.required\">\n                  <p class=\"color\" *ngIf=\"(getControl.confirmPassword.invalid)\">{{'RESETPASSNOTMATCH'| translate}}</p>\n                </span>\n              </div>\n              <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n              </div>\n            </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/profile/changepassword/changepassword-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/profile/changepassword/changepassword-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ChangepasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordRoutingModule", function() { return ChangepasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _changepassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.component */ "./src/app/home/profile/changepassword/changepassword.component.ts");




const routes = [{
        path: '', component: _changepassword_component__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordComponent"]
    }];
let ChangepasswordRoutingModule = class ChangepasswordRoutingModule {
};
ChangepasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChangepasswordRoutingModule);



/***/ }),

/***/ "./src/app/home/profile/changepassword/changepassword.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/profile/changepassword/changepassword.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/profile/changepassword/changepassword.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/profile/changepassword/changepassword.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(httpService, router, fb, helper, trns, error) {
        this.httpService = httpService;
        this.router = router;
        this.fb = fb;
        this.helper = helper;
        this.trns = trns;
        this.error = error;
        this.ohide = true;
        this.chide = true;
        this.nhide = true;
        this.profileImage = '../../../assets/images/profile.png';
        this.passShow = true;
        this.cPassShow = true;
        this.nPassShow = true;
        this.isEqualNewPass = false;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"];
    }
    ngOnInit() {
        this.userDetails = this.helper.parseObject(localStorage.getItem('userDetails'));
        this.change = this.fb.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].passwordValidator]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_6__["passValidator"]]),
        });
        this.change.get('newPassword').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            this.change.get('confirmPassword').updateValueAndValidity();
        });
    }
    get getControl() { return this.change.controls; }
    changePassword() {
        this.submitted = true;
        if (this.change.invalid) {
            return;
        }
        else {
            this.change.value['new_pass'] = this.change.value.newPassword;
            this.change.value['old_pass'] = this.change.value.oldPassword;
            this.httpService.getRequest('PUT', 'CHANGEPASS', this.change.value, '').subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    this.router.navigateByUrl('/')
                        .then(() => {
                        this.helper.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('RESETPASSSUCC'));
                    });
                }
                else {
                    this.error.handleError(response.err.errCode);
                }
            }, (error) => {
                this.error.handleError(0);
            });
        }
    }
};
ChangepasswordComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_5__["Helper"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
];
ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/changepassword/changepassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/home/profile/changepassword/changepassword.component.scss")).default]
    })
], ChangepasswordComponent);



/***/ }),

/***/ "./src/app/home/profile/changepassword/changepassword.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/profile/changepassword/changepassword.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChangepasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordModule", function() { return ChangepasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword-routing.module */ "./src/app/home/profile/changepassword/changepassword-routing.module.ts");
/* harmony import */ var _changepassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changepassword.component */ "./src/app/home/profile/changepassword/changepassword.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");









let ChangepasswordModule = class ChangepasswordModule {
};
ChangepasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_changepassword_component__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })
], ChangepasswordModule);



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
//# sourceMappingURL=14-es2015.js.map