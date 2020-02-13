(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <h1>Report</h1>\n    <p>It will set up in further milestone.</p>\n</div>\n\n<!-- <div class=\"top_report\">\n    <div class=\"left_report_head\">\n        <div class=\"secondary-navbar-outer\">\n            <ul class=\"secondary-navbar\">\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['./sales']\">Gross Sales</a></li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['./transaction']\">Transactions</a></li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['./earning']\">Earnings</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"right_report_head\">\n        <mat-slide-toggle>Walking Users</mat-slide-toggle>\n    </div>\n</div> -->\n<!-- <div class=\"clearfix\"></div>\n\n\n        <div class=\"basic-content\">\n            <router-outlet></router-outlet>\n        </div> -->");

/***/ }),

/***/ "./src/app/home/report/report-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/report/report-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/home/report/report.component.ts");




const routes = [{
        path: '', component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
        children: [
            { path: 'sales', loadChildren: () => __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./sales/sales.module */ "./src/app/home/report/sales/sales.module.ts")).then(mod => mod.SalesModule), data: { title: "Gross Sales", status: false } },
            { path: 'transaction', loadChildren: () => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./transaction/transaction.module */ "./src/app/home/report/transaction/transaction.module.ts")).then(mod => mod.TransactionModule), data: { title: "Transaction", status: false } },
            { path: 'earning', loadChildren: () => __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./earning/earning.module */ "./src/app/home/report/earning/earning.module.ts")).then(mod => mod.EarningModule), },
        ]
    },];
let ReportRoutingModule = class ReportRoutingModule {
};
ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportRoutingModule);



/***/ }),

/***/ "./src/app/home/report/report.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/report/report.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/report/report.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportComponent = class ReportComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report.component.scss */ "./src/app/home/report/report.component.scss")).default]
    })
], ReportComponent);



/***/ }),

/***/ "./src/app/home/report/report.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/report/report.module.ts ***!
  \**********************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/home/report/report-routing.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report.component */ "./src/app/home/report/report.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ReportModule = class ReportModule {
};
ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ReportModule);



/***/ })

}]);
//# sourceMappingURL=37-es2015.js.map