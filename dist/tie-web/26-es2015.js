(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walking-user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walking-user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h1>Will deliver in next milestone.</h1>\n<hr>\n<h2>Thank you</h2>");

/***/ }),

/***/ "./src/app/home/walking-user/walking-user-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/walking-user/walking-user-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: WalkingUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkingUserRoutingModule", function() { return WalkingUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _walking_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walking-user.component */ "./src/app/home/walking-user/walking-user.component.ts");




const routes = [{ path: '', component: _walking_user_component__WEBPACK_IMPORTED_MODULE_3__["WalkingUserComponent"] }];
let WalkingUserRoutingModule = class WalkingUserRoutingModule {
};
WalkingUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalkingUserRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/walking-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/walking-user/walking-user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL3dhbGtpbmctdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/walking-user/walking-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/walking-user/walking-user.component.ts ***!
  \*************************************************************/
/*! exports provided: WalkingUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkingUserComponent", function() { return WalkingUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WalkingUserComponent = class WalkingUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
WalkingUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walking-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./walking-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walking-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./walking-user.component.scss */ "./src/app/home/walking-user/walking-user.component.scss")).default]
    })
], WalkingUserComponent);



/***/ }),

/***/ "./src/app/home/walking-user/walking-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/walking-user/walking-user.module.ts ***!
  \**********************************************************/
/*! exports provided: WalkingUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkingUserModule", function() { return WalkingUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _walking_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walking-user-routing.module */ "./src/app/home/walking-user/walking-user-routing.module.ts");
/* harmony import */ var _walking_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walking-user.component */ "./src/app/home/walking-user/walking-user.component.ts");





let WalkingUserModule = class WalkingUserModule {
};
WalkingUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_walking_user_component__WEBPACK_IMPORTED_MODULE_4__["WalkingUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _walking_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalkingUserRoutingModule"]
        ]
    })
], WalkingUserModule);



/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map