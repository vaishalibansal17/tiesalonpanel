function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-freelancer/reset-freelancer.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-freelancer/reset-freelancer.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetFreelancerResetFreelancerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main_bg\">\n    <div class=\"fixed-nav\">\n        <ul>\n            <li></li>\n            <li></li>\n            <li class=\"active\"></li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 main-left\">\n                <div class=\"full-vertical\">\n                    <img class=\"on_board\" src=\"assets/images/img_onboard_3.png\" alt=\"Login\">\n                    <div class=\"head\">boost your reputation with <span>reviews</span></div>\n                </div>\n            </div> \n            <div class=\"col-md-6 main-right freelancer\">\n                <div class=\"fixed-back\"><a [routerLink]=\"['/auth/login']\"><mat-icon>keyboard_arrow_left</mat-icon></a></div>\n                <app-auth-header></app-auth-header>\n                <div class=\"full-vertical custom-width\">\n                    <div class=\"logo\"><img src=\"assets/images/tie_logo.png\" alt=\"Logo\"></div>\n                    <h1 class=\"head\" *ngIf=\"!isSuccess\">{{'FREERESETPASS'| translate}}</h1>\n                    <p class=\"text-center\" *ngIf=\"!isSuccess\">{{'ENTRNWPASS'| translate}}</p>\n                    <h1 class=\"head\" style=\"color:darkgreen; text-transform: unset;\" *ngIf=\"isSuccess\">{{'SUCCESSRESET'| translate}}</h1>\n                    <div class=\"login-form\" *ngIf=\"!isSuccess\">\n                        <form name=\"reset\" (ngSubmit)=\"resetPassword()\" [formGroup]=\"reset\">\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/password-free.png\"\n                                        alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'PLACEHOLDERLNPASS' | translate}}\"\n                                    [type]=\"nhide ? 'password' : 'text'\" maxlength=\"20\"\n                                    (keydown.space)=\"$event.preventDefault()\" formControlName='newPassword'\n                                    class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"nhide = !nhide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{nhide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.newPassword.errors\">\n                                <p class=\"color error\" *ngIf=\"getControl.newPassword.errors.required\">{{'RESETPASSREQ'| translate}}\n                                </p>\n                                <!-- <p class=\"color error\" *ngIf=\"getControl.newPassword.errors.minlength \">{{'PASSPATTERN'| translate}}</p> -->\n                                <span *ngIf=\"!getControl.newPassword.errors.required\">\n                                    <p class=\"color error\" *ngIf=\"getControl.newPassword.errors.invalidPassword\">{{'PASSPATTERN'| translate}}</p>\n                                </span>\n                            </div>\n                            <mat-form-field>\n                                <span class=\"email-img pass\"><img src=\"assets/images/password-free.png\" alt=\"envelope\"></span>\n                                <input matInput placeholder=\"{{'RESTPLACEHOLDERLCONFIRMPASS' | translate}}\" [type]=\"chide ? 'password' : 'text'\"\n                                    maxlength=\"20\" (keydown.space)=\"$event.preventDefault()\"\n                                    formControlName='confirmPassword' class=\"form-control\">\n                                <button type=\"button\" mat-icon-button matSuffix (click)=\"chide = !chide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{chide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <div\n                                *ngIf=\"(submitted) && getControl.confirmPassword.errors\">\n                                <p class=\"color error\" *ngIf=\"getControl.confirmPassword.errors.required\">{{'RESETPASSCNFREQ'| translate}}</p>\n                                <span *ngIf=\"!getControl.confirmPassword.errors.required\">\n                                    <p class=\"color error\" *ngIf=\"getControl.confirmPassword.invalid\">{{'RESETPASSNOTMATCH'| translate}}</p>\n                                </span>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-submit\">{{'RESET' | translate}}</button>\n                        </form>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/reset-freelancer/reset-freelancer-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/reset-freelancer/reset-freelancer-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ResetFreelancerRoutingModule */

  /***/
  function srcAppResetFreelancerResetFreelancerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetFreelancerRoutingModule", function () {
      return ResetFreelancerRoutingModule;
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


    var _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-freelancer.component */
    "./src/app/reset-freelancer/reset-freelancer.component.ts");

    var routes = [{
      path: '',
      component: _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_3__["ResetFreelancerComponent"]
    }];

    var ResetFreelancerRoutingModule = function ResetFreelancerRoutingModule() {
      _classCallCheck(this, ResetFreelancerRoutingModule);
    };

    ResetFreelancerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetFreelancerRoutingModule);
    /***/
  },

  /***/
  "./src/app/reset-freelancer/reset-freelancer.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/reset-freelancer/reset-freelancer.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetFreelancerResetFreelancerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-right {\n  background: url('reset_bg.png') no-repeat center;\n  background-size: cover;\n}\n\n.main-right .custom-width h1.head {\n  color: #000;\n}\n\n.color {\n  color: maroon !important;\n}\n\n.main-right p.text-center, .main-right p {\n  color: #000;\n}\n\n.main-right .custom-width .form-control {\n  background-color: #fff !important;\n}\n\n.fixed-back i.fa {\n  background: #F96BB3;\n  color: #fff;\n}\n\n.fixed-select button {\n  color: #000;\n}\n\n.main-right .btn-submit {\n  background: #F96BB3 !important;\n  color: #fff;\n}\n\nimg.drop_img {\n  width: 10px;\n}\n\n.main-right .custom-width .logo img {\n  width: 120px;\n}\n\np.color.error {\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvcmVzZXQtZnJlZWxhbmNlci9yZXNldC1mcmVlbGFuY2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNldC1mcmVlbGFuY2VyL3Jlc2V0LWZyZWVsYW5jZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxnREFBQTtFQUFtRSxzQkFBQTtBQ0doRjs7QURGQTtFQUFrQyxXQUFBO0FDTWxDOztBRExBO0VBQVEsd0JBQUE7QUNTUjs7QURSQTtFQUF3QyxXQUFBO0FDWXhDOztBRFhBO0VBQXlDLGlDQUFBO0FDZXpDOztBRGRBO0VBQWtCLG1CQUFBO0VBQW9CLFdBQUE7QUNtQnRDOztBRGxCQTtFQUFzQixXQUFBO0FDc0J0Qjs7QURyQkE7RUFBeUIsOEJBQUE7RUFBK0IsV0FBQTtBQzBCeEQ7O0FEekJBO0VBQWMsV0FBQTtBQzZCZDs7QUQ1QkE7RUFBb0MsWUFBQTtBQ2dDcEM7O0FEOUJBO0VBQWMsUUFBQTtBQ2tDZCIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LWZyZWVsYW5jZXIvcmVzZXQtZnJlZWxhbmNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXJpZ2h0IHtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXNldF9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9XG4ubWFpbi1yaWdodCAuY3VzdG9tLXdpZHRoIGgxLmhlYWR7Y29sb3I6ICMwMDA7fVxuLmNvbG9yIHtjb2xvcjogbWFyb29uICFpbXBvcnRhbnQ7fVxuLm1haW4tcmlnaHQgcC50ZXh0LWNlbnRlciwubWFpbi1yaWdodCBwe2NvbG9yOiAjMDAwO31cbi5tYWluLXJpZ2h0IC5jdXN0b20td2lkdGggLmZvcm0tY29udHJvbCB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O31cbi5maXhlZC1iYWNrIGkuZmEge2JhY2tncm91bmQ6ICNGOTZCQjM7Y29sb3I6ICNmZmY7fVxuLmZpeGVkLXNlbGVjdCBidXR0b24ge2NvbG9yOiAjMDAwO31cbi5tYWluLXJpZ2h0IC5idG4tc3VibWl0IHtiYWNrZ3JvdW5kOiAjRjk2QkIzICFpbXBvcnRhbnQ7Y29sb3I6ICNmZmY7fVxuaW1nLmRyb3BfaW1nIHt3aWR0aDogMTBweDt9XG4ubWFpbi1yaWdodCAuY3VzdG9tLXdpZHRoIC5sb2dvIGltZ3t3aWR0aDogMTIwcHg7fVxuXG5wLmNvbG9yLmVycm9ye3RvcDowcHh9IiwiLm1haW4tcmlnaHQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXNldF9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYWluLXJpZ2h0IC5jdXN0b20td2lkdGggaDEuaGVhZCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogbWFyb29uICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXJpZ2h0IHAudGV4dC1jZW50ZXIsIC5tYWluLXJpZ2h0IHAge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1haW4tcmlnaHQgLmN1c3RvbS13aWR0aCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZml4ZWQtYmFjayBpLmZhIHtcbiAgYmFja2dyb3VuZDogI0Y5NkJCMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5maXhlZC1zZWxlY3QgYnV0dG9uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tYWluLXJpZ2h0IC5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZDogI0Y5NkJCMyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW1nLmRyb3BfaW1nIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5tYWluLXJpZ2h0IC5jdXN0b20td2lkdGggLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG5wLmNvbG9yLmVycm9yIHtcbiAgdG9wOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/reset-freelancer/reset-freelancer.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/reset-freelancer/reset-freelancer.component.ts ***!
    \****************************************************************/

  /*! exports provided: ResetFreelancerComponent */

  /***/
  function srcAppResetFreelancerResetFreelancerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetFreelancerComponent", function () {
      return ResetFreelancerComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ResetFreelancerComponent =
    /*#__PURE__*/
    function () {
      function ResetFreelancerComponent(httpService, router, fb, routes, error, trns) {
        _classCallCheck(this, ResetFreelancerComponent);

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
        this.isSuccess = false;
        this.formData = new FormData();
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ResetFreelancerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.token = this.routes.snapshot.params.token;
          if (this.token) this.token = this.token.replace(/\s/g, "+");
          this.reset = this.fb.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].passwordValidator]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["passValidator"]])
          });
          this.reset.get('newPassword').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
            _this.reset.get('confirmPassword').updateValueAndValidity();
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this2 = this;

          this.submitted = true;

          if (!this.reset.valid) {
            return;
          } else {
            this.httpService.getRequest('POST', 'FREELNCERESET', {
              pass: this.reset.value.newPassword,
              tkn: this.token
            }).subscribe(function (response) {
              if (response.status === 1) {
                _this2.httpService.sucsTostr(_this2.trns.transform('SUCCESS'), _this2.trns.transform('RESETPASSSUCC'));

                _this2.isSuccess = true; // this.router.navigateByUrl('/auth')
                //   .then(() => {
                //   });
              } else {
                if (response.err) {
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

      return ResetFreelancerComponent;
    }();

    ResetFreelancerComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]
      }];
    };

    ResetFreelancerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-freelancer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-freelancer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-freelancer/reset-freelancer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-freelancer.component.scss */
      "./src/app/reset-freelancer/reset-freelancer.component.scss")).default]
    })], ResetFreelancerComponent);
    /***/
  },

  /***/
  "./src/app/reset-freelancer/reset-freelancer.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/reset-freelancer/reset-freelancer.module.ts ***!
    \*************************************************************/

  /*! exports provided: ResetFreelancerModule */

  /***/
  function srcAppResetFreelancerResetFreelancerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetFreelancerModule", function () {
      return ResetFreelancerModule;
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


    var _reset_freelancer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-freelancer-routing.module */
    "./src/app/reset-freelancer/reset-freelancer-routing.module.ts");
    /* harmony import */


    var _reset_freelancer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reset-freelancer.component */
    "./src/app/reset-freelancer/reset-freelancer.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _auth_auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/auth-header/auth-header.module */
    "./src/app/auth/auth-header/auth-header.module.ts");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");

    var ResetFreelancerModule = function ResetFreelancerModule() {
      _classCallCheck(this, ResetFreelancerModule);
    };

    ResetFreelancerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reset_freelancer_component__WEBPACK_IMPORTED_MODULE_4__["ResetFreelancerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _reset_freelancer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetFreelancerRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _auth_auth_header_auth_header_module__WEBPACK_IMPORTED_MODULE_8__["AuthHeaderModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], ResetFreelancerModule);
    /***/
  }
}]);
//# sourceMappingURL=53-es5.js.map