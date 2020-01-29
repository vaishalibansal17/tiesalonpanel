(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-12 top_view\"><img src=\"assets/images/change.png\" alt=\"\"><span class=\"user_name\">Jane Doe</span></div>\n        <div class=\"col-md-4 label\">Email:</div>\n        <div class=\"col-md-8\">jane@gmail.com</div>\n        <div class=\"col-md-4 label\">Mobile Number:</div>\n        <div class=\"col-md-8\">+91 99999 99999</div>\n        <div class=\"col-md-4 label\">Reviews:</div>\n        <div class=\"col-md-8\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n        <div class=\"col-md-4 label\">Description:</div>\n        <div class=\"col-md-8\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n            dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>\n        <div class=\"col-md-12 alignright\"><a [routerLink]=\"['review']\" class=\"btn btn-link\">View All</a></div>\n        <div class=\"col-md-12\">\n            <h3>Reviews:</h3>\n        </div>\n        <div class=\"staffdetail_notifi\">\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                Lorem ipsum is placeholder text commonly used in the graphic, print. Lorem ipsum is placeholder text.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                Lorem ipsum is placeholder text commonly used in the graphic, print. Lorem ipsum is placeholder text.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: StaffdetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailRoutingModule", function() { return StaffdetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _staffdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffdetail.component */ "./src/app/home/staff/staffdetail/staffdetail.component.ts");




const routes = [{
        path: '', component: _staffdetail_component__WEBPACK_IMPORTED_MODULE_3__["StaffdetailComponent"]
    }];
let StaffdetailRoutingModule = class StaffdetailRoutingModule {
};
StaffdetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaffdetailRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvc3RhZmZkZXRhaWwvc3RhZmZkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.component.ts ***!
  \*****************************************************************/
/*! exports provided: StaffdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailComponent", function() { return StaffdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StaffdetailComponent = class StaffdetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffdetail.component.scss */ "./src/app/home/staff/staffdetail/staffdetail.component.scss")).default]
    })
], StaffdetailComponent);



/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.module.ts ***!
  \**************************************************************/
/*! exports provided: StaffdetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailModule", function() { return StaffdetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _staffdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffdetail-routing.module */ "./src/app/home/staff/staffdetail/staffdetail-routing.module.ts");
/* harmony import */ var _staffdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staffdetail.component */ "./src/app/home/staff/staffdetail/staffdetail.component.ts");





let StaffdetailModule = class StaffdetailModule {
};
StaffdetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_staffdetail_component__WEBPACK_IMPORTED_MODULE_4__["StaffdetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _staffdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffdetailRoutingModule"]
        ]
    })
], StaffdetailModule);



/***/ })

}]);
//# sourceMappingURL=24-es2015.js.map