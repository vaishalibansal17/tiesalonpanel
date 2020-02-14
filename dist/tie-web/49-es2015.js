(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/info/info.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/info/info.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-9\">\n            <div class=\"row\">\n                <div class=\"col-md-3 label\">Offer Name:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.name?(detail.name | titlecase):'' }}</div>\n                <div class=\"col-md-3 label\">Coupon Code:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.code ?(detail.code | uppercase):''}}</div>\n                <div class=\"col-md-3 label\">Discount:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.discount ?detail.discount:'NA'}}%</div>\n                <div class=\"col-md-3 label\">Min. Discount Amount:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.min_price ? detail.min_price:'NA'}}</div>\n                <div class=\"col-md-3 label\">Max. Discount Amount:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.upto ? detail.upto:'NA'}}</div>\n                <div class=\"col-md-3 label\">Service:</div>\n                <div class=\"col-md-9 description\">Hair Spa</div>\n                <div class=\"col-md-3 label\">Added By:</div>\n                <div class=\"col-md-9 description\">Salon</div>\n                <div class=\"col-md-3 label\">Total Uses:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.uses ? detail.uses:'NA'}}</div>\n                <div class=\"col-md-3 label\">From Date:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.frm ? (detail.frm | date : 'dd MMM yyyy'):'' }}</div>\n                <div class=\"col-md-3 label\">To Date:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.to ?( detail.to | date : 'dd MMM yyyy'):''}}</div>\n                <div class=\"col-md-3 label\">Description:</div>\n                <div class=\"col-md-9 description\">{{detail && detail.desc ? detail.desc:''}}</div>\n            </div>\n        </div>\n        <div class=\"col-md-3 mobile_hidden\"></div>\n\n\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

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


let InfoComponent = class InfoComponent {
    constructor() {
        this.detial = [];
    }
    ngOnInit() {
    }
};
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





let InfoModule = class InfoModule {
};
InfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_3__["InfoRoutingModule"]
        ]
    })
], InfoModule);



/***/ })

}]);
//# sourceMappingURL=49-es2015.js.map