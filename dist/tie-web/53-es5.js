function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53], {
  /***/
  "./src/app/home/bookings/bookings-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/bookings/bookings-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: BookingsRoutingModule */

  /***/
  function srcAppHomeBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function () {
      return BookingsRoutingModule;
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
        [__webpack_require__.e("common"), __webpack_require__.e(17)]).then(__webpack_require__.bind(null,
        /*! ./list/list.module */
        "./src/app/home/bookings/list/list.module.ts")).then(function (mod) {
          return mod.ListModule;
        });
      },
      data: {
        title: "List",
        status: false
      }
    }, // { path: 'add', loadChildren: () => import('./addstaff/addstaff.module').then(mod => mod.AddstaffModule), data: { title: "Add", status: false } },
    // { path: 'edit', loadChildren: () => import('./editstaff/editstaff.module').then(mod => mod.EditstaffModule), data: { title: "Edit", status: false } },
    {
      path: 'info/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
        /*! ./bookingdetail/bookingdetail.module */
        "./src/app/home/bookings/bookingdetail/bookingdetail.module.ts")).then(function (mod) {
          return mod.BookingdetailModule;
        });
      },
      data: {
        title: "Info",
        status: false
      }
    }];

    var BookingsRoutingModule = function BookingsRoutingModule() {
      _classCallCheck(this, BookingsRoutingModule);
    };

    BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/bookings/bookings.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/bookings/bookings.module.ts ***!
    \**************************************************/

  /*! exports provided: BookingsModule */

  /***/
  function srcAppHomeBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsModule", function () {
      return BookingsModule;
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


    var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings-routing.module */
    "./src/app/home/bookings/bookings-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var BookingsModule = function BookingsModule() {
      _classCallCheck(this, BookingsModule);
    };

    BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]]
    })], BookingsModule);
    /***/
  }
}]);
//# sourceMappingURL=53-es5.js.map