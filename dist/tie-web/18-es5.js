function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
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


    __webpack_exports__["default"] = "<!-- <app-breadcrumb></app-breadcrumb> -->\n<div class=\"main-card\">\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n        <div class=\"noti_right\">\n            Jane Doe wants to book you for haircut.\n            <span class=\"right_btn\">\n                <a href=\"#\" class=\"btn btn-accept\">Accept</a>\n                <a href=\"#\" class=\"btn btn-decline\">Decline</a>\n            </span>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n        <div class=\"noti_right\">\n            Jane Doe wants to book you for haircut.\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n        <div class=\"noti_right\">\n            Jane Doe wants to book you for haircut.\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n        <div class=\"noti_right\">\n            Jane Doe wants to book you for haircut.\n        </div>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
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

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      function NotificationComponent() {
        _classCallCheck(this, NotificationComponent);
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationComponent;
    }();

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
//# sourceMappingURL=18-es5.js.map