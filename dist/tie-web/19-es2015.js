(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"policy_list\">\n        <div class=\"left\">You have the option of charging a No-Show/Late-Cancellation fee.</div>\n        <div class=\"right\">\n            <a href=\"#\" class=\"btn btn-charge\">Charge</a>\n            <a href=\"#\" class=\"btn btn-notcharge\">Don't Charge</a>\n        </div>\n    </div>\n    <div class=\"policy_list\">\n        <div class=\"left\">Your selected cancellation policy</div>\n        <div class=\"right\">\n            <p class=\"pink\">Moderate</p>\n            <p>25% Late cancellation fee<br>50% No-show fee</p>\n        </div>\n    </div>\n    <div class=\"update_btn\">\n        <a [routerLink]=\"['/cancellation-policy/update-policy']\" class=\"btn-link\">Update Policy</a>\n    </div>\n</div>");

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


let CancelpolicyComponent = class CancelpolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
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





let CancelpolicyModule = class CancelpolicyModule {
};
CancelpolicyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cancelpolicy_component__WEBPACK_IMPORTED_MODULE_4__["CancelpolicyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cancelpolicy_routing_module__WEBPACK_IMPORTED_MODULE_3__["CancelpolicyRoutingModule"]
        ]
    })
], CancelpolicyModule);



/***/ })

}]);
//# sourceMappingURL=19-es2015.js.map