(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/sales/sales.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/sales/sales.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <div class=\"col-md-3 label\">Total Sales(YTD):</div>\n        <div class=\"col-md-9 description\">$1,061</div>\n        <div class=\"col-md-3 label\">Month of January:</div>\n        <div class=\"col-md-9 description\">$290</div>\n        <div class=\"col-md-3 label\">Current Week:</div>\n        <div class=\"col-md-9 description\">$100</div>\n      </div>\n    </div>\n    <div class=\"col-md-4 alignright\"><a href=\"javascript:void(0)\" (click)=\"exportCSV()\"\n      class=\"btn btn-export\">Export</a></div>\n  </div>\n  <div class=\"sales_description\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">06 January, 2020</div>\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-6 label\">Projected Sales:</div>\n          <div class=\"col-md-6 description\">$1,061</div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-6 label\">Appts Booked:</div>\n          <div class=\"col-md-6 description\">08</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"table_wrap mobile_hidden\" [hidden]=\"(dataSource.loading$ | async)\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Customer Name</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.name|| 'NA'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"invoice\">\n        <th mat-header-cell *matHeaderCellDef>Invoice Number</th>\n        <td mat-cell *matCellDef=\"let element\">{{element?.invoice || 'NA'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"service\">\n        <th mat-header-cell *matHeaderCellDef>Service</th>\n        <td mat-cell *matCellDef=\"let element\">{{(element.service | service) | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"serviceat\">\n        <th mat-header-cell *matHeaderCellDef>Service At</th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{element.service_at == 1?'Home':element?.service_at==2? 'Salon':'Clinic'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef>Date</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.bookDateTime | date : 'dd MMM yyyy h:mm a'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"amount\">\n        <th mat-header-cell *matHeaderCellDef>Total Amount</th>\n        <td mat-cell *matCellDef=\"let element\">{{element?.totalAmount || 'NA'}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n    </mat-paginator>\n    <!-- </div> -->\n    <div class=\"margin_center\" *ngIf=\" !(dataSource.loading$ | async) && ((dataSource.totalCount$ | async)<=0) \">\n      {{'NO_RCD' | translate}}\n    </div>\n  </div>\n\n  <div class=\"card_view mobile_visible\">\n    <div class=\"cards\">\n      <div class=\"top_info\">\n        <div class=\"right_status\">\n          <ul>\n            <li>22 Oct, 2019</li>\n            <!--<li>10:00AM</li>-->\n          </ul>\n        </div>\n      </div>\n      <div class=\"description\">\n        <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"User\">Jane Doe</p>\n        <p class=\"service\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\">#TIE1234</p>\n        <p class=\"service\"><img src=\"assets/images/service-pink.png\" alt=\"Service\">Haircut, Hair Spa</p>\n        <p class=\"service\"><img src=\"assets/images/location-pink.png\" alt=\"Location\">Home</p>\n        <p class=\"service\"><img src=\"assets/images/discount-pink.png\" alt=\"Discount\">$100</p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/home/report/sales/sales-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/report/sales/sales-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function() { return SalesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales.component */ "./src/app/home/report/sales/sales.component.ts");




const routes = [{
        path: '', component: _sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"],
        children: [
            { path: 'sales', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./sales.module */ "./src/app/home/report/sales/sales.module.ts")).then(mod => mod.SalesModule), data: { title: "Gross Sales", status: false } },
        ]
    },
];
let SalesRoutingModule = class SalesRoutingModule {
};
SalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SalesRoutingModule);



/***/ }),

/***/ "./src/app/home/report/sales/sales.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home/report/sales/sales.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9yZXBvcnQvc2FsZXMvc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvcmVwb3J0L3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXBvcnQvc2FsZXMvc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWx7Y29sb3I6ICM5OTk7fSIsIi5sYWJlbCB7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/report/sales/sales.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/report/sales/sales.component.ts ***!
  \******************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/list/list.dataSource */ "./src/app/shared/service/list/list.dataSource.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/list/list.service */ "./src/app/shared/service/list/list.service.ts");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");












