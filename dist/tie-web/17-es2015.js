(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='update()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"File\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'EDITSTFCHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSTAFFNAME'| translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate | titlecase}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">{{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img descrip\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'DESIGNATION'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"designation\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.designation.dirty|| getControl.designation.touched) && getControl.designation.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.designation.errors.required\">{{'DESREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.designation.errors.required && getControl.designation.errors.invalidName \">\n                    {{'ONLYLETR'|translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'SERVICE'| translate}}</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip *ngFor=\"let chip of chips; let i =index\" [disableRipple]=\"true\" [selectable]=\"selectable\" [removable]=\"removable\"\n                    (removed)=\"remove(i, chip)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <!-- <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                    <mat-chip color=\"accent\" selected>Accent fish</mat-chip> -->\n                </mat-chip-list>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'WEEKOFF'| translate}}</mat-label>\n                <mat-select formControlName='day_off'>\n                    <mat-option *ngFor=\"let item of weekoff\" [value]=\"item.value\">\n                        {{item.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n             <div class=\"setting_list\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">{{'AVAILBILITY'| translate}}</div>\n                    <div class=\"col-md-6 alignright\">\n                        <mat-slide-toggle formControlName=\"isAvailable\"></mat-slide-toggle>\n                    </div>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">{{'SAVE' | translate}}</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/staff/editstaff/editstaff-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/staff/editstaff/editstaff-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: EditstaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstaffRoutingModule", function() { return EditstaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editstaff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editstaff.component */ "./src/app/home/staff/editstaff/editstaff.component.ts");




const routes = [{
        path: '', component: _editstaff_component__WEBPACK_IMPORTED_MODULE_3__["EditstaffComponent"]
    }];
let EditstaffRoutingModule = class EditstaffRoutingModule {
};
EditstaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditstaffRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/editstaff/editstaff.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/staff/editstaff/editstaff.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 3px solid #e0e0e0;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid #e3e3e3;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 5px solid #e3e3e3;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid #e3e3e3;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n\n.main-card .setting_list {\n  border-bottom: 0;\n}\n\n.custom_form textarea.form-control {\n  padding-top: 17px;\n}\n\n.custom_form span.email-img.descrip {\n  top: 16px;\n}\n\n.main-card .setting_list {\n  border-bottom: none;\n  margin-bottom: 20px;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9lZGl0c3RhZmYvZWRpdHN0YWZmLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3N0YWZmL2VkaXRzdGFmZi9lZGl0c3RhZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qix5QkFBQTtFQUNySCxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEE7RUFBZ0Isa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFlBQUE7RUFBYSxlQUFBO0VBQWdCLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0FDZTVHOztBRGJBO0VBQXNCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLCtCQUFBO0VBQWdDLG1CQUFBO0FDeUJuTDs7QUR4QkE7RUFBMkIsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FDdUMvTTs7QURyQ0E7RUFBNkIsa0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsbUJBQUE7QUM4Q3BIOztBRDdDQTtFQUFrQyxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUM0RHROOztBRDFEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDNkRKOztBRDNEQTtFQUFVLGtCQUFBO0VBQW1CLHFCQUFBO0VBQXFCLGtCQUFBO0FDaUVsRDs7QURoRUE7RUFBWSxjQUFBO0FDb0VaOztBRG5FQTtFQUFvQixpQkFBQTtBQ3VFcEI7O0FEMUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDNkNKOztBRDFDQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qix5QkFBQTtFQUNySCxrQkFBQTtFQUNBLGtCQUFBO0FDa0RKOztBRGpEQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7QUMyRDVHOztBRHpEQTtFQUFzQixrQkFBQTtFQUFrQixtQkFBQTtFQUFvQixzQkFBQTtFQUF3QixTQUFBO0VBQVUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQiwrQkFBQTtFQUFnQyxtQkFBQTtBQ3FFbkw7O0FEcEVBO0VBQTJCLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixpQkFBQTtBQ21GL007O0FEakZBO0VBQTZCLGtCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLG1CQUFBO0FDMEZwSDs7QUR6RkE7RUFBa0MsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FDd0d0Tjs7QUR0R0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3lHSjs7QUR2R0E7RUFBVSxrQkFBQTtFQUFtQixxQkFBQTtFQUFxQixrQkFBQTtBQzZHbEQ7O0FENUdBO0VBQVksY0FBQTtBQ2dIWjs7QUQvR0E7RUFBb0IsaUJBQUE7QUNtSHBCOztBRHZGQTtFQUE0QixnQ0FBQTtBQzJGNUI7O0FEMUZBO0VBQXdCLG9DQUFBO0VBQXFDLGtCQUFBO0VBQW1CLG1CQUFBO0FDZ0doRjs7QUQ5RkE7RUFBdUQsWUFBQTtBQ2tHdkQ7O0FEaEdBO0VBQXlCLGdCQUFBO0FDb0d6Qjs7QURuR0E7RUFBbUMsaUJBQUE7QUN1R25DOztBRHRHQTtFQUFvQyxTQUFBO0FDMEdwQzs7QUR6R0E7RUFBeUIsbUJBQUE7RUFBb0IsbUJBQUE7RUFBb0IsaUJBQUE7QUMrR2pFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdGFmZi9lZGl0c3RhZmYvZWRpdHN0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVfaW5wdXQgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZTBlMGUwO1xufVxuXG5pbWcuZmlsZV91cGxvYWQye2hlaWdodDogMTAwcHggIWltcG9ydGFudDt3aWR0aDogMTAwcHggIWltcG9ydGFudDsgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDsgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O31cbi5jdXN0b21fdXBsb2FkMXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMHB4O2hlaWdodDogMTAwJTtjdXJzb3I6IHBvaW50ZXI7b3BhY2l0eTogMDt0ZXh0LWluZGVudDogLTExMHB4O3otaW5kZXg6IDk5MDt9XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0bntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOiAjZjk2YWIzO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O3BhZGRpbmc6IDVweCAyMHB4O2JveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3BhbntjdXJzb3I6IHBvaW50ZXI7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwcHg7YmFja2dyb3VuZDogI0ZGMjYyNjtoZWlnaHQ6IDIycHg7d2lkdGg6IDIycHg7Ym9yZGVyLXJhZGl1czogNTAlOyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogMXB4IDBweDtsaW5lLWhlaWdodDogMThweDt9XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3B7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW57Y3Vyc29yOiBwb2ludGVyO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHB4O2JhY2tncm91bmQ6ICNGRjI2MjY7aGVpZ2h0OiAyMnB4O3dpZHRoOiAyMnB4O2JvcmRlci1yYWRpdXM6IDUwJTsgZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA2MDA7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDFweCAwcHg7bGluZS1oZWlnaHQ6IDE4cHg7fVxuXG4udXBsb2FkLWltYWdlIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB0ZXh0LWluZGVudDogLTExMHB4O1xufVxuLmZpbGVfZGl2e3Bvc2l0aW9uOiByZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6IDE1cHg7fVxubGFiZWwuYmxvY2t7ZGlzcGxheTogYmxvY2t9XG4ud29ya19nYWxsZXJ5IGxhYmVse2Rpc3BsYXk6IGNvbnRlbnRzfVxuXG4vLyAudXBsb2FkLWltYWdlIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAgLnByb2ZpbGUgIHtcbi8vICAgICBkaXNwbGF5Om5vbmU7XG4vLyAgICAgbWFyZ2luOjEwcHg7XG4vLyAgICAgfVxuLy8gICAgICAucHJvZmlsZSAgKyBsYWJlbCB7XG4vLyAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4vLyAgICAgbWFyZ2luOjIwcHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDMycHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbi8vICAgICBib3JkZXI6c29saWQgMXB4ICM2NjZGNzc7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgIGNvbG9yOiM2NjZGNzc7XG4vLyAgICAgfVxuLy8gICAgICAucHJvZmlsZSA6YWN0aXZlICsgbGFiZWwge1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjojMkQ2QzdBO1xuLy8gICAgIGNvbG9yOiNGRkZGRkY7XG4vLyAgICAgfVxuXG5cbi5maWxlX2lucHV0IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbn1cblxuaW1nLmZpbGVfdXBsb2FkMntoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICBtYXJnaW46IDVweCAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7IGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDt9XG4uY3VzdG9tX3VwbG9hZDF7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDBweDtoZWlnaHQ6IDEwMCU7Y3Vyc29yOiBwb2ludGVyO29wYWNpdHk6IDA7dGV4dC1pbmRlbnQ6IC0xMTBweDt6LWluZGV4OiA5OTA7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG57cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDogI2Y5NmFiMztjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDtwYWRkaW5nOiA1cHggMjBweDtib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW57Y3Vyc29yOiBwb2ludGVyO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHB4O2JhY2tncm91bmQ6ICNGRjI2MjY7aGVpZ2h0OiAyMnB4O3dpZHRoOiAyMnB4O2JvcmRlci1yYWRpdXM6IDUwJTsgZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA2MDA7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDFweCAwcHg7bGluZS1oZWlnaHQ6IDE4cHg7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9we3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCBzcGFue2N1cnNvcjogcG9pbnRlcjtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDBweDtiYWNrZ3JvdW5kOiAjRkYyNjI2O2hlaWdodDogMjJweDt3aWR0aDogMjJweDtib3JkZXItcmFkaXVzOiA1MCU7IGZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNjAwO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAxcHggMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O31cblxuLnVwbG9hZC1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbn1cbi5maWxlX2Rpdntwb3NpdGlvbjogcmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OiAxNXB4O31cbmxhYmVsLmJsb2Nre2Rpc3BsYXk6IGJsb2NrfVxuLndvcmtfZ2FsbGVyeSBsYWJlbHtkaXNwbGF5OiBjb250ZW50c31cblxuLy8gLnVwbG9hZC1pbWFnZSB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gIC5wcm9maWxlICB7XG4vLyAgICAgZGlzcGxheTpub25lO1xuLy8gICAgIG1hcmdpbjoxMHB4O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgICsgbGFiZWwge1xuLy8gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuLy8gICAgIG1hcmdpbjoyMHB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAzMnB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4vLyAgICAgYm9yZGVyOnNvbGlkIDFweCAjNjY2Rjc3O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICBjb2xvcjojNjY2Rjc3O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgOmFjdGl2ZSArIGxhYmVsIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzJENkM3QTtcbi8vICAgICBjb2xvcjojRkZGRkZGO1xuLy8gICAgIH1cblxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2Rpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50fVxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3R7Ym9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDRweDttYXJnaW4tYm90dG9tOiAxMHB4O31cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2JvcmRlcjpub25lfVxuXG4ubWFpbi1jYXJkIC5zZXR0aW5nX2xpc3R7Ym9yZGVyLWJvdHRvbTogMH1cbi5jdXN0b21fZm9ybSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7cGFkZGluZy10b3A6IDE3cHg7fVxuLmN1c3RvbV9mb3JtIHNwYW4uZW1haWwtaW1nLmRlc2NyaXB7dG9wOiAxNnB4O31cbi5tYWluLWNhcmQgLnNldHRpbmdfbGlzdHtib3JkZXItYm90dG9tOiBub25lO21hcmdpbi1ib3R0b206IDIwcHg7cGFkZGluZy1ib3R0b206IDA7fSIsIi5maWxlX2lucHV0IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTBlMGUwO1xufVxuXG5pbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZTNlM2UzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWluZGVudDogLTExMHB4O1xuICB6LWluZGV4OiA5OTA7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y5NmFiMztcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRjI2MjY7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGMjYyNjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbn1cblxuLmZpbGVfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxubGFiZWwuYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndvcmtfZ2FsbGVyeSBsYWJlbCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uZmlsZV9pbnB1dCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbn1cblxuaW1nLmZpbGVfdXBsb2FkMiB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jdXN0b21fdXBsb2FkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbiAgei1pbmRleDogOTkwO1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmOTZhYjM7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkYyNjI2O1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRjI2MjY7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udXBsb2FkLWltYWdlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG5cbi5maWxlX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmxhYmVsLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53b3JrX2dhbGxlcnkgbGFiZWwge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc2VsZWN0Lm11bHRpc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdXN0b21fZm9ybSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1haW4tY2FyZCAuc2V0dGluZ19saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmN1c3RvbV9mb3JtIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuXG4uY3VzdG9tX2Zvcm0gc3Bhbi5lbWFpbC1pbWcuZGVzY3JpcCB7XG4gIHRvcDogMTZweDtcbn1cblxuLm1haW4tY2FyZCAuc2V0dGluZ19saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/staff/editstaff/editstaff.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/staff/editstaff/editstaff.component.ts ***!
  \*************************************************************/
/*! exports provided: EditstaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstaffComponent", function() { return EditstaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/confim-dialog/confim-dialog.component */ "./src/app/shared/confim-dialog/confim-dialog.component.ts");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");













