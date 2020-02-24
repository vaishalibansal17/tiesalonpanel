(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main_bg\">\n    <div class=\"fixed-nav\">\n        <ul>\n            <li class=\"active\"></li>\n            <li></li>\n            <li></li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 main-left\">\n                <div class=\"full-vertical\">\n                    <img class=\"on_board\" src=\"assets/images/img_onboard_1.png\" alt=\"Login\">\n                    <div class=\"head\">Your Service Menu is <span>Online</span></div>\n                </div>\n            </div>\n            <div class=\"col-md-6 main-right\">\n                <app-auth-header></app-auth-header>\n                <div class=\"full-vertical custom-width\">\n                    <div class=\"logo\"><img src=\"assets/images/tie_logo_black.png\" alt=\"Logo\"></div>\n                    <h1 class=\"head\">{{'LOGIN'| translate}}</h1>\n                    <div class=\"login-form\">\n                        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginfrm\">\n                            <mat-form-field>\n                                <span class=\"email-img\"><img src=\"assets/images/envelope.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'PLACEHOLDERLEMAIL'| translate}}\" class=\"form-control\" formControlName=\"email\"\n                                    maxlength=\"50\">\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.email.errors\">\n                                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                                <p class=\"color error\" *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">{{'LOGINVALIDEMAIL'| translate}}</p>\n                            </div>\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/lock.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'PLACEHOLDERLPASS'| translate}}\" formControlName=\"pass\" maxlength=\"20\"\n                                    [type]=\"hide ? 'password' : 'text'\" class=\"form-control pass-space\">\n                                <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.pass.errors\">\n                                <p class=\"color error\" *ngIf=\"getControl.pass.errors.required\">{{'LOGINPASS'| translate}}</p>\n                                <!-- <p class=\"color error\" *ngIf=\"getControl.pass.errors.minlength \">Incorrect password or\n                                    email.</p> -->\n                            </div>\n                            <p class=\"right\"><a [routerLink]=\"['/auth/forgot']\">{{'FRGTPASS' |  translate}}?</a></p>\n                            <button type=\"submit\" class=\"btn btn-submit\">{{'LOGINBTN' |  translate}}</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");




const routes = [{
        path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-right .btn-submit {\n  margin: 0px 0px 10px;\n}\n\np.color.error {\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF3QixvQkFBQTtBQ0V4Qjs7QUREQTtFQUFjLFFBQUE7QUNLZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1yaWdodCAuYnRuLXN1Ym1pdHttYXJnaW46IDBweCAwcHggMTBweDt9XG5wLmNvbG9yLmVycm9ye3RvcDowcHh9IiwiLm1haW4tcmlnaHQgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbn1cblxucC5jb2xvci5lcnJvciB7XG4gIHRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/translate.service */ "./src/app/shared/service/translate.service.ts");










let LoginComponent = class LoginComponent {
    constructor(httpService, router, error, trns, trnsalte, helper) {
        this.httpService = httpService;
        this.router = router;
        this.error = error;
        this.trns = trns;
        this.trnsalte = trnsalte;
        this.helper = helper;
        this.hide = true;
        this.submitted = false;
        this.formSubmit = false;
        this.loading = false;
        this.email = '';
        this.pass = '';
        this.isLoading = false;
        this.passShow = true;
    }
    ngOnInit() {
        // console.log(this.trnsalte.currentLang);
        this.loginfrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].validateEmail
            ]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    get getControl() { return this.loginfrm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginfrm.valid) {
            this.httpService.getRequest('POST', 'LOGIN', this.loginfrm.value)
                .subscribe((data) => {
                if (data.status) {
                    let { acsTkn, _id, logo, email, name, c_policy, is_charge } = data.res;
                    localStorage.setItem('acsTkn', acsTkn);
                    localStorage.setItem('salonid', _id);
                    localStorage.setItem('salon', JSON.stringify({ 'name': name, 'logo': logo, 'email': email, 'c_policy': c_policy, 'is_charge': is_charge }));
                    this.isLoading = !this.isLoading;
                    this.router.navigate(['/']).then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('LOGINSUCCESS')));
                }
                else {
                    console.log(data.err);
                    this.error.handleError(data.err.errCode);
                }
            }, (error) => {
                this.error.handleError(0);
            });
        }
        else {
            // this.spinner.hide();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] },
    { type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_8__["Helper"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth-header/auth-header.module */ "./src/app/auth/auth-header/auth-header.module.ts");











let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=13-es2015.js.map