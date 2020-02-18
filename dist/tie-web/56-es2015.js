(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./src/app/home/staff/staff-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/staff/staff-routing.module.ts ***!
  \****************************************************/
/*! exports provided: StaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function() { return StaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/home/staff/list/list.module.ts")).then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, /*! ./addstaff/addstaff.module */ "./src/app/home/staff/addstaff/addstaff.module.ts")).then(mod => mod.AddstaffModule), data: { title: "Add", status: false } },
    { path: 'edit/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! ./editstaff/editstaff.module */ "./src/app/home/staff/editstaff/editstaff.module.ts")).then(mod => mod.EditstaffModule), data: { title: "Edit", status: false } },
    { path: 'info/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ./staffdetail/staffdetail.module */ "./src/app/home/staff/staffdetail/staffdetail.module.ts")).then(mod => mod.StaffdetailModule), data: { title: "Info", status: false } },
    { path: 'review/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./staffreview/staffreview.module */ "./src/app/home/staff/staffreview/staffreview.module.ts")).then(mod => mod.StaffreviewModule), data: { title: "Info / Review", status: false } },
];
let StaffRoutingModule = class StaffRoutingModule {
};
StaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaffRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/staff.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/staff/staff.module.ts ***!
  \********************************************/
/*! exports provided: StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-routing.module */ "./src/app/home/staff/staff-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let StaffModule = class StaffModule {
};
StaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ],
        entryComponents: []
    })
], StaffModule);



/***/ })

}]);
//# sourceMappingURL=56-es2015.js.map