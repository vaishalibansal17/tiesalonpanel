function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCancellationPolicyCancelupdateCancelupdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"policy_list\">\n        <div class=\"left\">\n            <p>Set your No-Show/Late-Cancellation Policy for Clients.</p>\n            <p>Clients will be required to enter a credit card when they book with you in order to enforce your policy.</p>\n        </div>\n    </div>\n    <div class=\"policy_list\">\n        <div class=\"left\">\n            <p>How strict would you like your policy to be?</p>\n\n            <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"c_policy\">\n                <mat-radio-button value=\"1\" [disableRipple]=\"true\">Flexible <span>0% Late Cancellation Fee<br>50% No-Show Fee</span></mat-radio-button>\n                <mat-radio-button value=\"2\" [disableRipple]=\"true\">Moderate <span>25% Late Cancellation Fee<br>50% No-Show Fee</span></mat-radio-button>\n                <mat-radio-button value=\"3\" [disableRipple]=\"true\">Strict <span>50% Late Cancellation Fee<br>100% No-Show Fee</span></mat-radio-button>\n              </mat-radio-group>\n        </div>\n    </div>\n    <div class=\"warning_link\">\n        <a href=\"#\" class=\"warning\">How does it work?</a>\n    </div>\n    <div class=\"text-center\">\n        <button type=\"button\" (click)=\"feedbackSubmit()\" class=\"btn btn-submit\">Save</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelupdate/cancelupdate-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelupdate/cancelupdate-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: CancelupdateRoutingModule */

  /***/
  function srcAppHomeCancellationPolicyCancelupdateCancelupdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelupdateRoutingModule", function () {
      return CancelupdateRoutingModule;
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


    var _cancelupdate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancelupdate.component */
    "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.ts");

    var routes = [{
      path: '',
      component: _cancelupdate_component__WEBPACK_IMPORTED_MODULE_3__["CancelupdateComponent"]
    }];

    var CancelupdateRoutingModule = function CancelupdateRoutingModule() {
      _classCallCheck(this, CancelupdateRoutingModule);
    };

    CancelupdateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CancelupdateRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCancellationPolicyCancelupdateCancelupdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".policy_list {\n  padding-bottom: 10px;\n}\n\n@media (min-width: 767px) {\n  .btn.btn-submit {\n    width: 32%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9jYW5jZWxsYXRpb24tcG9saWN5L2NhbmNlbHVwZGF0ZS9jYW5jZWx1cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY2FuY2VsbGF0aW9uLXBvbGljeS9jYW5jZWx1cGRhdGUvY2FuY2VsdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsb0JBQUE7QUNFYjs7QUREQTtFQUNBO0lBQWdCLFVBQUE7RUNLZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYW5jZWxsYXRpb24tcG9saWN5L2NhbmNlbHVwZGF0ZS9jYW5jZWx1cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9saWN5X2xpc3R7cGFkZGluZy1ib3R0b206IDEwcHg7fVxuQG1lZGlhKG1pbi13aWR0aDo3NjdweCl7XG4uYnRuLmJ0bi1zdWJtaXR7d2lkdGg6IDMyJTt9XG59IiwiLnBvbGljeV9saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAuYnRuLmJ0bi1zdWJtaXQge1xuICAgIHdpZHRoOiAzMiU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CancelupdateComponent */

  /***/
  function srcAppHomeCancellationPolicyCancelupdateCancelupdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelupdateComponent", function () {
      return CancelupdateComponent;
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
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CancelupdateComponent =
    /*#__PURE__*/
    function () {
      function CancelupdateComponent(httpService, errService, trns, router) {
        _classCallCheck(this, CancelupdateComponent);

        this.httpService = httpService;
        this.errService = errService;
        this.trns = trns;
        this.router = router;
        this.submitted = false;
        this.c_policy = '1';
      }

      _createClass(CancelupdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.c_policy = JSON.parse(localStorage.getItem('salon')).c_policy.toString();
          console.log(this.c_policy);
        }
      }, {
        key: "feedbackSubmit",
        value: function feedbackSubmit() {
          var _this = this;

          console.log(this.c_policy); // return

          this.submitted = true;

          if (this.c_policy) {
            this.httpService.getRequest('PUT', 'CANCELPOLICY', {
              c_policy: this.c_policy
            }, '').subscribe(function (response) {
              if (response.status === 1) {
                var salon = JSON.parse(localStorage.getItem('salon'));
                salon.c_policy = _this.c_policy;
                localStorage.setItem('salon', JSON.stringify(salon));

                _this.router.navigateByUrl('cancellation-policy').then(function () {
                  _this.httpService.sucsTostr(_this.trns.transform('SUCCESS'), _this.trns.transform('FEEDSUCCESS'));
                });
              } else {
                console.log(response);

                _this.errService.handleError(response.err.errCode);
              }
            });
          }
        }
      }]);

      return CancelupdateComponent;
    }();

    CancelupdateComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CancelupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancelupdate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cancelupdate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cancelupdate.component.scss */
      "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.scss")).default]
    })], CancelupdateComponent);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelupdate/cancelupdate.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CancelupdateModule */

  /***/
  function srcAppHomeCancellationPolicyCancelupdateCancelupdateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelupdateModule", function () {
      return CancelupdateModule;
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


    var _cancelupdate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancelupdate-routing.module */
    "./src/app/home/cancellation-policy/cancelupdate/cancelupdate-routing.module.ts");
    /* harmony import */


    var _cancelupdate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cancelupdate.component */
    "./src/app/home/cancellation-policy/cancelupdate/cancelupdate.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CancelupdateModule = function CancelupdateModule() {
      _classCallCheck(this, CancelupdateModule);
    };

    CancelupdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cancelupdate_component__WEBPACK_IMPORTED_MODULE_4__["CancelupdateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cancelupdate_routing_module__WEBPACK_IMPORTED_MODULE_3__["CancelupdateRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], CancelupdateModule);
    /***/
  }
}]);
//# sourceMappingURL=19-es5.js.map