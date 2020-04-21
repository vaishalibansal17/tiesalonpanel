function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeProfileViewprofileViewprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img [src]=\"url\" alt=\"Username\"><span class=\"user_name\">{{detail?.name | titlecase}}</span></div>\n        <div class=\"col-md-6 alignright\"><a class=\"btn btn-edit\" [routerLink]=\"['/profile/edit']\"> {{'EDIT'| translate}}</a><a class=\"btn btn-edit\" [routerLink]=\"['/staff']\">Staff</a></div>\n        <div class=\"col-md-3 label\">{{'EMAIL'| translate | titlecase}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.email}}</div>\n        <div class=\"col-md-3 label\">{{'MOBILENUMBER'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.phone}}</div>\n        <div class=\"col-md-3 label\">{{'LOCATION'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.address | titlecase}}\n            <!-- <img src=\"assets/images/maps.png\" alt=\"map\" class=\"full_width\"> -->\n            <div class=\"map full_width\">\n                <agm-map [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"\n                    [zoomControl]=\"true\">\n                    <agm-marker [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"></agm-marker>\n                </agm-map>\n            </div>\n        </div>\n        <div class=\"col-md-3 label\">{{'BUSINESSHOURS'| translate}}:</div>\n        <div class=\"col-md-9 description\"><a [routerLink]=\"['/profile/business-hours']\">View</a></div>\n        <div class=\"col-md-3 label\">{{'REVIEWS'| translate}}:</div>\n        <div class=\"col-md-9 description staff_star\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"detail?.rvw_rt | round\"></ngx-stars></div>\n        <div class=\"col-md-3 label\">{{'DESCRIPTION'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.desc}}</div>\n        <div class=\"col-md-3 label\">{{'WORKGALLERY'| translate}}:</div>\n        <div class=\"col-md-9 description\">\n            <div class=\"work_gallery\">\n                <label class=\"detail_content\"><a class=\"margin_top\"\n                    *ngFor=\"let image of salonImageUrlArray; index as i\">\n                    <img class=\"file_upload2\" [src]=\"image\" alt=\"Upload\">\n                     </a>\n                    <!-- <img class=\"file_upload1\" src=\"assets/images/add-edit.png\" alt=\"Upload\"> -->\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-3 label\">{{'WEBSITE'| translate}}:</div>\n        <div class=\"col-md-9 description\"><a href=\"https://{{detail?.website}}\" target=\"blank\">{{detail?.website}}</a></div>\n        <div class=\"col-md-3 label\">{{'SERVICETYP'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.type == 2?'Salon' : detail?.type==3?'Clinic':'NA'}}</div>\n        <div class=\"col-md-3 label\">{{'SERVICEAT'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail?.service_at == 1?'Home': detail?.service_at==2? (detail?.type==3?'Clinic' : 'Salon'):'Both'}}</div> \n        <div class=\"col-md-3 label\">{{'SERVICE'| translate}}:</div>\n        <div class=\"col-md-9 description\">\n            <mat-chip-list aria-label=\"Fish selection\">\n                <mat-chip *ngFor=\"let chip of chips; let i =index\" [disableRipple]=\"true\">{{chip.cat_name | titlecase}}\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n        <div class=\"col-md-3 label\">{{'STAFFNAME'| translate}}:</div>\n        <div class=\"col-md-9 description\">\n            <a [routerLink]=\"['/staff']\">View</a>\n            <!-- <ul class=\"staff_name\">\n                <li>Allen</li>\n                <li>James</li>\n                <li>Jane</li>\n                <li>Doe</li>\n            </ul> -->\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/home/profile/viewprofile/viewprofile-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/profile/viewprofile/viewprofile-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ViewprofileRoutingModule */

  /***/
  function srcAppHomeProfileViewprofileViewprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewprofileRoutingModule", function () {
      return ViewprofileRoutingModule;
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


    var _viewprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewprofile.component */
    "./src/app/home/profile/viewprofile/viewprofile.component.ts");

    var routes = [{
      path: '',
      component: _viewprofile_component__WEBPACK_IMPORTED_MODULE_3__["ViewprofileComponent"]
    }];

    var ViewprofileRoutingModule = function ViewprofileRoutingModule() {
      _classCallCheck(this, ViewprofileRoutingModule);
    };

    ViewprofileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewprofileRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/profile/viewprofile/viewprofile.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home/profile/viewprofile/viewprofile.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeProfileViewprofileViewprofileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid #e3e3e3;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 10%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -100px;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  position: absolute;\n  top: -9px;\n  right: -8px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 7px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 7px;\n}\n\n.top_view img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 3px solid #f5f5f5;\n}\n\nagm-map {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9maWxlL3ZpZXdwcm9maWxlL3ZpZXdwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvdmlld3Byb2ZpbGUvdmlld3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsd0JBQUE7RUFBeUIsdUJBQUE7RUFBMEIsc0JBQUE7RUFBd0IsMkJBQUE7RUFBNkIseUJBQUE7RUFFckgsa0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxZQUFBO0VBQWEsZUFBQTtFQUFnQixVQUFBO0VBQVcsbUJBQUE7QUNhdEY7O0FEWEE7RUFBc0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsK0JBQUE7RUFBZ0MsbUJBQUE7QUN1Qm5MOztBRHRCQTtFQUEyQixrQkFBQTtFQUFtQixTQUFBO0VBQVUsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsZUFBQTtFQUFnQixnQkFBQTtBQ2tDcEo7O0FEaENBO0VBQTZCLGtCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLG1CQUFBO0FDeUNwSDs7QUR4Q0E7RUFBbUMsZUFBQTtFQUFtQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGlCQUFBO0FDcURyTDs7QURwREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUN1REo7O0FEckRBO0VBQ0ksYUFBQTtBQ3dESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS92aWV3cHJvZmlsZS92aWV3cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5maWxlX3VwbG9hZDJ7aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O3dpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgbWFyZ2luOiA1cHggIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBib3JkZXI6IDVweCBzb2xpZCAjZTNlM2UzO1xuICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjODg4ODg4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7fVxuLmN1c3RvbV91cGxvYWQxe3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAlO2hlaWdodDogMTAwJTtjdXJzb3I6IHBvaW50ZXI7b3BhY2l0eTogMDt0ZXh0LWluZGVudDogLTEwMHB4O31cblxuLmRldGFpbF9jb250ZW50IGEuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6ICNmOTZhYjM7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7cGFkZGluZzogNXB4IDIwcHg7Ym94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMzttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFue3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IC05cHg7cmlnaHQ6IC04cHg7YmFja2dyb3VuZDogI2U0MjUyNTtoZWlnaHQ6IDIwcHg7d2lkdGg6IDIwcHg7Ym9yZGVyLXJhZGl1czogNTAlO2ZvbnQtc2l6ZTogMTNweDtmb250LXdlaWdodDogNjAwO31cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbnsgY3Vyc29yOiBwb2ludGVyOyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogN3B4O2JhY2tncm91bmQ6ICNlNDI1MjU7aGVpZ2h0OiAyMHB4O3dpZHRoOiAyMHB4O2JvcmRlci1yYWRpdXM6IDUwJTtmb250LXNpemU6IDEzcHg7Zm9udC13ZWlnaHQ6IDYwMDtwYWRkaW5nLWxlZnQ6IDdweDt9XG4udG9wX3ZpZXcgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1O1xufVxuYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0iLCJpbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZTNlM2UzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0xMDBweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjk2YWIzO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTlweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJhY2tncm91bmQ6ICNlNDI1MjU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2U0MjUyNTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4udG9wX3ZpZXcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjU7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/profile/viewprofile/viewprofile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/profile/viewprofile/viewprofile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ViewprofileComponent */

  /***/
  function srcAppHomeProfileViewprofileViewprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewprofileComponent", function () {
      return ViewprofileComponent;
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


    var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/message.service */
    "./src/app/shared/service/message.service.ts");

    var ViewprofileComponent =
    /*#__PURE__*/
    function () {
      function ViewprofileComponent(httpService, error, messageService) {
        _classCallCheck(this, ViewprofileComponent);

        this.httpService = httpService;
        this.error = error;
        this.messageService = messageService;
        this.url = 'assets/images/change.png';
        this.salonImageUrlArray = [];
        this.chips = [];
      }

      _createClass(ViewprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfile();
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this = this;

          this.httpService.getRequest('GET', 'PROFILE', '').subscribe(function (response) {
            if (response.status === 1) {
              var _this$chips;

              _this.detail = response.res;

              (_this$chips = _this.chips).push.apply(_this$chips, _toConsumableArray(_this.detail.services));

              _this.url = _this.detail.logo ? _this.detail.logo : _this.url;
              var salon = JSON.parse(localStorage.getItem('salon'));
              salon['logo'] = _this.detail.logo;
              salon['name'] = _this.detail.name;
              localStorage.setItem('salon', JSON.stringify(salon));

              _this.messageService.sendMessage('profile changed');

              if (_this.detail && _this.detail.imgs) {
                _this.detail.imgs.map(function (item) {
                  item = _this.detail.bp + item;

                  _this.salonImageUrlArray.push(item);
                });
              }
            } else {
              if (response.err) {
                _this.error.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            _this.error.handleError(0);
          });
        }
      }]);

      return ViewprofileComponent;
    }();

    ViewprofileComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }, {
        type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };

    ViewprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewprofile.component.scss */
      "./src/app/home/profile/viewprofile/viewprofile.component.scss")).default]
    })], ViewprofileComponent);
    /***/
  },

  /***/
  "./src/app/home/profile/viewprofile/viewprofile.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/profile/viewprofile/viewprofile.module.ts ***!
    \****************************************************************/

  /*! exports provided: ViewprofileModule */

  /***/
  function srcAppHomeProfileViewprofileViewprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewprofileModule", function () {
      return ViewprofileModule;
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


    var _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewprofile-routing.module */
    "./src/app/home/profile/viewprofile/viewprofile-routing.module.ts");
    /* harmony import */


    var _viewprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./viewprofile.component */
    "./src/app/home/profile/viewprofile/viewprofile.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_stars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-stars */
    "./node_modules/ngx-stars/fesm2015/ngx-stars.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");

    var ViewprofileModule = function ViewprofileModule() {
      _classCallCheck(this, ViewprofileModule);
    };

    ViewprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_viewprofile_component__WEBPACK_IMPORTED_MODULE_4__["ViewprofileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewprofileRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_10__["MAP"].KEY,
        libraries: [src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_10__["MAP"].type]
      }), src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_stars__WEBPACK_IMPORTED_MODULE_9__["NgxStarsModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })], ViewprofileModule);
    /***/
  }
}]);
//# sourceMappingURL=29-es5.js.map