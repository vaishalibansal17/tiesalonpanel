(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='update()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'CHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSTAFFNAME'| translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">{{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Services</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event.value)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip *ngFor=\"let chip of chips; let i =index\" [disableRipple]=\"true\" [selectable]=\"selectable\" [removable]=\"removable\"\n                        (removed)=\"remove(i)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <!-- <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                    <mat-chip color=\"accent\" selected>Accent fish</mat-chip> -->\n                </mat-chip-list>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 3px solid #e0e0e0;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 5px solid whitesmoke;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9lZGl0c3RhZmYvZWRpdHN0YWZmLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3N0YWZmL2VkaXRzdGFmZi9lZGl0c3RhZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qiw0QkFBQTtFQUNySCxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEE7RUFBZ0Isa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFlBQUE7RUFBYSxlQUFBO0VBQWdCLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0FDZTVHOztBRGJBO0VBQXNCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLCtCQUFBO0VBQWdDLG1CQUFBO0FDeUJuTDs7QUR4QkE7RUFBMkIsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FDdUMvTTs7QURyQ0E7RUFBNkIsa0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsbUJBQUE7QUM4Q3BIOztBRDdDQTtFQUFrQyxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUM0RHROOztBRDFEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDNkRKOztBRDNEQTtFQUFVLGtCQUFBO0VBQW1CLHFCQUFBO0VBQXFCLGtCQUFBO0FDaUVsRDs7QURoRUE7RUFBWSxjQUFBO0FDb0VaOztBRG5FQTtFQUFvQixpQkFBQTtBQ3VFcEI7O0FEMUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDNkNKOztBRDFDQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qiw0QkFBQTtFQUNySCxrQkFBQTtFQUNBLGtCQUFBO0FDa0RKOztBRGpEQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7QUMyRDVHOztBRHpEQTtFQUFzQixrQkFBQTtFQUFrQixtQkFBQTtFQUFvQixzQkFBQTtFQUF3QixTQUFBO0VBQVUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQiwrQkFBQTtFQUFnQyxtQkFBQTtBQ3FFbkw7O0FEcEVBO0VBQTJCLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixpQkFBQTtBQ21GL007O0FEakZBO0VBQTZCLGtCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLG1CQUFBO0FDMEZwSDs7QUR6RkE7RUFBa0MsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FDd0d0Tjs7QUR0R0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3lHSjs7QUR2R0E7RUFBVSxrQkFBQTtFQUFtQixxQkFBQTtFQUFxQixrQkFBQTtBQzZHbEQ7O0FENUdBO0VBQVksY0FBQTtBQ2dIWjs7QUQvR0E7RUFBb0IsaUJBQUE7QUNtSHBCOztBRHZGQTtFQUE0QixnQ0FBQTtBQzJGNUI7O0FEMUZBO0VBQXdCLG9DQUFBO0VBQXFDLGtCQUFBO0VBQW1CLG1CQUFBO0FDZ0doRjs7QUQ5RkE7RUFBdUQsWUFBQTtBQ2tHdkQiLCJmaWxlIjoic3JjL2FwcC9ob21lL3N0YWZmL2VkaXRzdGFmZi9lZGl0c3RhZmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV9pbnB1dCBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG59XG5cbmltZy5maWxlX3VwbG9hZDJ7aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O3dpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgbWFyZ2luOiA1cHggIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7fVxuLmN1c3RvbV91cGxvYWQxe3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwcHg7aGVpZ2h0OiAxMDAlO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAwO3RleHQtaW5kZW50OiAtMTEwcHg7ei1pbmRleDogOTkwO31cblxuLmRldGFpbF9jb250ZW50IGEuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6ICNmOTZhYjM7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7cGFkZGluZzogNXB4IDIwcHg7Ym94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMzttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFue2N1cnNvcjogcG9pbnRlcjtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDBweDtiYWNrZ3JvdW5kOiAjRkYyNjI2O2hlaWdodDogMjJweDt3aWR0aDogMjJweDtib3JkZXItcmFkaXVzOiA1MCU7IGZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNjAwO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAxcHggMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O31cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbntjdXJzb3I6IHBvaW50ZXI7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwcHg7YmFja2dyb3VuZDogI0ZGMjYyNjtoZWlnaHQ6IDIycHg7d2lkdGg6IDIycHg7Ym9yZGVyLXJhZGl1czogNTAlOyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogMXB4IDBweDtsaW5lLWhlaWdodDogMThweDt9XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG4uZmlsZV9kaXZ7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDogMTVweDt9XG5sYWJlbC5ibG9ja3tkaXNwbGF5OiBibG9ja31cbi53b3JrX2dhbGxlcnkgbGFiZWx7ZGlzcGxheTogY29udGVudHN9XG5cbi8vIC51cGxvYWQtaW1hZ2Uge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vICAucHJvZmlsZSAge1xuLy8gICAgIGRpc3BsYXk6bm9uZTtcbi8vICAgICBtYXJnaW46MTBweDtcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlICArIGxhYmVsIHtcbi8vICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbi8vICAgICBtYXJnaW46MjBweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMzJweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuLy8gICAgIGJvcmRlcjpzb2xpZCAxcHggIzY2NkY3Nztcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgY29sb3I6IzY2NkY3Nztcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlIDphY3RpdmUgKyBsYWJlbCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRDZDN0E7XG4vLyAgICAgY29sb3I6I0ZGRkZGRjtcbi8vICAgICB9XG5cblxuLmZpbGVfaW5wdXQgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG5pbWcuZmlsZV91cGxvYWQye2hlaWdodDogMTAwcHggIWltcG9ydGFudDt3aWR0aDogMTAwcHggIWltcG9ydGFudDsgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDsgYm9yZGVyOiA1cHggc29saWQgd2hpdGVzbW9rZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O31cbi5jdXN0b21fdXBsb2FkMXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMHB4O2hlaWdodDogMTAwJTtjdXJzb3I6IHBvaW50ZXI7b3BhY2l0eTogMDt0ZXh0LWluZGVudDogLTExMHB4O3otaW5kZXg6IDk5MDt9XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0bntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOiAjZjk2YWIzO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O3BhZGRpbmc6IDVweCAyMHB4O2JveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3BhbntjdXJzb3I6IHBvaW50ZXI7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwcHg7YmFja2dyb3VuZDogI0ZGMjYyNjtoZWlnaHQ6IDIycHg7d2lkdGg6IDIycHg7Ym9yZGVyLXJhZGl1czogNTAlOyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogMXB4IDBweDtsaW5lLWhlaWdodDogMThweDt9XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3B7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7bWFyZ2luLWJvdHRvbTogMTVweDt9XG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW57Y3Vyc29yOiBwb2ludGVyO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHB4O2JhY2tncm91bmQ6ICNGRjI2MjY7aGVpZ2h0OiAyMnB4O3dpZHRoOiAyMnB4O2JvcmRlci1yYWRpdXM6IDUwJTsgZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA2MDA7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDFweCAwcHg7bGluZS1oZWlnaHQ6IDE4cHg7fVxuXG4udXBsb2FkLWltYWdlIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB0ZXh0LWluZGVudDogLTExMHB4O1xufVxuLmZpbGVfZGl2e3Bvc2l0aW9uOiByZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6IDE1cHg7fVxubGFiZWwuYmxvY2t7ZGlzcGxheTogYmxvY2t9XG4ud29ya19nYWxsZXJ5IGxhYmVse2Rpc3BsYXk6IGNvbnRlbnRzfVxuXG4vLyAudXBsb2FkLWltYWdlIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAgLnByb2ZpbGUgIHtcbi8vICAgICBkaXNwbGF5Om5vbmU7XG4vLyAgICAgbWFyZ2luOjEwcHg7XG4vLyAgICAgfVxuLy8gICAgICAucHJvZmlsZSAgKyBsYWJlbCB7XG4vLyAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4vLyAgICAgbWFyZ2luOjIwcHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDMycHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbi8vICAgICBib3JkZXI6c29saWQgMXB4ICM2NjZGNzc7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgIGNvbG9yOiM2NjZGNzc7XG4vLyAgICAgfVxuLy8gICAgICAucHJvZmlsZSA6YWN0aXZlICsgbGFiZWwge1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjojMkQ2QzdBO1xuLy8gICAgIGNvbG9yOiNGRkZGRkY7XG4vLyAgICAgfVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7ZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnR9XG4ubWF0LXNlbGVjdC5tdWx0aXNlbGVjdHtib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4uY3VzdG9tX2Zvcm0gbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGR7Ym9yZGVyOm5vbmV9IiwiLmZpbGVfaW5wdXQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG59XG5cbmltZy5maWxlX3VwbG9hZDIge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uY3VzdG9tX3VwbG9hZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtaW5kZW50OiAtMTEwcHg7XG4gIHotaW5kZXg6IDk5MDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjk2YWIzO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGMjYyNjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkYyNjI2O1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnVwbG9hZC1pbWFnZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICB0ZXh0LWluZGVudDogLTExMHB4O1xufVxuXG4uZmlsZV9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5sYWJlbC5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud29ya19nYWxsZXJ5IGxhYmVsIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5maWxlX2lucHV0IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG5pbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWluZGVudDogLTExMHB4O1xuICB6LWluZGV4OiA5OTA7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y5NmFiMztcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRjI2MjY7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGMjYyNjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbn1cblxuLmZpbGVfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxubGFiZWwuYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndvcmtfZ2FsbGVyeSBsYWJlbCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

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










let EditstaffComponent = class EditstaffComponent {
    constructor(httpService, router, routes, helper, errorserv, trns) {
        this.httpService = httpService;
        this.router = router;
        this.routes = routes;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.chips = [];
        this.url = 'assets/images/change.png';
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
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null)
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
                    phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
                    serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : '',
                    description: this.detail.hasOwnProperty('desc') ? this.detail.desc : ''
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
            this.httpService.getRequest('PUT', 'STAFF', this.formData, this.id)
                .subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    this.router.navigateByUrl('/staff');
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
        this.chips.push({ id: state._id, cat_name: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)) });
        this.sendServ.push(state._id);
    }
    remove(service) {
        const index = this.chips.indexOf(service);
        this.chips.splice(index, 1);
        this.sendServ.splice(index, 1);
    }
};
EditstaffComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__["Helper"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] }
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

/***/ "./src/app/shared/service/error.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/service/error.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.service */ "./src/app/shared/service/translate.service.ts");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-request.service */ "./src/app/shared/service/http-request.service.ts");




// import { TranslatePipe } from '../_pipes/translate.pipe';
let ErrorService = class ErrorService {
    constructor(helper, trns) {
        this.helper = helper;
        this.trns = trns;
    }
    handleError(errCode = 0) {
        switch (errCode) {
            case 0:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 1:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
                break;
            case 4:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
                break;
            case 5:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['TKNREQ']);
                break;
            case 6:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDPASS']);
                break;
            case 7:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDOLDPASS']);
                break;
            case 8:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['LINKEXP']);
                break;
            case 9:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDLINK']);
                break;
            case 31:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
            case 39:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
                break;
            default:
                break;
        }
    }
};
ErrorService.ctorParameters = () => [
    { type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorService);



/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map