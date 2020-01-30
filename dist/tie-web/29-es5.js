function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeWalkingUserAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\">\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img src=\"assets/images/change.png\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label\">Add Profile Picture</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Email\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Mobile Number\" class=\"form-control\">\n            </mat-form-field>\n            \n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"Description\" class=\"form-control\"></textarea>\n            </mat-form-field>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Proceed</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/walking-user/add/add-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddRoutingModule */

  /***/
  function srcAppHomeWalkingUserAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoutingModule", function () {
      return AddRoutingModule;
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


    var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add.component */
    "./src/app/home/walking-user/add/add.component.ts");

    var routes = [{
      path: '',
      component: _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }];

    var AddRoutingModule = function AddRoutingModule() {
      _classCallCheck(this, AddRoutingModule);
    };

    AddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/home/walking-user/add/add.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeWalkingUserAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/walking-user/add/add.component.ts ***!
    \********************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppHomeWalkingUserAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent() {
        _classCallCheck(this, AddComponent);
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddComponent;
    }();

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/walking-user/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/home/walking-user/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/home/walking-user/add/add.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/walking-user/add/add.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddModule */

  /***/
  function srcAppHomeWalkingUserAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddModule", function () {
      return AddModule;
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


    var _add_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-routing.module */
    "./src/app/home/walking-user/add/add-routing.module.ts");
    /* harmony import */


    var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add.component */
    "./src/app/home/walking-user/add/add.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AddModule = function AddModule() {
      _classCallCheck(this, AddModule);
    };

    AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AddModule);
    /***/
  }
}]);
//# sourceMappingURL=29-es5.js.map