(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transactionlist/transactionlist.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transactionlist/transactionlist.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row report_forms\">\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <mat-label>All</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let time of times\" [value]=\"time.value\">\n                    {{time.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <mat-label>Service Type</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let service of services\" [value]=\"service.value\">\n                    {{service.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <mat-label>Service At</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let serviceat of serviceats\" [value]=\"serviceat.value\">\n                    {{serviceat.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerfrom\" placeholder=\"From\" class=\"form-control\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerfrom\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerfrom></mat-datepicker>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerto\" placeholder=\"To\" class=\"form-control\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerto\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerto></mat-datepicker>\n              </mat-form-field>\n        </div>\n\n        <div class=\"col-md-2 alignright\"><a href=\"#\" class=\"btn btn-export\">Export</a></div>\n    </div>\n\n    <div class=\"table_wrap mobile_hidden\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\">\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>No.</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>Customer Name</th>\n              <td mat-cell *matCellDef=\"let element\"><a [routerLink]=\"['/report/transaction/info']\">{{element.name}}</a></td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"discount\">\n              <th mat-header-cell *matHeaderCellDef>Discount</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.discount}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"service\">\n              <th mat-header-cell *matHeaderCellDef>Service</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.service}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"serviceat\">\n              <th mat-header-cell *matHeaderCellDef>Service At</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.serviceat}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"date\">\n                <th mat-header-cell *matHeaderCellDef>Date</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.date}}</td>\n            </ng-container>  \n\n            <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef>Status</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\n            </ng-container>  \n\n            <ng-container matColumnDef=\"code\">\n                <th mat-header-cell *matHeaderCellDef>Coupon Code</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.code}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"amount\">\n                <th mat-header-cell *matHeaderCellDef>Amount</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.amount}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"tamount\">\n                <th mat-header-cell *matHeaderCellDef>Total Amount</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.tamount}}</td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n\n        <div class=\"card_view mobile_visible\">\n\n          <div class=\"cards\">\n              <div class=\"top_info\">\n                <!-- add class for background color Completed, rejected -->\n                <div class=\"left_status completed\">Completed</div>\n                <div class=\"right_status\">\n                  <ul>\n                    <li>22 Oct, 2019</li>\n                    <!-- <li>10:00AM</li>-->\n                  </ul>\n                </div>\n              </div>\n              <div class=\"description\">\n              <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"User\">Jane Doe</p>\n              <p class=\"service\"><img src=\"assets/images/discount-pink.png\" alt=\"Discount\">10%</p>\n              <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"Service\">Haircut, Hair Spa</p>\n              <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"location\">At Home</p>\n              <p class=\"number\"><img src=\"assets/images/code-pink.png\" alt=\"Coupon\">New Coupon code</p>\n              <p class=\"service\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\">$280</p>\n              <p class=\"service\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\">$200</p>\n\n          </div>\n          </div>\n        </div>\n\n        <ul class=\"pagination\">\n            <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n            <li class=\"active\"><a href=\"#\">1</a></li>\n            <li><a href=\"#\">2</a></li>\n            <li><a href=\"#\">3</a></li>\n            <li><a href=\"#\">4</a></li>\n            <li><a href=\"#\">5</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n          </ul>\n</div>");

/***/ }),

/***/ "./src/app/home/report/transaction/transactionlist/transactionlist-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/report/transaction/transactionlist/transactionlist-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransactionlistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionlistRoutingModule", function() { return TransactionlistRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _transactionlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactionlist.component */ "./src/app/home/report/transaction/transactionlist/transactionlist.component.ts");




const routes = [{ path: '', component: _transactionlist_component__WEBPACK_IMPORTED_MODULE_3__["TransactionlistComponent"] }];
let TransactionlistRoutingModule = class TransactionlistRoutingModule {
};
TransactionlistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TransactionlistRoutingModule);



/***/ }),

/***/ "./src/app/home/report/transaction/transactionlist/transactionlist.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/report/transaction/transactionlist/transactionlist.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9ubGlzdC90cmFuc2FjdGlvbmxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/report/transaction/transactionlist/transactionlist.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/report/transaction/transactionlist/transactionlist.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TransactionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionlistComponent", function() { return TransactionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionlistComponent = class TransactionlistComponent {
    constructor() {
        this.times = [
            { value: 'all', viewValue: 'All' },
            { value: 'day', viewValue: 'Day' },
            { value: 'week', viewValue: 'Weekly' },
            { value: 'month', viewValue: 'Monthly' },
        ];
        this.services = [
            { value: 'hair-spa', viewValue: 'Hair Spa' },
            { value: 'hair-cut', viewValue: 'Hair Cut' },
        ];
        this.serviceats = [
            { value: 'home', viewValue: 'Home' },
            { value: 'clinic', viewValue: 'Clinic' },
        ];
        this.displayedColumns = ['position', 'name', 'discount', 'service', 'serviceat', 'date', 'status', 'code', 'amount', 'tamount'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
};
TransactionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactionlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transactionlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/transaction/transactionlist/transactionlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transactionlist.component.scss */ "./src/app/home/report/transaction/transactionlist/transactionlist.component.scss")).default]
    })
], TransactionlistComponent);

const ELEMENT_DATA = [
    { position: 1, name: 'Jane Doe', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 2, name: 'James', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 3, name: 'Jane Doe', discount: '10%', service: 'Haircut', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 4, name: 'James', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 5, name: 'Jane Doe', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 6, name: 'Jane Doe', discount: '10%', service: ' Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 7, name: 'James', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 8, name: 'Jane Doe', discount: '10%', service: 'Haircut, Hair Spa', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
    { position: 9, name: 'Jane Doe', discount: '10%', service: 'Haircut', serviceat: 'Home', date: '22 Oct, 2019', status: 'completed', code: 'New coupon code', amount: '$280', tamount: '$200' },
];


/***/ }),

/***/ "./src/app/home/report/transaction/transactionlist/transactionlist.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/report/transaction/transactionlist/transactionlist.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TransactionlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionlistModule", function() { return TransactionlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transactionlist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactionlist-routing.module */ "./src/app/home/report/transaction/transactionlist/transactionlist-routing.module.ts");
/* harmony import */ var _transactionlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactionlist.component */ "./src/app/home/report/transaction/transactionlist/transactionlist.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let TransactionlistModule = class TransactionlistModule {
};
TransactionlistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_transactionlist_component__WEBPACK_IMPORTED_MODULE_4__["TransactionlistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _transactionlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransactionlistRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], TransactionlistModule);



/***/ })

}]);
//# sourceMappingURL=39-es2015.js.map