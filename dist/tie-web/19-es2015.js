(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n\n    <div class=\"row\">\n        <div class=\"col-md-6 top_view\"><img [src]=\"url\" alt=\"\"><span class=\"user_name\">{{detail?.name}}</span></div>\n        <div class=\"col-md-6 alignright\"><a class=\"btn btn-edit\" [routerLink]=\"['/profile/edit']\"> {{'EDITPROF'| translate}}</a></div>\n        <div class=\"col-md-4 label\">{{'EMAIL'| translate | titlecase}}:</div>\n        <div class=\"col-md-8\">{{detail?.email}}</div>\n        <div class=\"col-md-4 label\">{{'MOBILENUMBER'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.phone}}</div>\n        <div class=\"col-md-4 label\">{{'LOCATION'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.address}}\n            <!-- <img src=\"assets/images/maps.png\" alt=\"map\" class=\"full_width\"> -->\n            <div class=\"map full_width\">\n                <agm-map [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"\n                    [zoomControl]=\"true\">\n                    <agm-marker [latitude]=\"detail?.lat\" [longitude]=\"detail?.lng\"></agm-marker>\n                </agm-map>\n            </div>\n        </div>\n        <div class=\"col-md-4 label\">{{'BUSINESSHOURS'| translate}}:</div>\n        <div class=\"col-md-8\">NA</div>\n        <div class=\"col-md-4 label\">{{'REVIEWS'| translate}}:</div>\n        <div class=\"col-md-8\"><img src=\"assets/images/reviews.png\" alt=\"Review\"></div>\n        <div class=\"col-md-4 label\">{{'DESCRIPTION'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.desc}}</div>\n        <div class=\"col-md-4 label\">{{'WORKGALLERY'| translate}}:</div>\n        <div class=\"col-md-8\">\n            <div class=\"work_gallery\">\n                <label class=\"detail_content\"><a class=\"margin_top\"\n                    *ngFor=\"let image of salonImageUrlArray; index as i\">\n                    <img class=\"file_upload2\" [src]=\"image\" alt=\"Upload\">\n                     </a>\n                    <!-- <img class=\"file_upload1\" src=\"assets/images/add-edit.png\" alt=\"Upload\"> -->\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-4 label\">{{'WEBSITE'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.website}}</div>\n        <div class=\"col-md-4 label\">{{'SERVICEAT'| translate}}:</div>\n        <div class=\"col-md-8\">{{detail?.service_at == 1?'Home': detail?.service_at==2?'Salon':'Both'}}</div>\n        <div class=\"col-md-4 label\">{{'STAFFNAME'| translate}}:</div>\n        <div class=\"col-md-8\">\n            <ul class=\"staff_name\">\n                <li>Allen</li>\n                <li>James</li>\n                <li>Jane</li>\n                <li>Doe</li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/home/profile/viewprofile/viewprofile-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/profile/viewprofile/viewprofile-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewprofileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileRoutingModule", function() { return ViewprofileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _viewprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewprofile.component */ "./src/app/home/profile/viewprofile/viewprofile.component.ts");




const routes = [{
        path: '', component: _viewprofile_component__WEBPACK_IMPORTED_MODULE_3__["ViewprofileComponent"]
    }];
let ViewprofileRoutingModule = class ViewprofileRoutingModule {
};
ViewprofileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewprofileRoutingModule);



/***/ }),

