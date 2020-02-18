(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n  <div class=\"row\">\n    <div class=\"col-md-6 add\"><a [routerLink]=\"['/staff/add']\"><img src=\"assets/images/add.png\" alt=\"Add\"> Add Staff</a>\n    </div>\n    <div class=\"col-md-6 alignright\"><a href=\"javascript:void(0)\" (click)=\"exportCSV(dataSource)\" class=\"btn btn-export\">Export</a></div>\n  </div>\n  <div class=\"table_wrap mobile_hidden\" [hidden]=\"(dataSource.loading$ | async)\"> \n    \n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n      <ng-container matColumnDef=\"Sno\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}}  </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.name | titlecase}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"photo\">\n        <th mat-header-cell *matHeaderCellDef> Photo </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"file_img\"> <img [src]=\"element.img? (dataSource.extra$ | async) + element.img : url\"  /> </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Email</th>\n        <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"review\">\n        <th mat-header-cell *matHeaderCellDef> Ratings </th>\n        <td mat-cell *matCellDef=\"let element\"> <div class=\"staff_star\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"element.avg_rating | round\"></ngx-stars> </div></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/staff/info', element._id]\"><img src=\"assets/images/view.png\"\n                alt=\"View\"></a></button>\n          <button class=\"action_btn black\"><a [routerLink]=\"['/staff/edit', element._id]\"><img src=\"assets/images/edit.png\"\n                alt=\"Edit\"></a></button>\n          <button class=\"action_btn red\" (click)=\"openDialog(element._id)\"><img src=\"assets/images/delete.png\"\n              alt=\"Delete\"></button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n        <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n        </mat-paginator>\n        <div class=\"margin_center\"\n            *ngIf=\" !(dataSource.loading$ | async) && ((dataSource.totalCount$ | async)<=0) \">\n             {{'NO_RCD' | translate}}\n          </div>\n  </div>\n\n\n  <div class=\"card_view mobile_visible\" *ngIf=\"loading\">\n    <div class=\"cards\" *ngFor=\"let element of detail; let i =index\" >\n      <div class=\"description\">\n        <p class=\"user\"><span class=\"author-img\"><img [src]=\"element.img? imgurl + element.img : url\" alt=\"\"></span><img src=\"assets/images/user-pink.png\" alt=\"\">{{element?.name | titlecase}} </p>\n        <p class=\"service\"><img src=\"assets/images/envelope-pink.png\" alt=\"\">{{element?.email}} </p>\n        <p class=\"number\"><img src=\"assets/images/mobile-pink.png\" alt=\"\">+{{element?.phone}}</p>\n        <p class=\"review\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"element.avg_rating | round\"></ngx-stars></p>\n        <div class=\"buttons\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/staff/info', element._id]\">View</a></button>  \n          <button class=\"action_btn black\"><a [routerLink]=\"['/staff/edit', element._id]\">Edit</a></button>  \n          <button class=\"action_btn red\" (click)=\"openDialog(element._id)\">Delete</button> \n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"paginate()\">Load More</button></div>\n  </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".file_img img {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  border: 2px solid #d6d6d6;\n}\n\n.mobile_visible .cards .description {\n  padding-top: 0px;\n}\n\nform {\n  display: initial;\n  margin-left: 15px;\n}\n\n@media (max-width: 380px) {\n  form {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvc3RhZmYvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FER0E7RUFBb0MsZ0JBQUE7QUNDcEM7O0FEQUE7RUFBSyxnQkFBQTtFQUFpQixpQkFBQTtBQ0t0Qjs7QURIQTtFQUNJO0lBQUssZ0JBQUE7RUNPUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdGFmZi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV9pbWcgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q2ZDZkNjtcbn1cblxuLy8gLnN0YXJzLWxpbmV7dG9wOiA3cHggIWltcG9ydGFudDt9XG4ubW9iaWxlX3Zpc2libGUgLmNhcmRzIC5kZXNjcmlwdGlvbntwYWRkaW5nLXRvcDogMHB4O31cbmZvcm17ZGlzcGxheTogaW5pdGlhbDttYXJnaW4tbGVmdDogMTVweDt9XG5cbkBtZWRpYShtYXgtd2lkdGg6MzgwcHgpe1xuICAgIGZvcm17bWFyZ2luLWxlZnQ6IDBweDt9XG59XG4iLCIuZmlsZV9pbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDZkNmQ2O1xufVxuXG4ubW9iaWxlX3Zpc2libGUgLmNhcmRzIC5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIGZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn0iXX0= */");

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
        this.limitPage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_12__["LIMIT"];
        this.sortData = {};
        this.displayedColumns = ['Sno', 'name', 'photo', 'email', 'phone', 'review', 'Action'];
        this.url = 'assets/images/user-add.png';
        this.detail = [];
        this.isApplied = false;
    }
    set matPaginator(mp) {
        this.paginator = mp;
    }
    ;
    openDialog(id) {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want to delete this Staff?", btn: this.trns.transform('DELETE'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (val) {
                this.httpservice.getRequest('DELETE', 'STAFF', id)
                    .subscribe((response) => {
                    if (response.status === 1) {
                        this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('DELETE_STAFF'));
                        this.getSalonStaff();
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
        this.getSalonStaff();
    }
    // ********************** Account Manager List Api Integration with search ******************
    getSalonStaff() {
        this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_3__["ListDataSource"](this.list);
        this.loadStaffList();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.loadStaffList()))
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
        this.dataSource.load(listObj, { api: 'STAFF' });
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
        this.httpservice.getRequest('GET', 'STAFF', `?all=true`).subscribe(rs => {
            let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]('en-US');
            rs.res.staffs.forEach(element => {
                obj = {
                    "Serial": ++i,
                    "Name": element.name,
                    "Email": element.email,
                    "Phone": element.phone,
                    "Description": element.desc ? element.desc : "NA",
                    "Rating": element.avg_rating ? Math.round(element.avg_rating) : 'NA',
                    "Day off": this.chckDay(element.day_off)
                };
                finalData.push(obj);
            });
            var options = { noDownload: false, headers: ["Serial", "Name", "Email", "Phone", "Description", "Rating", "Day off"] };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__["Angular5Csv"](finalData, 'staff_list', options);
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
        selector: 'app-staff',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/home/staff/list/list.component.scss")).default]
    })
], ListComponent);



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
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm2015/ngx-stars.js");









let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"],
            ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        entryComponents: []
    })
], ListModule);



/***/ })

}]);
//# sourceMappingURL=45-es2015.js.map