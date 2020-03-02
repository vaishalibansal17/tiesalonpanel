function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeWalkingUserAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='add()'>\n            <!-- <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"File\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'Add Profile Picture'| translate}}</label>\n            </div> -->\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\" (keyup)=\"checkUser($event)\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted) && getControl.name.errors\">\n                <p class=\"color\" *ngIf=\"getControl.name.errors.required\">{{'ENTRFULLNAME'| translate}}</p>\n                <p class=\"color\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTPROMONNAME'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate | titlecase}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted) && getControl.phone.errors\">\n                <p class=\"color\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Proceed</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/walking-user/add/add-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddRoutingModule */

  /***/
  function srcAppHomeWalkingUserAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoutingModule", function () {
      return AddRoutingModule;
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


    var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add.component */
    "./src/app/home/walking-user/add/add.component.ts");

    var routes = [{
      path: '',
      component: _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }];

    var AddRoutingModule = function AddRoutingModule() {
      _classCallCheck(this, AddRoutingModule);
    };

    AddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/home/walking-user/add/add.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeWalkingUserAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".file_input img {\n  border-radius: 50%;\n  height: 90px;\n  width: 90px;\n  border: 5px solid #e3e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX2lucHV0IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG59XG4iLCIuZmlsZV9pbnB1dCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/walking-user/add/add.component.ts ***!
    \********************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppHomeWalkingUserAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
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


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/service/message.service */
    "./src/app/shared/service/message.service.ts");

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(httpService, router, messageService, helper, errorserv, trns) {
        _classCallCheck(this, AddComponent);

        this.httpService = httpService;
        this.router = router;
        this.messageService = messageService;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_9__["IMG"].PRO;
        this.isExist = false;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].namevalidator]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].validateEmail]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].phonevalidator]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [// Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this = this;

          this.submitted = true; // return false

          this.formData = new FormData();
          console.log(this.profile.value); // return

          this.profile.enable();

          if (this.profile.valid) {
            if (!this.isExist) {
              this.httpService.getRequest('POST', 'WALKING_ADD', this.profile.value).subscribe(function (response) {
                if (response.status === 1) {
                  _this.submitted = true;

                  _this.messageService.setBooking({
                    'user_id': response.res._id
                  });

                  _this.router.navigateByUrl('/walk-in-customer/add-booking');
                } else {
                  if (response.err) {
                    _this.errorserv.handleError(response.err.errCode);
                  }
                }
              }, function (error) {
                _this.errorserv.handleError(0);
              });
            } else {
              this.messageService.setBooking({
                'user_id': this.detail._id
              });
              this.router.navigateByUrl('/walk-in-customer/add-booking');
            }
          } else {
            console.log(this.profile);
          }
        }
      }, {
        key: "readUrl",
        value: function readUrl(event) {
          var _this2 = this;

          if (event.target.files && event.target.files[0]) {
            if (this.helper.isImage(event.target.files[0].type)) {
              var reader = new FileReader();

              reader.onload = function (event) {
                _this2.url = event.target.result;
              };

              reader.readAsDataURL(event.target.files[0]);
              this.profileImage = event.target.files[0];
            } else {// this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
            }
          }
        }
      }, {
        key: "checkUser",
        value: function checkUser(event) {
          var _this3 = this;

          if (this.profile.controls.email.status == 'INVALID') return;else {
            this.httpService.getRequest('POST', 'WALKING_CHK', {
              email: event.target.value
            }).subscribe(function (response) {
              if (response.status === 1) {
                console.log(response.res);
                _this3.detail = response.res;

                _this3.profile.patchValue({
                  name: _this3.detail.hasOwnProperty('name') ? _this3.detail.name : '',
                  email: _this3.detail.hasOwnProperty('email') ? _this3.detail.email : '',
                  phone: _this3.detail.hasOwnProperty('phone') ? response.res.phone : ''
                });

                _this3.isExist = true;

                _this3.profile.disable();
              } else {
                if (response.err) {
                  _this3.errorserv.handleError(response.err.errCode);
                }
              }
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.profile.controls;
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"]
      }, {
        type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["Helper"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/home/walking-user/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/walking-user/add/add.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddModule */

  /***/
  function srcAppHomeWalkingUserAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddModule", function () {
      return AddModule;
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


    var _add_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-routing.module */
    "./src/app/home/walking-user/add/add-routing.module.ts");
    /* harmony import */


    var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add.component */
    "./src/app/home/walking-user/add/add.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddModule = function AddModule() {
      _classCallCheck(this, AddModule);
    };

    AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], AddModule);
    /***/
  },

  /***/
  "./src/app/shared/constants/constant.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/constants/constant.ts ***!
    \**********************************************/

  /*! exports provided: ERROR_MSG, LIMIT, IMG, MESSAGE, DELETE, MAP */

  /***/
  function srcAppSharedConstantsConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function () {
      return ERROR_MSG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIMIT", function () {
      return LIMIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMG", function () {
      return IMG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGE", function () {
      return MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAP", function () {
      return MAP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ERROR_MSG = {
      HTTP_SUBSCRIBER_ERROR: 'Network Error.',
      UNAUTHURIZED_ERROR: 'You are not an authorized user.'
    };
    var LIMIT = [10, 20, 30];
    var IMG = {
      PRO: 'assets/images/user-add.png',
      USR: 'assets/images/noti-pro.png'
    };
    var MESSAGE = {
      SUCCESS: 'SUCCESS',
      FORGOT_SUC: 'Forgot Password Link has been sent successfully.',
      FORGOT_FAIL: 'Admin not found'
    };
    var DELETE = {
      DELETE_TITLE: '',
      DELETE_MSG: 'You wont be able to revert this!',
      DELETE_CONFIRM_TEXT: 'Yes, delete it!'
    };
    var MAP = {
      KEY: "AIzaSyDiESz5lmd8ZNxAGBg3ILiQ8w9SFuYwAB8",
      type: "places"
    };
    /***/
  }
}]);
//# sourceMappingURL=26-es5.js.map