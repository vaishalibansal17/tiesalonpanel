(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./src/app/home/staff/list/list-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/staff/list/list-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/home/staff/list/list.component.ts");




const routes = [{ path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] }];
let ListRoutingModule = class ListRoutingModule {
};
ListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/list/list.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/staff/list/list.module.ts ***!
  \************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/home/staff/list/list-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/home/staff/list/list.component.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm2015/ngx-stars.js");









let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _list_component__WEBPACK_IMPORTED_MODULE_5__["StaffDeleteDialogBox"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"],
            ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        entryComponents: [_list_component__WEBPACK_IMPORTED_MODULE_5__["StaffDeleteDialogBox"]]
    })
], ListModule);



/***/ })

}]);
//# sourceMappingURL=37-es2015.js.map