(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-bookings.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-bookings.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <h3>{{'NUMOFBOOK'|translate}}</h3>\n  <form action=\"\">\n    <mat-form-field>\n      <input matInput placeholder=\"Number of Bookings\" class=\"form-control\"> \n    </mat-form-field>\n      <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-submit\">Save</button></div>\n    </form>\n  </mat-dialog-content>\n  <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-dialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{'SCHEDULEAPPT' | translate}}</h2>\n<mat-dialog-content>\n  <h3>On 15 minute intervals</h3>\n  <p>Clients can book at 02:00PM, 02:15PM, 02:30PM, 02:45PM, etc.</p>\n  <h3>On 30 minute intervals</h3>\n  <p>Clients can book at 02:00PM, 02:30PM, 03:00PM, 03:30PM, etc.</p>\n  <h3>On hourly intervals</h3>\n  <p>Clients can book at 02:00PM, 03:00PM, 04:00PM, 05:00PM, etc.</p>\n  <h3>Based on service duration</h3>\n  <p>Clients can book based on the total time their service takes and what is currently available in your schedule (i.e. a 2.5 hour service will allow clients to book at 12:00PM, 02:30PM, 05:00PM, etc.)</p>\n</mat-dialog-content>\n  <button mat-button mat-dialog-close><img src=\"assets/images/close.png\" alt=\"Close\"></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'NOTIFICATION'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'LANG'| translate}}</div>\n            <div class=\"col-md-6 alignright\">\n                <ul>\n                    <li class=\"{{lang=='en'?'active':''}}\" (click)=\"setLang('en')\">En <img src=\"assets/images/flag_en.png\" alt=\"English\"></li>\n                    <li class=\"{{lang=='ua'?'active':''}}\" (click)=\"setLang('ua')\">Ar <img src=\"assets/images/flag_ar.png\" alt=\"Arabic\"></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'ONLINBOOKING'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\"> \n        <div class=\"row\">\n            <div class=\"col-md-8\">{{'SCHEDULEAPPT'| translate}} <button mat-raised-button matTooltip=\"{{'SCHEDULEAPPT'| translate}}\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\"><img src=\"assets/images/info.png\" alt=\"Info\"></button></div>\n            <div class=\"col-md-4 alignright\">  \n             <mat-form-field>\n                <mat-label>{{'SCHEDULEAPPT'| translate}}</mat-label>\n                <mat-select (click)=\"openDialog()\" [disableRipple]=\"true\">\n                  <mat-option *ngFor=\"let appointment of appointments\" [value]=\"appointment.value\">\n                    {{appointment.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field></div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'ALLOWMULTISETTINGS'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'HOURSPRIORBOOKING'| translate}}</div>\n            <div class=\"col-md-6 alignright\">3</div>\n        </div>\n    </div>\n    <!-- <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\"><button mat-raised-button (click)=\"openDialog2()\" [disableRipple]=\"true\">{{'NUMOFBOOK'| translate}}</button></div>\n            <div class=\"col-md-6 alignright\">8</div>\n        </div>\n    </div> -->\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'DEACACC'| translate}} \n                <button  [disableRipple]=\"true\" mat-raised-button matTooltip=\"{{'DEACTEXT'| translate}}\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\"><img src=\"assets/images/info.png\" alt=\"Info\"></button>\n            </div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"text-center\"><a href=\"#\" class=\"link\">{{'DELACC'| translate}}</a></div>\n</div>\n\n\n");

/***/ }),

/***/ "./src/app/home/settings/settings-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/settings/settings-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/home/settings/settings.component.ts");




const routes = [{
        path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/home/settings/settings.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/settings/settings.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-card .setting_list ul li {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUErQixlQUFBO0FDRS9CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNhcmQgLnNldHRpbmdfbGlzdCB1bCBsaXtjdXJzb3I6IHBvaW50ZXI7fSIsIi5tYWluLWNhcmQgLnNldHRpbmdfbGlzdCB1bCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/settings/settings.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent, DialogContentExampleDialog, DialogBookingSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBookingSettings", function() { return DialogBookingSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/translate.service */ "./src/app/shared/service/translate.service.ts");





let SettingsComponent = class SettingsComponent {
    constructor(dialog, trns) {
        this.dialog = dialog;
        this.trns = trns;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
        this.lang = localStorage.getItem('lang') || 'en';
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, { width: '500px', disableClose: true });
    }
    openDialog2() {
        const dialogRef = this.dialog.open(DialogBookingSettings, { width: '500px', disableClose: true });
    }
    ngOnInit() {
    }
    setLang(lang) {
        localStorage.setItem('lang', lang);
        this.lang = lang;
        this.trns.use(this.lang);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/home/settings/settings.component.scss")).default]
    })
], SettingsComponent);

let DialogContentExampleDialog = class DialogContentExampleDialog {
    constructor() {
    }
};
DialogContentExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-dialog.component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/home/settings/settings.component.scss")).default]
    })
], DialogContentExampleDialog);

let DialogBookingSettings = class DialogBookingSettings {
    constructor() {
    }
};
DialogBookingSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-bookings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-bookings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings-bookings.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/home/settings/settings.component.scss")).default]
    })
], DialogBookingSettings);



/***/ }),

/***/ "./src/app/home/settings/settings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/settings/settings.module.ts ***!
  \**************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/home/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/home/settings/settings.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");








let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], _settings_component__WEBPACK_IMPORTED_MODULE_4__["DialogContentExampleDialog"], _settings_component__WEBPACK_IMPORTED_MODULE_4__["DialogBookingSettings"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        entryComponents: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["DialogContentExampleDialog"], _settings_component__WEBPACK_IMPORTED_MODULE_4__["DialogBookingSettings"]]
    })
], SettingsModule);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map