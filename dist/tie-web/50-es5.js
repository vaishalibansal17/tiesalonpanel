function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50], {
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


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\" [formGroup]='profile' (ngSubmit)=\"submit()\">\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'SERVICE'| translate}}</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div *ngIf=\"(submitted && !chips.length)\">\n                    <p class=\"color error\" *ngIf=\"!chips.length\">{{'SRVREQ'|translate}}</p>\n                    <!-- <p class=\"color error\" *ngIf=\"!getControl.price.errors.required && getControl.price.errors.Invalidphone \">\n                        {{'PHNLNGTH'|translate}}</p> -->\n                </div>\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip *ngFor=\"let chip of chips; let i =index\" [disableRipple]=\"true\" [selectable]=\"selectable\"\n                        [removable]=\"removable\" (removed)=\"remove(i, chip)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <!-- <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                    <mat-chip color=\"accent\" selected>Accent fish</mat-chip> -->\n                </mat-chip-list>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Price\" formControlName=\"price\" readonly='true' class=\"form-control\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted && getControl.price.errors)\">\n                <p class=\"color error\" *ngIf=\"getControl.price.errors.required\">{{'PRICREQ'|translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.price.errors.required && getControl.price.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"envelope\"></span>\n                <mat-label>{{'STAFF'| translate}}</mat-label>\n                <mat-select formControlName=\"staf_id\" (selectionChange)=\"slctstf()\" >\n                    <mat-option *ngFor=\"let staff of staff\" [value]=\"staff\">\n                        {{staff.name | titlecase}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div *ngIf=\"(submitted && getControl.staf_id.errors)\">\n                <p class=\"color error\" *ngIf=\"getControl.staf_id.errors.required\">{{'STFREQ'|translate}}</p>\n            </div>\n            <div class=\"date_time\">\n                <span ><img class=\"cal-img\" src=\"assets/images/calendar_form.png\" alt=\"envelope\"></span>\n                <p-calendar formControlName=\"dttime\" icon=\"pi pi-calendar\"  dateFormat=\"dd M yy\"  (onClose)=\"slctstf()\"\n                    placeholder=\"Select appointment date\" inputStyleClass=\"form-control\" [minDate] = \"todaydt\" [maxDate] = \"max\"\n                    [readonlyInput]=\"true\"></p-calendar>\n            </div>\n            <div *ngIf=\"(submitted && getControl.dttime.errors)\">\n                <p class=\"color error\" *ngIf=\"getControl.dttime.errors.required\">{{'SLOTDTREQ'|translate}}</p>\n            </div>\n            <div class=\"time_tabs\">\n                <span *ngFor=\"let slots of slots;\" (click)=\"slcdt(slots);\">\n                    <p [class]=\"slots?.select?'slct':''\">{{(slots?.time | timeFilter) | date : 'h:mm a'}}</p>\n                </span>\n            </div>\n            <div *ngIf=\"(submitted && isSlot)\">\n                <p class=\"color error\" *ngIf=\"isSlot\">{{'STYMREQ'|translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"desc\" maxlength=\"150\"></textarea>\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.desc.dirty|| getControl.desc.touched) && getControl.desc.errors\">\n                <p class=\"color\" *ngIf=\"getControl.desc.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color\" *ngIf=\"getControl.desc.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = ".custom_form span.email-img.pass {\n  top: 15px !important;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n\np.color.error {\n  top: 0px !important;\n}\n\n:host ::ng-deep .ui-calendar {\n  display: block;\n}\n\n:host ::ng-deep .ui-inputtext {\n  width: 100% !important;\n}\n\n.date_time {\n  position: relative;\n}\n\nimg.cal-img {\n  position: absolute;\n  z-index: 999;\n  top: 15px;\n  left: 15px;\n  color: #232121;\n}\n\n.time_tabs p {\n  margin-bottom: 0;\n  border: 1px solid #ccc;\n  color: #ccc;\n  padding: 2px 8px;\n  border-radius: 5px;\n  margin-right: 3px;\n  margin-bottom: 15px;\n  min-width: 85px;\n  text-align: center;\n  display: inline-block;\n}\n\n.time_tabs p:hover {\n  background: #f96bb3;\n  color: #fff;\n  border: 1px solid #f96bb3;\n  cursor: pointer;\n}\n\n.time_tabs p.nt_active {\n  background: #e9ecef;\n  color: #c7c7c7 !important;\n}\n\n.slct {\n  background: #f96bb3;\n  color: #fff;\n  border: 1px solid #f96bb3;\n  cursor: pointer;\n}\n\n@media (max-width: 992px) {\n  :host ::ng-deep .ui-inputtext {\n    padding-left: 45px !important;\n  }\n\n  img.cal-img {\n    top: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvd2Fsa2luZy11c2VyL2FkZGJvb2tpbmdzL2FkZGJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtDLG9CQUFBO0FDRWxDOztBREFBO0VBQTRCLGdDQUFBO0FDSTVCOztBREhBO0VBQXdCLG9DQUFBO0VBQXFDLGtCQUFBO0VBQW1CLG1CQUFBO0FDU2hGOztBRFBBO0VBQXVELFlBQUE7QUNXdkQ7O0FEVkE7RUFBa0IsbUJBQUE7QUNjbEI7O0FEWkE7RUFBNkIsY0FBQTtBQ2dCN0I7O0FEZkE7RUFDSSxzQkFBQTtBQ2tCSjs7QURoQkU7RUFBVyxrQkFBQTtBQ29CYjs7QURuQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNzQko7O0FEbkJBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDc0JGOztBRHJCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3VCSjs7QURuQkE7RUFBd0IsbUJBQUE7RUFBb0IseUJBQUE7QUN3QjVDOztBRHRCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3lCSjs7QUR0QkE7RUFDRTtJQUE4Qiw2QkFBQTtFQzBCOUI7O0VEekJBO0lBQ0UsU0FBQTtFQzRCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93YWxraW5nLXVzZXIvYWRkYm9va2luZ3MvYWRkYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcucGFzcyB7dG9wOiAxNXB4ICFpbXBvcnRhbnQ7fVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7ZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnR9XG4ubWF0LXNlbGVjdC5tdWx0aXNlbGVjdHtib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4uY3VzdG9tX2Zvcm0gbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7Ym9yZGVyOm5vbmV9XG5wLmNvbG9yLmVycm9yeyAgICB0b3A6IDBweCAhaW1wb3J0YW50O31cblxuOmhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhcntkaXNwbGF5OiBibG9ja31cbjpob3N0IDo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5kYXRlX3RpbWV7cG9zaXRpb246IHJlbGF0aXZlO31cbiAgaW1nLmNhbC1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdG9wOjE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBjb2xvcjogIzIzMjEyMTtcbn1cbi50aW1lX3RhYnN7XG5we1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjb2xvcjogI2NjYztcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWluLXdpZHRoOiA4NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOTZiYjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG59XG4udGltZV90YWJzIHAubnRfYWN0aXZlIHtiYWNrZ3JvdW5kOiAjZTllY2VmO2NvbG9yOiAjYzdjN2M3ICFpbXBvcnRhbnQ7fVxuXG4uc2xjdHtcbiAgICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOTZiYjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjk5MnB4KXtcbiAgOmhvc3QgOjpuZy1kZWVwIC51aS1pbnB1dHRleHR7cGFkZGluZy1sZWZ0OiA0NXB4ICFpbXBvcnRhbnQ7fVxuICBpbWcuY2FsLWltZyB7XG4gICAgdG9wOjE4cHg7fVxufSIsIi5jdXN0b21fZm9ybSBzcGFuLmVtYWlsLWltZy5wYXNzIHtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZCB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNlbGVjdC5tdWx0aXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWQ5ZDkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY3VzdG9tX2Zvcm0gbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnAuY29sb3IuZXJyb3Ige1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmRhdGVfdGltZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLmNhbC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICBjb2xvcjogIzIzMjEyMTtcbn1cblxuLnRpbWVfdGFicyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY29sb3I6ICNjY2M7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1pbi13aWR0aDogODVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGltZV90YWJzIHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5NmJiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGltZV90YWJzIHAubnRfYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgY29sb3I6ICNjN2M3YzcgIWltcG9ydGFudDtcbn1cblxuLnNsY3Qge1xuICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5NmJiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC51aS1pbnB1dHRleHQge1xuICAgIHBhZGRpbmctbGVmdDogNDVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nLmNhbC1pbWcge1xuICAgIHRvcDogMThweDtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/message.service */
    "./src/app/shared/service/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AddbookingsComponent =
    /*#__PURE__*/
    function () {
      function AddbookingsComponent(httpService, router, messageService, helper, errorserv, trns) {
        _classCallCheck(this, AddbookingsComponent);

        this.httpService = httpService;
        this.router = router;
        this.messageService = messageService;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.servicea = [{
          value: '1',
          viewValue: 'Hair Spa'
        }, {
          value: '2',
          viewValue: 'Spa'
        }];
        this.chips = [];
        this.sendServ = [];
        this.selectable = true;
        this.removable = true;
        this.price = 0;
        this.submitted = false;
        this.todaydt = new Date();
        this.isSlot = false;
      }

      _createClass(AddbookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.salonid = localStorage.getItem('salonid');
          this.max = new Date(Number(this.todaydt.getFullYear()), Number(this.todaydt.getMonth() + 3), Number(this.todaydt.getDate()), 23, 59, 59, 59);
          this.responseData = this.messageService.getBooking();

          if (!this.responseData) {
            this.router.navigateByUrl('walk-in-customer/add-user').then(function () {
              _this.errorserv.handleError(0);
            });
          } else this.getServices();

          this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            staf_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"].numberValidator]),
            dttime: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.submitted = true;

          if (this.profile.valid) {
            if (this.isSlot) {
              return;
            } // this.profile.controls['price'].enable();


            console.log(this.profile, this.date);
            this.profile.value['service'] = JSON.stringify(this.chips);
            this.profile.value['user_id'] = this.responseData.user_id;
            this.profile.value['staf_name'] = this.profile.value.staf_id.name;
            this.profile.value['staf_id'] = this.profile.value.staf_id._id;
            this.profile.value['bookDateTime'] = this.date;
            this.profile.value['duration'] = this.duration; // return

            this.httpService.getRequest('POST', 'WALKING_BOOK', this.profile.value).subscribe(function (response) {
              if (response.status === 1) {
                _this2.submitted = true;

                _this2.router.navigateByUrl('/walk-in-customer').then(function () {
                  _this2.httpService.sucsTostr(_this2.trns.transform('SUCCESS'), _this2.trns.transform('WALKNGSUCCESS'));
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
            console.log(this.profile);
          }
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this3 = this;

          var service = this.httpService.getRequest('GET', 'SERVICES', '');
          var staff = this.httpService.getRequest('GET', 'STAFF', '?all=true');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])([service, staff]).subscribe(function (result) {
            _this3.services = result[0].res.services;
            _this3.staff = result[1].res.staffs;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "slctsrv",
        value: function slctsrv(state) {
          var matSelect = state.source;
          matSelect.writeValue(null);
          state = state.value;

          if (!this.httpService.arraySearch(this.sendServ, state)) {
            this.chips.push({
              id: state._id,
              cat_name: lodash__WEBPACK_IMPORTED_MODULE_10__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_10__["camelCase"](state.cat_name)),
              title: lodash__WEBPACK_IMPORTED_MODULE_10__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_10__["camelCase"](state.cat_name)),
              cost: state.price,
              duration: state.duration
            });
            this.sendServ.push(state._id);
            this.price = this.price + state.price;
            this.duration = this.duration + state.duration;
            this.profile.controls['price'].setValue(this.price);
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

          if (this.chips.length == 0) {
            this.price = 0;
            this.duration = 0;
            this.profile.controls['price'].setValue(0);
          } else {
            console.log(rmvsrv);
            this.duration = this.duration - rmvsrv.duration;
            this.price = this.price - rmvsrv.cost;
            this.profile.controls['price'].setValue(this.price);
          }
        }
      }, {
        key: "slctstf",
        value: function slctstf() {
          var _this4 = this;

          if (this.profile.value.dttime && this.profile.value.staf_id) {
            this.isSlot = true; // let date = new Date(this.profile.value.dttime);

            var date = this.helper.utcDate(this.profile.value.dttime);
            console.log(this.helper.utcDate(this.profile.value.dttime));
            this.httpService.getRequest('GET_PARMS', 'BOOKING_SLOT', this.salonid, "bk_dt=".concat(date, "&staf_id=").concat(this.profile.value.staf_id._id)).subscribe(function (response) {
              if (response.status === 1) {
                _this4.slots = response.res;

                _this4.slots.forEach(function (element, i) {
                  _this4.slots[i]['select'] = false;
                });
              } else {
                if (response.err) {
                  _this4.slots = [];

                  _this4.errorserv.handleError(response.err.errCode);
                }
              }
            }, function (error) {
              _this4.errorserv.handleError(0); // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);

            });
          }
        }
      }, {
        key: "slcdt",
        value: function slcdt(slot) {
          var _this5 = this;

          this.isSlot = false;

          if (slot.is_avlbl) {
            this.slots.forEach(function (obj, i) {
              if (obj.time == slot.time) {
                _this5.slots[i]['select'] = true;
              } else {
                _this5.slots[i]['select'] = false;
              }
            });
            var tmstmp = slot.time;
            var time = new Date(tmstmp);
            this.date = new Date(this.profile.value.dttime);
            this.date.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
            this.date = this.helper.parseDate(this.date);
          } else return false;
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.profile.controls;
        }
      }]);

      return AddbookingsComponent;
    }();

    AddbookingsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["Helper"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]
      }];
    };

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
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");

    var AddbookingsModule = function AddbookingsModule() {
      _classCallCheck(this, AddbookingsModule);
    };

    AddbookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_addbookings_component__WEBPACK_IMPORTED_MODULE_4__["AddbookingsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _addbookings_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddbookingsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], AddbookingsModule);
    /***/
  }
}]);
//# sourceMappingURL=50-es5.js.map