let SalesComponent = class SalesComponent {
    constructor(list, httpservice, trns) {
        this.list = list;
        this.httpservice = httpservice;
        this.trns = trns;
        this.displayedColumns = ['position', 'name', 'invoice', 'service', 'serviceat', 'date', 'amount'];
        this.limitPage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_11__["LIMIT"];
        this.sortData = {};
        this.url = 'assets/images/change.png';
        this.isApplied = false;
    }
    set matPaginator(mp) {
        this.paginator = mp;
    }
    ;
    ngOnInit() {
        this.getReport();
    }
    // ********************** Account Manager List Api Integration with search ******************
    getReport() {
        this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_2__["ListDataSource"](this.list);
        this.loadlist();
        // this.dataSource.usersData.subscribe((val) => this.detail = val);
        this.dataSource.loadingUsers.subscribe(e => this.loading = !e);
        this.dataSource.extra$.subscribe(e => this.imgurl = e);
        this.dataSource.totalCount$.subscribe(e => this.totalLength = e);
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.loadlist()))
            .subscribe();
    }
    loadlist() {
        if (this.sort.active == 'name') {
            this.sortData.sortValue = '1';
        }
        else if (this.sort.active == 'email') {
            this.sortData.sortValue = '2';
        }
        else {
            this.sortData.sortValue = '3';
        }
        this.sortData.direction = this.sort.direction || null;
        let listObj = {
            page: ((this.paginator.pageIndex - 1) + 1),
            limit: this.paginator.pageSize || this.limitPage[0],
            sort_val: this.sortData.sortValue,
            dir: this.sortData.direction == 'asc' ? '1' : '-1'
        };
        if (this.search)
            listObj['srch'] = this.search;
        this.dataSource.load(listObj, { api: 'REPORT' });
    }
    applyFilters() {
        this.loadlist();
        this.isApplied = true;
    }
    paginate() {
        this.paginator.pageSize = this.paginator.pageSize + 1;
        this.getReport();
    }
    // ********************** Account Manager List Api Integration with search End******************
    exportCSV(data) {
        var finalData = [];
        var obj;
        var i = 0;
        this.httpservice.getRequest('GET', 'REPORT', `all=true`).subscribe(rs => {
            let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
            rs.res.wlkUsr.forEach(element => {
                obj = {
                    "Serial": ++i,
                    "Name": element.name ? element.name : 'NA',
                    "Services": element.service ? (element.service.map(y => y.title).join(', ')) : "NA",
                    "Service at": element.service_at == 1 ? 'Home' : (element.service_at == 2 ? 'Salon' : 'Clinic'),
                    "Booking-Id": element.bookingid ? element.bookingid : "NA",
                    "Date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
                    "Total Amount": element.totalAmount ? element.totalAmount : 'NA',
                };
                finalData.push(obj);
            });
            var options = { noDownload: false, headers: ["Serial", "Name", 'Services', 'Service at', 'Booking-Id', 'Date'] };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_9__["Angular5Csv"](finalData, 'gross_sales_report', options);
            this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
        });
    }
};
SalesComponent.ctorParameters = () => [
    { type: src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], SalesComponent.prototype, "matPaginator", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], SalesComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
], SalesComponent.prototype, "input", void 0);
SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/sales/sales.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales.component.scss */ "./src/app/home/report/sales/sales.component.scss")).default]
    })
], SalesComponent);



/***/ }),

/***/ "./src/app/home/report/sales/sales.module.ts":
/*!***************************************************!*\
  !*** ./src/app/home/report/sales/sales.module.ts ***!
  \***************************************************/
/*! exports provided: SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-routing.module */ "./src/app/home/report/sales/sales-routing.module.ts");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales.component */ "./src/app/home/report/sales/sales.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");









let SalesModule = class SalesModule {
};
SalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_4__["SalesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]
        ], providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })
], SalesModule);



/***/ })

}]);
//# sourceMappingURL=39-es2015.js.map