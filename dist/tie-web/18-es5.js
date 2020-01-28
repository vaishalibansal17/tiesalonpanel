function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staff.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staff.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeStaffStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/home/staff/staff-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/home/staff/staff-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: StaffRoutingModule */

  /***/
  function srcAppHomeStaffStaffRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function () {
      return StaffRoutingModule;
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


    var _staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staff.component */
    "./src/app/home/staff/staff.component.ts");

    var routes = [{
      path: '',
      component: _staff_component__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"],
      data: {
        title: "Staff"
      },
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          17).then(__webpack_require__.bind(null,
          /*! ./list/list.module */
          "./src/app/home/staff/list/list.module.ts")).then(function (mod) {
            return mod.ListModule;
          });
        },
        data: {
          title: "List",
          status: false
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          15).then(__webpack_require__.bind(null,
          /*! ./addstaff/addstaff.module */
          "./src/app/home/staff/addstaff/addstaff.module.ts")).then(function (mod) {
            return mod.AddstaffModule;
          });
        },
        data: {
          title: "Add",
          status: false
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          16).then(__webpack_require__.bind(null,
          /*! ./editstaff/editstaff.module */
          "./src/app/home/staff/editstaff/editstaff.module.ts")).then(function (mod) {
            return mod.EditstaffModule;
          });
        },
        data: {
          title: "Edit",
          status: false
        }
      }]
    }];

    var StaffRoutingModule = function StaffRoutingModule() {
      _classCallCheck(this, StaffRoutingModule);
    };

    StaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StaffRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/staff/staff.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/home/staff/staff.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeStaffStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/staff/staff.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/staff/staff.component.ts ***!
    \***********************************************/

  /*! exports provided: StaffComponent */

  /***/
  function srcAppHomeStaffStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return StaffComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StaffComponent =
    /*#__PURE__*/
    function () {
      function StaffComponent() {
        _classCallCheck(this, StaffComponent);

        this.displayedColumns = ['position', 'name', 'photo', 'email', 'number', 'rating', 'action'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(StaffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffComponent;
    }();

    StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staff.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./staff.component.scss */
      "./src/app/home/staff/staff.component.scss")).default]
    })], StaffComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Jane Doe',
      photo: 'assets/images/noti-pro.png',
      email: 'jane@gmail.com',
      number: +919999999999,
      rating: 'assets/images/reviews-star.png',
      action: 'Action Button'
    }, {
      position: 2,
      name: 'Jane Doe',
      photo: 'assets/images/noti-pro.png',
      email: 'jane@gmail.com',
      number: +919999999999,
      rating: 'assets/images/reviews-star.png',
      action: 'Action Button'
    }, {
      position: 3,
      name: 'Jane Doe',
      photo: 'assets/images/noti-pro.png',
      email: 'jane@gmail.com',
      number: +919999999999,
      rating: 'assets/images/reviews-star.png',
      action: 'Action Button'
    }, {
      position: 4,
      name: 'Jane Doe',
      photo: 'assets/images/noti-pro.png',
      email: 'jane@gmail.com',
      number: +919999999999,
      rating: 'assets/images/reviews-star.png',
      action: 'Action Button'
    }, {
      position: 5,
      name: 'Jane Doe',
      photo: 'assets/images/noti-pro.png',
      email: 'jane@gmail.com',
      number: +919999999999,
      rating: 'assets/images/reviews-star.png',
      action: 'Action Button'
    }];
    /***/
  },

  /***/
  "./src/app/home/staff/staff.module.ts":
  /*!********************************************!*\
    !*** ./src/app/home/staff/staff.module.ts ***!
    \********************************************/

  /*! exports provided: StaffModule */

  /***/
  function srcAppHomeStaffStaffModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffModule", function () {
      return StaffModule;
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


    var _staff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staff-routing.module */
    "./src/app/home/staff/staff-routing.module.ts");
    /* harmony import */


    var _staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./staff.component */
    "./src/app/home/staff/staff.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var StaffModule = function StaffModule() {
      _classCallCheck(this, StaffModule);
    };

    StaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _staff_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], StaffModule);
    /***/
  }
}]);
//# sourceMappingURL=18-es5.js.map