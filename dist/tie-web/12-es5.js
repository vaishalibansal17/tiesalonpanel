function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeBookingsBookingdetailBookingEmailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content class=\"text-center\">\n    <h3>Please enter your Email</h3>\n    <form>\n        <mat-form-field>\n            <!-- <span class=\"email-img pass\"><img src=\"assets/images/changepassword.png\" alt=\"envelope\"></span> -->\n            <input matInput placeholder=\"Enter your email address\" [(ngModel)] = \"email\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control popup\">\n        </mat-form-field>\n    <div class=\"text-center\"><button type=\"button\" (click)=\"close({close:true, email: email})\" class=\"btn btn-submit\">Send</button></div>\n</form>\n\n  </mat-dialog-content>\n    <button mat-button mat-dialog-close type=\"button\" class=\"close\" (click)=\"close(false)\" ><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeBookingsBookingdetailBookingdetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img [src]=\"url\" alt=\"User Add\"><span class=\"user_name\">{{detail?.fullname || 'NA'  | titlecase}}</span></div>\n        <div class=\"col-md-6 alignright\">\n            <ul class=\"inline\">\n                <li><a class=\"btn btn-export\" href=\"javascript:void(0);\">PDF</a></li>\n                <li><button class=\"action_btn red\" (click)=\"openDialog(email)\"><img src=\"assets/images/email_pink.png\" alt=\"Email\"></button></li>\n                <li><button><img src=\"assets/images/print.png\" alt=\"Print\"></button></li>\n            </ul>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 label\">Date:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'dd, MMM yyyy '}}</div>\n                    <div class=\"col-md-3 label\">Time:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'h:mm a '}}</div>\n                    <div class=\"col-md-3 label\">Booking ID:</div>\n                    <div class=\"col-md-9 description\">{{detail?.booking_id || 'NA'}}</div>\n                    <div class=\"col-md-3 label\">Staff Name:</div>\n                    <div class=\"col-md-9 description\">{{detail?.staf || 'NA' | titlecase}}</div>\n                    <div class=\"col-md-3 label\">Address:</div>\n                    <div class=\"col-md-9 description\">{{detail?.usr_address || 'NA' | titlecase}}</div>\n                    <div class=\"col-md-3 label\">Service At:</div>\n                    <div class=\"col-md-9 description\">Salon</div>\n                    <div class=\"col-md-12 label\">Booking Location:</div>\n                    <div class=\"col-md-12 description\">\n                        <div class=\"map full_width\">\n                            <agm-map [latitude]=\"detail?.loc[1]\" [longitude]=\"detail?.loc[0]\"\n                                [zoomControl]=\"true\">\n                                <agm-marker [latitude]=\"detail?.loc[1]\" [longitude]=\"detail?.loc[0]\"></agm-marker>\n                            </agm-map>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-md-12 label\">Services:</div>\n                     <div class=\"col-sm-12\">\n                        <div class=\"row\" *ngFor=\"let element of detail?.service; let i =index\">\n                            <div class=\"col-md-3 label\">{{element?.title | titlecase}}<span>{{detail?.staf || 'Anybody' | titlecase}}</span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{element?.cost}}<span>{{element?.startDateTime | date : 'h:mm a'}}{{' - '}}{{element?.endDateTime | date : 'h:mm a'}}</span></div>\n                        </div>\n                        <hr/>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 label\">Total amount:<span><i>(5% Vat Inclusive)</i></span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{ttlamt}}</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 text-center\"  *ngIf=\"detail?.bookingStatus==1 \" (click)=\"compltServc()\"><a href=\"javascript:void(0);\" class=\"btn btn-submit\">Mark as Complete</a></div>\n                </div>\n            </div>\n            <div class=\"col-md-3 mobile_hidden\"></div>\n        </div>\n\n        </div>\n    </div>\n";
    /***/
  },

  /***/
  "./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BookingdetailRoutingModule */

  /***/
  function srcAppHomeBookingsBookingdetailBookingdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingdetailRoutingModule", function () {
      return BookingdetailRoutingModule;
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


    var _bookingdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookingdetail.component */
    "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts");

    var routes = [{
      path: '',
      component: _bookingdetail_component__WEBPACK_IMPORTED_MODULE_3__["BookingdetailComponent"]
    }];

    var BookingdetailRoutingModule = function BookingdetailRoutingModule() {
      _classCallCheck(this, BookingdetailRoutingModule);
    };

    BookingdetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingdetailRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/home/bookings/bookingdetail/bookingdetail.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeBookingsBookingdetailBookingdetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-card ul.inline {\n  padding-top: 20px;\n}\n\n@media (max-width: 992px) {\n  .main-card .label, .main-card .description {\n    padding: 0px 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .main-card ul.inline {\n    text-align: left;\n  }\n\n  .main-card ul.inline li {\n    display: contents;\n  }\n\n  .main-card ul.inline li button.action_btn.red {\n    padding: 2px 12px 2px 16px;\n  }\n\n  .main-card span.user_name {\n    margin-left: 0;\n    display: block;\n    margin-top: 10px;\n  }\n\n  .main-card ul.inline {\n    padding-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9ib29raW5ncy9ib29raW5nZGV0YWlsL2Jvb2tpbmdkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYm9va2luZ3MvYm9va2luZ2RldGFpbC9ib29raW5nZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFCLGlCQUFBO0FDRXJCOztBREFBO0VBQ0k7SUFBMEMsaUJBQUE7RUNJNUM7QUFDRjs7QURGQTtFQUNBO0lBQXFCLGdCQUFBO0VDS25COztFREpGO0lBQXdCLGlCQUFBO0VDUXRCOztFRFBGO0lBQThDLDBCQUFBO0VDVzVDOztFRFZGO0lBQTJCLGNBQUE7SUFBZSxjQUFBO0lBQWUsZ0JBQUE7RUNnQnZEOztFRGZGO0lBQXFCLGdCQUFBO0VDbUJuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ib29raW5ncy9ib29raW5nZGV0YWlsL2Jvb2tpbmdkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHVsLmlubGluZXtwYWRkaW5nLXRvcDogMjBweDt9XG5cbkBtZWRpYShtYXgtd2lkdGg6OTkycHgpe1xuICAgIC5tYWluLWNhcmQgLmxhYmVsLC5tYWluLWNhcmQgLmRlc2NyaXB0aW9ue3BhZGRpbmc6IDBweCAzMHB4O31cbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XG4ubWFpbi1jYXJkIHVsLmlubGluZXt0ZXh0LWFsaWduOiBsZWZ0O31cbi5tYWluLWNhcmQgdWwuaW5saW5lIGxpe2Rpc3BsYXk6IGNvbnRlbnRzfVxuLm1haW4tY2FyZCB1bC5pbmxpbmUgbGkgYnV0dG9uLmFjdGlvbl9idG4ucmVke3BhZGRpbmc6IDJweCAxMnB4IDJweCAxNnB4O31cbi5tYWluLWNhcmQgc3Bhbi51c2VyX25hbWUge21hcmdpbi1sZWZ0OiAwO2Rpc3BsYXk6IGJsb2NrO21hcmdpbi10b3A6IDEwcHg7fVxuLm1haW4tY2FyZCB1bC5pbmxpbmV7cGFkZGluZy10b3A6IDBweDt9XG59IiwiLm1haW4tY2FyZCB1bC5pbmxpbmUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNhcmQgLmxhYmVsLCAubWFpbi1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi1jYXJkIHVsLmlubGluZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5tYWluLWNhcmQgdWwuaW5saW5lIGxpIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIC5tYWluLWNhcmQgdWwuaW5saW5lIGxpIGJ1dHRvbi5hY3Rpb25fYnRuLnJlZCB7XG4gICAgcGFkZGluZzogMnB4IDEycHggMnB4IDE2cHg7XG4gIH1cblxuICAubWFpbi1jYXJkIHNwYW4udXNlcl9uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLm1haW4tY2FyZCB1bC5pbmxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/bookings/bookingdetail/bookingdetail.component.ts ***!
    \************************************************************************/

  /*! exports provided: BookingdetailComponent, BookingEmailDialogPopup */

  /***/
  function srcAppHomeBookingsBookingdetailBookingdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingdetailComponent", function () {
      return BookingdetailComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingEmailDialogPopup", function () {
      return BookingEmailDialogPopup;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
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


    var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/confim-dialog/confim-dialog.component */
    "./src/app/shared/confim-dialog/confim-dialog.component.ts");

    var BookingdetailComponent =
    /*#__PURE__*/
    function () {
      function BookingdetailComponent(dialog, httpService, routes, errsrv, route, trns, error) {
        _classCallCheck(this, BookingdetailComponent);

        this.dialog = dialog;
        this.httpService = httpService;
        this.routes = routes;
        this.errsrv = errsrv;
        this.route = route;
        this.trns = trns;
        this.error = error;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
        this.usrurl = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
      }

      _createClass(BookingdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.routes.snapshot.params.id;
          this.getUserProfile();
        }
      }, {
        key: "openDialog",
        value: function openDialog(email) {
          var _this = this;

          var dialogRef = this.dialog.open(BookingEmailDialogPopup, {
            width: '500px',
            disableClose: true
          });
          dialogRef.beforeClosed().subscribe(function (val) {
            if (val.close) {
              _this.httpService.getRequest('GET', 'SND_MAIL', "email=".concat(val.email, "&bk_id=").concat(_this.id, "&name=").concat(_this.detail.fullname)).subscribe(function (response) {
                if (response.status === 1) {
                  _this.httpService.sucsTostr(_this.trns.transform('SUCCESS'), _this.trns.transform('MAIL_SND')); // this.route.navigateByUrl("booking/info/"+`${this.id}`).then(()=>{
                  //   this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('BK_COM'));
                  // })

                } else {
                  if (response.err) _this.errsrv.handleError(response.err.errCode);
                  return false;
                }
              }, function (error) {
                _this.errsrv.handleError();
              });
            }
          });
        }
      }, {
        key: "compltServc",
        value: function compltServc() {
          var _this2 = this;

          var dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfimDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: {
              msg: 'Are you sure you want to complete this Booking?',
              btn: this.trns.transform('OK'),
              cncl: this.trns.transform('CANCEL')
            }
          });
          dialogRef.beforeClosed().subscribe(function (val) {
            if (val) {
              _this2.httpService.getRequest('PUT', 'BOOKING_ACPT', {
                bk_status: 3
              }, _this2.id).subscribe(function (response) {
                if (response.status === 1) {
                  _this2.route.navigateByUrl('booking').then(function () {
                    _this2.httpService.sucsTostr(_this2.trns.transform('SUCCESS'), _this2.trns.transform('BK_COM'));
                  });
                } else {
                  if (response.err) _this2.errsrv.handleError(response.err.errCode);
                  return false;
                }
              }, function (error) {
                _this2.errsrv.handleError();
              });
            }
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this3 = this;

          this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '').subscribe(function (response) {
            if (response.status === 1) {
              _this3.detail = response.res;
              _this3.url = _this3.detail.logo ? _this3.detail.usr_bp + _this3.detail.img : _this3.url;
              _this3.ttlamt = _this3.detail.service.reduce(function (acc, val) {
                return acc.cost + val.cost;
              });
              _this3.ttlamt = _this3.detail.service.length == 1 ? _this3.ttlamt.cost : _this3.ttlamt;
            } else {
              if (response.err) {
                _this3.error.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            _this3.error.handleError(0); // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);

          });
        }
      }]);

      return BookingdetailComponent;
    }();

    BookingdetailComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]
      }];
    };

    BookingdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingdetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingdetail.component.scss */
      "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss")).default]
    })], BookingdetailComponent);

    var BookingEmailDialogPopup =
    /*#__PURE__*/
    function () {
      function BookingEmailDialogPopup(dialogRef) {
        _classCallCheck(this, BookingEmailDialogPopup);

        this.dialogRef = dialogRef;
      }

      _createClass(BookingEmailDialogPopup, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          console.log(this.email);
        }
      }, {
        key: "close",
        value: function close(val) {
          console.log(val);
          this.dialogRef.close(val);
        }
      }]);

      return BookingEmailDialogPopup;
    }();

    BookingEmailDialogPopup.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    BookingEmailDialogPopup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'booking-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-email.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingdetail.component.scss */
      "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss")).default]
    })], BookingEmailDialogPopup);
    /***/
  },

  /***/
  "./src/app/home/bookings/bookingdetail/bookingdetail.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/bookings/bookingdetail/bookingdetail.module.ts ***!
    \*********************************************************************/

  /*! exports provided: BookingdetailModule */

  /***/
  function srcAppHomeBookingsBookingdetailBookingdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingdetailModule", function () {
      return BookingdetailModule;
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


    var _bookingdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookingdetail-routing.module */
    "./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts");
    /* harmony import */


    var _bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bookingdetail.component */
    "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");

    var BookingdetailModule = function BookingdetailModule() {
      _classCallCheck(this, BookingdetailModule);
    };

    BookingdetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingdetailComponent"], _bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingEmailDialogPopup"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bookingdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingdetailRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__["MAP"].KEY,
        libraries: [src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__["MAP"].type]
      })],
      entryComponents: [_bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingEmailDialogPopup"]]
    })], BookingdetailModule);
    /***/
  },

  /***/
  "./src/app/shared/service/error.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/service/error.service.ts ***!
    \*************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppSharedServiceErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
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


    var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/shared/service/translate.service.ts");
    /* harmony import */


    var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-request.service */
    "./src/app/shared/service/http-request.service.ts"); // import { TranslatePipe } from '../_pipes/translate.pipe';


    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService(helper, trns) {
        _classCallCheck(this, ErrorService);

        this.helper = helper;
        this.trns = trns;
      }

      _createClass(ErrorService, [{
        key: "handleError",
        value: function handleError() {
          var errCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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

            case 34:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['PROMOALRDYEXIST']);
              break;

            case 32:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['STAFFALRDYEXIST']);
              break;

            case 15:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONALRDYEXIST']);
              break;

            case 39:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
              break;

            case 41:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DEACTIVE']);
              break;

            case 42:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DELSALONACC']);
              break;

            case 51:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['NOBOOK']);
              break;

            case 56:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SLNEXIST']);
              break;

            default:
              break;
          }
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ctorParameters = function () {
      return [{
        type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  }
}]);
//# sourceMappingURL=12-es5.js.map