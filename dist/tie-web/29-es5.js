function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeWalkingUserAddbookingsAddbookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\">\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img src=\"assets/images/change.png\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label\">Add Profile Picture</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Email\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Mobile Number\" class=\"form-control\">\n            </mat-form-field>\n            \n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"Description\" class=\"form-control\"></textarea>\n            </mat-form-field>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Proceed</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddbookingsRoutingModule */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsRoutingModule", function () {
      return AddbookingsRoutingModule;
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


    var _addbookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addbookings.component */
    "./src/app/home/walking-user/addbookings/addbookings.component.ts");

    var routes = [{
      path: '',
      component: _addbookings_component__WEBPACK_IMPORTED_MODULE_3__["AddbookingsComponent"]
    }];

    var AddbookingsRoutingModule = function AddbookingsRoutingModule() {
      _classCallCheck(this, AddbookingsRoutingModule);
    };

    AddbookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddbookingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2FkZGJvb2tpbmdzL2FkZGJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.component.ts ***!
    \************************************************************************/

  /*! exports provided: AddbookingsComponent */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsComponent", function () {
      return AddbookingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddbookingsComponent =
    /*#__PURE__*/
    function () {
      function AddbookingsComponent() {
        _classCallCheck(this, AddbookingsComponent);
      }

      _createClass(AddbookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddbookingsComponent;
    }();

    AddbookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addbookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addbookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/addbookings/addbookings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addbookings.component.scss */
      "./src/app/home/walking-user/addbookings/addbookings.component.scss")).default]
    })], AddbookingsComponent);
    /***/
  },

  /***/
  "./src/app/home/walking-user/addbookings/addbookings.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/walking-user/addbookings/addbookings.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AddbookingsModule */

  /***/
  function srcAppHomeWalkingUserAddbookingsAddbookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookingsModule", function () {
      return AddbookingsModule;
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


    var _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addbookings-routing.module */
    "./src/app/home/walking-user/addbookings/addbookings-routing.module.ts");
    /* harmony import */


    var _addbookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./addbookings.component */
    "./src/app/home/walking-user/addbookings/addbookings.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AddbookingsModule = function AddbookingsModule() {
      _classCallCheck(this, AddbookingsModule);
    };

    AddbookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_addbookings_component__WEBPACK_IMPORTED_MODULE_4__["AddbookingsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddbookingsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AddbookingsModule);
    /***/
  }
}]);
//# sourceMappingURL=29-es5.js.map