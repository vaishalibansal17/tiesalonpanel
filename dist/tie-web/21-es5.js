function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCancellationPolicyCancelpolicyCancelpolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"policy_list\">\n        <div class=\"left\">You have the option of charging a No-Show/Late-Cancellation fee.</div>\n        <div class=\"right\">\n            <a href=\"javascript:void(0)\" (click)=\"openDialog(true)\"\n                [class]=\"charge=='true'?'btn btn-charge':'btn btn-notcharge'\">Charge</a>\n            <a href=\"javascript:void(0)\" (click)=\"openDialog(false)\"\n                [class]=\"charge=='false'?'btn btn-charge':'btn btn-notcharge'\">Don't Charge</a>\n        </div>\n    </div>\n    <div class=\"policy_list\">\n        <div class=\"left\">Your selected cancellation policy</div>\n        <div class=\"right\">\n            <p class=\"pink\">{{policy==1?'Flexible':(policy==2?'Moderate':'Strict')}}</p>\n            <p>{{policy==1?'0%':(policy==2?'25%':'50%')}} Late cancellation\n                fee<br>{{policy==1?'50%':(policy==2?'50%':'100%')}} No-show fee</p>\n        </div>\n    </div>\n    <div class=\"update_btn\">\n        <a [routerLink]=\"['/cancellation-policy/update-policy']\" class=\"btn-link\">Update Policy</a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: CancelpolicyRoutingModule */

  /***/
  function srcAppHomeCancellationPolicyCancelpolicyCancelpolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelpolicyRoutingModule", function () {
      return CancelpolicyRoutingModule;
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


    var _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancelpolicy.component */
    "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts");

    var routes = [{
      path: '',
      component: _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_3__["CancelpolicyComponent"]
    }];

    var CancelpolicyRoutingModule = function CancelpolicyRoutingModule() {
      _classCallCheck(this, CancelpolicyRoutingModule);
    };

    CancelpolicyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CancelpolicyRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCancellationPolicyCancelpolicyCancelpolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FuY2VsbGF0aW9uLXBvbGljeS9jYW5jZWxwb2xpY3kvY2FuY2VscG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CancelpolicyComponent */

  /***/
  function srcAppHomeCancellationPolicyCancelpolicyCancelpolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelpolicyComponent", function () {
      return CancelpolicyComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/confim-dialog/confim-dialog.component */
    "./src/app/shared/confim-dialog/confim-dialog.component.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var CancelpolicyComponent =
    /*#__PURE__*/
    function () {
      function CancelpolicyComponent(dialog, errsrv, httpservice, trns) {
        _classCallCheck(this, CancelpolicyComponent);

        this.dialog = dialog;
        this.errsrv = errsrv;
        this.httpservice = httpservice;
        this.trns = trns;
      }

      _createClass(CancelpolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.charge = String(JSON.parse(localStorage.getItem('salon')).is_charge);
          this.policy = JSON.parse(localStorage.getItem('salon')).c_policy;
          console.log(this.charge);
        }
      }, {
        key: "openDialog",
        value: function openDialog(isCharge) {
          var _this = this;

          // if(this.charge && isCharge){
          //   console.log('-------');
          //   return;
          // }
          var msg = isCharge ? "Are you sure, you want to charge?" : "Are you sure, you don't want to charge?";
          var dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfimDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: {
              msg: msg,
              btn: this.trns.transform('OK'),
              cncl: this.trns.transform('CANCEL')
            }
          });
          dialogRef.beforeClosed().subscribe(function (val) {
            if (val) {
              _this.httpservice.getRequest('PUT', 'CANCELPOLICY', {
                is_charge: isCharge
              }, '').subscribe(function (response) {
                if (response.status === 1) {
                  var salon = JSON.parse(localStorage.getItem('salon'));
                  salon.is_charge = String(isCharge);
                  localStorage.setItem('salon', JSON.stringify(salon));
                  _this.charge = String(isCharge);

                  _this.httpservice.sucsTostr(_this.trns.transform('SUCCESS'), _this.trns.transform('POLICYSUCCESS'));
                } else {
                  console.log(response);

                  _this.errsrv.handleError(response.err.errCode);
                }
              });
            }
          });
        }
      }]);

      return CancelpolicyComponent;
    }();

    CancelpolicyComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]
      }, {
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]
      }];
    };

    CancelpolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancelpolicy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cancelpolicy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cancelpolicy.component.scss */
      "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.scss")).default]
    })], CancelpolicyComponent);
    /***/
  },

  /***/
  "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CancelpolicyModule */

  /***/
  function srcAppHomeCancellationPolicyCancelpolicyCancelpolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelpolicyModule", function () {
      return CancelpolicyModule;
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


    var _cancelpolicy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancelpolicy-routing.module */
    "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy-routing.module.ts");
    /* harmony import */


    var _cancelpolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cancelpolicy.component */
    "./src/app/home/cancellation-policy/cancelpolicy/cancelpolicy.component.ts");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CancelpolicyModule = function CancelpolicyModule() {
      _classCallCheck(this, CancelpolicyModule);
    };

    CancelpolicyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cancelpolicy_component__WEBPACK_IMPORTED_MODULE_4__["CancelpolicyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cancelpolicy_routing_module__WEBPACK_IMPORTED_MODULE_3__["CancelpolicyRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]]
    })], CancelpolicyModule);
    /***/
  }
}]);
//# sourceMappingURL=21-es5.js.map