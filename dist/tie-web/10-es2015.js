(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-freelancer/reset-freelancer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-freelancer/reset-freelancer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main_bg\">\n    <div class=\"fixed-nav\">\n        <ul>\n            <li></li>\n            <li></li>\n            <li class=\"active\"></li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 main-left\">\n                <div class=\"full-vertical\">\n                    <img class=\"on_board\" src=\"assets/images/img_onboard_3.png\" alt=\"Login\">\n                    <div class=\"head\">boost your reputation with <span>reviews</span></div>\n                </div>\n            </div> \n            <div class=\"col-md-6 main-right freelancer\">\n                <div class=\"fixed-back\"><a [routerLink]=\"['/auth/login']\"><i class=\"fa fa-angle-left\"></i></a></div>\n                <app-auth-header></app-auth-header>\n                <div class=\"full-vertical custom-width\">\n                    <div class=\"logo\"><img src=\"assets/images/tie_logo.png\" alt=\"Logo\"></div>\n                    <h1 class=\"head\">{{'FREERESETPASS'| translate}}</h1>\n                    <p class=\"text-center\">{{'ENTRNWPASS'| translate}}</p>\n                    <div class=\"login-form\">\n                        <form name=\"reset\" (ngSubmit)=\"resetPassword()\" [formGroup]=\"reset\">\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/password-free.png\"\n                                        alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'PLACEHOLDERLNPASS' | translate}}\"\n                                    [type]=\"nhide ? 'password' : 'text'\" maxlength=\"20\"\n                                    (keydown.space)=\"$event.preventDefault()\" formControlName='newPassword'\n                                    class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"nhide = !nhide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{nhide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.newPassword.errors\">\n                                <p class=\"color\" *ngIf=\"getControl.newPassword.errors.required\">{{'RESETPASSREQ'| translate}}\n                                </p>\n                                <!-- <p class=\"color\" *ngIf=\"getControl.newPassword.errors.minlength \">{{'PASSPATTERN'| translate}}</p> -->\n                                <span *ngIf=\"!getControl.newPassword.errors.required\">\n                                    <p class=\"color\" *ngIf=\"getControl.newPassword.errors.invalidPassword\">{{'PASSPATTERN'| translate}}</p>\n                                </span>\n                            </div>\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/password-free.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'RESTPLACEHOLDERLCONFIRMPASS' | translate}}\" [type]=\"chide ? 'password' : 'text'\"\n                                    maxlength=\"20\" (keydown.space)=\"$event.preventDefault()\"\n                                    formControlName='confirmPassword' class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"chide = !chide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{chide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.confirmPassword.errors\">\n                                <p class=\"color\" *ngIf=\"getControl.confirmPassword.errors.required\">{{'RESETPASSCNFREQ'| translate}}</p>\n                                <span *ngIf=\"!getControl.confirmPassword.errors.required\">\n                                    <p class=\"color\" *ngIf=\"getControl.confirmPassword.invalid\">{{'RESETPASSNOTMATCH'| translate}}</p>\n                                </span>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-submit\">{{'RESET' | translate}}</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/reset-freelancer/reset-freelancer-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/auth/reset-freelancer/reset-freelancer-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ResetFreelancerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFreelancerRoutingModule", function() { return ResetFreelancerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-freelancer.component */ "./src/app/auth/reset-freelancer/reset-freelancer.component.ts");




const routes = [{ path: '', component: _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_3__["ResetFreelancerComponent"] }];
let ResetFreelancerRoutingModule = class ResetFreelancerRoutingModule {
};
ResetFreelancerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ResetFreelancerRoutingModule);



/***/ }),

