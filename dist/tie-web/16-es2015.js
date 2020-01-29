(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h1>Will deliver in next milestone.</h1>\n<hr>\n<h2>Thank you</h2>");

/***/ }),

/***/ "./src/app/home/chat-management/chat-management-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ChatManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementRoutingModule", function() { return ChatManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-management.component */ "./src/app/home/chat-management/chat-management.component.ts");




const routes = [{ path: '', component: _chat_management_component__WEBPACK_IMPORTED_MODULE_3__["ChatManagementComponent"] }];
let ChatManagementRoutingModule = class ChatManagementRoutingModule {
};
ChatManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatManagementRoutingModule);



/***/ }),

/***/ "./src/app/home/chat-management/chat-management.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hhdC1tYW5hZ2VtZW50L2NoYXQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/chat-management/chat-management.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementComponent", function() { return ChatManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatManagementComponent = class ChatManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-management.component.scss */ "./src/app/home/chat-management/chat-management.component.scss")).default]
    })
], ChatManagementComponent);



/***/ }),

/***/ "./src/app/home/chat-management/chat-management.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.module.ts ***!
  \****************************************************************/
/*! exports provided: ChatManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementModule", function() { return ChatManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-management-routing.module */ "./src/app/home/chat-management/chat-management-routing.module.ts");
/* harmony import */ var _chat_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-management.component */ "./src/app/home/chat-management/chat-management.component.ts");





let ChatManagementModule = class ChatManagementModule {
};
ChatManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_management_component__WEBPACK_IMPORTED_MODULE_4__["ChatManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatManagementRoutingModule"]
        ]
    })
], ChatManagementModule);



/***/ })

}]);
//# sourceMappingURL=16-es2015.js.map