(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/calender-list-accept.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/calender-list-accept.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content class=\"text-center\">\n  <h3>Are you sure you want to accept/decline\n    the Booking?</h3>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-submit\">Accept</button></div>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-cancel\">Decline</button></div>\n</mat-dialog-content>\n  <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/managecalender-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/managecalender-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 top-text\">Booking Date: 08 Jan, 2020</div>\n        <div class=\"col-md-6 alignright\"><a href=\"#\" class=\"btn btn-export\">Export</a></div>\n    </div>\n    <div class=\"table_wrap mobile_hidden\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\">\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>No.</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>User Name</th>\n              <td mat-cell *matCellDef=\"let element\"><a [routerLink]=\"['/walking-user/calender-info/']\">{{element.name}}</a></td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"service\">\n              <th mat-header-cell *matHeaderCellDef>Service</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.service}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"serviceat\">\n              <th mat-header-cell *matHeaderCellDef>Service At</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.serviceat}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"staff\">\n              <th mat-header-cell *matHeaderCellDef>Staff Name</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.staff}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"number\">\n              <th mat-header-cell *matHeaderCellDef>Mobile Number</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.number}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef>Status</th>\n              <!--Please add class for status for diefferent colors ->  confirmed, pending, completed, rejected-->\n              <td mat-cell *matCellDef=\"let element\"> {{element.status}} \n                <!-- <span class=\"confirmed\">Confirmed</span> \n                <span class=\"completed\">completed</span> \n                <span class=\"pending\">pending</span> \n                <span class=\"rejected\">rejected</span> -->\n              </td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"time\">\n              <th mat-header-cell *matHeaderCellDef>Time</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.time}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"bookingid\">\n              <th mat-header-cell *matHeaderCellDef>Booking ID</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.bookingid}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"date\">\n              <th mat-header-cell *matHeaderCellDef>Date</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.date}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef>Actions</th>\n              <!--use same class for accepted as accept and decline for declined-->\n              <td mat-cell *matCellDef=\"let user\"> \n              <button class=\"booking_btn cancel\">Cancel</button> \n              <button class=\"booking_btn accept\" (click)=\"openDialog()\">Accept</button>  \n              <button class=\"booking_btn decline\" (click)=\"openDialog()\">Decline</button>  \n              </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n\n\n        <div class=\"card_view mobile_visible\">\n\n          <div class=\"cards\">\n              <div class=\"top_info\">\n                <!--add class for background color confirmed, pending, rejected, completed-->\n                <div class=\"left_status confirmed\">confirmed</div>\n                <div class=\"right_status\">\n                  <ul>\n                    <li>22 Oct, 2019</li>\n                    <li>10:00AM</li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"description\">\n              <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n              <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n              <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Home</p>\n              <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n              <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"\">#Q1234</p>\n              <div class=\"buttons\">\n                <button class=\"booking_btn cancel\">Cancel</button> \n              </div>\n          </div>\n          </div>\n    \n          \n          <div class=\"cards\">\n            <div class=\"top_info\">\n              <!--add class for background color confirmed, pending, rejected, completed-->\n              <div class=\"left_status pending\">pending</div>\n              <div class=\"right_status\">\n                <ul>\n                  <li>22 Oct, 2019</li>\n                  <li>10:00AM</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"description\">\n            <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n            <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n            <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Clinic</p>\n            <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n            <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"\">#Q1234</p>\n            <div class=\"buttons\"><button class=\"booking_btn decline\" (click)=\"openDialog()\">Decline</button> \n            </div>\n        </div>\n        </div>\n    \n        \n        <div class=\"cards\">\n          <div class=\"top_info\">\n            <!--add class for background color confirmed, pending, rejected, completed-->\n            <div class=\"left_status rejected\">rejected</div>\n            <div class=\"right_status\">\n              <ul>\n                <li>22 Oct, 2019</li>\n                <li>10:00AM</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"description\">\n          <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n          <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n          <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Home</p>\n          <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n          <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"\">#Q1234</p>\n          <div class=\"buttons\">\n            <button class=\"booking_btn accept\" (click)=\"openDialog()\">Accept</button>  \n          </div>\n      </div>\n      </div>\n    \n      \n      <div class=\"cards\">\n        <div class=\"top_info\">\n          <!--add class for background color confirmed, pending, rejected, completed-->\n          <div class=\"left_status completed\">completed</div>\n          <div class=\"right_status\">\n            <ul>\n              <li>22 Oct, 2019</li>\n              <li>10:00AM</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"description\">\n        <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"\">Jane Doe</p>\n        <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"\">Haircut, Hair Spa</p>\n        <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"\">At Home</p>\n        <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+919999999999</p>\n        <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"\">#Q1234</p>\n        <div class=\"buttons\">\n          <button class=\"booking_btn decline\" (click)=\"openDialog()\">Decline</button> \n        </div>\n    </div>\n    </div>\n          \n        </div>\n\n      <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul>\n  </div>");

