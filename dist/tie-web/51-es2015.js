(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <hr>\n<h1>Under Development.</h1>\n<hr>\n<h2>Thank you</h2> -->\n\n<div class=\"main-card\">\n  <div class=\"row\">\n    <div class=\"col-md-6 add\"><a [routerLink]=\"['/walk-in-customer/add-user']\"><img src=\"assets/images/add.png\"\n          alt=\"Add\">\n        Add Customer</a></div>\n    <div class=\"col-md-6 alignright\"><a href=\"javascript:void(0)\" (click)=\"exportCSV()\"\n        class=\"btn btn-export\">Export</a>\n      <form action=\"\" class=\"search_field\">\n        <mat-form-field>\n          <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n          <input matInput placeholder=\"Search\" [(ngModel)]=\"search\" [ngModelOptions]=\"{standalone: true}\"\n            (keyup)=\"applyFilters()\" #input autocomplete=\"off\" class=\"form-control\">\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"col-md-6 add\">\n      <!-- <form action=\"\" class=\"list_booking\">\n        <mat-form-field>\n          <mat-label>All Bookings</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let walkinglist of walkinglists\" [value]=\"walkinglist.value\">\n              {{walkinglist.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </form> -->\n    </div>\n\n  </div>\n  <div class=\"table_wrap mobile_hidden\" [hidden]=\"(dataSource.loading$ | async)\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> User Name </th>\n        <td mat-cell *matCellDef=\"let element\"> <a>{{element.name | titlecase}}</a> </td>\n      </ng-container>\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Email</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"service\">\n        <th mat-header-cell *matHeaderCellDef>Service</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.service  | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"staff\">\n        <th mat-header-cell *matHeaderCellDef>Staff Name</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.staff  | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>Mobile Number</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bookingid\">\n        <th mat-header-cell *matHeaderCellDef>Booking ID</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.bookingid  | uppercase }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef>Date</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.bookDateTime | date: \"dd MMM yyy\"}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/walk-in-customer/info', element.bk_id]\"><img\n                src=\"assets/images/view.png\" alt=\"View\"></a></button>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n    </mat-paginator>\n    <!-- </div> -->\n    <div class=\"margin_center\" *ngIf=\" !(dataSource.loading$ | async) && ((dataSource.totalCount$ | async)<=0) \">\n      {{'NO_RCD' | translate}}\n    </div>\n  </div>\n\n  <div class=\"card_view mobile_visible\" *ngIf=\"loading\">\n\n    <div class=\"cards\" *ngFor=\"let element of detail; let i =index\">\n      <div class=\"top_info\">\n        <!--add class for background color confirmed, pending, rejected, completed-->\n        <div class=\"left_status confirmed\">confirmed</div>\n        <div class=\"right_status\">\n          <ul>\n            <li>{{element?.bookDateTime | date : 'dd, MMM yyyy '}}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"description\">\n        <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"User\">{{element?.name || 'NA'  | titlecase}}</p>\n        <p class=\"service\"><img src=\"assets/images/service-pink.png\"\n            alt=\"Service\">{{element?.service || 'NA' | titlecase }}</p>\n        <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"Location\">Salon</p>\n        <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"Mobile\">{{element?.phone || 'NA'}}</p>\n        <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"Id\">{{element?.booking_id || 'NA'}}</p>\n        <p class=\"id\"><img src=\"assets/images/staff.png\" alt=\"Id\">{{element?.staff || 'NA' | titlecase}}</p>\n        <div class=\"buttons\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/walk-in-customer/info', element.bk_id]\">View</a></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"paginate()\">Load More</button></div>\n  </div>\n  <!-- <ul class=\"pagination\">\n      <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul> -->\n</div>");

/***/ }),

/***/ "./src/app/home/walking-user/list/list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/walking-user/list/list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WalkinglistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinglistRoutingModule", function() { return WalkinglistRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/home/walking-user/list/list.component.ts");




const routes = [{ path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] }];
let WalkinglistRoutingModule = class WalkinglistRoutingModule {
};
WalkinglistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalkinglistRoutingModule);



/***/ }),

