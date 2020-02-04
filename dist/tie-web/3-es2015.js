(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/angular5-csv/dist/Angular5-csv.js":
/*!********************************************************!*\
  !*** ./node_modules/angular5-csv/dist/Angular5-csv.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CsvConfigConsts = (function () {
    function CsvConfigConsts() {
    }
    CsvConfigConsts.EOL = "\r\n";
    CsvConfigConsts.BOM = "\ufeff";
    CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
    CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
    CsvConfigConsts.DEFAULT_QUOTE = '"';
    CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
    CsvConfigConsts.DEFAULT_TITLE = 'My Report';
    CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
    CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
    CsvConfigConsts.DEFAULT_USE_BOM = true;
    CsvConfigConsts.DEFAULT_HEADER = [];
    CsvConfigConsts.DEFAULT_NO_DOWNLOAD = false;
    CsvConfigConsts.DEFAULT_NULL_TO_EMPTY_STRING = false;
    return CsvConfigConsts;
}());
exports.CsvConfigConsts = CsvConfigConsts;
exports.ConfigDefaults = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER,
    noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD,
    nullToEmptyString: CsvConfigConsts.DEFAULT_NULL_TO_EMPTY_STRING
};
var Angular5Csv = (function () {
    function Angular5Csv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);
        if (this._options.filename) {
            this._options.filename = filename;
        }
        this.generateCsv();
    }
    /**
     * Generate and Download Csv
     */
    Angular5Csv.prototype.generateCsv = function () {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }
        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }
        this.getHeaders();
        this.getBody();
        if (this.csv == '') {
            console.log("Invalid data");
            return;
        }
        if (this._options.noDownload) {
            return this.csv;
        }
        var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
        if (navigator.msSaveBlob) {
            var filename = this._options.filename.replace(/ /g, "_") + ".csv";
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = this._options.filename.replace(/ /g, "_") + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    /**
     * Create Headers
     */
    Angular5Csv.prototype.getHeaders = function () {
        var _this = this;
        if (this._options.headers.length > 0) {
            var headers = this._options.headers;
            var row = headers.reduce(function (headerRow, header) {
                return headerRow + header + _this._options.fieldSeparator;
            }, '');
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Create Body
     */
    Angular5Csv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
            var row = "";
            for (var index in this.data[i]) {
                row += this.formatData(this.data[i][index]) + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Format Data
     * @param {any} data
     */
    Angular5Csv.prototype.formatData = function (data) {
        if (this._options.decimalseparator === 'locale' && Angular5Csv.isFloat(data)) {
            return data.toLocaleString();
        }
        if (this._options.decimalseparator !== '.' && Angular5Csv.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }
        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }
        if (this._options.nullToEmptyString) {
            if (data === null) {
                return data = '';
            }
            return data;
        }
        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    };
    /**
     * Check if is Float
     * @param {any} input
     */
    Angular5Csv.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    };
    return Angular5Csv;
}());
exports.Angular5Csv = Angular5Csv;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * Convet to Object
 * @param {any} val
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * Assign data  to new Object
 * @param {any}   target
 * @param {any[]} ...source
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=Angular5-csv.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<h1>Under Development.</h1>\n<hr>\n<h2>Thank you</h2>\n<!-- <div class=\"main-card\">\n  <div class=\"row\">\n    <div class=\"col-md-6 add\"><a [routerLink]=\"['/staff/add']\"><img src=\"assets/images/add.png\" alt=\"Add\"> Add Staff</a>\n    </div>\n    <div class=\"col-md-6 alignright\"><a href=\"javascript:void(0)\" (click)=\"exportCSV(dataSource)\" class=\"btn btn-export\">Export</a></div>\n  </div>\n  <div class=\"table_wrap\" [hidden]=\"(dataSource.loading$ | async)\"> \n    \n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n      <ng-container matColumnDef=\"Sno\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}}  </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"photo\">\n        <th mat-header-cell *matHeaderCellDef> Photo </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"file_img\"> <img [src]=\"element.img? (dataSource.extra$ | async) + element.img : url\"  /> </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"review\">\n        <th mat-header-cell *matHeaderCellDef> Ratings </th>\n        <td mat-cell *matCellDef=\"let element\"> <div class=\"staff_star\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"element.avg_rating | round\"></ngx-stars> </div></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button class=\"action_btn pink\"><a [routerLink]=\"['/staff/info', element._id]\"><img src=\"assets/images/view.png\"\n                alt=\"View\"></a></button>\n          <button class=\"action_btn black\"><a [routerLink]=\"['/staff/edit', element._id]\"><img src=\"assets/images/edit.png\"\n                alt=\"Edit\"></a></button>\n          <button class=\"action_btn red\" (click)=\"openDialog(element._id)\"><img src=\"assets/images/delete.png\"\n              alt=\"Delete\"></button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n        <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n        </mat-paginator>\n  </div> -->\n  <!-- <ul class=\"pagination\">\n      <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n      <li class=\"active\"><a href=\"#\">1</a></li>\n      <li><a href=\"#\">2</a></li>\n      <li><a href=\"#\">3</a></li>\n      <li><a href=\"#\">4</a></li>\n      <li><a href=\"#\">5</a></li>\n      <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n    </ul>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/staff-delete.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/staff-delete.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content class=\"text-center\">\n  <h3>Are you sure you want to delete this Staff?</h3>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-submit\" (click) = \"delete()\">Delete</button></div>\n  <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-cancel\" (click)=\"close()\">Cancel</button></div>\n</mat-dialog-content>\n  <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n");

