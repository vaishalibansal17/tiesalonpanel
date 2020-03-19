(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/addstaff/addstaff.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/addstaff/addstaff.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='add()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"File\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'ADDSTFCHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSTAFFNAME'| translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate | titlecase}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img descrip\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'DESIGNATION'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"designation\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.designation.dirty|| getControl.designation.touched) && getControl.designation.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.designation.errors.required\">{{'DESREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.designation.errors.required && getControl.designation.errors.invalidName \">\n                    {{'ONLYLETR'|translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'SERVICE'| translate}}</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\"  class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div class=\"mat-chips\">\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip [disableRipple]=\"true\" *ngFor=\"let chip of chips; let i =index\" [selectable]=\"selectable\" [removable]=\"removable\"\n                        (removed)=\"remove(i, chip)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n                </div>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'WEEKOFF'| translate}}</mat-label>\n                <mat-select formControlName='day_off'>\n                    <mat-option *ngFor=\"let item of weekoff\" [value]=\"item.value\">\n                        {{item.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div class=\"setting_list\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">{{'AVAILBILITY'| translate}}</div>\n                    <div class=\"col-md-6 alignright\">\n                        <mat-slide-toggle formControlName=\"isAvailable\" ></mat-slide-toggle>\n                    </div>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">{{'SAVE' | translate}}</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/staff/addstaff/addstaff-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/staff/addstaff/addstaff-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AddstaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstaffRoutingModule", function() { return AddstaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addstaff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addstaff.component */ "./src/app/home/staff/addstaff/addstaff.component.ts");




const routes = [{
        path: '', component: _addstaff_component__WEBPACK_IMPORTED_MODULE_3__["AddstaffComponent"]
    }];
let AddstaffRoutingModule = class AddstaffRoutingModule {
};
AddstaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddstaffRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/addstaff/addstaff.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/staff/addstaff/addstaff.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 5px solid #e3e3e3;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid #e3e3e3;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.custom_form textarea.form-control {\n  padding-top: 17px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n\n.custom_form span.email-img.descrip {\n  top: 16px;\n}\n\n.main-card .setting_list {\n  border-bottom: none;\n  margin-bottom: 20px;\n  padding-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  .alignright {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9hZGRzdGFmZi9hZGRzdGFmZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zdGFmZi9hZGRzdGFmZi9hZGRzdGFmZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQWlCLHdCQUFBO0VBQXlCLHVCQUFBO0VBQTBCLHNCQUFBO0VBQXdCLDJCQUFBO0VBQTZCLHlCQUFBO0VBQ3JILGtCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURMQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7QUNlNUc7O0FEYkE7RUFBc0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsK0JBQUE7RUFBZ0MsbUJBQUE7QUN5Qm5MOztBRHhCQTtFQUEyQixlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUN1Qy9NOztBRHJDQTtFQUE2QixrQkFBQTtFQUFrQixzQkFBQTtFQUF3QixTQUFBO0VBQVUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixtQkFBQTtBQzhDcEg7O0FEN0NBO0VBQWtDLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixpQkFBQTtBQzREdE47O0FEM0RBO0VBQ0ksaUJBQUE7QUM4REo7O0FENURBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUMrREo7O0FEN0RBO0VBQVUsa0JBQUE7RUFBbUIscUJBQUE7RUFBcUIsa0JBQUE7QUNtRWxEOztBRGxFQTtFQUFZLGNBQUE7QUNzRVo7O0FEckVBO0VBQW9CLGlCQUFBO0FDeUVwQjs7QUQ3Q0E7RUFBNEIsZ0NBQUE7QUNpRDVCOztBRGhEQTtFQUF3QixvQ0FBQTtFQUFxQyxrQkFBQTtFQUFtQixtQkFBQTtBQ3NEaEY7O0FEcERBO0VBQXVELFlBQUE7QUN3RHZEOztBRHZEQTtFQUFvQyxTQUFBO0FDMkRwQzs7QUQxREE7RUFBeUIsbUJBQUE7RUFBb0IsbUJBQUE7RUFBb0IsaUJBQUE7QUNnRWpFOztBRDdEQTtFQUNJO0lBQVksaUJBQUE7RUNpRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvYWRkc3RhZmYvYWRkc3RhZmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV9pbnB1dCBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG59XG5cbmltZy5maWxlX3VwbG9hZDJ7aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O3dpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgbWFyZ2luOiA1cHggIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBib3JkZXI6IDVweCBzb2xpZCAjZTNlM2UzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7fVxuLmN1c3RvbV91cGxvYWQxe3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwcHg7aGVpZ2h0OiAxMDAlO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAwO3RleHQtaW5kZW50OiAtMTEwcHg7ei1pbmRleDogOTkwO31cblxuLmRldGFpbF9jb250ZW50IGEuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6ICNmOTZhYjM7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7cGFkZGluZzogNXB4IDIwcHg7Ym94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMzttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFue2N1cnNvcjogcG9pbnRlcjtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDBweDtiYWNrZ3JvdW5kOiAjRkYyNjI2O2hlaWdodDogMjJweDt3aWR0aDogMjJweDtib3JkZXItcmFkaXVzOiA1MCU7IGZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNjAwO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAxcHggMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O31cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbntjdXJzb3I6IHBvaW50ZXI7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwcHg7YmFja2dyb3VuZDogI0ZGMjYyNjtoZWlnaHQ6IDIycHg7d2lkdGg6IDIycHg7Ym9yZGVyLXJhZGl1czogNTAlOyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogMXB4IDBweDtsaW5lLWhlaWdodDogMThweDt9XG4uY3VzdG9tX2Zvcm0gdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcbn1cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG4uZmlsZV9kaXZ7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDogMTVweDt9XG5sYWJlbC5ibG9ja3tkaXNwbGF5OiBibG9ja31cbi53b3JrX2dhbGxlcnkgbGFiZWx7ZGlzcGxheTogY29udGVudHN9XG5cbi8vIC51cGxvYWQtaW1hZ2Uge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vICAucHJvZmlsZSAge1xuLy8gICAgIGRpc3BsYXk6bm9uZTtcbi8vICAgICBtYXJnaW46MTBweDtcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlICArIGxhYmVsIHtcbi8vICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbi8vICAgICBtYXJnaW46MjBweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMzJweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuLy8gICAgIGJvcmRlcjpzb2xpZCAxcHggIzY2NkY3Nztcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgY29sb3I6IzY2NkY3Nztcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlIDphY3RpdmUgKyBsYWJlbCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRDZDN0E7XG4vLyAgICAgY29sb3I6I0ZGRkZGRjtcbi8vICAgICB9XG5cbi5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZHtkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudH1cbi5tYXQtc2VsZWN0Lm11bHRpc2VsZWN0e2JvcmRlcjogMXB4IHNvbGlkICNkYWQ5ZDkgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA0cHg7bWFyZ2luLWJvdHRvbTogMTBweDt9XG5cbi5jdXN0b21fZm9ybSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZHtib3JkZXI6bm9uZX1cbi5jdXN0b21fZm9ybSBzcGFuLmVtYWlsLWltZy5kZXNjcmlwe3RvcDogMTZweDt9XG4ubWFpbi1jYXJkIC5zZXR0aW5nX2xpc3R7Ym9yZGVyLWJvdHRvbTogbm9uZTttYXJnaW4tYm90dG9tOiAyMHB4O3BhZGRpbmctYm90dG9tOiAwO31cblxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuYWxpZ25yaWdodHt0ZXh0LWFsaWduOiByaWdodDt9XG59IiwiLmZpbGVfaW5wdXQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG59XG5cbmltZy5maWxlX3VwbG9hZDIge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uY3VzdG9tX3VwbG9hZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtaW5kZW50OiAtMTEwcHg7XG4gIHotaW5kZXg6IDk5MDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjk2YWIzO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGMjYyNjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkYyNjI2O1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmN1c3RvbV9mb3JtIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuXG4udXBsb2FkLWltYWdlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG5cbi5maWxlX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmxhYmVsLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53b3JrX2dhbGxlcnkgbGFiZWwge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc2VsZWN0Lm11bHRpc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdXN0b21fZm9ybSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmN1c3RvbV9mb3JtIHNwYW4uZW1haWwtaW1nLmRlc2NyaXAge1xuICB0b3A6IDE2cHg7XG59XG5cbi5tYWluLWNhcmQgLnNldHRpbmdfbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFsaWducmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/staff/addstaff/addstaff.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/staff/addstaff/addstaff.component.ts ***!
  \***********************************************************/
/*! exports provided: AddstaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstaffComponent", function() { return AddstaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/confim-dialog/confim-dialog.component */ "./src/app/shared/confim-dialog/confim-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");












