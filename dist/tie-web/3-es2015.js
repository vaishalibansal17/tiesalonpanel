(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <!--right-side-content-->\n    <div class=\"main-header\">\n        <div class=\"right-nav\">\n          <h1>Welcome to our {{detail? detail.name : ''}} Admin</h1>\n          <div class=\"top-right\">\n            <ul>\n              <li> \n                <button mat-button [matMenuTriggerFor]=\"lan_menu\" [disableRipple]=\"true\">{{lang=='en'?\"En\":\"Ar\"}} <img src=\"{{lang=='en'?'assets/images/flag_en.png':'assets/images/flag_ar.png'}}\" alt=\"England\">\n                  <img class=\"drop_img\" src=\"assets/images/dropdown_grey.png\" alt=\"\"></button>\n                <mat-menu #lan_menu=\"matMenu\" xPosition=\"before\">\n                  <button mat-menu-item>Ar <img src=\"assets/images/flag_ar.png\" (click)=\"setLang('ua')\" alt=\"England\"></button>\n                  <button mat-menu-item>En <img src=\"assets/images/flag_en.png\" (click)=\"setLang('en')\" alt=\"England\"></button>\n                </mat-menu></li>\n              <li>              \n                <button mat-button [matMenuTriggerFor]=\"dropdown_notification\" [disableRipple]=\"true\"><img src=\"assets/images/notification.png\" alt=\"Notification\"></button>\n                <mat-menu #dropdown_notification=\"matMenu\" xPosition=\"before\">\n                    <div class=\"notifi_list\">\n                        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                        <div class=\"noti_right\">\n                            Jane Doe wants to book you for haircut.\n                        </div>\n                    </div>\n                    <div class=\"notifi_list\">\n                      <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                      <div class=\"noti_right\">\n                          Jane Doe wants to book you for haircut.\n                      </div>\n                  </div>\n                  <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                    <div class=\"noti_right\">\n                        Jane Doe wants to book you for haircut.\n                    </div>\n                </div>\n                  <div class=\"text-center\"><a [routerLink]=\"['/notification']\">View All</a></div>\n                </mat-menu>\n              </li>\n              <li>\n                <button mat-button [matMenuTriggerFor]=\"beforeMenu\" [disableRipple]=\"true\"><img class=\"profile_img\" src=\"{{detail.logo}}\" alt=\"\">\n                 <span class=\"mobile_hidden\"> {{detail.name | titlecase}} Admin</span> <img class=\"drop_img\" src=\"assets/images/dropdown_grey.png\" alt=\"\"></button>\n                <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n                  <button mat-menu-item><a [routerLink]=\"['/profile']\"><img src=\"assets/images/edit-profile.png\" alt=\"\">My Profile</a></button>\n                  <button mat-menu-item><a [routerLink]=\"['/profile/change-password']\"><img src=\"assets/images/password.png\" alt=\"\">Change Password</a></button>\n                  <button mat-menu-item><a [routerLink]=\"['/settings']\"><img src=\"assets/images/settings.png\" alt=\"\">Settings</a></button>\n                  <button mat-menu-item (click)='logout()'><img src=\"assets/images/log_out.png\" alt=\"\">Logout</button>\n                </mat-menu>\n              </li>\n            </ul>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n    \n      </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n<div class=\"main-data\">\n<!-- <ul class=\"breadcrumb\">\n    <li>Dashboard</li>\n</ul> -->\n<app-breadcrumb></app-breadcrumb>\n    <router-outlet></router-outlet>\n</div>\n</div>\n<app-support></app-support>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--sidebar-->\n<div class=\"left-nav\">\n    <div class=\"nav-ham\"><img src=\"assets/images/menu.png\"  class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle();\" alt=\"ham\"></div>\n  <div class=\"logo\"><img src=\"assets/images/tie_logo_white.png\" alt=\"Logo\"></div> \n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard']\"><img src=\"assets/images/home.png\" alt=\"Home\" class=\"non-hover\"><img src=\"assets/images/home_black.png\" alt=\"Home\" class=\"hover\"><span>{{'DASHBOARD'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/staff']\"><img src=\"assets/images/staff.png\" alt=\"Staff\" class=\"non-hover\"><img src=\"assets/images/staff_black.png\" alt=\"Staff\" class=\"hover\"><span>{{'STAFF'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/bookings.png\" alt=\"Bookings\" class=\"non-hover\"><img src=\"assets/images/bookings_black.png\" alt=\"Bookings\" class=\"hover\"><span>{{'BOOKING'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/Group 2.png\" alt=\"Users\" class=\"non-hover\"><img src=\"assets/images/Group-2-black.png\" alt=\"Users\" class=\"hover\"><span>{{'WALKUSR'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/calendar.png\" alt=\"Calendar\" class=\"non-hover\"><img src=\"assets/images/calendar_black.png\" alt=\"Calendar\" class=\"hover\"><span>{{'MANAGECALENDER'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/offer.png\" alt=\"Offers\" class=\"non-hover\"><img src=\"assets/images/offer_black.png\" alt=\"Offers\" class=\"hover\"><span>{{'PROMOCODES'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/reports.png\" alt=\"Reports\" class=\"non-hover\"><img src=\"assets/images/reports_black.png\" alt=\"Reports\" class=\"hover\"><span>{{'REPORT'| translate}}</span></a></li>\n          <!-- <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/commissions.png\" alt=\"Commissions\" class=\"non-hover\"><img src=\"assets/images/commissions_black.png\" alt=\"Commissions\" class=\"hover\"><span>Commissions</span></a></li> -->\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/chats.png\" alt=\"CHAT\" class=\"non-hover\"><img src=\"assets/images/chats_black.png\" alt=\"CHAT\" class=\"hover\"><span>{{'CHAT'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/cancellation.png\" alt=\"Cancellation\" class=\"non-hover\"><img src=\"assets/images/cancellation_black.png\" alt=\"Cancellation\" class=\"hover\"><span>{{'CANCELLATIONPOLICY'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/feedback.png\" alt=\"Feedback\" class=\"non-hover\"><img src=\"assets/images/feedback_black.png\" alt=\"Feedback\" class=\"hover\"><span>{{'FEEDBACK'| translate}}</span></a></li>\n          <li routerLinkActive=\"active\"><a href=\"javascript:void(0)\"><img src=\"assets/images/about.png\" alt=\"About\" class=\"non-hover\"><img src=\"assets/images/about_black.png\" alt=\"About\" class=\"hover\"><span>{{'ABOUTUS'| translate}}</span></a></li>\n        </ul>\n      </div>\n    </nav>\n</div> \n\n\n\n<!-- code for hamburgur -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/support/support.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/support/support.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-support\">\n    <img src=\"assets/images/flot_btn.png\" alt=\"\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs;\">\n\t\t\t\t<a [ngClass]=\"breadcrumb.status === false ? 'not-active' : ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n\t\t\t</li>\n\t\t</ol>\n\t</div>\n</div>\n\n<!-- <div class=\"max-container\">\n\t<div class=\"sub-header\">\n\t\t<ol class=\"breadcrumb\" *ngIf=\"isEdit\">\n\t\t\t<li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs; let i = index; last as last\">\n\t\t\t\t<a *ngIf=\"!last\" [ngClass]=\"breadcrumb.status === false ? 'not-active' : ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n\t\t\t\t<a *ngIf=\"last\" [ngClass]=\"breadcrumb.status === false ? 'not-active' : ''\" [routerLink]=\"breadcrumb.url\">{{(isShowEventName?eventName+'&nbsp;&nbsp;/&nbsp;&nbsp;':'')+breadcrumb.label}}</a>\n\t\t\t</li>\n\t\t</ol>\n\t\t<ol class=\"breadcrumb\" *ngIf=\"!isEdit\">\n\t\t\t<li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs; let i = index; last as last\">\n\t\t\t\t<a [ngClass]=\"breadcrumb.status === false ? 'not-active' : ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n\t\t\t</li>\n\t\t</ol>\n\t</div>\n</div> -->");

