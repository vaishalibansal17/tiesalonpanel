(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/booking-delete.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/booking-delete.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content class=\"text-center\">\n  <h3>Are you sure you want to accept/decline\n    the Booking?</h3>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-submit\">Accept</button></div>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-cancel\">Decline</button></div>\n</mat-dialog-content>\n  <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n  <h1>Booking</h1>\n  <p>It will set up in further milestone.</p>\n</div>\n<div class=\"main-card\">\n    <!-- <div class=\"row\">\n        <div class=\"col-md-6 add\">\n            <form action=\"\" class=\"list_booking\">\n                <mat-form-field>\n                    <mat-label>All Bookings</mat-label>\n                    <mat-select formControlName='booking'>\n                        <mat-option *ngFor=\"let booking of bookings\" [value]=\"booking.value\">\n                            {{booking.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </form>\n        </div>\n        <div class=\"col-md-6 alignright\">\n          <a href=\"#\" class=\"btn btn-export\">Export</a>\n          <form action=\"\" class=\"search_field\">\n            <mat-form-field>\n              <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n              <input matInput placeholder=\"Search\" class=\"form-control\">\n            </mat-form-field>\n          </form>\n        </div>\n      </div> -->\n    <div class=\"table_wrap mobile_hidden\">\n    <!-- <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\">\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef>No.</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>User Name</th>\n          <td mat-cell *matCellDef=\"let element\"><a [routerLink]=\"['/booking/info']\">{{element.name}}</a></td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"service\">\n          <th mat-header-cell *matHeaderCellDef>Service</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.service}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"serviceat\">\n          <th mat-header-cell *matHeaderCellDef>Service At</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.serviceat}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"staff\">\n          <th mat-header-cell *matHeaderCellDef>Staff Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.staff}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef>Mobile Number</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.number}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th> -->\n          <!--Please add class for status for diefferent colors ->  confirmed, pending, completed, rejected-->\n          <!-- <td mat-cell *matCellDef=\"let element\"> {{element.status}}  -->\n            <!-- <span class=\"confirmed\">Confirmed</span> \n            <span class=\"completed\">completed</span> \n            <span class=\"pending\">pending</span> \n            <span class=\"rejected\">rejected</span> -->\n          <!-- </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"time\">\n          <th mat-header-cell *matHeaderCellDef>Time</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.time}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"bookingid\">\n          <th mat-header-cell *matHeaderCellDef>Booking ID</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.bookingid}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef>Date</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.date}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Actions</th>  -->\n          <!--use same class for accepted as accept and decline for declined-->\n          <!-- <td mat-cell *matCellDef=\"let user\"> \n          <button class=\"booking_btn accept\" (click)=\"openDialog()\">Accept</button>  \n          </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table> -->\n    </div>\n\n    <div class=\"card_view mobile_visible\">\n\n      <div class=\"cards\">\n          <div class=\"top_info\">\n            <!-- add class for background color confirmed, pending, rejected, completed -->\n            <div class=\"left_status confirmed\">confirmed</div>\n            <div class=\"right_status\">\n              <ul>\n                <li>22 Oct, 2019</li>\n                <li>10:00AM</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"description\">\n          <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n          <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n          <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Home</p>\n          <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n          <div class=\"buttons\">\n            <button class=\"booking_btn decline\" (click)=\"openDialog()\">Decline</button> \n          </div>\n      </div>\n      </div>\n\n      \n      <div class=\"cards\">\n        <div class=\"top_info\">\n          <!--add class for background color confirmed, pending, rejected, completed-->\n          <div class=\"left_status pending\">pending</div>\n          <div class=\"right_status\">\n            <ul>\n              <li>22 Oct, 2019</li>\n              <li>10:00AM</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"description\">\n        <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n        <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n        <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Clinic</p>\n        <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n        <div class=\"buttons\">\n          <button class=\"booking_btn cancel\">Cancel</button> \n        </div>\n    </div>\n    </div>\n\n    \n    <div class=\"cards\">\n      <div class=\"top_info\">\n        <!--add class for background color confirmed, pending, rejected, completed-->\n        <div class=\"left_status rejected\">rejected</div>\n        <div class=\"right_status\">\n          <ul>\n            <li>22 Oct, 2019</li>\n            <li>10:00AM</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"description\">\n      <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n      <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n      <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Home</p>\n      <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n      <div class=\"buttons\">\n        <button class=\"booking_btn decline\" (click)=\"openDialog()\">Decline</button> \n      </div>\n  </div>\n  </div>\n\n  \n\n      \n    </div>\n\n\n      <!-- <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul> -->\n  </div>");

