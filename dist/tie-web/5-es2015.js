(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/home/promocode/list/list.module.ts")).then(mod => mod.ListModule), data: { title: "List", status: false } },
    { path: 'add', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./add/add.module */ "./src/app/home/promocode/add/add.module.ts")).then(mod => mod.AddModule), data: { title: "Add", status: false } },
    { path: 'info/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ./info/info.module */ "./src/app/home/promocode/info/info.module.ts")).then(mod => mod.InfoModule), data: { title: "Offers", status: false } },
    { path: 'edit/:id', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ./edit/edit.module */ "./src/app/home/promocode/edit/edit.module.ts")).then(mod => mod.EditModule), data: { title: "Edit", status: false } },
];
let PromocodeRoutingModule = class PromocodeRoutingModule {
};
PromocodeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PromocodeRoutingModule);



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
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let PromocodeModule = class PromocodeModule {
};
PromocodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _promocode_routing_module__WEBPACK_IMPORTED_MODULE_3__["PromocodeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], PromocodeModule);



/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map