let AddstaffComponent = class AddstaffComponent {
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
        this.url = 'assets/images/user-add.png';
        this.submitted = false;
        this.dataSource = [];
        this.selectable = true;
        this.removable = true;
        this.sendServ = [];
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getServices();
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator
            ]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].validateEmail
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].phonevalidator,
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
            ]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            day_off: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            isAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
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
    openDialog() {
        const dialogRef = this.dialog.open(src_app_shared_confim_dialog_confim_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfimDialogComponent"], { width: '500px', disableClose: true, data: { msg: "Are you sure you want?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
        dialogRef.beforeClosed().subscribe((val) => {
            if (!val) {
                if (!val && this.profile.value.isAvailable)
                    this.profile.controls['isAvailable'].setValue(false);
                else
                    this.profile.controls['isAvailable'].setValue(true);
            }
        });
    }
    add() {
        this.submitted = true;
        // return false
        this.formData = new FormData();
        if (this.profile.valid) {
            if (this.profileImage)
                this.formData.append('staff_img', this.profileImage, this.profileImage.name);
            this.formData.append('name', this.profile.value.name);
            this.formData.append('email', this.profile.value.email);
            this.formData.append('phone', this.profile.value.phone);
            this.formData.append('designation', this.profile.value.designation);
            this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
            this.formData.append('services', JSON.stringify(this.sendServ));
            if (this.profile.value.day_off) {
                this.formData.append('day_off', this.profile.value.day_off);
            }
            this.formData.append('avlblity', this.profile.value.isAvailable);
            this.httpService.getRequest('POST', 'STAFF', this.formData, this.id)
                .subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    this.router.navigateByUrl('/staff').then(() => this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('ADDSTAFFSUCCESS')));
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
AddstaffComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_5__["Helper"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
AddstaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addstaff',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addstaff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/addstaff/addstaff.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addstaff.component.scss */ "./src/app/home/staff/addstaff/addstaff.component.scss")).default]
    })
], AddstaffComponent);



/***/ }),

/***/ "./src/app/home/staff/addstaff/addstaff.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/staff/addstaff/addstaff.module.ts ***!
  \********************************************************/
/*! exports provided: AddstaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstaffModule", function() { return AddstaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addstaff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addstaff-routing.module */ "./src/app/home/staff/addstaff/addstaff-routing.module.ts");
/* harmony import */ var _addstaff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addstaff.component */ "./src/app/home/staff/addstaff/addstaff.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");









let AddstaffModule = class AddstaffModule {
};
AddstaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_addstaff_component__WEBPACK_IMPORTED_MODULE_4__["AddstaffComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _addstaff_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddstaffRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]]
    })
], AddstaffModule);



/***/ })

}]);
//# sourceMappingURL=45-es2015.js.map