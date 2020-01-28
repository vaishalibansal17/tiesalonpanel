(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 add\"><a [routerLink]=\"['/staff/add']\"><img src=\"assets/images/add.png\" alt=\"Add\"> Add Staff</a></div>\n        <div class=\"col-md-6 alignright\"><a href=\"#\" class=\"btn btn-export\">Export</a></div>\n    </div>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"photo\">\n          <th mat-header-cell *matHeaderCellDef> Photo </th>\n          <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.photo\" /> </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"rating\">\n          <th mat-header-cell *matHeaderCellDef> Ratings </th>\n          <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.rating\" /> </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul>\n</div>");

/***/ }),

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

/***/ "./src/app/home/staff/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/staff/list/list.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/staff/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/staff/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'photo', 'email', 'number', 'rating', 'action'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/home/staff/list/list.component.scss")).default]
    })
], ListComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action: 'Action Button' },
    { position: 2, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action: 'Action Button' },
    { position: 3, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action: 'Action Button' },
    { position: 4, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action: 'Action Button' },
    { position: 5, name: 'Jane Doe', photo: 'assets/images/noti-pro.png', email: 'jane@gmail.com', number: +919999999999, rating: 'assets/images/reviews-star.png', action: 'Action Button' },
];


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






let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], ListModule);



/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map