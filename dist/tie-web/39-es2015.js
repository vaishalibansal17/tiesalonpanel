(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/home/walking-user/list/list.module.ts")).then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add-user', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./add/add.module */ "./src/app/home/walking-user/add/add.module.ts")).then(mod => mod.AddModule), data: { title: "Add User", status: false } },
    { path: 'add-booking', loadChildren: () => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./addbookings/addbookings.module */ "./src/app/home/walking-user/addbookings/addbookings.module.ts")).then(mod => mod.AddbookingsModule), data: { title: "Add Booking", status: false } },
    { path: 'calender', loadChildren: () => __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./calender/calender.module */ "./src/app/home/walking-user/calender/calender.module.ts")).then(mod => mod.CalenderModule), data: { title: "Manage Calender", status: false } },
    { path: 'calender-list', loadChildren: () => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./calenderlist/calenderlist.module */ "./src/app/home/walking-user/calenderlist/calenderlist.module.ts")).then(mod => mod.CalenderlistModule), data: { title: "Calender List", status: false } },
    { path: 'calender-info', loadChildren: () => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./calenderdetail/calenderdetail.module */ "./src/app/home/walking-user/calenderdetail/calenderdetail.module.ts")).then(mod => mod.CalenderdetailModule), data: { title: "Calender Info", status: false } },
];
let WalkingUserRoutingModule = class WalkingUserRoutingModule {
};
WalkingUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalkingUserRoutingModule);



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
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let WalkingUserModule = class WalkingUserModule {
};
WalkingUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _walking_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalkingUserRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], WalkingUserModule);



/***/ })

}]);
//# sourceMappingURL=39-es2015.js.map