(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transaction.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transaction.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/home/report/transaction/transaction-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/report/transaction/transaction-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction.component */ "./src/app/home/report/transaction/transaction.component.ts");




const routes = [{
        path: '', component: _transaction_component__WEBPACK_IMPORTED_MODULE_3__["TransactionComponent"],
        children: [
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./transactionlist/transactionlist.module */ "./src/app/home/report/transaction/transactionlist/transactionlist.module.ts")).then(mod => mod.TransactionlistModule), data: { title: "Transaction", status: false } },
            { path: 'weekly', loadChildren: () => __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./weeklylist/weeklylist.module */ "./src/app/home/report/transaction/weeklylist/weeklylist.module.ts")).then(mod => mod.WeeklylistModule), },
            { path: 'info', loadChildren: () => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./detail/detail.module */ "./src/app/home/report/transaction/detail/detail.module.ts")).then(mod => mod.DetailModule), data: { title: "Transaction Detail", status: false } }
        ]
    },];
let TransactionRoutingModule = class TransactionRoutingModule {
};
TransactionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TransactionRoutingModule);



/***/ }),

/***/ "./src/app/home/report/transaction/transaction.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/report/transaction/transaction.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/report/transaction/transaction.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/report/transaction/transaction.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionComponent = class TransactionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transaction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction.component.scss */ "./src/app/home/report/transaction/transaction.component.scss")).default]
    })
], TransactionComponent);



/***/ }),

/***/ "./src/app/home/report/transaction/transaction.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/report/transaction/transaction.module.ts ***!
  \***************************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-routing.module */ "./src/app/home/report/transaction/transaction-routing.module.ts");
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction.component */ "./src/app/home/report/transaction/transaction.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let TransactionModule = class TransactionModule {
};
TransactionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_transaction_component__WEBPACK_IMPORTED_MODULE_4__["TransactionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransactionRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], TransactionModule);



/***/ })

}]);
//# sourceMappingURL=41-es2015.js.map