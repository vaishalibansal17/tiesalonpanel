(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'NOTIFICATION'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle [(ngModel)]=\"is_notif\" name=\"is_notif\" (change)=\"toggle('is_notif', is_notif)\"></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'LANG'| translate}}</div>\n            <div class=\"col-md-6 alignright\">\n                <ul>\n                    <li class=\"{{lang=='en'?'active':''}}\" (click)=\"setLang('en')\">En <img src=\"assets/images/flag_en.png\" alt=\"English\"></li>\n                    <li class=\"{{lang=='ua'?'active':''}}\" (click)=\"setLang('ua')\">Ar <img src=\"assets/images/flag_ar.png\" alt=\"Arabic\"></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'ONLINBOOKING'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle [(ngModel)]=\"onl_booking\" name=\"onl_booking\" (change)=\"toggle('onl_booking', onl_booking)\"></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\"> \n        <div class=\"row\">\n            <div class=\"col-md-8\">{{'SCHEDULEAPPT'| translate}} <button mat-raised-button matTooltip=\"{{'SCHEDULEAPPT'| translate}}\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\" (click)=\"openDialog()\" ><img src=\"assets/images/info.png\" alt=\"Info\"></button></div>\n            <div class=\"col-md-4 alignright\">  \n                <mat-form-field>\n                    <mat-label>{{'SCHEDULEAPPT'| translate}}</mat-label>\n                    <mat-select [disableRipple]=\"true\" [(ngModel)]=\"sch_apt\" name=\"sch_apt\" (selectionChange)=\"feedbackSubmit()\">\n                      <mat-option *ngFor=\"let appointment of appointments\" [value]=\"appointment.value\">\n                        {{appointment.viewValue}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'ALLOWMULTISETTINGS'| translate}}</div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle name=\"allow_multi\" [(ngModel)]=\"allow_multi\" (change)=\"toggle('allow_multi', allow_multi)\"></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'HOURSPRIORBOOKING'| translate}}</div>\n            <div class=\"col-md-6 alignright\">3</div>\n        </div>\n    </div>\n    <!-- <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\"><button mat-raised-button (click)=\"openDialog2()\" [disableRipple]=\"true\">{{'NUMOFBOOK'| translate}}</button></div>\n            <div class=\"col-md-6 alignright\">8</div>\n        </div>\n    </div> -->\n    <div class=\"setting_list\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">{{'DEACACC'| translate}} \n                <button  [disableRipple]=\"true\" mat-raised-button matTooltip=\"{{'DEACTEXT'| translate}}\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\"><img src=\"assets/images/info.png\" alt=\"Info\"></button>\n            </div>\n            <div class=\"col-md-6 alignright\"><mat-slide-toggle [(ngModel)]=\"is_delete\" name=\"is_delete\" (change)=\"openDialog()\"></mat-slide-toggle></div>\n        </div>\n    </div>\n    <div class=\"text-center\"><a href=\"javascript:void(0)\" (click)=\"openDialog()\" class=\"link\">{{'DELACC'| translate}}</a></div>\n</div>\n\n\n");

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
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/translate.service */ "./src/app/shared/service/translate.service.ts");
/* harmony import */ var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/confim-dialog/confim-dialog.component */ "./src/app/shared/confim-dialog/confim-dialog.component.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










let SettingsComponent = class SettingsComponent {
    constructor(dialog, trns, trnsrv, httpService, errService) {
        this.dialog = dialog;
        this.trns = trns;
        this.trnsrv = trnsrv;
        this.httpService = httpService;
        this.errService = errService;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
        this.lang = localStorage.getItem('lang') || 'en';
        this.allow_multi = false;
        this.onl_booking = false;
        this.is_delete = false;
        this.is_notif = false;
        this.sch_apt = '15';
        this.appointments = [
            { value: '15', viewValue: 'On 15 minute intervals' },
            { value: '30', viewValue: 'On 30 minute intervals' },
            { value: '60', viewValue: 'On hourly intervals' },
            { value: '0', viewValue: 'Based on service duration' },
        ];
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want to delete your account?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (val) {
                this.httpService.getRequest('PUT', 'CANCELPOLICY', { is_delete: this.is_delete }, '').subscribe((response) => {
                    if (response.status === 1) {
                        // let salon = JSON.parse(localStorage.getItem('salon'));
                        // salon.slt_dur = this.sch_apt;
                        // localStorage.setItem('salon', JSON.stringify(salon));
                        localStorage.clear();
                        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
                    }
                    else {
                        console.log(response);
                        this.errService.handleError(response.err.errCode);
                    }
                });
            }
            else
                this.is_delete = false;
        });
    }
    ngOnInit() {
        let salon = JSON.parse(localStorage.getItem('salon'));
        this.allow_multi = salon.allow_multi;
        this.is_notif = salon.is_notif;
        this.onl_booking = salon.onl_booking;
        this.sch_apt = salon.slt_dur;
        this.is_delete = salon.is_delete;
        console.log(salon, this.sch_apt);
    }
    setLang(lang) {
        localStorage.setItem('lang', lang);
        this.lang = lang;
        this.trnsrv.use(this.lang);
    }
    feedbackSubmit() {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want to update Slot duration?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (val) {
                this.httpService.getRequest('PUT', 'SLOT', { slt_dur: this.sch_apt }, '').subscribe((response) => {
                    if (response.status === 1) {
                        let salon = JSON.parse(localStorage.getItem('salon'));
                        salon.slt_dur = this.sch_apt;
                        localStorage.setItem('salon', JSON.stringify(salon));
                        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
                    }
                    else {
                        console.log(response);
                        this.errService.handleError(response.err.errCode);
                    }
                });
            }
        });
    }
    toggle(key, value) {
        let obj = { [key]: value };
        this.httpService.getRequest('PUT', 'CANCELPOLICY', obj, '').subscribe((response) => {
            if (response.status === 1) {
                let salon = JSON.parse(localStorage.getItem('salon'));
                lodash__WEBPACK_IMPORTED_MODULE_9__["extend"](salon, obj);
                localStorage.setItem('salon', JSON.stringify(salon));
                this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SETSUCCESS'));
            }
            else {
                console.log(response);
                this.errService.handleError(response.err.errCode);
            }
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] },
    { type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_7__["HttpRequestService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/home/settings/settings.component.scss")).default]
    })
], SettingsComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        entryComponents: []
    })
], SettingsModule);



/***/ })

}]);
//# sourceMappingURL=43-es2015.js.map