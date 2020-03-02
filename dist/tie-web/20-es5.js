function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-info/managecalender-info.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-info/managecalender-info.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeManageCalenderManagecalenderInfoManagecalenderInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img [src]=\"url\" alt=\"User Add\"><span class=\"user_name\">{{detail?.fullname || 'NA'  | titlecase}}</span></div>\n        <div class=\"col-md-6 alignright\">\n            <ul class=\"inline\">\n                <li><a class=\"btn btn-export\" href=\"javascript:void(0);\">PDF</a></li>\n                <li><button class=\"action_btn red\" (click)=\"openDialog()\"><img src=\"assets/images/email_pink.png\" alt=\"Email\"></button></li>\n                <li><button><img src=\"assets/images/print.png\" alt=\"Print\"></button></li>\n            </ul>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 label\">Date:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'dd, MMM yyyy '}}</div>\n                    <div class=\"col-md-3 label\">Time:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'h:mm a '}}</div>\n                    <div class=\"col-md-3 label\">Booking ID:</div>\n                    <div class=\"col-md-9 description\">{{detail?.booking_id || 'NA'}}</div>\n                    <div class=\"col-md-3 label\">Staff Name:</div>\n                    <div class=\"col-md-9 description\">{{detail?.staf || 'NA' | titlecase}}</div>\n                    <div class=\"col-md-3 label\">Address:</div>\n                    <div class=\"col-md-9 description\">{{detail?.usr_address || 'NA' | titlecase}}</div>\n                    <div class=\"col-md-3 label\">Service At:</div>\n                    <div class=\"col-md-9 description\">Salon</div>\n                    <div class=\"col-md-12 label\">Booking Location:</div>\n                    <div class=\"col-md-12 description\">\n                        <div class=\"map full_width\">\n                            <agm-map [latitude]=\"detail?.loc[1]\" [longitude]=\"detail?.loc[0]\"\n                                [zoomControl]=\"true\">\n                                <agm-marker [latitude]=\"detail?.loc[1]\" [longitude]=\"detail?.loc[0]\"></agm-marker>\n                            </agm-map>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-md-12 label\">Services:</div>\n                     <div class=\"col-sm-12\">\n                        <div class=\"row\" *ngFor=\"let element of detail?.service; let i =index\">\n                            <div class=\"col-md-3 label\">{{element?.title | titlecase}}<span>{{detail?.staf || 'Anybody' | titlecase}}</span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{element?.cost}}<span>{{element?.startDateTime | date : 'h:mm a'}}{{' - '}}{{element?.endDateTime | date : 'h:mm a'}}</span></div>\n                        </div>\n                        <hr/>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 label\">Total amount:<span><i>(5% Vat Inclusive)</i></span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{ttlamt}}</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 text-center\"  *ngIf=\"detail?.bookingStatus==1 \" (click)=\"compltServc()\"><a href=\"javascript:void(0);\" class=\"btn btn-submit\">Mark as Complete</a></div>\n                </div>\n            </div>\n            <div class=\"col-md-3 mobile_hidden\"></div>\n        </div>\n\n        </div>\n    </div>\n";
    /***/
  },

  /***/
  "./src/app/home/manage-calender/managecalender-info/managecalender-info-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/home/manage-calender/managecalender-info/managecalender-info-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ManagecalenderInfoRoutingModule */

  /***/
  function srcAppHomeManageCalenderManagecalenderInfoManagecalenderInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagecalenderInfoRoutingModule", function () {
      return ManagecalenderInfoRoutingModule;
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


    var _managecalender_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./managecalender-info.component */
    "./src/app/home/manage-calender/managecalender-info/managecalender-info.component.ts");

    var routes = [{
      path: '',
      component: _managecalender_info_component__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderInfoComponent"]
    }];

    var ManagecalenderInfoRoutingModule = function ManagecalenderInfoRoutingModule() {
      _classCallCheck(this, ManagecalenderInfoRoutingModule);
    };

    ManagecalenderInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManagecalenderInfoRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/manage-calender/managecalender-info/managecalender-info.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/home/manage-calender/managecalender-info/managecalender-info.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeManageCalenderManagecalenderInfoManagecalenderInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-card ul.inline {\n  padding-top: 20px;\n}\n\n@media (max-width: 992px) {\n  .main-card .label, .main-card .description {\n    padding: 0px 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .main-card ul.inline {\n    text-align: left;\n  }\n\n  .main-card ul.inline li {\n    display: contents;\n  }\n\n  .main-card ul.inline li button.action_btn.red {\n    padding: 2px 12px 2px 16px;\n  }\n\n  .main-card span.user_name {\n    margin-left: 0;\n    display: block;\n    margin-top: 10px;\n  }\n\n  .main-card ul.inline {\n    padding-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9tYW5hZ2UtY2FsZW5kZXIvbWFuYWdlY2FsZW5kZXItaW5mby9tYW5hZ2VjYWxlbmRlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21hbmFnZS1jYWxlbmRlci9tYW5hZ2VjYWxlbmRlci1pbmZvL21hbmFnZWNhbGVuZGVyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsaUJBQUE7QUNFckI7O0FEQUE7RUFDSTtJQUEwQyxpQkFBQTtFQ0k1QztBQUNGOztBREZBO0VBQ0E7SUFBcUIsZ0JBQUE7RUNLbkI7O0VESkY7SUFBd0IsaUJBQUE7RUNRdEI7O0VEUEY7SUFBOEMsMEJBQUE7RUNXNUM7O0VEVkY7SUFBMkIsY0FBQTtJQUFlLGNBQUE7SUFBZSxnQkFBQTtFQ2dCdkQ7O0VEZkY7SUFBcUIsZ0JBQUE7RUNtQm5CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL21hbmFnZS1jYWxlbmRlci9tYW5hZ2VjYWxlbmRlci1pbmZvL21hbmFnZWNhbGVuZGVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHVsLmlubGluZXtwYWRkaW5nLXRvcDogMjBweDt9XG5cbkBtZWRpYShtYXgtd2lkdGg6OTkycHgpe1xuICAgIC5tYWluLWNhcmQgLmxhYmVsLC5tYWluLWNhcmQgLmRlc2NyaXB0aW9ue3BhZGRpbmc6IDBweCAzMHB4O31cbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XG4ubWFpbi1jYXJkIHVsLmlubGluZXt0ZXh0LWFsaWduOiBsZWZ0O31cbi5tYWluLWNhcmQgdWwuaW5saW5lIGxpe2Rpc3BsYXk6IGNvbnRlbnRzfVxuLm1haW4tY2FyZCB1bC5pbmxpbmUgbGkgYnV0dG9uLmFjdGlvbl9idG4ucmVke3BhZGRpbmc6IDJweCAxMnB4IDJweCAxNnB4O31cbi5tYWluLWNhcmQgc3Bhbi51c2VyX25hbWUge21hcmdpbi1sZWZ0OiAwO2Rpc3BsYXk6IGJsb2NrO21hcmdpbi10b3A6IDEwcHg7fVxuLm1haW4tY2FyZCB1bC5pbmxpbmV7cGFkZGluZy10b3A6IDBweDt9XG59IiwiLm1haW4tY2FyZCB1bC5pbmxpbmUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNhcmQgLmxhYmVsLCAubWFpbi1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi1jYXJkIHVsLmlubGluZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5tYWluLWNhcmQgdWwuaW5saW5lIGxpIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIC5tYWluLWNhcmQgdWwuaW5saW5lIGxpIGJ1dHRvbi5hY3Rpb25fYnRuLnJlZCB7XG4gICAgcGFkZGluZzogMnB4IDEycHggMnB4IDE2cHg7XG4gIH1cblxuICAubWFpbi1jYXJkIHNwYW4udXNlcl9uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLm1haW4tY2FyZCB1bC5pbmxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/manage-calender/managecalender-info/managecalender-info.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/home/manage-calender/managecalender-info/managecalender-info.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ManagecalenderInfoComponent */

  /***/
  function srcAppHomeManageCalenderManagecalenderInfoManagecalenderInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagecalenderInfoComponent", function () {
      return ManagecalenderInfoComponent;
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


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");

    var ManagecalenderInfoComponent =
    /*#__PURE__*/
    function () {
      function ManagecalenderInfoComponent(httpService, routes, error) {
        _classCallCheck(this, ManagecalenderInfoComponent);

        this.httpService = httpService;
        this.routes = routes;
        this.error = error;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_2__["IMG"].PRO;
        this.usrurl = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_2__["IMG"].PRO;
      }

      _createClass(ManagecalenderInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.routes.snapshot.params.id;
          this.getUserProfile();
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this = this;

          this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '').subscribe(function (response) {
            if (response.status === 1) {
              _this.detail = response.res;
              _this.url = _this.detail.logo ? _this.detail.usr_bp + _this.detail.img : _this.url;
              _this.ttlamt = _this.detail.service.reduce(function (acc, val) {
                return acc.cost + val.cost;
              });
              _this.ttlamt = _this.detail.service.length == 1 ? _this.ttlamt.cost : _this.ttlamt;
            } else {
              if (response.err) {
                _this.error.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            _this.error.handleError(0);
          });
        }
      }]);

      return ManagecalenderInfoComponent;
    }();

    ManagecalenderInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
      }];
    };

    ManagecalenderInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managecalender-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./managecalender-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-info/managecalender-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./managecalender-info.component.scss */
      "./src/app/home/manage-calender/managecalender-info/managecalender-info.component.scss")).default]
    })], ManagecalenderInfoComponent);
    /***/
  },

  /***/
  "./src/app/home/manage-calender/managecalender-info/managecalender-info.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home/manage-calender/managecalender-info/managecalender-info.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: ManagecalenderInfoModule */

  /***/
  function srcAppHomeManageCalenderManagecalenderInfoManagecalenderInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagecalenderInfoModule", function () {
      return ManagecalenderInfoModule;
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


    var _managecalender_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./managecalender-info-routing.module */
    "./src/app/home/manage-calender/managecalender-info/managecalender-info-routing.module.ts");
    /* harmony import */


    var _managecalender_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./managecalender-info.component */
    "./src/app/home/manage-calender/managecalender-info/managecalender-info.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");

    var ManagecalenderInfoModule = function ManagecalenderInfoModule() {
      _classCallCheck(this, ManagecalenderInfoModule);
    };

    ManagecalenderInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_managecalender_info_component__WEBPACK_IMPORTED_MODULE_4__["ManagecalenderInfoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _managecalender_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderInfoRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_6__["MAP"].KEY,
        libraries: [src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_6__["MAP"].type]
      })]
    })], ManagecalenderInfoModule);
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
//# sourceMappingURL=20-es5.js.map