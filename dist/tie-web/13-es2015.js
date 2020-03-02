(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"main-card\">\n  <h1>Booking</h1>\n  <p>It will set up in further milestone.</p>\n</div> -->\n<div class=\"main-card\">\n  <div class=\"row\">\n    <div class=\"col-md-6 add\">\n      <form action=\"\" class=\"list_booking\">\n        <mat-form-field>\n          <mat-label>{{'ALLBOOKING' | translate}}</mat-label>\n          <mat-select (selectionChange)=\"slctype($event)\">\n            <mat-option *ngFor=\"let booking of bookings\" [value]=\"booking.value\">\n              {{booking.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"col-md-6 alignright\">\n      <a href=\"javascript:void(0)\" (click)=\"exportCSV()\" class=\"btn btn-export\">{{'EXPORT_EXL' | translate}}</a>\n      <form action=\"\" class=\"search_field\">\n        <mat-form-field>\n          <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n          <input matInput placeholder=\"Search\" [(ngModel)]=\"search\" [ngModelOptions]=\"{standalone: true}\"\n            (keyup)=\"applyFilters()\" #input autocomplete=\"off\" class=\"form-control\">\n        </mat-form-field>\n      </form>\n    </div>\n  </div>\n  <div class=\"table_wrap mobile_hidden\" [hidden]=\"(dataSource.loading$ | async)\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef>No.</th>\n        <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'USRNAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\"><a\n            [routerLink]=\"['/booking/info', element._id]\">{{element.user_name | titlecase}}</a></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"service\">\n        <th mat-header-cell *matHeaderCellDef>{{'SERVICE' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.service | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"serviceat\">\n        <th mat-header-cell *matHeaderCellDef>{{'SERVICEAT' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.service_at==1?'Home':(element.service_at==2?'Salon':'NA')}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"staff\">\n        <th mat-header-cell *matHeaderCellDef>{{'STAFFNAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.staf_name | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>{{'CONTCT' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.user_contact}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef>{{'STATUS' | translate}}</th>\n        <!--Please add class for status for diefferent colors ->  confirmed, pending, completed, rejected PENDING: 0, CONFIRMED: 1, CANCELLED: 2,SERVERD: 3, RESCHEDULED: 4, UNSERVED: 5-->\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"confirmed\" *ngIf=\"element.bookingStatus==1\">{{'CONFIRMD' | translate}}</span>\n          <span class=\"completed\" *ngIf=\"element.bookingStatus==3\">{{'COMPELETED' | translate}}</span>\n          <span class=\"pending\" *ngIf=\"element.bookingStatus==0\">{{'PENDING' | translate}}</span>\n          <span class=\"rejected\" *ngIf=\"element.bookingStatus==2\">{{'REJECT' | translate}}</span>\n          <span class=\"pending\" *ngIf=\"element.bookingStatus==4\">{{'RESCHEDULED' | translate}}</span>\n          <span class=\"pending\" *ngIf=\"element.bookingStatus==5\">{{'STATUS' | translate}}</span>\n        </td>\n      </ng-container>\n\n      <!-- <ng-container matColumnDef=\"time\">\n          <th mat-header-cell *matHeaderCellDef>Time</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.bookDateTime | date : 'h:mm a'}}</td>\n        </ng-container> -->\n\n      <ng-container matColumnDef=\"bookingid\">\n        <th mat-header-cell *matHeaderCellDef>{{'BOOKINGID' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.booking_id | uppercase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\" >\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'DATE&TIME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.bookDateTime | date : 'dd, MMM yyyy, h:mm a'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef>{{'ACTION' | translate}}</th>\n        <!--use same class for accepted as accept and decline for declined-->\n        <td mat-cell *matCellDef=\"let user\">\n          <button class=\"booking_btn accept\"  *ngIf=\"user.bookingStatus==0\"(click)=\"openDialog(user._id, 1)\">{{'ACCEPT' | translate}}</button>\n          <button class=\"booking_btn decline\" *ngIf=\"user.bookingStatus==0\" (click)=\"openDialog(user._id,2)\">{{'REJECT' | translate}}</button>\n          <button class=\"booking_btn decline\" *ngIf=\"user.bookingStatus==1\" (click)=\"openDialog(user._id, 2)\">{{'DECLINE' | translate}}</button>\n          <button class=\"booking_btn completed\" *ngIf=\"user.bookingStatus==3\" readonly>{{'COMPELETED' | translate}}</button>\n          <button class=\"booking_btn rejected\" *ngIf=\"user.bookingStatus==2\" readonly>{{'REJECT' | translate}}</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n    </mat-paginator>\n    <div class=\"margin_center\" *ngIf=\" !(dataSource.loading$ | async) && ((dataSource.totalCount$ | async)<=0) \">\n      {{'NO_RCD' | translate}}\n    </div>\n  </div>\n  <div class=\"card_view mobile_visible\" *ngIf=\"loading\">\n\n    <div class=\"cards\" *ngFor=\"let element of detail; let i =index\">\n      <div class=\"top_info\">\n        <!--add class for background color confirmed, pending, rejected, completed-->\n        <div class=\"left_status confirmed\">confirmed</div>\n        <div class=\"left_status completed\" *ngIf=\"element.bookingStatus==3\">{{'COMPELETED' | translate}}</div>\n        <div class=\"left_status pending\" *ngIf=\"element.bookingStatus==0\">{{'PENDING' | translate}}</div>\n        <div class=\"left_status rejected\" *ngIf=\"element.bookingStatus==2\">{{'REJECT' | translate}}</div>\n        <div class=\"left_status pending\" *ngIf=\"element.bookingStatus==4\">{{'RESCHEDULED' | translate}}</div>\n\n        <div class=\"right_status\">\n          <ul>\n            <li>{{element?.bookDateTime | date : 'dd, MMM yyyy '}}</li>\n            <li>{{element?.bookDateTime | date : 'h:mm a'}}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"description\">\n        <p class=\"user\"><img src=\"assets/images/user-pink.png\" alt=\"User\">{{element?.user_name || 'NA'  | titlecase}}</p>\n        <p class=\"service\"><img src=\"assets/images/service-pink.png\"\n            alt=\"Service\">{{element?.service || 'NA' | titlecase }}</p>\n        <p class=\"location\"><img src=\"assets/images/location-pink.png\" alt=\"Location\">Salon</p>\n        <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"Mobile\">{{element?.user_contact || 'NA'}}</p>\n        <p class=\"id\"><img src=\"assets/images/id.png\" alt=\"Id\">{{element?.booking_id || 'NA'}}</p>\n        <p class=\"user\"><img src=\"assets/images/staff.png\" alt=\"Id\">{{element?.staff || 'NA' | titlecase}}</p>\n        <div class=\"buttons\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/booking/info', element._id]\">View</a></button>\n          <button class=\"booking_btn decline\" (click)=\"openDialog(element._id, 'decline')\">Decline</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"paginate()\">Load More</button></div>\n  </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-card form.list_booking mat-form-field.mat-form-field-type-mat-select.mat-form-field-can-float.mat-form-field-has-label {\n  height: 40px;\n}\n\nform.search_field {\n  display: initial;\n  margin-left: 15px;\n}\n\n.mat-column-staff, .mat-column-serviceat, .mat-column-bookingid, .mat-column-date {\n  min-width: 100px;\n}\n\n@media (max-width: 380px) {\n  form.search_field {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9ib29raW5ncy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYm9va2luZ3MvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTZILFlBQUE7QUNFN0g7O0FEREE7RUFBa0IsZ0JBQUE7RUFBaUIsaUJBQUE7QUNNbkM7O0FESkE7RUFBK0UsZ0JBQUE7QUNRL0U7O0FETkE7RUFDSTtJQUFrQixnQkFBQTtFQ1VwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ib29raW5ncy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIGZvcm0ubGlzdF9ib29raW5nIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtaGFzLWxhYmVse2hlaWdodDogNDBweDt9XG5mb3JtLnNlYXJjaF9maWVsZHtkaXNwbGF5OiBpbml0aWFsO21hcmdpbi1sZWZ0OiAxNXB4O31cblxuLm1hdC1jb2x1bW4tc3RhZmYsLm1hdC1jb2x1bW4tc2VydmljZWF0LC5tYXQtY29sdW1uLWJvb2tpbmdpZCwubWF0LWNvbHVtbi1kYXRle21pbi13aWR0aDogMTAwcHg7fVxuXG5AbWVkaWEobWF4LXdpZHRoOjM4MHB4KXtcbiAgICBmb3JtLnNlYXJjaF9maWVsZHttYXJnaW4tbGVmdDogMHB4O31cbn0iLCIubWFpbi1jYXJkIGZvcm0ubGlzdF9ib29raW5nIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtaGFzLWxhYmVsIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5mb3JtLnNlYXJjaF9maWVsZCB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWF0LWNvbHVtbi1zdGFmZiwgLm1hdC1jb2x1bW4tc2VydmljZWF0LCAubWF0LWNvbHVtbi1ib29raW5naWQsIC5tYXQtY29sdW1uLWRhdGUge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgZm9ybS5zZWFyY2hfZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/bookings/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/bookings/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/list/list.dataSource */ "./src/app/shared/service/list/list.dataSource.ts");
/* harmony import */ var src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/list/list.service */ "./src/app/shared/service/list/list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/confim-dialog/confim-dialog.component */ "./src/app/shared/confim-dialog/confim-dialog.component.ts");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let ListComponent = class ListComponent {
    constructor(dialog, list, errsrv, httpservice, trns) {
        this.dialog = dialog;
        this.list = list;
        this.errsrv = errsrv;
        this.httpservice = httpservice;
        this.trns = trns;
        this.displayedColumns = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'bookingid', 'date', 'action'];
        this.bookings = [
            { value: '6', viewValue: 'All Bookings' },
            { value: '2', viewValue: 'New Bookings' },
            { value: '1', viewValue: 'Accepted Bookings' },
            // { value: '4', viewValue: 'In-Process Bookings' },
            { value: '0', viewValue: 'Pending Bookings' },
            { value: '2', viewValue: 'Cancelled Bookings' },
            { value: '3', viewValue: 'Completed Bookings' },
        ];
        this.limitPage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_12__["LIMIT"];
        this.sortData = {};
        this.url = 'assets/images/change.png';
        this.detail = [];
        this.isApplied = false;
    }
    set matPaginator(mp) {
        this.paginator = mp;
    }
    ;
    openDialog(id, type) {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: `${'Are you sure you want to '}${type == 1 ? 'accept' : 'decline' + ' the Booking?'}`, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (val) {
                console.log(id);
                this.httpservice.getRequest('PUT', 'BOOKING_ACPT', { bk_status: type }, id)
                    .subscribe((response) => {
                    if (response.status === 1) {
                        this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), type == 1 ? this.trns.transform('BK_ACPT') : this.trns.transform('BK_DEC'));
                        this.getBookings();
                    }
                    else {
                        if (response.err)
                            this.errsrv.handleError(response.err.errCode);
                        return false;
                    }
                }, error => {
                    this.errsrv.handleError();
                });
            }
        });
    }
    ngOnInit() {
        this.getBookings();
    }
    // ********************** Account Manager List Api Integration with search ******************
    getBookings() {
        this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_3__["ListDataSource"](this.list);
        this.loadBookingList();
        this.dataSource.usersData.subscribe((val) => {
            this.detail = val;
        });
        this.dataSource.loadingUsers.subscribe(e => this.loading = !e);
        this.dataSource.extra$.subscribe(e => this.imgurl = e);
        this.dataSource.totalCount$.subscribe(e => this.totalLength = e);
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.loadBookingList()))
            .subscribe();
    }
    loadBookingList() {
        if (this.sort.active == 'name') {
            this.sortData.sortValue = 'user_name';
        }
        else if (this.sort.active == 'date') {
            this.sortData.sortValue = 'bookDateTime';
        }
        else {
            this.sortData.sortValue = '3';
        }
        this.sortData.direction = this.sort.direction || null;
        let listObj = {
            page: ((this.paginator.pageIndex - 1) + 2),
            limit: this.paginator.pageSize || this.limitPage[0],
            sort_val: this.sortData.sortValue,
            dir: this.sortData.direction == 'asc' ? '1' : '-1'
        };
        if (this.search)
            listObj['srch'] = this.search;
        if (this.type)
            listObj['type'] = this.type;
        this.dataSource.load(listObj, { api: 'BOOKING' });
    }
    applyFilters() {
        // if (this.search.length > 3)
        this.loadBookingList();
        this.isApplied = true;
    }
    slctype(event) {
        if (event.value < 6) {
            this.type = event.value;
            this.loadBookingList();
        }
        else {
            this.type = null;
            this.loadBookingList();
        }
    }
    paginate() {
        this.paginator.pageSize = this.paginator.pageSize + 1;
        this.getBookings();
    }
    bookingaction(action) {
        this.httpservice.getRequest('PUT', 'BOOKING_ACPT', action._id).subscribe(rs => {
            if (rs.status) {
            }
            else {
            }
        }, (error) => {
            // this.httprequest.showError('Failed to get');
        });
    }
    // ********************** Account Manager List Api Integration with search End******************
    exportCSV(data) {
        var finalData = [];
        var obj;
        var i = 0;
        this.httpservice.getRequest('GET', 'BOOKING', `?all=true`).subscribe(rs => {
            let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]('en-US');
            rs.res.bkngs.forEach(element => {
                obj = {
                    "Serial": ++i,
                    "Name": element.user_name,
                    "Service": element.user_email,
                    "Contact Number": element.user_contact,
                    "Staff": element.staf_name ? element.staf_name : "NA",
                    "Booking id": element.booking_id,
                    "Status": element.status == 0 ? 'Pending' : (element.status == 1 ? 'Confirmed' : (element.status == 2 ? 'Rejected' : element.status == 3 ? 'Completed' : (element.status == 4 ? 'Rescheduled' : 'Unserved'))),
                    "date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
                    "time": datePipe.transform(element.bookDateTime, "h:mm a"),
                };
                finalData.push(obj);
            });
            var options = { noDownload: false, headers: ["Serial", "Name", 'Service', 'serviceat', 'Staff', 'Contact Number', 'Status', 'time', 'Booking id', 'Date',] };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__["Angular5Csv"](finalData, 'Booking list', options);
            this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
        });
    }
    chckDay(day) {
        switch (day) {
            case 0:
                return 'Sunday';
                break;
            case 1:
                return 'Monday';
                break;
            case 2:
                return 'Tuesday';
                break;
            case 3:
                return 'Wednesday';
                break;
            case 4:
                return 'Thursday';
                break;
            case 5:
                return 'Friday';
                break;
            case 6:
                return 'Saturday';
                break;
            default:
                break;
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_7__["HttpRequestService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ListComponent.prototype, "matPaginator", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], ListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
], ListComponent.prototype, "input", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/bookings/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/home/bookings/list/list.component.scss")).default]
    })
], ListComponent);



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
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"],
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        entryComponents: []
    })
], ListModule);



