(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/promocode.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/promocode.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h1>Under Development.</h1>\n<hr>\n<h2>Thank you</h2>");

/***/ }),

/***/ "./src/app/home/promocode/promocode-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/promocode/promocode-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PromocodeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocodeRoutingModule", function() { return PromocodeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _promocode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promocode.component */ "./src/app/home/promocode/promocode.component.ts");




const routes = [{ path: '', component: _promocode_component__WEBPACK_IMPORTED_MODULE_3__["PromocodeComponent"] }];
let PromocodeRoutingModule = class PromocodeRoutingModule {
};
PromocodeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PromocodeRoutingModule);



/***/ }),

/***/ "./src/app/home/promocode/promocode.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/promocode/promocode.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvbW9jb2RlL3Byb21vY29kZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/promocode/promocode.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/promocode/promocode.component.ts ***!
  \*******************************************************/
/*! exports provided: PromocodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocodeComponent", function() { return PromocodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PromocodeComponent = class PromocodeComponent {
    constructor() { }
    ngOnInit() {
    }
};
PromocodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promocode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./promocode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/promocode.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./promocode.component.scss */ "./src/app/home/promocode/promocode.component.scss")).default]
    })
], PromocodeComponent);



/***/ }),

/***/ "./src/app/home/promocode/promocode.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/promocode/promocode.module.ts ***!
  \****************************************************/
/*! exports provided: PromocodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocodeModule", function() { return PromocodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _promocode_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promocode-routing.module */ "./src/app/home/promocode/promocode-routing.module.ts");
/* harmony import */ var _promocode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promocode.component */ "./src/app/home/promocode/promocode.component.ts");





let PromocodeModule = class PromocodeModule {
};
PromocodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_promocode_component__WEBPACK_IMPORTED_MODULE_4__["PromocodeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _promocode_routing_module__WEBPACK_IMPORTED_MODULE_3__["PromocodeRoutingModule"]
        ]
    })
], PromocodeModule);



/***/ })

}]);
//# sourceMappingURL=2-es2015.js.map