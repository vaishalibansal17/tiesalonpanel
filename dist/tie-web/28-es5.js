function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/add/add.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/add/add.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePromocodeAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='promo' (ngSubmit)='add()'>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/category_form.png\" alt=\"Code\"></span>\n                <input matInput placeholder=\"Coupon Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'COUPNNAME'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTPROMONNAME'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/category_form.png\" alt=\"Code\"></span>\n                <input matInput placeholder=\"Coupon Code\" class=\"form-control\" formControlName=\"code\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.code.dirty|| getControl.code.touched) && getControl.code.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.code.errors.required\">{{'CODEREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.code.errors.required && getControl.code.errors.invalid\">\n                    {{'CODEINVLID'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/price_form.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Discount\" class=\"form-control\" formControlName=\"discount\" maxlength=\"10\">\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.discount.dirty|| getControl.discount.touched) && getControl.discount.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.discount.errors.required\">{{'DISEREQ'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.discount.errors.required && getControl.discount.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Min. Amount\" class=\"form-control\" formControlName=\"min_price\"\n                    maxlength=\"10\">\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.min_price.dirty|| getControl.min_price.touched) && getControl.min_price.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.min_price.errors.required\">{{'MINPRCREQ'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.min_price.errors.required && getControl.min_price.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Max. Discount Amount\" class=\"form-control\" formControlName=\"upto\"\n                    maxlength=\"10\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.upto.dirty|| getControl.upto.touched) && getControl.upto.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.upto.errors.required\">{{'MAXPRCREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.upto.errors.required && getControl.upto.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div class=\"mat-chips\">\n                    <mat-chip-list aria-label=\"Fish selection\">\n                        <mat-chip [disableRipple]=\"true\" *ngFor=\"let chip of chips; let i =index\"\n                            [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(i, chip)\">\n                            {{chip.cat_name | titlecase}}\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                        </mat-chip>\n                    </mat-chip-list>\n                </div>\n            </mat-form-field>\n            <!-- <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"Added\"></span>\n                <input matInput placeholder=\"Added By\" class=\"form-control\" formControlName=\"desc\">\n            </mat-form-field> -->\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"Uses\"></span>\n                <input matInput placeholder=\"Total Uses\" class=\"form-control\" formControlName=\"uses\" maxlength=\"10\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.uses.dirty|| getControl.uses.touched) && getControl.uses.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.uses.errors.required\">{{'USEREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.uses.errors.required && getControl.uses.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 left\">\n                    <mat-form-field>\n                        <span class=\"email-img pass\"><img src=\"assets/images/calendar_form.png\" alt=\"From\"></span>\n                        <input matInput placeholder=\"From\" class=\"form-control\" [min]=\"todaydate\" [matDatepicker]=\"fromDatepicker\"\n                            formControlName=\"frm\">\n                        <mat-datepicker-toggle matSuffix [for]=\"fromDatepicker\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #fromDatepicker></mat-datepicker>\n                    </mat-form-field>\n                    <div *ngIf=\"(submitted || getControl.frm.dirty|| getControl.frm.touched) && getControl.frm.errors\">\n                        <p class=\"color error\" *ngIf=\"getControl.frm.errors.required\">{{'FRMREQ'| translate}}</p>\n                        <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                            {{'INCRTSALONNAME'| translate}}</p> -->\n                    </div>\n                    <p class=\"color error\" *ngIf=\"!validDte\">{{'INVALIDDATE'| translate}}</p>\n                </div>\n                <div class=\"col-md-6 right\">\n                    <mat-form-field>\n                        <span class=\"email-img pass\"><img src=\"assets/images/calendar_form.png\" alt=\"From\"></span>\n                        <input matInput placeholder=\"To\" class=\"form-control\" [min]=\"todaydate\" [matDatepicker]=\"toDatepicker\"\n                            formControlName=\"to\">\n                        <mat-datepicker-toggle matSuffix [for]=\"toDatepicker\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #toDatepicker></mat-datepicker>\n                    </mat-form-field>\n                    <div *ngIf=\"(submitted || getControl.to.dirty|| getControl.to.touched) && getControl.to.errors\">\n                        <p class=\"color error\" *ngIf=\"getControl.to.errors.required\">{{'TOREQ'| translate}}</p>\n                        <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                            {{'INCRTSALONNAME'| translate}}</p> -->\n                    </div>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"desc\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.desc.dirty|| getControl.desc.touched) && getControl.desc.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.desc.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.desc.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/promocode/add/add-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/promocode/add/add-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: AddRoutingModule */

  /***/
  function srcAppHomePromocodeAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home/promocode/add/add.component.ts");

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
  "./src/app/home/promocode/add/add.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/home/promocode/add/add.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePromocodeAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom_form span.email-img.pass {\n  top: 16px;\n}\n\n@media (min-width: 767px) {\n  .custom_form .col-md-6.left {\n    padding-right: 6px;\n  }\n\n  .custom_form .col-md-6.right {\n    padding-left: 6px;\n  }\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9tb2NvZGUvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wcm9tb2NvZGUvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNBO0lBQTRCLGtCQUFBO0VDRTFCOztFRERGO0lBQTZCLGlCQUFBO0VDSzNCO0FBQ0Y7O0FERkE7RUFBNEIsZ0NBQUE7QUNLNUI7O0FESkE7RUFBd0Isb0NBQUE7RUFBcUMsa0JBQUE7RUFBbUIsbUJBQUE7QUNVaEY7O0FEUkE7RUFBdUQsWUFBQTtBQ1l2RCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvbW9jb2RlL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcucGFzcyB7XG4gICAgdG9wOiAxNnB4O1xufVxuXG5AbWVkaWEobWluLXdpZHRoOjc2N3B4KXtcbi5jdXN0b21fZm9ybSAuY29sLW1kLTYubGVmdHtwYWRkaW5nLXJpZ2h0OiA2cHg7fVxuLmN1c3RvbV9mb3JtIC5jb2wtbWQtNi5yaWdodHtwYWRkaW5nLWxlZnQ6IDZweDt9XG59XG5cblxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2Rpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50fVxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3R7Ym9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDRweDttYXJnaW4tYm90dG9tOiAxMHB4O31cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2JvcmRlcjpub25lfSIsIi5jdXN0b21fZm9ybSBzcGFuLmVtYWlsLWltZy5wYXNzIHtcbiAgdG9wOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLmN1c3RvbV9mb3JtIC5jb2wtbWQtNi5sZWZ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH1cblxuICAuY3VzdG9tX2Zvcm0gLmNvbC1tZC02LnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgfVxufVxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc2VsZWN0Lm11bHRpc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdXN0b21fZm9ybSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/promocode/add/add.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/promocode/add/add.component.ts ***!
    \*****************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppHomePromocodeAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(httpService, router, fb, routes, helper, errorserv, trns) {
        _classCallCheck(this, AddComponent);

        this.httpService = httpService;
        this.router = router;
        this.fb = fb;
        this.routes = routes;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.chips = [];
        this.todaydate = new Date();
        this.submitted = false;
        this.dataSource = [];
        this.selectable = true;
        this.removable = true;
        this.sendServ = [];
        this.validDte = true;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getServices();
          this.promo = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].codeValidator]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            upto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            min_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            frm: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            uses: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(500)]),
            cat_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null)
          });
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this = this;

          this.httpService.getRequest('GET', 'SERVICES', '').subscribe(function (response) {
            if (response.status === 1) {
              console.log(response.res);
              _this.services = response.res.services;
            } else {
              if (response.err) {
                _this.errorserv.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this2 = this;

          this.submitted = true; // return false

          var startDateUtc = this.promo.value.frm && this.helper.parseDate(this.promo.value.frm, new Date(new Date().setHours(0, 0, 0, 0)));
          var endDateUtc = this.promo.value.to && this.helper.parseDate(this.promo.value.to, new Date(new Date().setHours(23, 59, 59)));

          if (!(startDateUtc < endDateUtc)) {
            this.validDte = false;
            return false;
          } else this.validDte = true;

          if (this.promo.valid) {
            if (!this.validDte) return false;
            /** if selected date is from today then promocode time is from current date and time. */

            var currentdate = new Date();
            var data = new Date(this.promo.value.frm);
            if (data.getDate() == currentdate.getDate() && data.getMonth() == currentdate.getMonth()) this.promo.value.frm = new Date();
            this.promo.value.cat_ids = JSON.stringify(this.sendServ);
            this.httpService.getRequest('POST', 'PROMO', this.promo.value).subscribe(function (response) {
              if (response.status === 1) {
                _this2.submitted = true;

                _this2.router.navigateByUrl('/promocode').then(function () {
                  _this2.httpService.sucsTostr(_this2.trns.transform('SUCCESS'), _this2.trns.transform('PROMOCODESUCC'));
                });
              } else {
                if (response.err) {
                  _this2.errorserv.handleError(response.err.errCode);
                }
              }
            }, function (error) {
              _this2.errorserv.handleError(0);
            });
          } else {
            console.log(this.promo);
          }
        }
      }, {
        key: "slctsrv",

        /** ---------------------Compare Promocodes dates----------------------- */
        value: function slctsrv(state) {
          var matSelect = state.source;
          matSelect.writeValue(null); // let isFound = this.httpService.arraySearch(this.sendServ, state)

          state = state.value;

          if (!this.httpService.arraySearch(this.sendServ, state)) {
            this.chips.push({
              id: state._id,
              cat_name: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)),
              title: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)),
              price: state.price
            });
            this.sendServ.push(state.cat_id);
            return;
          } else {}
        }
      }, {
        key: "remove",
        value: function remove(service, data) {
          var rmvsrv = this.chips.find(function (v) {
            return v.id == data.id;
          });
          this.chips = this.chips.filter(function (v) {
            return v.id !== data.id;
          });
          this.sendServ = this.sendServ.filter(function (v) {
            return v !== data.id;
          });
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.promo.controls;
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__["Helper"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/home/promocode/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/home/promocode/add/add.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/promocode/add/add.module.ts ***!
    \**************************************************/

  /*! exports provided: AddModule */

  /***/
  function srcAppHomePromocodeAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/home/promocode/add/add-routing.module.ts");
    /* harmony import */


    var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add.component */
    "./src/app/home/promocode/add/add.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddModule = function AddModule() {
      _classCallCheck(this, AddModule);
    };

    AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], AddModule);
    /***/
  }
}]);
//# sourceMappingURL=28-es5.js.map