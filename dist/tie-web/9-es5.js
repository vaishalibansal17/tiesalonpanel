function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main_bg\">\n    <div class=\"fixed-nav\">\n        <ul>\n            <li></li>\n            <li></li>\n            <li class=\"active\"></li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 main-left\">\n                <div class=\"full-vertical\">\n                    <img class=\"on_board\" src=\"assets/images/img_onboard_3.png\" alt=\"Login\">\n                    <div class=\"head\">boost your reputation with <span>reviews</span></div>\n                </div>\n            </div>\n            <div class=\"col-md-6 main-right\">\n                <div class=\"fixed-back\"><a [routerLink]=\"['/auth']\"><i class=\"fa fa-angle-left\"></i></a></div>\n                <div class=\"fixed-select\">\n                    <button mat-button [matMenuTriggerFor]=\"lan_menu\" [disableRipple]=\"true\">En <img src=\"assets/images/flag_en.png\" alt=\"England\"><img class=\"drop_img\" src=\"assets/images/dropdown.png\" alt=\"\"></button>\n                    <mat-menu #lan_menu=\"matMenu\" xPosition=\"before\">\n                        <button mat-menu-item>Ar <img src=\"assets/images/flag_ar.png\" alt=\"England\"></button>\n                    </mat-menu>\n                </div>\n                <div class=\"full-vertical custom-width\">\n                    <div class=\"logo\"><img src=\"assets/images/tie_logo_black.png\" alt=\"Logo\"></div>\n                    <h1 class=\"head\">Reset Password</h1>\n                    <p class=\"text-center\">Please enter your new password</p>\n                    <div class=\"login-form\">\n                        <form name=\"reset\" (ngSubmit)=\"resetPassword()\" [formGroup]=\"reset\">\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/lock.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"New Password\" [type]=\"nhide ? 'password' : 'text'\"\n                                    maxlength=\"20\" (keydown.space)=\"$event.preventDefault()\"\n                                    formControlName='newPassword' class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"nhide = !nhide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{nhide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted || getControl.newPassword.dirty|| getControl.newPassword.touched) && getControl.newPassword.errors\">\n                                <p class=\"color\" *ngIf=\"getControl.newPassword.errors.required\">{{'RESETPASSREQ'| translate}}\n                                </p>\n                                <p class=\"color\" *ngIf=\"getControl.newPassword.errors.minlength \">{{'PASSPATTERN'| translate}}</p>\n                                <span *ngIf=\"!getControl.newPassword.errors.minlength\">\n                                    <p class=\"color\" *ngIf=\"getControl.newPassword.errors.pattern\">{{'PASSPATTERN'| translate}}</p>\n                                </span>\n                            </div>\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/lock.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"Confirm Password\" [type]=\"chide ? 'password' : 'text'\"\n                                    maxlength=\"20\" (keydown.space)=\"$event.preventDefault()\"\n                                    formControlName='confirmPassword' class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"chide = !chide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{chide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted || getControl.confirmPassword.dirty|| getControl.confirmPassword.touched) && getControl.confirmPassword.errors\">\n                                <p class=\"color\" *ngIf=\"getControl.confirmPassword.errors.required\">{{'RESETPASSCNFREQ'| translate}}</p>\n                                <span *ngIf=\"!getControl.confirmPassword.errors.required\">\n                                    <p class=\"color\" *ngIf=\"getControl.confirmPassword.invalid\">{{'RESETPASSNOTMATCH'| translate}}</p>\n                                </span>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-submit\">Reset</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ResetPasswordRoutingModule */

  /***/
  function srcAppAuthResetPasswordResetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function () {
      return ResetPasswordRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/auth/reset-password/reset-password.component.ts");

    var routes = [{
      path: '',
      component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    }];

    var ResetPasswordRoutingModule = function ResetPasswordRoutingModule() {
      _classCallCheck(this, ResetPasswordRoutingModule);
    };

    ResetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPasswordRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppAuthResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(httpService, router, fb, routes, error, trns) {
        _classCallCheck(this, ResetPasswordComponent);

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
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.token = this.routes.snapshot.params.token;
          if (this.token) this.token = this.token.replace(/\s/g, "+");
          this.reset = this.fb.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].passwordValidator]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["passValidator"]])
          });
          this.reset.get('newPassword').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
            _this.reset.get('confirmPassword').updateValueAndValidity();
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this2 = this;

          console.log(this.getControl.confirmPassword.errors);
          this.isLoading = true;
          this.submitted = true;

          if (this.reset.invalid) {
            this.isLoading = false;
          } else {
            this.httpService.getRequest('POST', 'RESET', {
              pass: this.reset.value.newPassword,
              tkn: this.token
            }).subscribe(function (response) {
              if (response.status === 1) {
                _this2.isLoading = false;

                _this2.router.navigateByUrl('/auth').then(function () {
                  _this2.httpService.sucsTostr(_this2.trns.transform('SUCCESS'), _this2.trns.transform('RESETPASSSUCC'));
                });
              } else {
                if (response.error) {
                  _this2.error.handleError(response.err.errCode);
                } else {
                  _this2.error.handleError(0);
                }
              }
            }, function (err) {
              _this2.error.handleError(0);
            });
          }
        }
      }, {
        key: "ngDestroy",
        value: function ngDestroy() {
          this.unsubscribeAll.next();
          this.unsubscribeAll.complete();
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.reset.controls;
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.scss */
      "./src/app/auth/reset-password/reset-password.component.scss")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password.module.ts ***!
    \**************************************************************/

  /*! exports provided: ResetPasswordModule */

  /***/
  function srcAppAuthResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
      return ResetPasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-password-routing.module */
    "./src/app/auth/reset-password/reset-password-routing.module.ts");
    /* harmony import */


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/auth/reset-password/reset-password.component.ts");
    /* harmony import */


    var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/material/material.module */
    "./src/app/shared/material/material.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var ResetPasswordModule = function ResetPasswordModule() {
      _classCallCheck(this, ResetPasswordModule);
    };

    ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordRoutingModule"], src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ResetPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=9-es5.js.map