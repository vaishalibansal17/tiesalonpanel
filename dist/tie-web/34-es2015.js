(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walkinglist/walkinglist.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walkinglist/walkinglist.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 add\">\n            <form action=\"\" class=\"list_booking\">\n                <mat-form-field>\n                    <mat-label>All Bookings</mat-label>\n                    <mat-select formControlName='walkinglist'>\n                        <mat-option *ngFor=\"let walkinglist of walkinglists\" [value]=\"walkinglist.value\">\n                            {{walkinglist.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </form>\n\n        </div>\n        <div class=\"col-md-6 alignright\">\n            <ul class=\"inline\">\n                <li class=\"add\"><a [routerLink]=\"['/walking-user/add-user']\"><img src=\"assets/images/add.png\" alt=\"Add\"> Add Users</a></li>\n                <li><a href=\"#\" class=\"btn btn-export\">Export</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"table_wrap\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\">\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> User Name </th>\n          <td mat-cell *matCellDef=\"let element\"> <a>{{element.name}}</a> </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"service\">\n          <th mat-header-cell *matHeaderCellDef>Service</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.service}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"staff\">\n          <th mat-header-cell *matHeaderCellDef>Staff Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.staff}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef>Mobile Number</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th>\n          <!--Please add class for status for diefferent colors ->  confirmed, pending, completed, rejected-->\n          <td mat-cell *matCellDef=\"let element\"> {{element.status}} \n            <!-- <span class=\"confirmed\">Confirmed</span> \n            <span class=\"completed\">completed</span> \n            <span class=\"pending\">pending</span> \n            <span class=\"rejected\">rejected</span> -->\n          </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"time\">\n          <th mat-header-cell *matHeaderCellDef>Time</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"bookingid\">\n          <th mat-header-cell *matHeaderCellDef>Booking ID</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.bookingid}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef> Date </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n      <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul>\n  </div>");

/***/ }),

/***/ "./src/app/home/walking-user/walkinglist/walkinglist-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/walking-user/walkinglist/walkinglist-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WalkinglistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinglistRoutingModule", function() { return WalkinglistRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _walkinglist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkinglist.component */ "./src/app/home/walking-user/walkinglist/walkinglist.component.ts");




const routes = [{ path: '', component: _walkinglist_component__WEBPACK_IMPORTED_MODULE_3__["WalkinglistComponent"] }];
let WalkinglistRoutingModule = class WalkinglistRoutingModule {
};
WalkinglistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalkinglistRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/walkinglist/walkinglist.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/walking-user/walkinglist/walkinglist.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-card ul.inline li.add {\n  margin: 0 25px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvd2Fsa2luZ2xpc3Qvd2Fsa2luZ2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL3dhbGtpbmdsaXN0L3dhbGtpbmdsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTRCLHVCQUFBO0FDRTVCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvd2Fsa2luZ2xpc3Qvd2Fsa2luZ2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHVsLmlubGluZSBsaS5hZGR7bWFyZ2luOiAwIDI1cHggMHB4IDEwcHg7fSIsIi5tYWluLWNhcmQgdWwuaW5saW5lIGxpLmFkZCB7XG4gIG1hcmdpbjogMCAyNXB4IDBweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/walking-user/walkinglist/walkinglist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/walking-user/walkinglist/walkinglist.component.ts ***!
  \************************************************************************/
/*! exports provided: WalkinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinglistComponent", function() { return WalkinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WalkinglistComponent = class WalkinglistComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'service', 'staff', 'number', 'status', 'time', 'bookingid', 'date'];
        this.dataSource = ELEMENT_DATA;
        this.walkinglists = [
            { value: '1', viewValue: 'All Bookings' },
            { value: '2', viewValue: 'New Bookings' },
            { value: '3', viewValue: 'Accepted Bookings' },
            { value: '4', viewValue: 'In-Process Bookings' },
            { value: '5', viewValue: 'Completed Bookings' },
        ];
    }
    ngOnInit() {
    }
};
WalkinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkinglist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./walkinglist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/walkinglist/walkinglist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./walkinglist.component.scss */ "./src/app/home/walking-user/walkinglist/walkinglist.component.scss")).default]
    })
], WalkinglistComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Jane Doe', service: 'Haircut, Hair Spa', staff: 'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 2, name: 'Jane Doe', service: 'Haircut, Hair Spa', staff: 'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 3, name: 'Jane Doe', service: 'Haircut, Hair Spa', staff: 'Allen', number: +919999999999, status: '--', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 4, name: 'Jane Doe', service: 'Haircut', staff: 'James', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 5, name: 'Jane Doe', service: 'Massage', staff: 'Allen', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 6, name: 'Jane Doe', service: 'Haircut', staff: 'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 7, name: 'Jane Doe', service: 'Haircut, Hair Spa', staff: 'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 8, name: 'Jane Doe', service: 'Massage', staff: 'Allen', number: +919999999999, status: 'Rejected', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' }
];


/***/ }),

/***/ "./src/app/home/walking-user/walkinglist/walkinglist.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/walking-user/walkinglist/walkinglist.module.ts ***!
  \*********************************************************************/
/*! exports provided: WalkinglistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinglistModule", function() { return WalkinglistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _walkinglist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkinglist-routing.module */ "./src/app/home/walking-user/walkinglist/walkinglist-routing.module.ts");
/* harmony import */ var _walkinglist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkinglist.component */ "./src/app/home/walking-user/walkinglist/walkinglist.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let WalkinglistModule = class WalkinglistModule {
};
WalkinglistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_walkinglist_component__WEBPACK_IMPORTED_MODULE_4__["WalkinglistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _walkinglist_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalkinglistRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], WalkinglistModule);



/***/ })

}]);
//# sourceMappingURL=34-es2015.js.map