/***/ "./src/app/auth/reset-freelancer/reset-freelancer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/reset-freelancer/reset-freelancer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-right {\n  background: url('reset_bg.png') no-repeat center;\n  background-size: cover;\n}\n\n.main-right .custom-width h1.head {\n  color: #000;\n}\n\n.color {\n  color: maroon !important;\n}\n\n.main-right p.text-center, .main-right p {\n  color: #000;\n}\n\n.main-right .custom-width .form-control {\n  background-color: #fff !important;\n}\n\n.fixed-back i.fa {\n  background: #F96BB3;\n  color: #fff;\n}\n\n.fixed-select button {\n  color: #000;\n}\n\n.main-right .btn-submit {\n  background: #F96BB3 !important;\n  color: #fff;\n}\n\nimg.drop_img {\n  width: 10px;\n}\n\n.main-right .custom-width .logo img {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvYXV0aC9yZXNldC1mcmVlbGFuY2VyL3Jlc2V0LWZyZWVsYW5jZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVzZXQtZnJlZWxhbmNlci9yZXNldC1mcmVlbGFuY2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsZ0RBQUE7RUFBc0Usc0JBQUE7QUNHbkY7O0FERkE7RUFBa0MsV0FBQTtBQ01sQzs7QURMQTtFQUFRLHdCQUFBO0FDU1I7O0FEUkE7RUFBd0MsV0FBQTtBQ1l4Qzs7QURYQTtFQUF5QyxpQ0FBQTtBQ2V6Qzs7QURkQTtFQUFrQixtQkFBQTtFQUFvQixXQUFBO0FDbUJ0Qzs7QURsQkE7RUFBc0IsV0FBQTtBQ3NCdEI7O0FEckJBO0VBQXlCLDhCQUFBO0VBQStCLFdBQUE7QUMwQnhEOztBRHpCQTtFQUFjLFdBQUE7QUM2QmQ7O0FENUJBO0VBQW9DLFlBQUE7QUNnQ3BDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZXNldC1mcmVlbGFuY2VyL3Jlc2V0LWZyZWVsYW5jZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1yaWdodCB7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVzZXRfYmcucG5nKSBuby1yZXBlYXQgY2VudGVyO2JhY2tncm91bmQtc2l6ZTogY292ZXI7fVxuLm1haW4tcmlnaHQgLmN1c3RvbS13aWR0aCBoMS5oZWFke2NvbG9yOiAjMDAwO31cbi5jb2xvciB7Y29sb3I6IG1hcm9vbiAhaW1wb3J0YW50O31cbi5tYWluLXJpZ2h0IHAudGV4dC1jZW50ZXIsLm1haW4tcmlnaHQgcHtjb2xvcjogIzAwMDt9XG4ubWFpbi1yaWdodCAuY3VzdG9tLXdpZHRoIC5mb3JtLWNvbnRyb2wge2JhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDt9XG4uZml4ZWQtYmFjayBpLmZhIHtiYWNrZ3JvdW5kOiAjRjk2QkIzO2NvbG9yOiAjZmZmO31cbi5maXhlZC1zZWxlY3QgYnV0dG9uIHtjb2xvcjogIzAwMDt9XG4ubWFpbi1yaWdodCAuYnRuLXN1Ym1pdCB7YmFja2dyb3VuZDogI0Y5NkJCMyAhaW1wb3J0YW50O2NvbG9yOiAjZmZmO31cbmltZy5kcm9wX2ltZyB7d2lkdGg6IDEwcHg7fVxuLm1haW4tcmlnaHQgLmN1c3RvbS13aWR0aCAubG9nbyBpbWd7d2lkdGg6IDEyMHB4O30iLCIubWFpbi1yaWdodCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Jlc2V0X2JnLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW4tcmlnaHQgLmN1c3RvbS13aWR0aCBoMS5oZWFkIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiBtYXJvb24gIWltcG9ydGFudDtcbn1cblxuLm1haW4tcmlnaHQgcC50ZXh0LWNlbnRlciwgLm1haW4tcmlnaHQgcCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubWFpbi1yaWdodCAuY3VzdG9tLXdpZHRoIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maXhlZC1iYWNrIGkuZmEge1xuICBiYWNrZ3JvdW5kOiAjRjk2QkIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpeGVkLXNlbGVjdCBidXR0b24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1haW4tcmlnaHQgLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kOiAjRjk2QkIzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbWcuZHJvcF9pbWcge1xuICB3aWR0aDogMTBweDtcbn1cblxuLm1haW4tcmlnaHQgLmN1c3RvbS13aWR0aCAubG9nbyBpbWcge1xuICB3aWR0aDogMTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/reset-freelancer/reset-freelancer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/reset-freelancer/reset-freelancer.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetFreelancerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFreelancerComponent", function() { return ResetFreelancerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let ResetFreelancerComponent = class ResetFreelancerComponent {
    constructor(httpService, router, fb, routes, error, trns) {
        this.httpService = httpService;
        this.router = router;
        this.fb = fb;
        this.routes = routes;
        this.error = error;
        this.trns = trns;
        this.chide = true;
        this.nhide = true;
        this.isLoading = false;
        this.passShow = true;
        this.cPassShow = true;
        this.formData = new FormData();
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];
    }
    ngOnInit() {
        this.token = this.routes.snapshot.params.token;
        if (this.token)
            this.token = this.token.replace(/\s/g, "+");
        this.reset = this.fb.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].passwordValidator
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["passValidator"]])
        });
        this.reset.get('newPassword').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            this.reset.get('confirmPassword').updateValueAndValidity();
        });
    }
    get getControl() { return this.reset.controls; }
    resetPassword() {
        this.submitted = true;
        if (!this.reset.valid) {
            return;
        }
        else {
            this.httpService.getRequest('POST', 'FREELNCERESET', { pass: this.reset.value.newPassword, tkn: this.token }).subscribe((response) => {
                if (response.status === 1) {
                    this.router.navigateByUrl('/auth')
                        .then(() => {
                        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('RESETPASSSUCC'));
                    });
                }
                else {
                    if (response.err) {
                        this.error.handleError(response.err.errCode);
                    }
                    else {
                        this.error.handleError(0);
                    }
                }
            }, err => {
                this.error.handleError(0);
            });
        }
    }
    ngDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
};
ResetFreelancerComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] }
];
ResetFreelancerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-freelancer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-freelancer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-freelancer/reset-freelancer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-freelancer.component.scss */ "./src/app/auth/reset-freelancer/reset-freelancer.component.scss")).default]
    })
], ResetFreelancerComponent);



/***/ }),

/***/ "./src/app/auth/reset-freelancer/reset-freelancer.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/auth/reset-freelancer/reset-freelancer.module.ts ***!
  \******************************************************************/
/*! exports provided: ResetFreelancerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFreelancerModule", function() { return ResetFreelancerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reset_freelancer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-freelancer-routing.module */ "./src/app/auth/reset-freelancer/reset-freelancer-routing.module.ts");
/* harmony import */ var _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-freelancer.component */ "./src/app/auth/reset-freelancer/reset-freelancer.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth-header/auth-header.module */ "./src/app/auth/auth-header/auth-header.module.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");










let ResetFreelancerModule = class ResetFreelancerModule {
};
ResetFreelancerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reset_freelancer_component__WEBPACK_IMPORTED_MODULE_4__["ResetFreelancerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _reset_freelancer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetFreelancerRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_8__["AuthHeaderModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
    })
], ResetFreelancerModule);



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
//# sourceMappingURL=10-es2015.js.map