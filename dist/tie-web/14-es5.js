function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
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


    __webpack_exports__["default"] = "<div class=\"main-card\">\n\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img [src]=\"url\" alt=\"\"><span class=\"user_name\">{{detail?.name}}</span></div>\n        <div class=\"col-md-6 alignright\"><a class=\"btn btn-edit\" [routerLink]=\"['/profile/edit']\"> {{'EDITPROF'| translate}}</a></div>\n        <div class=\"col-md-4 label\">{{'EMAIL'| translate | titlecase}}:</div>\n        <div class=\"col-md-8\">{{detail?.email}}</div>\n        <div class=\"col-md-4 label\">{{'MOBILENUMBER'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.phone}}</div>\n        <div class=\"col-md-4 label\">{{'LOCATION'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.address}}\n            <!-- <img src=\"assets/images/maps.png\" alt=\"map\" class=\"full_width\"> -->\n            <div class=\"map full_width\">\n                <agm-map [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"\n                    [zoomControl]=\"true\">\n                    <agm-marker [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"></agm-marker>\n                </agm-map>\n            </div>\n        </div>\n        <div class=\"col-md-4 label\">{{'BUSINESSHOURS'| translate}}:</div>\n        <div class=\"col-md-8\">NA</div>\n        <div class=\"col-md-4 label\">{{'REVIEWS'| translate}}:</div>\n        <div class=\"col-md-8\"><img src=\"assets/images/reviews.png\" alt=\"Review\"></div>\n        <div class=\"col-md-4 label\">{{'DESCRIPTION'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.desc}}</div>\n        <div class=\"col-md-4 label\">{{'WORKGALLERY'| translate}}:</div>\n        <div class=\"col-md-8\">\n            <div class=\"work_gallery\">\n                <label class=\"detail_content\"><a class=\"margin_top\"\n                    *ngFor=\"let image of salonImageUrlArray; index as i\" (click)=\"openModal(template)\">\n                    <img class=\"file_upload2\" [src]=\"image\" alt=\"Upload\">\n                     </a>\n                    <!-- <img class=\"file_upload1\" src=\"assets/images/add-edit.png\" alt=\"Upload\"> -->\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-4 label\">{{'WEBSITE'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.website}}</div>\n        <div class=\"col-md-4 label\">{{'SERVICEAT'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.service_at == 1?'Home': detail?.service_at==2?'Salon':'Both'}}</div>\n        <div class=\"col-md-4 label\">{{'STAFFNAME'| translate}}:</div>\n        <div class=\"col-md-8\">\n            <ul class=\"staff_name\">\n                <li>Allen</li>\n                <li>James</li>\n                <li>Jane</li>\n                <li>Doe</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<ng-template #template>\n    <div class=\"modal-content px-5\">\n      <h4 class=\"mt-3 text-left\">Salon Images</h4>\n      <div class=\"modal-body px-0\">\n      <slideshow  [imageUrls]=\"slide\" [height]=\"height\" [minHeight]=\"'200px'\" [autoPlay]=\"false\"\n      [showArrows]=\"true\" [lazyLoad]=\"true\" [backgroundSize]=\"'auto'\" [imageUrls]=\"imageSources\"\n      [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\"\n      ></slideshow>\n    </div>\n    </div>\n  </ng-template>\n\n\n\n\n\n\n\n\n\n\n\n";
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


    __webpack_exports__["default"] = "img.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 10%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -100px;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  position: absolute;\n  top: -9px;\n  right: -8px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 7px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 7px;\n}\n\n.top_view img {\n  border-radius: 50%;\n  height: 153px;\n  width: 153px;\n  border: 5px solid whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9maWxlL3ZpZXdwcm9maWxlL3ZpZXdwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvdmlld3Byb2ZpbGUvdmlld3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsd0JBQUE7RUFBeUIsdUJBQUE7RUFBMEIsc0JBQUE7RUFBd0IsMkJBQUE7RUFBNkIsNEJBQUE7RUFFckgsa0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxZQUFBO0VBQWEsZUFBQTtFQUFnQixVQUFBO0VBQVcsbUJBQUE7QUNhdEY7O0FEWEE7RUFBc0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsK0JBQUE7RUFBZ0MsbUJBQUE7QUN1Qm5MOztBRHRCQTtFQUEyQixrQkFBQTtFQUFtQixTQUFBO0VBQVUsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsZUFBQTtFQUFnQixnQkFBQTtBQ2tDcEo7O0FEaENBO0VBQTZCLGtCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLG1CQUFBO0FDeUNwSDs7QUR4Q0E7RUFBbUMsZUFBQTtFQUFtQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGlCQUFBO0FDcURyTDs7QURwREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUN1REoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2ZpbGUvdmlld3Byb2ZpbGUvdmlld3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuZmlsZV91cGxvYWQye2hlaWdodDogMTAwcHggIWltcG9ydGFudDt3aWR0aDogMTAwcHggIWltcG9ydGFudDsgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDsgYm9yZGVyOiA1cHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzg4ODg4ODtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O31cbi5jdXN0b21fdXBsb2FkMXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwJTtoZWlnaHQ6IDEwMCU7Y3Vyc29yOiBwb2ludGVyO29wYWNpdHk6IDA7dGV4dC1pbmRlbnQ6IC0xMDBweDt9XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0bntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOiAjZjk2YWIzO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O3BhZGRpbmc6IDVweCAyMHB4O2JveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3Bhbntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAtOXB4O3JpZ2h0OiAtOHB4O2JhY2tncm91bmQ6ICNlNDI1MjU7aGVpZ2h0OiAyMHB4O3dpZHRoOiAyMHB4O2JvcmRlci1yYWRpdXM6IDUwJTtmb250LXNpemU6IDEzcHg7Zm9udC13ZWlnaHQ6IDYwMDt9XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3B7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW57IGN1cnNvcjogcG9pbnRlcjsgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDdweDtiYWNrZ3JvdW5kOiAjZTQyNTI1O2hlaWdodDogMjBweDt3aWR0aDogMjBweDtib3JkZXItcmFkaXVzOiA1MCU7Zm9udC1zaXplOiAxM3B4O2ZvbnQtd2VpZ2h0OiA2MDA7cGFkZGluZy1sZWZ0OiA3cHg7fVxuLnRvcF92aWV3IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxNTNweDtcbiAgICB3aWR0aDogMTUzcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGVzbW9rZTtcbn0iLCJpbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0xMDBweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjk2YWIzO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTlweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJhY2tncm91bmQ6ICNlNDI1MjU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2U0MjUyNTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4udG9wX3ZpZXcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE1M3B4O1xuICB3aWR0aDogMTUzcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59Il19 */";
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

    var ViewprofileComponent =
    /*#__PURE__*/
    function () {
      function ViewprofileComponent(httpService) {
        _classCallCheck(this, ViewprofileComponent);

        this.httpService = httpService;
        this.url = 'assets/images/change.png';
        this.salonImageUrlArray = [];
        this.slide = [];
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
              _this.detail = response.res;
              _this.url = _this.detail.logo ? _this.detail.logo : _this.url;

              if (_this.detail && _this.detail.imgs) {
                _this.detail.imgs.map(function (item) {
                  item = _this.detail.bp + item;

                  _this.salonImageUrlArray.push(item);

                  _this.slide = [].concat(_toConsumableArray(_this.slide), [{
                    'url': item,
                    clickAction: function clickAction() {
                      return alert('custom click function');
                    }
                  }]);
                });
              }
            } else {// if (!_.isEmpty(response.error)) {
              //   if (response.error.errorCode == 20) {
              //     this.httpService.showError(MESSAGE.LOGIN.NOT_EXIST, MESSAGE.LOGIN.DEL_ORG, MESSAGE.MSGTIME);
              //     this.httpService.logout();
              //   }
              //   else {
              //     this.httpService.showError(response.error.errors.message, 'Validation Error!', MESSAGE.MSGTIME);
              //   }
              // } else {
              //   this.spinner.hide();
              //   this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
              // }
            }
          }, function (error) {// this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
          });
        }
      }]);

      return ViewprofileComponent;
    }();

    ViewprofileComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
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


    var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-simple-slideshow */
    "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var ViewprofileModule = function ViewprofileModule() {
      _classCallCheck(this, ViewprofileModule);
    };

    ViewprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_viewprofile_component__WEBPACK_IMPORTED_MODULE_4__["ViewprofileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewprofileRoutingModule"], ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
        libraries: ["places"]
      }), src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })], ViewprofileModule);
    /***/
  }
}]);
//# sourceMappingURL=14-es5.js.map