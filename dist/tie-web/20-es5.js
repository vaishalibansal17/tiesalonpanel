function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\n<h1>Will deliver in next milestone.</h1>\n<hr>\n<h2>Thank you</h2>";
    /***/
  },

  /***/
  "./src/app/home/report/report-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/home/report/report-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: ReportRoutingModule */

  /***/
  function srcAppHomeReportReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () {
      return ReportRoutingModule;
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


    var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./report.component */
    "./src/app/home/report/report.component.ts");

    var routes = [{
      path: '',
      component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"]
    }];

    var ReportRoutingModule = function ReportRoutingModule() {
      _classCallCheck(this, ReportRoutingModule);
    };

    ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/report/report.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/home/report/report.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeReportReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/report/report.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/report/report.component.ts ***!
    \*************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppHomeReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReportComponent =
    /*#__PURE__*/
    function () {
      function ReportComponent() {
        _classCallCheck(this, ReportComponent);
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportComponent;
    }();

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/report/report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.scss */
      "./src/app/home/report/report.component.scss")).default]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/home/report/report.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/report/report.module.ts ***!
    \**********************************************/

  /*! exports provided: ReportModule */

  /***/
  function srcAppHomeReportReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
      return ReportModule;
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


    var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./report-routing.module */
    "./src/app/home/report/report-routing.module.ts");
    /* harmony import */


    var _report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./report.component */
    "./src/app/home/report/report.component.ts");

    var ReportModule = function ReportModule() {
      _classCallCheck(this, ReportModule);
    };

    ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"]]
    })], ReportModule);
    /***/
  }
}]);
//# sourceMappingURL=20-es5.js.map