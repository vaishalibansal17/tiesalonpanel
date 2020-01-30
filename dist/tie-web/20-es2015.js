(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/manage-calender.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/manage-calender.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h1>Under Development.</h1>\n<hr>\n<h2>Thank you</h2>");

/***/ }),

/***/ "./src/app/home/manage-calender/manage-calender-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/manage-calender/manage-calender-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ManageCalenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCalenderRoutingModule", function() { return ManageCalenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_calender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-calender.component */ "./src/app/home/manage-calender/manage-calender.component.ts");




const routes = [{ path: '', component: _manage_calender_component__WEBPACK_IMPORTED_MODULE_3__["ManageCalenderComponent"] }];
let ManageCalenderRoutingModule = class ManageCalenderRoutingModule {
};
ManageCalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManageCalenderRoutingModule);



/***/ }),

/***/ "./src/app/home/manage-calender/manage-calender.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/manage-calender/manage-calender.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFuYWdlLWNhbGVuZGVyL21hbmFnZS1jYWxlbmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/manage-calender/manage-calender.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/manage-calender/manage-calender.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCalenderComponent", function() { return ManageCalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageCalenderComponent = class ManageCalenderComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageCalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-calender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/manage-calender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-calender.component.scss */ "./src/app/home/manage-calender/manage-calender.component.scss")).default]
    })
], ManageCalenderComponent);



/***/ }),

/***/ "./src/app/home/manage-calender/manage-calender.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/manage-calender/manage-calender.module.ts ***!
  \****************************************************************/
/*! exports provided: ManageCalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCalenderModule", function() { return ManageCalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _manage_calender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-calender-routing.module */ "./src/app/home/manage-calender/manage-calender-routing.module.ts");
/* harmony import */ var _manage_calender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-calender.component */ "./src/app/home/manage-calender/manage-calender.component.ts");





let ManageCalenderModule = class ManageCalenderModule {
};
ManageCalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_manage_calender_component__WEBPACK_IMPORTED_MODULE_4__["ManageCalenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manage_calender_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageCalenderRoutingModule"]
        ]
    })
], ManageCalenderModule);



/***/ })

}]);
//# sourceMappingURL=20-es2015.js.map