/***/ }),

/***/ "./src/app/home/manage-calender/managecalender-list/managecalender-list-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender-list/managecalender-list-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ManagecalenderListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderListRoutingModule", function() { return ManagecalenderListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _managecalender_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managecalender-list.component */ "./src/app/home/manage-calender/managecalender-list/managecalender-list.component.ts");




const routes = [{ path: '', component: _managecalender_list_component__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderListComponent"] }];
let ManagecalenderListRoutingModule = class ManagecalenderListRoutingModule {
};
ManagecalenderListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagecalenderListRoutingModule);



/***/ }),

/***/ "./src/app/home/manage-calender/managecalender-list/managecalender-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender-list/managecalender-list.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFuYWdlLWNhbGVuZGVyL21hbmFnZWNhbGVuZGVyLWxpc3QvbWFuYWdlY2FsZW5kZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/manage-calender/managecalender-list/managecalender-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender-list/managecalender-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManagecalenderListComponent, CalenderActionDialogBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderListComponent", function() { return ManagecalenderListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderActionDialogBox", function() { return CalenderActionDialogBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ManagecalenderListComponent = class ManagecalenderListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'time', 'bookingid', 'date', 'action'];
        this.dataSource = ELEMENT_DATA;
    }
    openDialog() {
        console.log('-----');
        const dialogRef = this.dialog.open(CalenderActionDialogBox, { width: '500px', disableClose: true });
    }
    ngOnInit() {
    }
};
ManagecalenderListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ManagecalenderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managecalender-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managecalender-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/managecalender-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managecalender-list.component.scss */ "./src/app/home/manage-calender/managecalender-list/managecalender-list.component.scss")).default]
    })
], ManagecalenderListComponent);

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
let CalenderActionDialogBox = class CalenderActionDialogBox {
    constructor() {
    }
};
CalenderActionDialogBox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'calender-list-accept',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calender-list-accept.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-calender/managecalender-list/calender-list-accept.html")).default,
    })
], CalenderActionDialogBox);



/***/ }),

/***/ "./src/app/home/manage-calender/managecalender-list/managecalender-list.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/manage-calender/managecalender-list/managecalender-list.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ManagecalenderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagecalenderListModule", function() { return ManagecalenderListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _managecalender_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managecalender-list-routing.module */ "./src/app/home/manage-calender/managecalender-list/managecalender-list-routing.module.ts");
/* harmony import */ var _managecalender_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managecalender-list.component */ "./src/app/home/manage-calender/managecalender-list/managecalender-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ManagecalenderListModule = class ManagecalenderListModule {
};
ManagecalenderListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_managecalender_list_component__WEBPACK_IMPORTED_MODULE_4__["ManagecalenderListComponent"], _managecalender_list_component__WEBPACK_IMPORTED_MODULE_4__["CalenderActionDialogBox"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _managecalender_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagecalenderListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_managecalender_list_component__WEBPACK_IMPORTED_MODULE_4__["CalenderActionDialogBox"]]
    })
], ManagecalenderListModule);



/***/ })

}]);
//# sourceMappingURL=11-es2015.js.map