(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\">\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/category_form.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Category\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service At</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let service of services\" [value]=\"service.value\">\n                    {{service.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/price_form.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Price\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/calendar_form.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Date & Time\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Assigned Staff\" class=\"form-control\">\n            </mat-form-field>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/walking-user/addbookings/addbookings-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddbookingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookingsRoutingModule", function() { return AddbookingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addbookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbookings.component */ "./src/app/home/walking-user/addbookings/addbookings.component.ts");




const routes = [{ path: '', component: _addbookings_component__WEBPACK_IMPORTED_MODULE_3__["AddbookingsComponent"] }];
let AddbookingsRoutingModule = class AddbookingsRoutingModule {
};
AddbookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddbookingsRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/addbookings/addbookings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/walking-user/addbookings/addbookings.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom_form span.email-img.pass {\n  top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2FkZGJvb2tpbmdzL2FkZGJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtDLG9CQUFBO0FDRWxDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcucGFzcyB7dG9wOiAxNXB4ICFpbXBvcnRhbnQ7fSIsIi5jdXN0b21fZm9ybSBzcGFuLmVtYWlsLWltZy5wYXNzIHtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/walking-user/addbookings/addbookings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/walking-user/addbookings/addbookings.component.ts ***!
  \************************************************************************/
/*! exports provided: AddbookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookingsComponent", function() { return AddbookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/message.service */ "./src/app/shared/service/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");





let AddbookingsComponent = class AddbookingsComponent {
    constructor(messageService, router, errorserv) {
        this.messageService = messageService;
        this.router = router;
        this.errorserv = errorserv;
        this.servicea = [
            { value: '1', viewValue: 'Hair Spa' },
            { value: '2', viewValue: 'Spa' },
        ];
    }
    ngOnInit() {
        this.responseData = this.messageService.getBooking();
        console.log(this.responseData);
        if (!this.responseData) {
            this.router.navigateByUrl('walking-user/add-user').then(() => {
                this.errorserv.handleError(0);
            });
        }
    }
};
AddbookingsComponent.ctorParameters = () => [
    { type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
AddbookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addbookings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addbookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addbookings.component.scss */ "./src/app/home/walking-user/addbookings/addbookings.component.scss")).default]
    })
], AddbookingsComponent);



/***/ }),

/***/ "./src/app/home/walking-user/addbookings/addbookings.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/walking-user/addbookings/addbookings.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddbookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookingsModule", function() { return AddbookingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbookings-routing.module */ "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts");
/* harmony import */ var _addbookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addbookings.component */ "./src/app/home/walking-user/addbookings/addbookings.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let AddbookingsModule = class AddbookingsModule {
};
AddbookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_addbookings_component__WEBPACK_IMPORTED_MODULE_4__["AddbookingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddbookingsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], AddbookingsModule);



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
            case 39:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
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
//# sourceMappingURL=20-es2015.js.map