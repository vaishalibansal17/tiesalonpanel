function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeWalkingUserListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\n<h1>Under Development.</h1>\n<hr>\n<h2>Thank you</h2>\n\n<!-- <div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6 add\">\n            <form action=\"\" class=\"list_booking\">\n                <mat-form-field>\n                    <mat-label>All Bookings</mat-label>\n                    <mat-select formControlName='walkinglist'>\n                        <mat-option *ngFor=\"let walkinglist of walkinglists\" [value]=\"walkinglist.value\">\n                            {{walkinglist.viewValue}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </form>\n\n        </div>\n        <div class=\"col-md-6 alignright\">\n            <ul class=\"inline\">\n                <li class=\"add\"><a [routerLink]=\"['/walking-user/add-user']\"><img src=\"assets/images/add.png\" alt=\"Add\"> Add Users</a></li>\n                <li><a href=\"#\" class=\"btn btn-export\">Export</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"table_wrap\"  [hidden]=\"(dataSource.loading$ | async)\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table_scroll\" matSort>\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let post; let i =index;\"> {{(paginator.pageIndex * paginator.pageSize)+i + 1}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> User Name </th>\n          <td mat-cell *matCellDef=\"let element\"> <a>{{element.fullname}}</a> </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"service\">\n          <th mat-header-cell *matHeaderCellDef>Service</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.service}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"staff\">\n          <th mat-header-cell *matHeaderCellDef>Staff Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.staff}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef>Mobile Number</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.pno}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th> -->\n          <!--Please add class for status for diefferent colors ->  confirmed, pending, completed, rejected-->\n          <!-- <td mat-cell *matCellDef=\"let element\"> {{element.status}}  -->\n            <!-- <span class=\"confirmed\">Confirmed</span> \n            <span class=\"completed\">completed</span> \n            <span class=\"pending\">pending</span> \n            <span class=\"rejected\">rejected</span> -->\n          <!-- </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"time\">\n          <th mat-header-cell *matHeaderCellDef>Time</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"bookingid\">\n          <th mat-header-cell *matHeaderCellDef>Booking ID</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.bookingid}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef> Date </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [length]=\"dataSource.totalCount$ | async\" [pageSize]=\"limitPage[0]\" [pageSizeOptions]=\"limitPage\">\n      </mat-paginator> -->\n    <!-- </div> -->\n      <!-- <ul class=\"pagination\">\n        <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n        <li class=\"active\"><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n      </ul> -->\n  <!-- </div> -->";
    /***/
  },

  /***/
  "./src/app/home/walking-user/list/list-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/home/walking-user/list/list-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: WalkinglistRoutingModule */

  /***/
  function srcAppHomeWalkingUserListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkinglistRoutingModule", function () {
      return WalkinglistRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list.component */
    "./src/app/home/walking-user/list/list.component.ts");

    var routes = [{
      path: '',
      component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }];

    var WalkinglistRoutingModule = function WalkinglistRoutingModule() {
      _classCallCheck(this, WalkinglistRoutingModule);
    };

    WalkinglistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WalkinglistRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/walking-user/list/list.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/home/walking-user/list/list.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeWalkingUserListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-card ul.inline li.add {\n  margin: 0 25px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsdUJBQUE7QUNFNUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dhbGtpbmctdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHVsLmlubGluZSBsaS5hZGR7bWFyZ2luOiAwIDI1cHggMHB4IDEwcHg7fSIsIi5tYWluLWNhcmQgdWwuaW5saW5lIGxpLmFkZCB7XG4gIG1hcmdpbjogMCAyNXB4IDBweCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/walking-user/list/list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/walking-user/list/list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppHomeWalkingUserListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/list/list.dataSource */
    "./src/app/shared/service/list/list.dataSource.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/list/list.service */
    "./src/app/shared/service/list/list.service.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _staff_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../staff/list/list.component */
    "./src/app/home/staff/list/list.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular5-csv/dist/Angular5-csv */
    "./node_modules/angular5-csv/dist/Angular5-csv.js");
    /* harmony import */


    var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__);

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(dialog, list, httpservice, trns) {
        _classCallCheck(this, ListComponent);

        this.dialog = dialog;
        this.list = list;
        this.httpservice = httpservice;
        this.trns = trns;
        this.displayedColumns = ['position', 'name', 'service', 'staff', 'number', 'status', 'time', 'bookingid', 'date'];
        this.limitPage = [10, 20, 30];
        this.sortData = {};
        this.url = 'assets/images/change.png';
        this.walkinglists = [{
          value: '1',
          viewValue: 'All Bookings'
        }, {
          value: '2',
          viewValue: 'New Bookings'
        }, {
          value: '3',
          viewValue: 'Accepted Bookings'
        }, {
          value: '4',
          viewValue: 'In-Process Bookings'
        }, {
          value: '5',
          viewValue: 'Completed Bookings'
        }];
        this.isApplied = false;
      }

      _createClass(ListComponent, [{
        key: "openDialog",
        value: function openDialog(id) {
          var _this = this;

          var dialogRef = this.dialog.open(_staff_list_list_component__WEBPACK_IMPORTED_MODULE_7__["StaffDeleteDialogBox"], {
            width: '500px',
            disableClose: true,
            data: {
              id: id
            }
          });
          dialogRef.afterClosed().subscribe(function () {
            return _this.getSalonStaff();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // this.getSalonStaff();
        // ********************** Account Manager List Api Integration with search ******************

      }, {
        key: "getSalonStaff",
        value: function getSalonStaff() {
          this.dataSource = new src_app_shared_service_list_list_dataSource__WEBPACK_IMPORTED_MODULE_2__["ListDataSource"](this.list);
          this.loadStaffList();
          console.log(this.dataSource);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.sort.sortChange.subscribe(function () {
            return _this2.paginator.pageIndex = 0;
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.sort.sortChange, this.paginator.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
            return _this2.loadStaffList();
          })).subscribe();
        }
      }, {
        key: "loadStaffList",
        value: function loadStaffList() {
          if (this.sort.active == 'name') {
            this.sortData.sortValue = '1';
          } else if (this.sort.active == 'email') {
            this.sortData.sortValue = '2';
          } else {
            this.sortData.sortValue = '3';
          }

          this.sortData.direction = this.sort.direction || null;
          var listObj = {
            page: this.paginator.pageIndex - 1 + 1,
            limit: this.paginator.pageSize || this.limitPage[0],
            sort_val: this.sortData.sortValue,
            dir: this.sortData.direction == 'asc' ? '1' : '-1'
          };
          if (this.search) listObj['srch'] = this.search;
          this.dataSource.load(listObj, {
            api: 'WALKING'
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          this.loadStaffList();
          this.isApplied = true;
        } // ********************** Account Manager List Api Integration with search End******************

      }, {
        key: "exportCSV",
        value: function exportCSV(data) {
          var _this3 = this;

          var finalData = [];
          var obj;
          var i = 0;
          data.usersData.subscribe(function (rs) {
            rs.forEach(function (element) {
              obj = {
                "Serial": ++i,
                "Name": element.name,
                "Email": element.email
              };
              finalData.push(obj);
            });
            var options = {
              noDownload: false,
              headers: ["Serial", "Name", "Email"]
            };
            new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_10__["Angular5Csv"](finalData, 'staff_list', options);

            _this3.httpservice.sucsTostr(_this3.trns.transform('SUCCESS'), _this3.trns.transform('EXPORTD'));
          });
        }
      }, {
        key: "matPaginator",
        set: function set(mp) {
          this.paginator = mp;
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_shared_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]
      }, {
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    })], ListComponent.prototype, "matPaginator", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], ListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      static: true
    })], ListComponent.prototype, "input", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/home/walking-user/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/home/walking-user/list/list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/walking-user/list/list.module.ts ***!
    \*******************************************************/

  /*! exports provided: ListModule */

  /***/
  function srcAppHomeWalkingUserListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListModule", function () {
      return ListModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-routing.module */
    "./src/app/home/walking-user/list/list-routing.module.ts");
    /* harmony import */


    var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list.component */
    "./src/app/home/walking-user/list/list.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ListModule = function ListModule() {
      _classCallCheck(this, ListModule);
    };

    ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalkinglistRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ListModule);
    /***/
  },

  /***/
  "./src/app/shared/service/error.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/service/error.service.ts ***!
    \*************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppSharedServiceErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/shared/service/translate.service.ts");
    /* harmony import */


    var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-request.service */
    "./src/app/shared/service/http-request.service.ts"); // import { TranslatePipe } from '../_pipes/translate.pipe';


    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService(helper, trns) {
        _classCallCheck(this, ErrorService);

        this.helper = helper;
        this.trns = trns;
      }

      _createClass(ErrorService, [{
        key: "handleError",
        value: function handleError() {
          var errCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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

            case 39:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
              break;

            default:
              break;
          }
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ctorParameters = function () {
      return [{
        type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  }
}]);
//# sourceMappingURL=22-es5.js.map