(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/earning/earningdaylist/earningdaylist.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/earning/earningdaylist/earningdaylist.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row report_forms\">\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <mat-label>All</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let time of times\" [value]=\"time.value\">\n                    {{time.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerfrom\" placeholder=\"From\" class=\"form-control\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerfrom\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerfrom></mat-datepicker>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerto\" placeholder=\"To\" class=\"form-control\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerto\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerto></mat-datepicker>\n              </mat-form-field>\n        </div>\n\n        <div class=\"col-md-6 alignright\"><a href=\"#\" class=\"btn btn-export\">Export</a></div>\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"row\">\n                <div class=\"col-md-3 label\">Total Sales(YTD):</div>\n                <div class=\"col-md-9 description\">$1,061</div>\n                <div class=\"col-md-3 label\">Month of January:</div>\n                <div class=\"col-md-9 description\">$290</div>\n                <div class=\"col-md-3 label\">Current Week:</div>\n                <div class=\"col-md-9 description\">$100</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"sales_description\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">06 January, 2020</div>\n            <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 label\">Projected Sales:</div>\n                    <div class=\"col-md-6 description\">$1,061</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 label\">Appts Booked:</div>\n                    <div class=\"col-md-6 description\">08</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"table_wrap mobile_hidden\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\">\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef>No.</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"date\">\n                <th mat-header-cell *matHeaderCellDef>Date</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.date}}</td>\n            </ng-container>  \n\n            <ng-container matColumnDef=\"day\">\n                <th mat-header-cell *matHeaderCellDef>Day</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.day}}</td>\n            </ng-container>  \n\n            <ng-container matColumnDef=\"order\">\n                <th mat-header-cell *matHeaderCellDef>Orders(Total Count)</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.order}}</td>\n            </ng-container>  \n\n            <ng-container matColumnDef=\"avgorder\">\n              <th mat-header-cell *matHeaderCellDef>Average Order</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.avgorder}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"amount\">\n                <th mat-header-cell *matHeaderCellDef>Discounted Amount</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.amount}}</td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"tamount\">\n                <th mat-header-cell *matHeaderCellDef>Total Amount</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.tamount}}</td>\n            </ng-container>\n         \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n\n        <div class=\"card_view mobile_visible\">\n\n            <div class=\"cards\">\n                <div class=\"top_info\">\n                  <!-- add class for background color Completed, rejected -->\n                  <div class=\"right_status\">\n                    <ul>\n                      <li>22 Oct, 2019</li>\n                      <li>Tuesday</li>\n                    </ul>\n                  </div>\n                </div>\n                <div class=\"description\">\n                <p class=\"service\"><img src=\"assets/images/bookings-pink.png\" alt=\"Order\">20(Order)</p>\n                <p class=\"service\"><img src=\"assets/images/bookings-pink.png\" alt=\"Average Order\">4(Average Order)</p>\n                <p class=\"service\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\">$280</p>\n                <p class=\"service\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\">$200</p>\n                </div>\n            </div>\n          </div>\n\n        <ul class=\"pagination\">\n            <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n            <li class=\"active\"><a href=\"#\">1</a></li>\n            <li><a href=\"#\">2</a></li>\n            <li><a href=\"#\">3</a></li>\n            <li><a href=\"#\">4</a></li>\n            <li><a href=\"#\">5</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n          </ul>\n</div>");

/***/ }),

/***/ "./src/app/home/report/earning/earningdaylist/earningdaylist-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/report/earning/earningdaylist/earningdaylist-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EarningdaylistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningdaylistRoutingModule", function() { return EarningdaylistRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _earningdaylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earningdaylist.component */ "./src/app/home/report/earning/earningdaylist/earningdaylist.component.ts");




const routes = [{ path: '', component: _earningdaylist_component__WEBPACK_IMPORTED_MODULE_3__["EarningdaylistComponent"] }];
let EarningdaylistRoutingModule = class EarningdaylistRoutingModule {
};
EarningdaylistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EarningdaylistRoutingModule);



/***/ }),

/***/ "./src/app/home/report/earning/earningdaylist/earningdaylist.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/home/report/earning/earningdaylist/earningdaylist.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L2Vhcm5pbmcvZWFybmluZ2RheWxpc3QvZWFybmluZ2RheWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/report/earning/earningdaylist/earningdaylist.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/report/earning/earningdaylist/earningdaylist.component.ts ***!
  \********************************************************************************/
/*! exports provided: EarningdaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningdaylistComponent", function() { return EarningdaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EarningdaylistComponent = class EarningdaylistComponent {
    constructor() {
        this.times = [
            { value: 'all', viewValue: 'All' },
            { value: 'day', viewValue: 'Day' },
            { value: 'week', viewValue: 'Weekly' },
            { value: 'month', viewValue: 'Monthly' },
        ];
        this.displayedColumns = ['position', 'date', 'day', 'order', 'avgorder', 'amount', 'tamount'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
};
EarningdaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-earningdaylist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./earningdaylist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/earning/earningdaylist/earningdaylist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./earningdaylist.component.scss */ "./src/app/home/report/earning/earningdaylist/earningdaylist.component.scss")).default]
    })
], EarningdaylistComponent);

const ELEMENT_DATA = [
    { position: 1, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 2, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 3, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 4, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 5, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 6, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 7, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 8, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
    { position: 9, date: '22 Oct, 2019', day: 'Tuesday', order: 20, avgorder: 12, amount: '$280', tamount: '$200' },
];


/***/ }),

/***/ "./src/app/home/report/earning/earningdaylist/earningdaylist.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/report/earning/earningdaylist/earningdaylist.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EarningdaylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningdaylistModule", function() { return EarningdaylistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _earningdaylist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earningdaylist-routing.module */ "./src/app/home/report/earning/earningdaylist/earningdaylist-routing.module.ts");
/* harmony import */ var _earningdaylist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./earningdaylist.component */ "./src/app/home/report/earning/earningdaylist/earningdaylist.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let EarningdaylistModule = class EarningdaylistModule {
};
EarningdaylistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_earningdaylist_component__WEBPACK_IMPORTED_MODULE_4__["EarningdaylistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _earningdaylist_routing_module__WEBPACK_IMPORTED_MODULE_3__["EarningdaylistRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], EarningdaylistModule);



/***/ })

}]);
//# sourceMappingURL=40-es2015.js.map