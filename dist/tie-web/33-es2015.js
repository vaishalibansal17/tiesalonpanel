(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/calender/calender.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/calender/calender.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <h1>Manage Calender</h1>\n    <p>It will set up in further milestone.</p>\n</div>");

/***/ }),

/***/ "./src/app/home/walking-user/calender/calender-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/walking-user/calender/calender-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CalenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderRoutingModule", function() { return CalenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender.component */ "./src/app/home/walking-user/calender/calender.component.ts");




const routes = [{ path: '', component: _calender_component__WEBPACK_IMPORTED_MODULE_3__["CalenderComponent"] }];
let CalenderRoutingModule = class CalenderRoutingModule {
};
CalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalenderRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/calender/calender.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/walking-user/calender/calender.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/walking-user/calender/calender.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/walking-user/calender/calender.component.ts ***!
  \******************************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalenderComponent = class CalenderComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/calender/calender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calender.component.scss */ "./src/app/home/walking-user/calender/calender.component.scss")).default]
    })
], CalenderComponent);



/***/ }),

/***/ "./src/app/home/walking-user/calender/calender.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/walking-user/calender/calender.module.ts ***!
  \***************************************************************/
/*! exports provided: CalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderModule", function() { return CalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _calender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender-routing.module */ "./src/app/home/walking-user/calender/calender-routing.module.ts");
/* harmony import */ var _calender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calender.component */ "./src/app/home/walking-user/calender/calender.component.ts");





let CalenderModule = class CalenderModule {
};
CalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_calender_component__WEBPACK_IMPORTED_MODULE_4__["CalenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _calender_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalenderRoutingModule"]
        ]
    })
], CalenderModule);



/***/ })

}]);
//# sourceMappingURL=33-es2015.js.map