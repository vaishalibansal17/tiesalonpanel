function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/notification/notification.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/notification/notification.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-breadcrumb></app-breadcrumb> -->\n<div class=\"main-card\">\n   \n    <div [class]=\"list?.is_read==0?'notifi_list unread' : 'notifi_list'\" *ngFor=\"let list of list;\" >\n        <div class=\"noti_left\"><img [src]=\"list?.img?((imgurl)+list.img):url\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"cursor left_text\" (click)=\"slct(list)\">{{list?.msg}}</div>\n            <span class=\"right_btn\">\n                <!-- <a href=\"javascript:void(0)\" [routerLink]=\"['/booking/info', list?.bk_id]\" class=\"btn btn-accept\">View</a> -->\n                <!-- <span> -->\n                    <a href=\"javascript:void(0)\" class=\"btn btn-accept\" (click)=\"openDialog(list.bk_id, 1)\">Accept</a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-decline\" (click)=\"openDialog(list.bk_id, 2)\">Decline</a>\n                <!-- </span> -->\n            </span>\n        </div>\n    </div>\n    <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"loadMore()\">Load More</button></div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/notification/notification-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/notification/notification-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: NotificationRoutingModule */

  /***/
  function srcAppHomeNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function () {
      return NotificationRoutingModule;
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


    var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.component */
    "./src/app/home/notification/notification.component.ts");

    var routes = [{
      path: '',
      component: _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]
    }];

    var NotificationRoutingModule = function NotificationRoutingModule() {
      _classCallCheck(this, NotificationRoutingModule);
    };

    NotificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/notification/notification.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/home/notification/notification.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeNotificationNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-card {\n  padding: 30px 30px 30px 15px !important;\n}\n\n.main-card .notifi_list .noti_right {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.left_text {\n  width: calc(100% - 255px);\n  margin-right: 15px;\n}\n\n.left_text:hover {\n  color: #f96bb3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyx1Q0FBQTtBQ0VYOztBRERBO0VBQW9DLDJCQUFBO0VBQUEsb0JBQUE7QUNLcEM7O0FESkE7RUFDSSx5QkFBQTtFQUEwQixrQkFBQTtBQ1E5Qjs7QURQSTtFQUNJLGNBQUE7QUNTUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNhcmR7cGFkZGluZzogMzBweCAzMHB4IDMwcHggMTVweCAhaW1wb3J0YW50O31cbi5tYWluLWNhcmQgLm5vdGlmaV9saXN0IC5ub3RpX3JpZ2h0e2Rpc3BsYXk6IGlubGluZS1mbGV4O31cbi5sZWZ0X3RleHR7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1NXB4KTttYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNmOTZiYjM7XG4gICAgfVxufSIsIi5tYWluLWNhcmQge1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNhcmQgLm5vdGlmaV9saXN0IC5ub3RpX3JpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5sZWZ0X3RleHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjU1cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubGVmdF90ZXh0OmhvdmVyIHtcbiAgY29sb3I6ICNmOTZiYjM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/notification/notification.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/notification/notification.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppHomeNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
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


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/confim-dialog/confim-dialog.component */
    "./src/app/shared/confim-dialog/confim-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      // NOTI_LIST
      function NotificationComponent(httprequest, router, err, dialog, trns) {
        _classCallCheck(this, NotificationComponent);

        this.httprequest = httprequest;
        this.router = router;
        this.err = err;
        this.dialog = dialog;
        this.trns = trns;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_4__["IMG"].PRO;
        this.limit = 10;
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listNoti(0);
        }
      }, {
        key: "listNoti",
        value: function listNoti(limit) {
          var _this = this;

          this.limit = this.limit + limit;
          this.httprequest.getRequest('GET', 'NOTI_LIST', "".concat('limit=' + this.limit)).subscribe(function (res) {
            if (res.status) {
              _this.imgurl = res.res.uP;
              _this.list = res.res.notf;
              console.log(_this.list);
            } else {
              new Error();
            }
          }, function (error) {// this.httprequest.showError('Failed to get');
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          this.listNoti(5);
        }
      }, {
        key: "slct",
        value: function slct(val) {
          var _this2 = this;

          if (val.is_read) {
            this.router.navigateByUrl('booking/info/' + val.bk_id);
          } else {
            this.httprequest.getRequest('POST_WITHDATA', 'NOTI_READ', {
              ntf_id: val._id
            }, val._id).subscribe(function (response) {
              if (response.status === 1) {
                _this2.list.map(function (v, i) {
                  if (v._id == val._id) {
                    _this2.list[i]['is_read'] = 1;

                    _this2.router.navigateByUrl('booking/info/' + v.bk_id);
                  }
                });
              } else {
                _this2.err.handleError(response.err.errCode);
              }
            });
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog(id, type) {
          var _this3 = this;

          var dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfimDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: {
              msg: 'Are you sure you want to '.concat(type == 1 ? 'accept' : type == 2 ? 'reject' : 'decline', ' this Booking?'),
              btn: this.trns.transform('OK'),
              cncl: this.trns.transform('CANCEL')
            }
          });
          dialogRef.beforeClosed().subscribe(function (val) {
            if (val) {
              _this3.httprequest.getRequest('PUT', 'BOOKING_ACPT', {
                bk_status: type
              }, id).subscribe(function (response) {
                if (response.status === 1) {
                  _this3.httprequest.sucsTostr(_this3.trns.transform('SUCCESS'), type == 1 ? _this3.trns.transform('BK_ACPT') : _this3.trns.transform('BK_DEC'));

                  _this3.listNoti(0);
                } else {
                  if (response.err) _this3.err.handleError(response.err.errCode);
                  return false;
                }
              }, function (error) {
                _this3.err.handleError();
              });
            }
          });
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]
      }];
    };

    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/notification/notification.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.component.scss */
      "./src/app/home/notification/notification.component.scss")).default]
    })], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/home/notification/notification.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/notification/notification.module.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationModule */

  /***/
  function srcAppHomeNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
      return NotificationModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/home/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notification.component */
    "./src/app/home/notification/notification.component.ts");
    /* harmony import */


    var src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/breadcrumb/breadcrumb.module */
    "./src/app/shared/breadcrumb/breadcrumb.module.ts");

    var NotificationModule = function NotificationModule() {
      _classCallCheck(this, NotificationModule);
    };

    NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"], src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"]]
    })], NotificationModule);
    /***/
  }
}]);
//# sourceMappingURL=26-es5.js.map