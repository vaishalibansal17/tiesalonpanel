(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender/managecalender.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender/managecalender.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <h1>Manage Calender</h1>\n    <p>It will set up in further milestone.</p>\n</div>");

/***/ }),

/***/ "./src/app/home/manage-calender/managecalender/managecalender-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender/managecalender-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ManagecalenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderRoutingModule", function() { return ManagecalenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _managecalender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managecalender.component */ "./src/app/home/manage-calender/managecalender/managecalender.component.ts");




const routes = [{ path: '', component: _managecalender_component__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderComponent"] }];
let ManagecalenderRoutingModule = class ManagecalenderRoutingModule {
};
ManagecalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagecalenderRoutingModule);



/***/ }),

/***/ "./src/app/home/manage-calender/managecalender/managecalender.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender/managecalender.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFuYWdlLWNhbGVuZGVyL21hbmFnZWNhbGVuZGVyL21hbmFnZWNhbGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/manage-calender/managecalender/managecalender.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender/managecalender.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManagecalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderComponent", function() { return ManagecalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagecalenderComponent = class ManagecalenderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManagecalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managecalender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managecalender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender/managecalender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managecalender.component.scss */ "./src/app/home/manage-calender/managecalender/managecalender.component.scss")).default]
    })
], ManagecalenderComponent);



/***/ }),

/***/ "./src/app/home/manage-calender/managecalender/managecalender.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender/managecalender.module.ts ***!
  \******************************************************************************/
/*! exports provided: ManagecalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderModule", function() { return ManagecalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _managecalender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managecalender-routing.module */ "./src/app/home/manage-calender/managecalender/managecalender-routing.module.ts");
/* harmony import */ var _managecalender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managecalender.component */ "./src/app/home/manage-calender/managecalender/managecalender.component.ts");





let ManagecalenderModule = class ManagecalenderModule {
};
ManagecalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_managecalender_component__WEBPACK_IMPORTED_MODULE_4__["ManagecalenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _managecalender_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderRoutingModule"]
        ]
    })
], ManagecalenderModule);



/***/ })

}]);
//# sourceMappingURL=25-es2015.js.map