/***/ }),

/***/ "./src/app/home/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/message.service */ "./src/app/shared/service/message.service.ts");
/* harmony import */ var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/translate.service */ "./src/app/shared/service/translate.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(httpservice, message, trns) {
        this.httpservice = httpservice;
        this.message = message;
        this.trns = trns;
        this.lang = 'assets/images/flag_en.png';
    }
    ngOnInit() {
        this.detail = JSON.parse(localStorage.getItem('salon'));
        this.message.getMessage().subscribe(message => {
            if (message.text === 'profile changed') {
                this.detail = JSON.parse(localStorage.getItem('salon'));
                this.detail.logo ? this.detail.logo : 'assets/images/profile.png';
            }
        });
    }
    setLang(lang) {
        this.lang = lang;
        this.trns.use(lang);
    }
    logout() {
        this.httpservice.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/home/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");




const routes = [{
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/home/dashboard/dashboard.module.ts")).then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/home/dashboard/dashboard.module.ts")).then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
            { path: 'notification', loadChildren: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "./src/app/home/notification/notification.module.ts")).then(mod => mod.NotificationModule), data: { title: "Notification", status: false } },
            { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/home/profile/profile.module.ts")).then(mod => mod.ProfileModule), data: { title: "Profile", status: true } },
            { path: 'settings', loadChildren: () => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/home/settings/settings.module.ts")).then(mod => mod.SettingsModule) },
            { path: 'staff', loadChildren: () => __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./staff/staff.module */ "./src/app/home/staff/staff.module.ts")).then(mod => mod.StaffModule) }
        ]
    },];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");



