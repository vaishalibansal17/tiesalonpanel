(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/info/info.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/info/info.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 label\">Name:</div>\n                    <div class=\"col-md-9 description\">{{detail?.name || 'NA'  | titlecase}}</div>\n                    <div class=\"col-md-3 label\">Phone:</div>\n                    <div class=\"col-md-9 description\">{{detail?.phone || 'NA'}}</div>\n                    <div class=\"col-md-3 label\">Date:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'dd, MMM yyyy '}}</div>\n                    <div class=\"col-md-3 label\">Time:</div>\n                    <div class=\"col-md-9 description\">{{detail?.bookDateTime | date : 'h:mm a'}}</div>\n                    <div class=\"col-md-3 label\">Booking ID:</div>\n                    <div class=\"col-md-9 description\">{{detail?.booking_id || 'NA'}}</div>\n                    <div class=\"col-md-3 label\">Staff Name:</div>\n                    <div class=\"col-md-9 description\">{{detail?.staf || 'NA' | titlecase}}</div>\n                    <!-- <div class=\"col-md-3 label\">Address:</div>\n                    <div class=\"col-md-9 description\">246 Chris Avenue, New York</div> -->\n                    <div class=\"col-md-3 label\">Service At:</div>\n                    <div class=\"col-md-9 description\">Salon</div>\n                    <div class=\"col-md-12 label\">Booking Location:</div>\n                    <div class=\"col-md-12 description\">\n                        <div class=\"map full_width\">\n                            <agm-map [latitude]=\"detail?.slnLoc[1]\" [longitude]=\"detail?.slnLoc[0]\"\n                                [zoomControl]=\"true\">\n                                <agm-marker [latitude]=\"detail?.slnLoc[1]\" [longitude]=\"detail?.slnLoc[0]\"></agm-marker>\n                            </agm-map>\n                        </div>\n                    </div>\n                   \n                    <div class=\"col-md-12 label\">Services:</div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"row\" *ngFor=\"let element of detail?.service; let i =index\">\n                            <div class=\"col-md-3 label\">{{element?.title | titlecase}}<span></span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{element?.cost}}</div>\n                        </div>\n                        <hr/>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 label\">Total amount:<span><i>(5% Vat Inclusive)</i></span></div>\n                            <div class=\"col-md-9 description alignright\">SR{{ttlamt}}</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 text-center\"><a href=\"javascript:void(0);\" class=\"btn btn-submit\">Mark as Complete</a></div>\n                </div>\n            </div>\n            <div class=\"col-md-3 mobile_hidden\"></div>\n        </div>\n\n        </div>\n    </div>\n");

/***/ }),

/***/ "./src/app/home/walking-user/info/info-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/walking-user/info/info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function() { return InfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.component */ "./src/app/home/walking-user/info/info.component.ts");




const routes = [{ path: '', component: _info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] }];
let InfoRoutingModule = class InfoRoutingModule {
};
InfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InfoRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/info/info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/walking-user/info/info.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 992px) {\n  .main-card .col-md-3.label, .main-card .col-md-9.description, .main-card .col-md-12.label, .main-card .col-md-12.description {\n    padding: 0px 30px;\n  }\n}\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUEwSCxpQkFBQTtFQ0U1SDtBQUNGO0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAubWFpbi1jYXJkIC5jb2wtbWQtMy5sYWJlbCwubWFpbi1jYXJkIC5jb2wtbWQtOS5kZXNjcmlwdGlvbiwubWFpbi1jYXJkIC5jb2wtbWQtMTIubGFiZWwsLm1haW4tY2FyZCAuY29sLW1kLTEyLmRlc2NyaXB0aW9ue3BhZGRpbmc6IDBweCAzMHB4O31cbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9IiwiQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNhcmQgLmNvbC1tZC0zLmxhYmVsLCAubWFpbi1jYXJkIC5jb2wtbWQtOS5kZXNjcmlwdGlvbiwgLm1haW4tY2FyZCAuY29sLW1kLTEyLmxhYmVsLCAubWFpbi1jYXJkIC5jb2wtbWQtMTIuZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICB9XG59XG5ociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/walking-user/info/info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/walking-user/info/info.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");





let InfoComponent = class InfoComponent {
    constructor(httpService, routes, error) {
        this.httpService = httpService;
        this.routes = routes;
        this.error = error;
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getUserProfile();
    }
    getUserProfile() {
        this.httpService.getRequest('GET_PARMS', 'WLK_DETAIL', this.id)
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
                this.ttlamt = this.detail.service.reduce((acc, val) => acc.cost + val.cost);
                this.ttlamt = this.detail.service.length == 1 ? this.ttlamt.cost : this.ttlamt;
            }
            else {
                if (response.err) {
                    this.error.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            this.error.handleError(0);
            // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
        });
    }
};
InfoComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.scss */ "./src/app/home/walking-user/info/info.component.scss")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/home/walking-user/info/info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/walking-user/info/info.module.ts ***!
  \*******************************************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/home/walking-user/info/info-routing.module.ts");
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info.component */ "./src/app/home/walking-user/info/info.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");









let InfoModule = class InfoModule {
};
InfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfoRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__["MAP"].KEY,
                libraries: [src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_8__["MAP"].type]
            }),
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"],
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })
], InfoModule);



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
//# sourceMappingURL=27-es2015.js.map