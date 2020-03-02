(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"policy_list\">\n        <div class=\"left\">You have the option of charging a No-Show/Late-Cancellation fee.</div>\n        <div class=\"right\">\n            <a href=\"javascript:void(0)\" (click)=\"openDialog(true)\"\n                [class]=\"charge?'btn btn-charge':'btn btn-notcharge'\">Charge</a>\n            <a href=\"javascript:void(0)\" (click)=\"openDialog(false)\"\n                [class]=\"!charge?'btn btn-charge':'btn btn-notcharge'\">Don't Charge</a>\n        </div>\n    </div>\n    <div class=\"policy_list\">\n        <div class=\"left\">Your selected cancellation policy</div>\n        <div class=\"right\">\n            <p class=\"pink\">{{policy==1?'Flexible':(policy==2?'Moderate':'Strict')}}</p>\n            <p>{{policy==1?'0%':(policy==2?'25%':'50%')}} Late cancellation\n                fee<br>{{policy==1?'50%':(policy==2?'50%':'100%')}} No-show fee</p>\n        </div>\n    </div>\n    <div class=\"update_btn\">\n        <a [routerLink]=\"['/cancellation-policy/update-policy']\" class=\"btn-link\">Update Policy</a>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CancelpolicyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelpolicyRoutingModule", function() { return CancelpolicyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancelpolicy.component */ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts");




const routes = [{ path: '', component: _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_3__["CancelpolicyComponent"] }];
let CancelpolicyRoutingModule = class CancelpolicyRoutingModule {
};
CancelpolicyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CancelpolicyRoutingModule);



/***/ }),

/***/ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FuY2VsbGF0aW9uLXBvbGljeS9jYW5jZWxwb2xpY3kvY2FuY2VscG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CancelpolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelpolicyComponent", function() { return CancelpolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confim-dialog/confim-dialog.component */ "./src/app/shared/confim-dialog/confim-dialog.component.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");







let CancelpolicyComponent = class CancelpolicyComponent {
    constructor(dialog, errsrv, httpservice, trns) {
        this.dialog = dialog;
        this.errsrv = errsrv;
        this.httpservice = httpservice;
        this.trns = trns;
    }
    ngOnInit() {
        this.charge = JSON.parse(localStorage.getItem('salon')).is_charge;
        this.policy = JSON.parse(localStorage.getItem('salon')).c_policy;
        console.log(this.charge);
    }
    openDialog(isCharge) {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want to do this?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (val) {
                this.httpservice.getRequest('PUT', 'CANCELPOLICY', { is_charge: isCharge }, '').subscribe((response) => {
                    if (response.status === 1) {
                        let salon = JSON.parse(localStorage.getItem('salon'));
                        salon.is_charge = String(isCharge);
                        localStorage.setItem('salon', JSON.stringify(salon));
                        this.charge = String(isCharge);
                        this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('FEEDSUCCESS'));
                    }
                    else {
                        console.log(response);
                        this.errsrv.handleError(response.err.errCode);
                    }
                });
            }
        });
    }
};
CancelpolicyComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] }
];
CancelpolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancelpolicy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancelpolicy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancelpolicy.component.scss */ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss")).default]
    })
], CancelpolicyComponent);



/***/ }),

/***/ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.module.ts ***!
  \******************************************************************************/
/*! exports provided: CancelpolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelpolicyModule", function() { return CancelpolicyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cancelpolicy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancelpolicy-routing.module */ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts");
/* harmony import */ var _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancelpolicy.component */ "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let CancelpolicyModule = class CancelpolicyModule {
};
CancelpolicyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cancelpolicy_component__WEBPACK_IMPORTED_MODULE_4__["CancelpolicyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cancelpolicy_routing_module__WEBPACK_IMPORTED_MODULE_3__["CancelpolicyRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationpipeModule"],
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
    })
], CancelpolicyModule);



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
//# sourceMappingURL=18-es2015.js.map