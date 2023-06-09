function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='feedback' (ngSubmit)='feedbackSubmit()'>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\" readonly>\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <!-- <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate | titlecase}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">{{'PHNLNGTH'|translate}}</p>\n            </div> -->\n            <mat-form-field class=\"desc_label\">\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Send Feedback</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/feedback/feedback-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/feedback/feedback-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: FeedbackRoutingModule */

  /***/
  function srcAppHomeFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function () {
      return FeedbackRoutingModule;
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


    var _feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback.component */
    "./src/app/home/feedback/feedback.component.ts");

    var routes = [{
      path: '',
      component: _feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]
    }];

    var FeedbackRoutingModule = function FeedbackRoutingModule() {
      _classCallCheck(this, FeedbackRoutingModule);
    };

    FeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedbackRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/feedback/feedback.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/home/feedback/feedback.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom_form textarea.form-control {\n  padding-top: 17px;\n}\n\n.custom_form .mat-form-field.desc_label .mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 28px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFBaUcsb0JBQUE7QUNHakciLCJmaWxlIjoic3JjL2FwcC9ob21lL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbV9mb3JtIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG59XG4uY3VzdG9tX2Zvcm0gLm1hdC1mb3JtLWZpZWxkLmRlc2NfbGFiZWwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7dG9wOiAyOHB4ICFpbXBvcnRhbnQ7fSIsIi5jdXN0b21fZm9ybSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLXRvcDogMTdweDtcbn1cblxuLmN1c3RvbV9mb3JtIC5tYXQtZm9ybS1maWVsZC5kZXNjX2xhYmVsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDI4cHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/feedback/feedback.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/feedback/feedback.component.ts ***!
    \*****************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppHomeFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
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


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var FeedbackComponent =
    /*#__PURE__*/
    function () {
      function FeedbackComponent(httpService, errService, trns, router) {
        _classCallCheck(this, FeedbackComponent);

        this.httpService = httpService;
        this.errService = errService;
        this.trns = trns;
        this.router = router;
        this.submitted = false;
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var salon = JSON.parse(localStorage.getItem('salon'));
          this.feedback = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](salon.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].validateEmail]),
            // phone: new FormControl(null, [
            //   Validators.required,
            //   ValidationService.phonevalidator
            // ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)])
          });
        }
      }, {
        key: "feedbackSubmit",
        value: function feedbackSubmit() {
          var _this = this;

          this.submitted = true;

          if (this.feedback.valid) {
            this.feedback.value['msg'] = this.feedback.value.description;
            this.httpService.getRequest('POST', 'FEEDBCK', this.feedback.value).subscribe(function (response) {
              if (response.status === 1) {
                _this.router.navigateByUrl('dashboard').then(function () {
                  _this.httpService.sucsTostr(_this.trns.transform('SUCCESS'), _this.trns.transform('FEEDSUCCESS'));
                });
              } else {
                console.log(response);

                _this.errService.handleError(response.err.errCode);
              }
            });
          }
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.feedback.controls;
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.scss */
      "./src/app/home/feedback/feedback.component.scss")).default]
    })], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/home/feedback/feedback.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/feedback/feedback.module.ts ***!
    \**************************************************/

  /*! exports provided: FeedbackModule */

  /***/
  function srcAppHomeFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModule", function () {
      return FeedbackModule;
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


    var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback-routing.module */
    "./src/app/home/feedback/feedback-routing.module.ts");
    /* harmony import */


    var _feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./feedback.component */
    "./src/app/home/feedback/feedback.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var FeedbackModule = function FeedbackModule() {
      _classCallCheck(this, FeedbackModule);
    };

    FeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })], FeedbackModule);
    /***/
  }
}]);
//# sourceMappingURL=24-es5.js.map