(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\">\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Email\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Phone\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"Description\" class=\"form-control\"></textarea>\n            </mat-form-field>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Send Feedback</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/feedback/feedback-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/feedback/feedback-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.component */ "./src/app/home/feedback/feedback.component.ts");




const routes = [{ path: '', component: _feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"] }];
let FeedbackRoutingModule = class FeedbackRoutingModule {
};
FeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FeedbackRoutingModule);



/***/ }),

/***/ "./src/app/home/feedback/feedback.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/feedback/feedback.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/feedback/feedback.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/feedback/feedback.component.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedbackComponent = class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/home/feedback/feedback.component.scss")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/home/feedback/feedback.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/feedback/feedback.module.ts ***!
  \**************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/home/feedback/feedback-routing.module.ts");
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback.component */ "./src/app/home/feedback/feedback.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let FeedbackModule = class FeedbackModule {
};
FeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], FeedbackModule);



/***/ })

}]);
//# sourceMappingURL=22-es2015.js.map