/***/ "./src/app/home/profile/viewprofile/viewprofile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/profile/viewprofile/viewprofile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 10%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -100px;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  position: absolute;\n  top: -9px;\n  right: -8px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 7px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 7px;\n}\n\n.top_view img {\n  border-radius: 50%;\n  height: 153px;\n  width: 153px;\n  border: 5px solid whitesmoke;\n}\n\nagm-map {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9maWxlL3ZpZXdwcm9maWxlL3ZpZXdwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvdmlld3Byb2ZpbGUvdmlld3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsd0JBQUE7RUFBeUIsdUJBQUE7RUFBMEIsc0JBQUE7RUFBd0IsMkJBQUE7RUFBNkIsNEJBQUE7RUFFckgsa0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxZQUFBO0VBQWEsZUFBQTtFQUFnQixVQUFBO0VBQVcsbUJBQUE7QUNhdEY7O0FEWEE7RUFBc0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsK0JBQUE7RUFBZ0MsbUJBQUE7QUN1Qm5MOztBRHRCQTtFQUEyQixrQkFBQTtFQUFtQixTQUFBO0VBQVUsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsZUFBQTtFQUFnQixnQkFBQTtBQ2tDcEo7O0FEaENBO0VBQTZCLGtCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLG1CQUFBO0FDeUNwSDs7QUR4Q0E7RUFBbUMsZUFBQTtFQUFtQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGlCQUFBO0FDcURyTDs7QURwREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUN1REo7O0FEckRBO0VBQ0ksYUFBQTtBQ3dESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS92aWV3cHJvZmlsZS92aWV3cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5maWxlX3VwbG9hZDJ7aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O3dpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgbWFyZ2luOiA1cHggIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjODg4ODg4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7fVxuLmN1c3RvbV91cGxvYWQxe3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAlO2hlaWdodDogMTAwJTtjdXJzb3I6IHBvaW50ZXI7b3BhY2l0eTogMDt0ZXh0LWluZGVudDogLTEwMHB4O31cblxuLmRldGFpbF9jb250ZW50IGEuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6ICNmOTZhYjM7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7cGFkZGluZzogNXB4IDIwcHg7Ym94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMzttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFue3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IC05cHg7cmlnaHQ6IC04cHg7YmFja2dyb3VuZDogI2U0MjUyNTtoZWlnaHQ6IDIwcHg7d2lkdGg6IDIwcHg7Ym9yZGVyLXJhZGl1czogNTAlO2ZvbnQtc2l6ZTogMTNweDtmb250LXdlaWdodDogNjAwO31cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbnsgY3Vyc29yOiBwb2ludGVyOyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogN3B4O2JhY2tncm91bmQ6ICNlNDI1MjU7aGVpZ2h0OiAyMHB4O3dpZHRoOiAyMHB4O2JvcmRlci1yYWRpdXM6IDUwJTtmb250LXNpemU6IDEzcHg7Zm9udC13ZWlnaHQ6IDYwMDtwYWRkaW5nLWxlZnQ6IDdweDt9XG4udG9wX3ZpZXcgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE1M3B4O1xuICAgIHdpZHRoOiAxNTNweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0iLCJpbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0xMDBweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjk2YWIzO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTlweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJhY2tncm91bmQ6ICNlNDI1MjU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2U0MjUyNTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4udG9wX3ZpZXcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE1M3B4O1xuICB3aWR0aDogMTUzcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/profile/viewprofile/viewprofile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/profile/viewprofile/viewprofile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileComponent", function() { return ViewprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");




let ViewprofileComponent = class ViewprofileComponent {
    constructor(httpService, error) {
        this.httpService = httpService;
        this.error = error;
        this.url = 'assets/images/change.png';
        this.salonImageUrlArray = [];
        this.slide = [];
    }
    ngOnInit() {
        this.getUserProfile();
    }
    getUserProfile() {
        this.httpService.getRequest('GET', 'PROFILE', '')
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
                this.url = this.detail.logo ? this.detail.logo : this.url;
                if (this.detail && this.detail.imgs) {
                    this.detail.imgs.map(item => {
                        item = this.detail.bp + item;
                        this.salonImageUrlArray.push(item);
                        this.slide = [...this.slide, { 'url': item, clickAction: () => alert('custom click function') }];
                    });
                }
            }
            else {
                if (response.err) {
                    this.error.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            this.error.handleError(0);
            // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
        });
    }
};
ViewprofileComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }
];
ViewprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/viewprofile/viewprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewprofile.component.scss */ "./src/app/home/profile/viewprofile/viewprofile.component.scss")).default]
    })
], ViewprofileComponent);



/***/ }),

/***/ "./src/app/home/profile/viewprofile/viewprofile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/viewprofile/viewprofile.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewprofileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileModule", function() { return ViewprofileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewprofile-routing.module */ "./src/app/home/profile/viewprofile/viewprofile-routing.module.ts");
/* harmony import */ var _viewprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewprofile.component */ "./src/app/home/profile/viewprofile/viewprofile.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");









let ViewprofileModule = class ViewprofileModule {
};
ViewprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_viewprofile_component__WEBPACK_IMPORTED_MODULE_4__["ViewprofileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewprofileRoutingModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
                libraries: ["places"]
            }),
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })
], ViewprofileModule);



/***/ })

}]);
//# sourceMappingURL=19-es2015.js.map