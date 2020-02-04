(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content class=\"text-center\">\n    <h3>Please enter your Email</h3>\n    <form>\n        <mat-form-field>\n            <!-- <span class=\"email-img pass\"><img src=\"assets/images/changepassword.png\" alt=\"envelope\"></span> -->\n            <input matInput placeholder=\"Enter your email address\" class=\"form-control popup\">\n        </mat-form-field>\n    <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-submit\">Send</button></div>\n</form>\n\n  </mat-dialog-content>\n    <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img src=\"assets/images/change.png\" alt=\"\"><span class=\"user_name\">Jane Doe</span></div>\n        <div class=\"col-md-6 alignright\">\n            <ul class=\"inline\">\n                <li><a class=\"btn btn-export\" href=\"javascript:void(0);\">PDF</a></li>\n                <li><button class=\"action_btn red\" (click)=\"openDialog()\"><img src=\"assets/images/email_pink.png\" alt=\"Email\"></button></li>\n                <li><button><img src=\"assets/images/print.png\" alt=\"Print\"></button></li>\n            </ul>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 label\">Date:</div>\n                    <div class=\"col-md-9 description\">22 Oct, 2019</div>\n                    <div class=\"col-md-3 label\">Time:</div>\n                    <div class=\"col-md-9 description\">10:00AM</div>\n                    <div class=\"col-md-3 label\">Booking ID:</div>\n                    <div class=\"col-md-9 description\">#QW1234</div>\n                    <div class=\"col-md-3 label\">Staff Name:</div>\n                    <div class=\"col-md-9 description\">Allen</div>\n                    <div class=\"col-md-3 label\">Address:</div>\n                    <div class=\"col-md-9 description\">246 Chris Avenue, New York</div>\n                    <div class=\"col-md-12 label\">Booking Location:</div>\n                    <div class=\"col-md-12 description\"><img class=\"full_width\" src=\"assets/images/maps.png\" alt=\"Maps\"></div>\n                    <div class=\"col-md-3 label\">Service At:</div>\n                    <div class=\"col-md-9 description\">Salon</div>\n                    <div class=\"col-md-12 label\">Services:</div>\n                    <div class=\"col-md-3 label\">Hair Wash Basic (Blast Dry)<span>Anybody</span></div>\n                    <div class=\"col-md-9 description alignright\">$250.00<span>10:00AM - 11:00AM</span></div>\n                    <div class=\"col-md-3 label\">Hair Wash Basic (Blast Dry)<span>You</span></div>\n                    <div class=\"col-md-9 description alignright\">$250.00<span>11:00AM - 12:00PM</span></div>\n                    <div class=\"col-md-12 text-center\"><a href=\"javascript:void(0);\" class=\"btn btn-submit\">Mark as Complete</a></div>\n                </div>\n            </div>\n            <div class=\"col-md-3 mobile_hidden\"></div>\n        </div>\n\n        </div>\n    </div>\n");

/***/ }),

/***/ "./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BookingdetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingdetailRoutingModule", function() { return BookingdetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookingdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookingdetail.component */ "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts");




const routes = [{ path: '', component: _bookingdetail_component__WEBPACK_IMPORTED_MODULE_3__["BookingdetailComponent"] }];
let BookingdetailRoutingModule = class BookingdetailRoutingModule {
};
BookingdetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BookingdetailRoutingModule);



/***/ }),

/***/ "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/bookings/bookingdetail/bookingdetail.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 768px) {\n  .main-card .label, .main-card .description {\n    padding: 0px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9ib29raW5ncy9ib29raW5nZGV0YWlsL2Jvb2tpbmdkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYm9va2luZ3MvYm9va2luZ2RldGFpbC9ib29raW5nZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFBMEMsaUJBQUE7RUNFNUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYm9va2luZ3MvYm9va2luZ2RldGFpbC9ib29raW5nZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XG4gICAgLm1haW4tY2FyZCAubGFiZWwsLm1haW4tY2FyZCAuZGVzY3JpcHRpb257cGFkZGluZzogMHB4IDMwcHg7fVxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jYXJkIC5sYWJlbCwgLm1haW4tY2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/bookings/bookingdetail/bookingdetail.component.ts ***!
  \************************************************************************/
/*! exports provided: BookingdetailComponent, BookingEmailDialogPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingdetailComponent", function() { return BookingdetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEmailDialogPopup", function() { return BookingEmailDialogPopup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let BookingdetailComponent = class BookingdetailComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        console.log('-----');
        const dialogRef = this.dialog.open(BookingEmailDialogPopup, { width: '500px', disableClose: true });
    }
    ngOnInit() {
    }
};
BookingdetailComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
BookingdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookingdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookingdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/bookingdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookingdetail.component.scss */ "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss")).default]
    })
], BookingdetailComponent);

let BookingEmailDialogPopup = class BookingEmailDialogPopup {
    constructor() {
    }
};
BookingEmailDialogPopup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'booking-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-email.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/bookingdetail/booking-email.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookingdetail.component.scss */ "./src/app/home/bookings/bookingdetail/bookingdetail.component.scss")).default]
    })
], BookingEmailDialogPopup);



/***/ }),

/***/ "./src/app/home/bookings/bookingdetail/bookingdetail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/bookings/bookingdetail/bookingdetail.module.ts ***!
  \*********************************************************************/
/*! exports provided: BookingdetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingdetailModule", function() { return BookingdetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bookingdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookingdetail-routing.module */ "./src/app/home/bookings/bookingdetail/bookingdetail-routing.module.ts");
/* harmony import */ var _bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookingdetail.component */ "./src/app/home/bookings/bookingdetail/bookingdetail.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let BookingdetailModule = class BookingdetailModule {
};
BookingdetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingdetailComponent"], _bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingEmailDialogPopup"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bookingdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingdetailRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_bookingdetail_component__WEBPACK_IMPORTED_MODULE_4__["BookingEmailDialogPopup"]]
    })
], BookingdetailModule);



/***/ })

}]);
//# sourceMappingURL=13-es2015.js.map