let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/home/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/support.component */ "./src/app/home/support/support.component.ts");
/* harmony import */ var _shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var _shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/breadcrumb/breadcrumb.module */ "./src/app/shared/breadcrumb/breadcrumb.module.ts");





// import { HeaderModule } from './header/header.module';
// import { SidebarModule } from './sidebar/sidebar.module';









let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__["ApplicationpipeModule"],
            _shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"]
        ],
        providers: [_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor(element) {
        this.element = element;
        this.sidebarVisible = true;
    }
    ngOnInit() {
        this.type = localStorage.getItem('type');
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.sidebarOpen();
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        body.classList.remove('nav-close');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        body.classList.add('nav-close');
    }
    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/home/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/home/support/support.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/support/support.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/support/support.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/support/support.component.ts ***!
  \***************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/support/support.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.component.scss */ "./src/app/home/support/support.component.scss")).default]
    })
], SupportComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb .not-active {\n  pointer-events: none;\n  cursor: default;\n  color: #868e96;\n}\n\n.breadcrumb {\n  background-color: white;\n  font-size: 19px;\n  padding: 0;\n  font-weight: 600;\n  margin-bottom: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRDs7QURDQTtFQUNDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNHLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIgLm5vdC1hY3RpdmUge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRjb2xvcjogIzg2OGU5Njtcbn1cbi5icmVhZGNydW1ie1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxOXB4O1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG59IiwiLmJyZWFkY3J1bWIgLm5vdC1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzg2OGU5Njtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/message.service */ "./src/app/shared/service/message.service.ts");






let BreadcrumbComponent = class BreadcrumbComponent {
    /**
   * @class BreadcrumbComponent
   * @constructor
   */
    constructor(router, route, messageService) {
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.tempState = [];
        this.isEdit = false;
        this.isShowEventName = false;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(() => {
            this.breadcrumbs = [];
            this.tempState = [];
            let currentRoute = this.route.root, url = "";
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(routes => {
                    if (routes.outlet === "primary") {
                        const routeSnapshot = routes.snapshot;
                        url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
                        if (routes.snapshot.data.title !== undefined) {
                            let status = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status = routes.snapshot.data.status;
                            }
                            let icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            let caption = false;
                            if (routes.snapshot.data.caption !== undefined) {
                                caption = routes.snapshot.data.caption;
                            }
                            if (!this.tempState.includes(routes.snapshot.data.title)) {
                                this.tempState.push(routes.snapshot.data.title);
                                this.breadcrumbs.push({
                                    label: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.startCase(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.toLower(routes.snapshot.data.title)).replace('-', ' '),
                                    icon: icon,
                                    caption: caption,
                                    status: status,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
        // var activeRoute = ['event-privacy','about-event','rsvp','view','speakers', 'attendees', 'exhibitors', 'agenda', 'sponsors', 'media-partners', 'floor-plan'];
        // let routeArr = this.router.url.split('/');
        // this.isShowEventName = _.includes(activeRoute, (routeArr[this.router.url.split('/').length-2]));
        // this.isEdit = localStorage.getItem('isEdit') == '1' || localStorage.getItem('isView') == '1' ? true : false;
        // this.eventName = localStorage.getItem('eventDetail') && localStorage.getItem('eventDetail') != '' ? JSON.parse(localStorage.getItem('eventDetail')).event.eventName : '';
        // this.subscription = this.messageService.getEventName().subscribe((name) => {
        // 	this.eventName = this.eventName == "" || this.eventName == null ? name.text : this.eventName;
        // });
        // this.eventName = this.eventName == "" ? this.eventName : this.eventName;
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (!!this.subscription)
            this.subscription.unsubscribe();
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BreadcrumbComponent.prototype, "event", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-breadcrumb",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/breadcrumb/breadcrumb.component.scss")).default]
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.module.ts ***!
  \********************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");




// components

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]]
    })
], BreadcrumbModule);



/***/ }),

/***/ "./src/app/shared/service/message.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/service/message.service.ts ***!
  \***************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessageService = class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MessageService);



/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map