/***/ "./src/app/home/walking-user/list/list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/walking-user/list/list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-card ul.inline li.add {\n  margin: 0 25px 0px 10px;\n}\n\n@media (max-width: 768px) {\n  form {\n    float: left;\n  }\n}\n\n@media (max-width: 480px) {\n  form {\n    float: none;\n    text-align: center;\n  }\n}\n\nform {\n  display: initial;\n  margin-left: 15px;\n}\n\n@media (max-width: 380px) {\n  form {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsdUJBQUE7QUNFNUI7O0FERUE7RUFDSTtJQUFLLFdBQUE7RUNFUDtBQUNGOztBREFBO0VBQ0k7SUFBSyxXQUFBO0lBQVksa0JBQUE7RUNJbkI7QUFDRjs7QURGQTtFQUFLLGdCQUFBO0VBQWlCLGlCQUFBO0FDTXRCOztBREpBO0VBQ0k7SUFBSyxnQkFBQTtFQ1FQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHVsLmlubGluZSBsaS5hZGR7bWFyZ2luOiAwIDI1cHggMHB4IDEwcHg7fVxuXG4vLyBmb3Jte21hcmdpbi10b3A6IDEwcHg7fVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgICBmb3Jte2Zsb2F0OiBsZWZ0O31cbn1cblxuQG1lZGlhKG1heC13aWR0aDo0ODBweCl7XG4gICAgZm9ybXtmbG9hdDogbm9uZTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxufVxuXG5mb3Jte2Rpc3BsYXk6IGluaXRpYWw7bWFyZ2luLWxlZnQ6IDE1cHg7fVxuXG5AbWVkaWEobWF4LXdpZHRoOjM4MHB4KXtcbiAgICBmb3Jte21hcmdpbi1sZWZ0OiAwcHg7fVxufVxuIiwiLm1haW4tY2FyZCB1bC5pbmxpbmUgbGkuYWRkIHtcbiAgbWFyZ2luOiAwIDI1cHggMHB4IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb3JtIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGZvcm0ge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuZm9ybSB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/walking-user/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/walking-user/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
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











let ListComponent = class ListComponent {
    constructor(list, httpservice, trns) {
        this.list = list;
        this.httpservice = httpservice;
        this.trns = trns;
        this.displayedColumns = ['position', 'name', 'email', 'service', 'staff', 'number', 'bookingid', 'date', 'Action'];
        this.limitPage = [10, 20, 30];
        this.sortData = {};
        this.url = 'assets/images/change.png';
        this.walkinglists = [
            { value: '1', viewValue: 'All Bookings' },
            { value: '2', viewValue: 'New Bookings' },
            { value: '3', viewValue: 'Accepted Bookings' },
            { value: '4', viewValue: 'In-Process Bookings' },
            { value: '5', viewValue: 'Completed Bookings' },
        ];
        this.isApplied = false;
    }
    set matPaginator(mp) {
        this.paginator = mp;
    }
    ;
    ngOnInit() {
        this.getSalonStaff();
    }
    // ********************** Account Manager List Api Integration with search ******************
    getSalonStaff() {
        this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_2__["ListDataSource"](this.list);
        this.loadStaffList();
        // this.dataSource.usersData.subscribe((val) => this.detail = val);
        this.dataSource.loadingUsers.subscribe(e => this.loading = !e);
        this.dataSource.extra$.subscribe(e => this.imgurl = e);
        this.dataSource.totalCount$.subscribe(e => this.totalLength = e);
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.loadStaffList()))
            .subscribe();
    }
    loadStaffList() {
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
        this.dataSource.load(listObj, { api: 'WALKING' });
    }
    applyFilters() {
        this.loadStaffList();
        this.isApplied = true;
    }
    paginate() {
        this.paginator.pageSize = this.paginator.pageSize + 1;
        this.getSalonStaff();
    }
    // ********************** Account Manager List Api Integration with search End******************
    exportCSV(data) {
        var finalData = [];
        var obj;
        var i = 0;
        this.httpservice.getRequest('GET', 'WALKING', `?all=true`).subscribe(rs => {
            let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
            rs.res.wlkUsr.forEach(element => {
                obj = {
                    "Serial": ++i,
                    "Name": element.fullname ? element.fullname : 'NA',
                    "Email": element.email ? element.email : 'NA',
                    "Services": element.service ? element.service : "NA",
                    "Staff": element.staff ? element.staff : 'NA',
                    "Contact Number": element.pno ? element.pno : 'NA',
                    "Booking-Id": element.bookingid ? element.bookingid : "NA",
                    "Date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
                };
                finalData.push(obj);
            });
            var options = { noDownload: false, headers: ["Serial", "Name", "Email", 'Services', 'Staff', 'Contact Number', 'Booking-Id', 'Date'] };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_9__["Angular5Csv"](finalData, 'walkin_list', options);
            this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ListComponent.prototype, "matPaginator", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
], ListComponent.prototype, "input", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/home/walking-user/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/home/walking-user/list/list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/walking-user/list/list.module.ts ***!
  \*******************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/home/walking-user/list/list-routing.module.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.component */ "./src/app/home/walking-user/list/list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");









let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalkinglistRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]
        ], providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })
], ListModule);



/***/ })

}]);
//# sourceMappingURL=51-es2015.js.map