let EditstaffComponent = class EditstaffComponent {
    constructor(httpService, router, routes, helper, errorserv, trns, dialog) {
        this.httpService = httpService;
        this.router = router;
        this.routes = routes;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.dialog = dialog;
        this.weekoff = [
            { value: 0, name: 'Sunday' },
            { value: 1, name: 'Monday' },
            { value: 2, name: 'Tuesday' },
            { value: 3, name: 'Wednesday' },
            { value: 4, name: 'Thursday' },
            { value: 5, name: 'Friday' },
            { value: 6, name: 'Saturday' },
        ];
        this.chips = [];
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_12__["IMG"].PRO;
        this.loader = false;
        this.submitted = false;
        this.dataSource = [];
        this.selectable = true;
        this.removable = true;
        this.sendServ = [];
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getServices();
        this.getUserProfile();
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator
            ]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].validateEmail
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].phonevalidator,
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(500)
            ]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            day_off: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            isAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](true),
        });
    }
    getUserProfile() {
        this.httpService.getRequest('GET_PARMS', 'STAFF_DETAIL', this.id)
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
                this.profile.patchValue({
                    name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
                    email: this.detail.hasOwnProperty('email') ? this.detail.email : '',
                    designation: this.detail.hasOwnProperty('designation') ? this.detail.designation : '',
                    phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
                    serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : '',
                    description: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
                    day_off: this.detail.hasOwnProperty('day_off') ? this.detail.day_off : '',
                    isAvailable: this.detail.hasOwnProperty('avlblity') ? this.detail.avlblity : true,
                });
                this.chips.push(...this.detail.services);
                for (let index = 0; index < this.detail.services.length; index++) {
                    this.sendServ.push(this.detail.services[index]['_id']);
                }
                this.url = this.detail.img ? this.detail.img : this.url;
                this.dataSource = this.detail.services;
            }
            else {
                if (response.err) {
                    this.errorserv.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (!val) {
                if (!val && this.profile.value.isAvailable)
                    this.profile.controls['isAvailable'].setValue(false);
                else
                    this.profile.controls['isAvailable'].setValue(true);
            }
        });
    }
    update() {
        this.submitted = true;
        // return false
        this.formData = new FormData();
        if (this.profile.valid) {
            if (this.profileImage)
                this.formData.append('staff_img', this.profileImage, this.profileImage.name);
            this.formData.append('name', this.profile.value.name);
            this.formData.append('email', this.profile.value.email);
            this.formData.append('phone', this.profile.value.phone);
            this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
            this.formData.append('services', JSON.stringify(this.sendServ));
            this.formData.append('day_off', this.profile.value.day_off);
            this.formData.append('designation', this.profile.value.designation);
            this.formData.append('avlblity', this.profile.value.isAvailable);
            this.httpService.getRequest('PUT', 'STAFF', this.formData, this.id)
                .subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    this.router.navigateByUrl('/staff').then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('STAFFSUCCESS')));
                }
                else {
                    if (response.err) {
                        this.errorserv.handleError(response.err.errCode);
                    }
                }
            }, (error) => {
                this.errorserv.handleError(0);
            });
        }
        else {
            console.log(this.profile);
        }
    }
    get getControl() { return this.profile.controls; }
    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            if (this.helper.isImage(event.target.files[0].type)) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.url = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
                this.profileImage = event.target.files[0];
            }
            else {
                // this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
            }
        }
    }
    getServices() {
        this.httpService.getRequest('GET', 'SERVICES', '')
            .subscribe((response) => {
            if (response.status === 1) {
                this.services = response.res.services;
            }
            else {
                if (response.err) {
                    this.errorserv.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
    slctsrv(state) {
        const matSelect = state.source;
        matSelect.writeValue(null);
        state = state.value;
        if (!this.httpService.arraySearch(this.sendServ, state)) {
            this.chips.push({ _id: state._id, cat_name: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)) });
            this.sendServ.push(state._id);
            return;
        }
        else {
        }
    }
    remove(service, data) {
        this.chips = this.chips.filter(v => v._id !== data._id);
        this.sendServ = this.sendServ.filter(v => v !== data._id);
    }
};
EditstaffComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__["Helper"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
EditstaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editstaff',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editstaff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editstaff.component.scss */ "./src/app/home/staff/editstaff/editstaff.component.scss")).default]
    })
], EditstaffComponent);



