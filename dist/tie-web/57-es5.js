function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57], {
  /***/
  "./src/app/home/manage-calender/manage-calender-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/manage-calender/manage-calender-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ManageCalenderRoutingModule */

  /***/
  function srcAppHomeManageCalenderManageCalenderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCalenderRoutingModule", function () {
      return ManageCalenderRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
        /*! ./managecalender/managecalender.module */
        "./src/app/home/manage-calender/managecalender/managecalender.module.ts")).then(function (mod) {
          return mod.ManagecalenderModule;
        });
      },
      data: {
        title: "Manage Calender",
        status: false
      }
    }, {
      path: 'list/:time',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(12)]).then(__webpack_require__.bind(null,
        /*! ./managecalender-list/managecalender-list.module */
        "./src/app/home/manage-calender/managecalender-list/managecalender-list.module.ts")).then(function (mod) {
          return mod.ManagecalenderListModule;
        });
      },
      data: {
        title: "List",
        status: false
      }
    }, {
      path: 'info/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null,
        /*! ./managecalender-info/managecalender-info.module */
        "./src/app/home/manage-calender/managecalender-info/managecalender-info.module.ts")).then(function (mod) {
          return mod.ManagecalenderInfoModule;
        });
      },
      data: {
        title: "Info",
        status: false
      }
    }];

    var ManageCalenderRoutingModule = function ManageCalenderRoutingModule() {
      _classCallCheck(this, ManageCalenderRoutingModule);
    };

    ManageCalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManageCalenderRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/manage-calender/manage-calender.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/manage-calender/manage-calender.module.ts ***!
    \****************************************************************/

  /*! exports provided: ManageCalenderModule */

  /***/
  function srcAppHomeManageCalenderManageCalenderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCalenderModule", function () {
      return ManageCalenderModule;
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


    var _manage_calender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-calender-routing.module */
    "./src/app/home/manage-calender/manage-calender-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ManageCalenderModule = function ManageCalenderModule() {
      _classCallCheck(this, ManageCalenderModule);
    };

    ManageCalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_calender_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageCalenderRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], ManageCalenderModule);
    /***/
  }
}]);
//# sourceMappingURL=57-es5.js.map