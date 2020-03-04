function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56], {
  /***/
  "./src/app/home/profile/profile-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/profile/profile-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppHomeProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
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
    "./node_modules/@angular/router/fesm2015/router.js"); // import { ProfileComponent } from './profile.component';


    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(33)]).then(__webpack_require__.bind(null,
        /*! ./viewprofile/viewprofile.module */
        "./src/app/home/profile/viewprofile/viewprofile.module.ts")).then(function (mod) {
          return mod.ViewprofileModule;
        });
      }
    }, {
      path: 'edit',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null,
        /*! ./editprofile/editprofile.module */
        "./src/app/home/profile/editprofile/editprofile.module.ts")).then(function (mod) {
          return mod.EditprofileModule;
        });
      },
      data: {
        title: "Edit",
        status: false
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(32)]).then(__webpack_require__.bind(null,
        /*! ./changepassword/changepassword.module */
        "./src/app/home/profile/changepassword/changepassword.module.ts")).then(function (mod) {
          return mod.ChangepasswordModule;
        });
      },
      data: {
        title: "Change Password",
        status: false
      }
    }, {
      path: 'business-hours',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(6), __webpack_require__.e(31)]).then(__webpack_require__.bind(null,
        /*! ./businesshours/businesshours.module */
        "./src/app/home/profile/businesshours/businesshours.module.ts")).then(function (mod) {
          return mod.BusinesshoursModule;
        });
      },
      data: {
        title: "Business Hours",
        status: false
      }
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/profile/profile.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home/profile/profile.module.ts ***!
    \************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppHomeProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/home/profile/profile-routing.module.ts"); // import { ProfileComponent } from './profile.component';


    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"]]
    })], ProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=56-es5.js.map