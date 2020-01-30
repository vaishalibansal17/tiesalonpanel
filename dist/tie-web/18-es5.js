function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancellation-policy.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancellation-policy.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCancellationPolicyCancellationPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\n<h1>Will deliver in next milestone.</h1>\n<hr>\n<h2>Thank you</h2>";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancellation-policy-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancellation-policy-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: CancellationPolicyRoutingModule */

  /***/
  function srcAppHomeCancellationPolicyCancellationPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancellationPolicyRoutingModule", function () {
      return CancellationPolicyRoutingModule;
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


    var _cancellation_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancellation-policy.component */
    "./src/app/home/cancellation-policy/cancellation-policy.component.ts");

    var routes = [{
      path: '',
      component: _cancellation_policy_component__WEBPACK_IMPORTED_MODULE_3__["CancellationPolicyComponent"]
    }];

    var CancellationPolicyRoutingModule = function CancellationPolicyRoutingModule() {
      _classCallCheck(this, CancellationPolicyRoutingModule);
    };

    CancellationPolicyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CancellationPolicyRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancellation-policy.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancellation-policy.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCancellationPolicyCancellationPolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FuY2VsbGF0aW9uLXBvbGljeS9jYW5jZWxsYXRpb24tcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancellation-policy.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancellation-policy.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CancellationPolicyComponent */

  /***/
  function srcAppHomeCancellationPolicyCancellationPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancellationPolicyComponent", function () {
      return CancellationPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CancellationPolicyComponent =
    /*#__PURE__*/
    function () {
      function CancellationPolicyComponent() {
        _classCallCheck(this, CancellationPolicyComponent);
      }

      _createClass(CancellationPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CancellationPolicyComponent;
    }();

    CancellationPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancellation-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cancellation-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancellation-policy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cancellation-policy.component.scss */
      "./src/app/home/cancellation-policy/cancellation-policy.component.scss")).default]
    })], CancellationPolicyComponent);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancellation-policy.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancellation-policy.module.ts ***!
    \************************************************************************/

  /*! exports provided: CancellationPolicyModule */

  /***/
  function srcAppHomeCancellationPolicyCancellationPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancellationPolicyModule", function () {
      return CancellationPolicyModule;
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


    var _cancellation_policy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancellation-policy-routing.module */
    "./src/app/home/cancellation-policy/cancellation-policy-routing.module.ts");
    /* harmony import */


    var _cancellation_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cancellation-policy.component */
    "./src/app/home/cancellation-policy/cancellation-policy.component.ts");

    var CancellationPolicyModule = function CancellationPolicyModule() {
      _classCallCheck(this, CancellationPolicyModule);
    };

    CancellationPolicyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cancellation_policy_component__WEBPACK_IMPORTED_MODULE_4__["CancellationPolicyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cancellation_policy_routing_module__WEBPACK_IMPORTED_MODULE_3__["CancellationPolicyRoutingModule"]]
    })], CancellationPolicyModule);
    /***/
  }
}]);
//# sourceMappingURL=18-es5.js.map