/***/ }),

/***/ "./src/app/home/bookings/list/list-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/bookings/list/list-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/home/bookings/list/list.component.ts");




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

/***/ "./src/app/home/bookings/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home/bookings/list/list.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-card form.list_booking mat-form-field.mat-form-field-type-mat-select.mat-form-field-can-float.mat-form-field-has-label {\n  height: 40px;\n}\n\nform.search_field {\n  display: initial;\n  margin-left: 15px;\n}\n\n@media (max-width: 380px) {\n  form.search_field {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9ib29raW5ncy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYm9va2luZ3MvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTZILFlBQUE7QUNFN0g7O0FEREE7RUFBa0IsZ0JBQUE7RUFBaUIsaUJBQUE7QUNNbkM7O0FESkE7RUFDSTtJQUFrQixnQkFBQTtFQ1FwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ib29raW5ncy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIGZvcm0ubGlzdF9ib29raW5nIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtaGFzLWxhYmVse2hlaWdodDogNDBweDt9XG5mb3JtLnNlYXJjaF9maWVsZHtkaXNwbGF5OiBpbml0aWFsO21hcmdpbi1sZWZ0OiAxNXB4O31cblxuQG1lZGlhKG1heC13aWR0aDozODBweCl7XG4gICAgZm9ybS5zZWFyY2hfZmllbGR7bWFyZ2luLWxlZnQ6IDBweDt9XG59IiwiLm1haW4tY2FyZCBmb3JtLmxpc3RfYm9va2luZyBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLWhhcy1sYWJlbCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuZm9ybS5zZWFyY2hfZmllbGQge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIGZvcm0uc2VhcmNoX2ZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/bookings/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/bookings/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent, BookingDeleteDialogBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDeleteDialogBox", function() { return BookingDeleteDialogBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ListComponent = class ListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'time', 'bookingid', 'date', 'action'];
        this.dataSource = ELEMENT_DATA;
        this.bookings = [
            { value: '1', viewValue: 'All Bookings' },
            { value: '2', viewValue: 'New Bookings' },
            { value: '3', viewValue: 'Accepted Bookings' },
            { value: '4', viewValue: 'In-Process Bookings' },
            { value: '5', viewValue: 'Completed Bookings' },
        ];
    }
    openDialog() {
        console.log('-----');
        const dialogRef = this.dialog.open(BookingDeleteDialogBox, { width: '500px', disableClose: true });
    }
    ngOnInit() {
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/home/bookings/list/list.component.scss")).default]
    })
], ListComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Jane Doe', service: 'Haircut, Hair Spa', serviceat: 'Salon', staff: 'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 2, name: 'Jane Doe', service: 'Haircut, Hair Spa', serviceat: 'Home', staff: 'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 3, name: 'Jane Doe', service: 'Haircut, Hair Spa', serviceat: 'Salon', staff: 'Allen', number: +919999999999, status: '--', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 4, name: 'Jane Doe', service: 'Haircut', serviceat: 'Home', staff: 'James', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 5, name: 'Jane Doe', service: 'Massage', serviceat: 'Salon', staff: 'Allen', number: +919999999999, status: 'Completed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 6, name: 'Jane Doe', service: 'Haircut', serviceat: 'Home', staff: 'James', number: +919999999999, status: 'Pending', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 7, name: 'Jane Doe', service: 'Haircut, Hair Spa', serviceat: 'Salon', staff: 'Allen', number: +919999999999, status: 'Confirmed', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' },
    { position: 8, name: 'Jane Doe', service: 'Massage', serviceat: 'Home', staff: 'Allen', number: +919999999999, status: 'Rejected', time: '10:00AM', bookingid: '#QW1234', date: '22 Oct, 2019' }
];
let BookingDeleteDialogBox = class BookingDeleteDialogBox {
    constructor() {
    }
};
BookingDeleteDialogBox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'booking-delete.component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/booking-delete.component.html")).default,
    })
], BookingDeleteDialogBox);



/***/ }),

/***/ "./src/app/home/bookings/list/list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/home/bookings/list/list.module.ts ***!
  \***************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/home/bookings/list/list-routing.module.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.component */ "./src/app/home/bookings/list/list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _list_component__WEBPACK_IMPORTED_MODULE_4__["BookingDeleteDialogBox"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_list_component__WEBPACK_IMPORTED_MODULE_4__["BookingDeleteDialogBox"]]
    })
], ListModule);



/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map