/***/ }),

/***/ "./src/app/home/staff/editstaff/editstaff.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/staff/editstaff/editstaff.module.ts ***!
  \**********************************************************/
/*! exports provided: EditstaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstaffModule", function() { return EditstaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _editstaff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editstaff-routing.module */ "./src/app/home/staff/editstaff/editstaff-routing.module.ts");
/* harmony import */ var _editstaff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editstaff.component */ "./src/app/home/staff/editstaff/editstaff.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let EditstaffModule = class EditstaffModule {
};
EditstaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_editstaff_component__WEBPACK_IMPORTED_MODULE_4__["EditstaffComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _editstaff_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditstaffRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })
], EditstaffModule);



/***/ }),

/***/ "./src/app/shared/constants/constant.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/constants/constant.ts ***!
  \**********************************************/
/*! exports provided: ERROR_MSG, LIMIT, IMG, MESSAGE, DELETE, MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function() { return ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG", function() { return IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP", function() { return MAP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ERROR_MSG = {
    HTTP_SUBSCRIBER_ERROR: 'Network Error.',
    UNAUTHURIZED_ERROR: 'You are not an authorized user.',
};
const LIMIT = [10, 20, 30];
const IMG = {
    PRO: 'assets/images/user-add.png',
    USR: 'assets/images/noti-pro.png'
};
const MESSAGE = {
    SUCCESS: 'SUCCESS',
    FORGOT_SUC: 'Forgot Password Link has been sent successfully.',
    FORGOT_FAIL: 'Admin not found'
};
const DELETE = {
    DELETE_TITLE: '',
    DELETE_MSG: 'You wont be able to revert this!',
    DELETE_CONFIRM_TEXT: 'Yes, delete it!'
};
const MAP = {
    KEY: "AIzaSyDiESz5lmd8ZNxAGBg3ILiQ8w9SFuYwAB8",
    type: "places"
};


/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map