/***/ }),

/***/ "./src/app/shared/constants/constant.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/constants/constant.ts ***!
  \**********************************************/
/*! exports provided: ERROR_MSG, LIMIT, IMG, MESSAGE, DELETE, MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function() { return ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG", function() { return IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP", function() { return MAP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ERROR_MSG = {
    HTTP_SUBSCRIBER_ERROR: 'Network Error.',
    UNAUTHURIZED_ERROR: 'You are not an authorized user.',
};
const LIMIT = [10, 20, 30];
const IMG = {
    PRO: 'assets/images/user-add.png',
    USR: 'assets/images/noti-pro.png'
};
const MESSAGE = {
    SUCCESS: 'SUCCESS',
    FORGOT_SUC: 'Forgot Password Link has been sent successfully.',
    FORGOT_FAIL: 'Admin not found'
};
const DELETE = {
    DELETE_TITLE: '',
    DELETE_MSG: 'You wont be able to revert this!',
    DELETE_CONFIRM_TEXT: 'Yes, delete it!'
};
const MAP = {
    KEY: "AIzaSyDiESz5lmd8ZNxAGBg3ILiQ8w9SFuYwAB8",
    type: "places"
};


/***/ }),

/***/ "./src/app/shared/service/error.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/service/error.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.service */ "./src/app/shared/service/translate.service.ts");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-request.service */ "./src/app/shared/service/http-request.service.ts");




// import { TranslatePipe } from '../_pipes/translate.pipe';
let ErrorService = class ErrorService {
    constructor(helper, trns) {
        this.helper = helper;
        this.trns = trns;
    }
    handleError(errCode = 0) {
        switch (errCode) {
            case 0:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 1:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 4:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
                break;
            case 5:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['TKNREQ']);
                break;
            case 6:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDPASS']);
                break;
            case 7:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDOLDPASS']);
                break;
            case 8:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['LINKEXP']);
                break;
            case 9:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDLINK']);
                break;
            case 31:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
                break;
            case 34:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['PROMOALRDYEXIST']);
                break;
            case 32:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['STAFFALRDYEXIST']);
                break;
            case 15:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONALRDYEXIST']);
                break;
            case 39:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
                break;
            case 41:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DEACTIVE']);
                break;
            case 42:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DELSALONACC']);
                break;
            case 51:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['NOBOOK']);
                break;
            case 56:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SLNEXIST']);
                break;
            default:
                break;
        }
    }
};
ErrorService.ctorParameters = () => [
    { type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorService);



/***/ })

}]);
//# sourceMappingURL=13-es2015.js.map