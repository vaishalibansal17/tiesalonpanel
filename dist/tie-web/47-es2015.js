(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-12 top_view\"><img [src]=\"url\" alt=\"User\"><span class=\"user_name\">{{detail?.name | titlecase }}</span></div>\n        <div class=\"col-md-3 label\">{{'EMAIL'| translate | titlecase}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.email ? detail.email:'NA'}}</div>\n        <div class=\"col-md-3 label\">{{'MOBILENUMBER'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.phone}}</div>\n        <div class=\"col-md-3 label\">{{'REVIEWS'| translate}}:</div>\n        <div class=\"col-md-9 description\"><div class=\"staffdetail_staff\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"detail?.rvw_rt\"></ngx-stars></div></div>\n        <div class=\"col-md-3 label\">{{'DESCRIPTION'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.desc?detail.desc:'NA'}}</div>\n        <div class=\"col-md-3 label\">{{'DESIGNATION'| translate}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.designation ?detail.designation:'NA'}}</div>\n        <div class=\"col-md-3 label\">{{'AVAILBILITY'| translate | titlecase}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.avlblity ? 'Available':'Not Available'}}</div>\n        <div class=\"col-md-3 label\">{{'WEEKOFF'| translate | titlecase}}:</div>\n        <div class=\"col-md-9 description\">{{detail && detail.doff ? detail.doff:'NA'}}</div>\n        <div class=\"col-md-12 alignright\"><a [routerLink]=\"['/staff/review', id]\" class=\"btn btn-link\">View All</a></div>\n        <div class=\"col-md-3\">\n            <h3>{{'REVIEWS'| translate}}:</h3>\n        </div>\n        <div class=\"col-md-9\" *ngIf=\"(detail?.reviews.length>0?0:1)\">\n            <span> *NO REVIEWS.</span>\n        </div>\n        <div class=\"staffdetail_notifi\">\n           \n            <div class=\"staffdetail_notifi\" *ngIf=\"detail\">\n                <div class=\"notifi_list\" *ngFor=\"let review of detail.reviews\">\n                    <div class=\"noti_left\"><img [src]=\"review.img? (detail.usr_bp + review.img):usrurl\" alt=\"Notification User\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"author-review\">\n                            <div class=\"author\">{{review.name | titlecase}}</div>\n                            <div class=\"reviews\">\n                                <div class=\"staffdetail_staff\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"review.rvw_rt\"></ngx-stars></div>\n                            </div>\n                        </div>\n                        {{review.comment}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: StaffdetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailRoutingModule", function() { return StaffdetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _staffdetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffdetail.component */ "./src/app/home/staff/staffdetail/staffdetail.component.ts");




const routes = [{
        path: '', component: _staffdetail_component__WEBPACK_IMPORTED_MODULE_3__["StaffdetailComponent"]
    }];
let StaffdetailRoutingModule = class StaffdetailRoutingModule {
};
StaffdetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaffdetailRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvc3RhZmZkZXRhaWwvc3RhZmZkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.component.ts ***!
  \*****************************************************************/
/*! exports provided: StaffdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailComponent", function() { return StaffdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");






let StaffdetailComponent = class StaffdetailComponent {
    constructor(httpService, routes, error) {
        this.httpService = httpService;
        this.routes = routes;
        this.error = error;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["IMG"].PRO;
        this.usrurl = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["IMG"].PRO;
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getUserProfile();
    }
    getUserProfile() {
        this.httpService.getRequest('GET_PARMS', 'STAFF_DETAIL', this.id, `${'limit=' + 5 + '&page=' + 0}`)
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
                this.url = this.detail.img ? this.detail.img : this.url;
                this.detail.doff = this.chckDay(this.detail.day_off);
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
    chckDay(day) {
        console.log(day);
        switch (day) {
            case 0:
                return 'Sunday';
                break;
            case 1:
                return 'Monday';
                break;
            case 2:
                return 'Tuesday';
                break;
            case 3:
                return 'Wednesday';
                break;
            case 4:
                return 'Thursday';
                break;
            case 5:
                return 'Friday';
                break;
            case 6:
                return 'Saturday';
                break;
            default:
                break;
        }
    }
};
StaffdetailComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }
];
StaffdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffdetail/staffdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffdetail.component.scss */ "./src/app/home/staff/staffdetail/staffdetail.component.scss")).default]
    })
], StaffdetailComponent);



/***/ }),

/***/ "./src/app/home/staff/staffdetail/staffdetail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/staff/staffdetail/staffdetail.module.ts ***!
  \**************************************************************/
/*! exports provided: StaffdetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffdetailModule", function() { return StaffdetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _staffdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffdetail-routing.module */ "./src/app/home/staff/staffdetail/staffdetail-routing.module.ts");
/* harmony import */ var _staffdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staffdetail.component */ "./src/app/home/staff/staffdetail/staffdetail.component.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm2015/ngx-stars.js");








console.log('---=-=-=-=-=-=-=--');
let StaffdetailModule = class StaffdetailModule {
};
StaffdetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_staffdetail_component__WEBPACK_IMPORTED_MODULE_4__["StaffdetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _staffdetail_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffdetailRoutingModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationpipeModule"],
            ngx_stars__WEBPACK_IMPORTED_MODULE_7__["NgxStarsModule"]
        ], providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]]
    })
], StaffdetailModule);



/***/ })

}]);
//# sourceMappingURL=47-es2015.js.map