(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/detail/detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/detail/detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-12 alignright\"><a href=\"#\" class=\"btn btn-export\">PDF</a></div>\n        <div class=\"col-md-3 label\">Customer Name:</div>\n        <div class=\"col-md-9 description\">Jane Doe</div>\n        <div class=\"col-md-3 label\">Discount:</div>\n        <div class=\"col-md-9 description\">10%</div>\n        <div class=\"col-md-3 label\">Service:</div>\n        <div class=\"col-md-9 description\">Haircut, Hair Spa</div>\n        <div class=\"col-md-3 label\">Service At:</div>\n        <div class=\"col-md-9 description\">Home</div>\n        <div class=\"col-md-3 label\">Date:</div>\n        <div class=\"col-md-9 description\">22 Oct, 2019</div>\n        <div class=\"col-md-3 label\">Status:</div>\n        <div class=\"col-md-9 description\">Completed</div>\n        <div class=\"col-md-3 label\">Coupon Code:</div>\n        <div class=\"col-md-9 description\">New Coupon</div>\n        <div class=\"col-md-3 label\">Amount:</div>\n        <div class=\"col-md-9 description\">$280</div>\n        <div class=\"col-md-3 label\">Total Amount:</div>\n        <div class=\"col-md-9 description\">$200</div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/report/transaction/detail/detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/report/transaction/detail/detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRoutingModule", function() { return DetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/home/report/transaction/detail/detail.component.ts");




const routes = [{ path: '', component: _detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] }];
let DetailRoutingModule = class DetailRoutingModule {
};
DetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DetailRoutingModule);



/***/ }),

/***/ "./src/app/home/report/transaction/detail/detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/report/transaction/detail/detail.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3RyYW5zYWN0aW9uL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/report/transaction/detail/detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/report/transaction/detail/detail.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailComponent = class DetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/home/report/transaction/detail/detail.component.scss")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/home/report/transaction/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/report/transaction/detail/detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/home/report/transaction/detail/detail-routing.module.ts");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail.component */ "./src/app/home/report/transaction/detail/detail.component.ts");





let DetailModule = class DetailModule {
};
DetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailRoutingModule"]
        ]
    })
], DetailModule);



/***/ })

}]);
//# sourceMappingURL=45-es2015.js.map