/***/ }),

/***/ "./src/app/home/staff/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/staff/list/list.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file_img img {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  border: 2px solid #d6d6d6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvc3RhZmYvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3N0YWZmL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX2ltZyBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDZkNmQ2O1xufVxuXG4vLyAuc3RhcnMtbGluZXt0b3A6IDdweCAhaW1wb3J0YW50O30iLCIuZmlsZV9pbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDZkNmQ2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/staff/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/staff/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent, StaffDeleteDialogBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDeleteDialogBox", function() { return StaffDeleteDialogBox; });
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











let ListComponent = class ListComponent {
    constructor(dialog, list, httpservice, trns) {
        this.dialog = dialog;
        this.list = list;
        this.httpservice = httpservice;
        this.trns = trns;
        this.limitPage = [10, 20, 30];
        this.sortData = {};
        this.displayedColumns = ['Sno', 'name', 'photo', 'email', 'phone', 'review', 'Action'];
        this.url = 'assets/images/change.png';
        this.isApplied = false;
    }
    set matPaginator(mp) {
        this.paginator = mp;
    }
    ;
    openDialog(id) {
        const dialogRef = this.dialog.open(StaffDeleteDialogBox, { width: '500px', disableClose: true, data: { id: id } });
        dialogRef.afterClosed().subscribe(() => this.getSalonStaff());
    }
    ngOnInit() {
        // this.getSalonStaff();
    }
    // ********************** Account Manager List Api Integration with search ******************
    getSalonStaff() {
        this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_3__["ListDataSource"](this.list);
        this.loadStaffList();
        console.log(this.dataSource);
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
    // ********************** Account Manager List Api Integration with search End******************
    exportCSV(data) {
        var finalData = [];
        var obj;
        var i = 0;
        data.usersData.subscribe(rs => {
            rs.forEach(element => {
                obj = {
                    "Serial": ++i,
                    "Name": element.name,
                    "Email": element.email
                };
                finalData.push(obj);
            });
            var options = { noDownload: false, headers: ["Serial", "Name", "Email"] };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__["Angular5Csv"](finalData, 'staff_list', options);
            this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
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

let StaffDeleteDialogBox = class StaffDeleteDialogBox {
    constructor(httpservice, errsrv, trns, dialogRef, data) {
        this.httpservice = httpservice;
        this.errsrv = errsrv;
        this.trns = trns;
        this.dialogRef = dialogRef;
        this.id = data.id;
    }
    delete() {
        this.httpservice.getRequest('DELETE', 'STAFF', `${this.id}`)
            .subscribe((response) => {
            if (response.status === 1) {
                this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('DELETE_STAFF'));
                this.dialogRef.close();
            }
            else {
                if (response.err)
                    this.errsrv.handleError(response.err.errCode);
                return false;
            }
        }, error => {
            this.errsrv.handleError(0);
        });
    }
    close() {
        this.dialogRef.close();
    }
};
StaffDeleteDialogBox.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_7__["HttpRequestService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
StaffDeleteDialogBox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'staff-delete.component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staff-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/list/staff-delete.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], StaffDeleteDialogBox);



/***/ }),

/***/ "./src/app/shared/service/list/list.dataSource.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/service/list/list.dataSource.ts ***!
  \********************************************************/
/*! exports provided: ListDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataSource", function() { return ListDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class ListDataSource {
    constructor(listService) {
        this.listService = listService;
        this.usersData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.loadingUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.countInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.extra = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.loading$ = this.loadingUsers.asObservable();
        this.totalCount$ = this.countInfo.asObservable();
        this.extra$ = this.extra.asObservable();
    }
    load(listObj, dataObj) {
        this.loadingUsers.next(true);
        this.listService.staffListing(listObj, dataObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([err])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loadingUsers.next(false))).subscribe((data) => {
            if (data['res'] && data['res']['list']) {
                this.usersData.next(data['res']['list']);
                if (!listObj.search) {
                    this.countInfo.next(data['res']['total']);
                }
                else {
                    if (data['res']['total'] === 0) {
                        this.countInfo.next(1);
                    }
                    else {
                        this.countInfo.next(data['res']['total']);
                    }
                }
                this.extra.next(data['res']['bp']);
            }
        });
    }
    connect(collectionViewer) {
        return this.usersData.asObservable();
    }
    disconnect(collectionViewer) {
        this.usersData.complete();
        this.loadingUsers.complete();
        this.countInfo.complete();
        this.extra.complete();
    }
}


/***/ }),

/***/ "./src/app/shared/service/list/list.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/list/list.service.ts ***!
  \*****************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ListService = class ListService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    staffListing(listObj, dataObj) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        for (let key in listObj) {
            // if (key != ('api' || 'id')) {
            // queryParams = (listObj[key] === 'asc') ? queryParams.set(key, '1') : queryParams.set(key, '-1');
            queryParams = queryParams.set(key, listObj[key]);
            // }
        }
        return this.httpService.getRequest('GET', dataObj.api, queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            res.res.list = res.res['staffs'] || res.res['wlkUsr'];
            delete res.res['staffs'];
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, caught) => {
            if (err.status === 401) {
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.statusText);
        }));
    }
};
ListService.ctorParameters = () => [
    { type: _http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"] }
];
ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListService);



/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map