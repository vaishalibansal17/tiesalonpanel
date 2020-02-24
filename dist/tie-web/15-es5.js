function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/aboutus/aboutus.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/aboutus/aboutus.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAboutusAboutusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <!-- <div class=\"custom_form\"> -->\n        <!-- <form action=\"\">\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description_pink.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"Description\" class=\"form-control\" value=\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit.\"></textarea>\n            </mat-form-field>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Update</button>\n            </div>\n        </form> -->\n        <p [innerHTML]=\"aboutus\">\n        </p>\n    <!-- </div> -->\n</div> ";
    /***/
  },

  /***/
  "./src/app/home/aboutus/aboutus-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/aboutus/aboutus-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: AboutusRoutingModule */

  /***/
  function srcAppHomeAboutusAboutusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusRoutingModule", function () {
      return AboutusRoutingModule;
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


    var _aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aboutus.component */
    "./src/app/home/aboutus/aboutus.component.ts");

    var routes = [{
      path: '',
      component: _aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"]
    }];

    var AboutusRoutingModule = function AboutusRoutingModule() {
      _classCallCheck(this, AboutusRoutingModule);
    };

    AboutusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutusRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/aboutus/aboutus.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/home/aboutus/aboutus.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAboutusAboutusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom_form textarea.form-control {\n  padding-top: 15px;\n  line-height: 21px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW1DLGlCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLGVBQUE7QUNJdkUiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21fZm9ybSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7cGFkZGluZy10b3A6IDE1cHg7bGluZS1oZWlnaHQ6IDIxcHg7Zm9udC1zaXplOiAxM3B4O30iLCIuY3VzdG9tX2Zvcm0gdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/aboutus/aboutus.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/aboutus/aboutus.component.ts ***!
    \***************************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppHomeAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
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

    var AboutusComponent =
    /*#__PURE__*/
    function () {
      function AboutusComponent(httprequest) {
        _classCallCheck(this, AboutusComponent);

        this.httprequest = httprequest;
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.httprequest.getRequest('GET', 'HELP_CENTER', 'type=sln_about').subscribe(function (res) {
            _this.aboutus = res.res.webpage.content;
          }, function (error) {// this.httprequest.showError('Failed to get');
          });
        }
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }];
    };

    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/aboutus/aboutus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aboutus.component.scss */
      "./src/app/home/aboutus/aboutus.component.scss")).default]
    })], AboutusComponent);
    /***/
  },

  /***/
  "./src/app/home/aboutus/aboutus.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home/aboutus/aboutus.module.ts ***!
    \************************************************/

  /*! exports provided: AboutusModule */

  /***/
  function srcAppHomeAboutusAboutusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusModule", function () {
      return AboutusModule;
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


    var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aboutus-routing.module */
    "./src/app/home/aboutus/aboutus-routing.module.ts");
    /* harmony import */


    var _aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./aboutus.component */
    "./src/app/home/aboutus/aboutus.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AboutusModule = function AboutusModule() {
      _classCallCheck(this, AboutusModule);
    };

    AboutusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutusRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AboutusModule);
    /***/
  }
}]);
//# sourceMappingURL=15-es5.js.map