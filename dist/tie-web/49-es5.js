function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeWalkingUserAddbookingsAddbookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\" [formGroup]='profile' (ngSubmit)=\"submit()\">\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'SERVICE'| translate}}</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div *ngIf=\"(submitted && !chips.length)\">\n                    <p class=\"color error\" *ngIf=\"!chips.length\">{{'SRVREQ'|translate}}</p>\n                    <!-- <p class=\"color error\" *ngIf=\"!getControl.price.errors.required && getControl.price.errors.Invalidphone \">\n                        {{'PHNLNGTH'|translate}}</p> -->\n                </div>\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip *ngFor=\"let chip of chips; let i =index\" [disableRipple]=\"true\" [selectable]=\"selectable\"\n                        [removable]=\"removable\" (removed)=\"remove(i, chip)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <!-- <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                    <mat-chip color=\"accent\" selected>Accent fish</mat-chip> -->\n                </mat-chip-list>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Price\" formControlName=\"price\" readonly='true' class=\"form-control\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted && getControl.price.errors)\">\n                <p class=\"color error\" *ngIf=\"getControl.price.errors.required\">{{'PRICREQ'|translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.price.errors.required && getControl.price.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"envelope\"></span>\n                <mat-label>{{'STAFF'| translate}}</mat-label>\n                <mat-select formControlName=\"staf_id\">\n                    <mat-option *ngFor=\"let staff of staff\" [value]=\"staff\">\n                        {{staff.name | titlecase}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div>\n                <span ><img class=\"cal-img\" src=\"assets/images/calendar_black.png\" alt=\"envelope\"></span>\n                <p-calendar [showTime]=\"true\" formControlName=\"bookDateTime\" icon=\"pi pi-calendar\"  dateFormat=\"dd M yy\"\n                    placeholder=\"Select appointment date and time\" inputStyleClass=\"form-control\" [minDate] = \"todaydt\"\n                    [readonlyInput]=\"true\"></p-calendar>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"desc\" maxlength=\"150\"></textarea>\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.desc.dirty|| getControl.desc.touched) && getControl.desc.errors\">\n                <p class=\"color\" *ngIf=\"getControl.desc.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color\" *ngIf=\"getControl.desc.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div *ngIf=\"(submitted && getControl.staf_id.errors)\">\n                <p class=\"color error\" *ngIf=\"getControl.staf_id.errors.required\">{{'STFREQ'|translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddbookingsRoutingModule */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsRoutingModule", function () {
      return AddbookingsRoutingModule;
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


    var _addbookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addbookings.component */
    "./src/app/home/walking-user/addbookings/addbookings.component.ts");

    var routes = [{
      path: '',
      component: _addbookings_component__WEBPACK_IMPORTED_MODULE_3__["AddbookingsComponent"]
    }];

    var AddbookingsRoutingModule = function AddbookingsRoutingModule() {
      _classCallCheck(this, AddbookingsRoutingModule);
    };

    AddbookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddbookingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom_form span.email-img.pass {\n  top: 15px !important;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n\np.color.error {\n  top: 0px !important;\n}\n\n:host ::ng-deep .ui-inputtext {\n  width: 547.5px !important;\n}\n\nimg.cal-img {\n  position: absolute;\n  z-index: 999;\n  padding-top: 15px;\n  padding-left: 14px;\n  color: #232121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2FkZGJvb2tpbmdzL2FkZGJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtDLG9CQUFBO0FDRWxDOztBREFBO0VBQTRCLGdDQUFBO0FDSTVCOztBREhBO0VBQXdCLG9DQUFBO0VBQXFDLGtCQUFBO0VBQW1CLG1CQUFBO0FDU2hGOztBRFBBO0VBQXVELFlBQUE7QUNXdkQ7O0FEVkE7RUFBa0IsbUJBQUE7QUNjbEI7O0FEYkE7RUFDSSx5QkFBQTtBQ2dCSjs7QURkRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcucGFzcyB7dG9wOiAxNXB4ICFpbXBvcnRhbnQ7fVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7ZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnR9XG4ubWF0LXNlbGVjdC5tdWx0aXNlbGVjdHtib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4uY3VzdG9tX2Zvcm0gbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7Ym9yZGVyOm5vbmV9XG5wLmNvbG9yLmVycm9yeyAgICB0b3A6IDBweCAhaW1wb3J0YW50O31cbjpob3N0IDo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcbiAgICB3aWR0aDogNTQ3LjVweCAhaW1wb3J0YW50O1xuICB9XG4gIGltZy5jYWwtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICBjb2xvcjogIzIzMjEyMTtcbn0iLCIuY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcucGFzcyB7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5wLmNvbG9yLmVycm9yIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS1pbnB1dHRleHQge1xuICB3aWR0aDogNTQ3LjVweCAhaW1wb3J0YW50O1xufVxuXG5pbWcuY2FsLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBjb2xvcjogIzIzMjEyMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.component.ts ***!
    \************************************************************************/

  /*! exports provided: AddbookingsComponent */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsComponent", function () {
      return AddbookingsComponent;
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


    var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/message.service */
    "./src/app/shared/service/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AddbookingsComponent =
    /*#__PURE__*/
    function () {
      function AddbookingsComponent(httpService, router, messageService, helper, errorserv, trns) {
        _classCallCheck(this, AddbookingsComponent);

        this.httpService = httpService;
        this.router = router;
        this.messageService = messageService;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.servicea = [{
          value: '1',
          viewValue: 'Hair Spa'
        }, {
          value: '2',
          viewValue: 'Spa'
        }];
        this.chips = [];
        this.sendServ = [];
        this.selectable = true;
        this.removable = true;
        this.price = 0;
        this.submitted = false;
        this.todaydt = new Date();
      }

      _createClass(AddbookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.responseData = this.messageService.getBooking();

          if (!this.responseData) {// this.router.navigateByUrl('walkin-customer/add-user').then(() => {
            //   this.errorserv.handleError(0);
            // })
          } else this.getServices();

          this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            staf_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"].numberValidator]),
            bookDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          this.submitted = true;

          if (this.profile.valid) {
            // this.profile.controls['price'].enable();
            console.log(this.profile);
            this.profile.value['service'] = JSON.stringify(this.chips);
            this.profile.value['user_id'] = this.responseData.user_id;
            this.profile.value['staf_name'] = this.profile.value.staf_id.name;
            this.profile.value['staf_id'] = this.profile.value.staf_id._id; // return

            this.httpService.getRequest('POST', 'WALKING_BOOK', this.profile.value).subscribe(function (response) {
              if (response.status === 1) {
                _this.submitted = true;

                _this.router.navigateByUrl('/walk-in-customer').then(function () {
                  _this.httpService.sucsTostr(_this.trns.transform('SUCCESS'), _this.trns.transform('WALKNGSUCCESS'));
                });
              } else {
                if (response.err) {
                  _this.errorserv.handleError(response.err.errCode);
                }
              }
            }, function (error) {
              _this.errorserv.handleError(0);
            });
          } else {
            console.log(this.profile);
          }
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this2 = this;

          var service = this.httpService.getRequest('GET', 'SERVICES', '');
          var staff = this.httpService.getRequest('GET', 'STAFF', '?all=true');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])([service, staff]).subscribe(function (result) {
            _this2.services = result[0].res.services;
            _this2.staff = result[1].res.staffs;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "slctsrv",
        value: function slctsrv(state) {
          var matSelect = state.source;
          matSelect.writeValue(null);
          state = state.value;

          if (!this.httpService.arraySearch(this.sendServ, state)) {
            this.chips.push({
              id: state._id,
              cat_name: lodash__WEBPACK_IMPORTED_MODULE_10__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_10__["camelCase"](state.cat_name)),
              title: lodash__WEBPACK_IMPORTED_MODULE_10__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_10__["camelCase"](state.cat_name)),
              cost: state.price
            });
            this.sendServ.push(state._id);
            this.price = this.price + state.price;
            this.profile.controls['price'].setValue(this.price);
            return;
          } else {}
        }
      }, {
        key: "remove",
        value: function remove(service, data) {
          var rmvsrv = this.chips.find(function (v) {
            return v.id == data.id;
          });
          this.chips = this.chips.filter(function (v) {
            return v.id !== data.id;
          });
          this.sendServ = this.sendServ.filter(function (v) {
            return v !== data.id;
          });

          if (this.chips.length == 0) {
            this.price = 0;
            this.profile.controls['price'].setValue(0);
          } else {
            console.log(rmvsrv);
            this.price = this.price - rmvsrv.cost;
            this.profile.controls['price'].setValue(this.price);
          }
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.profile.controls;
        }
      }]);

      return AddbookingsComponent;
    }();

    AddbookingsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["Helper"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]
      }];
    };

    AddbookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addbookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addbookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addbookings.component.scss */
      "./src/app/home/walking-user/addbookings/addbookings.component.scss")).default]
    })], AddbookingsComponent);
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AddbookingsModule */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsModule", function () {
      return AddbookingsModule;
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


    var _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addbookings-routing.module */
    "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts");
    /* harmony import */


    var _addbookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./addbookings.component */
    "./src/app/home/walking-user/addbookings/addbookings.component.ts");
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
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");

    var AddbookingsModule = function AddbookingsModule() {
      _classCallCheck(this, AddbookingsModule);
    };

    AddbookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_addbookings_component__WEBPACK_IMPORTED_MODULE_4__["AddbookingsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddbookingsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], AddbookingsModule);
    /***/
  }
}]);
//# sourceMappingURL=49-es5.js.map