(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookings.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/home/bookings/bookings-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/bookings/bookings-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: BookingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function() { return BookingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.component */ "./src/app/home/bookings/bookings.component.ts");




const routes = [{
        path: '', component: _bookings_component__WEBPACK_IMPORTED_MODULE_3__["BookingsComponent"],
        data: { title: "Booking" },
        children: [
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/home/bookings/list/list.module.ts")).then(mod => mod.ListModule), data: { title: "List", status: false } },
            // { path: 'add', loadChildren: () => import('./addstaff/addstaff.module').then(mod => mod.AddstaffModule), data: { title: "Add", status: false } },
            // { path: 'edit', loadChildren: () => import('./editstaff/editstaff.module').then(mod => mod.EditstaffModule), data: { title: "Edit", status: false } },
            { path: 'info', loadChildren: () => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./bookingdetail/bookingdetail.module */ "./src/app/home/bookings/bookingdetail/bookingdetail.module.ts")).then(mod => mod.BookingdetailModule), data: { title: "Info", status: false } },
        ]
    }];
let BookingsRoutingModule = class BookingsRoutingModule {
};
BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BookingsRoutingModule);



/***/ }),

/***/ "./src/app/home/bookings/bookings.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/bookings/bookings.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/bookings/bookings.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/bookings/bookings.component.ts ***!
  \*****************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookingsComponent = class BookingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookings.component.scss */ "./src/app/home/bookings/bookings.component.scss")).default]
    })
], BookingsComponent);



/***/ }),

/***/ "./src/app/home/bookings/bookings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/bookings/bookings.module.ts ***!
  \**************************************************/
/*! exports provided: BookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsModule", function() { return BookingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings-routing.module */ "./src/app/home/bookings/bookings-routing.module.ts");
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookings.component */ "./src/app/home/bookings/bookings.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let BookingsModule = class BookingsModule {
};
BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bookings_component__WEBPACK_IMPORTED_MODULE_4__["BookingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], BookingsModule);



/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map