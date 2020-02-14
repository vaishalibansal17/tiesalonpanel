(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/addstaff/addstaff.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/addstaff/addstaff.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='add()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'ADDSTFCHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSTAFFNAME'| translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'SERVICE'| translate}}</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event.value)\"  class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div class=\"mat-chips\">\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip [disableRipple]=\"true\" *ngFor=\"let chip of chips; let i =index\" [selectable]=\"selectable\" [removable]=\"removable\"\n                        (removed)=\"remove(i)\">{{chip.cat_name | titlecase}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n                </div>\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>{{'WEEKOFF'| translate}}</mat-label>\n                <mat-select formControlName='day_off'>\n                    <mat-option *ngFor=\"let item of weekoff\" [value]=\"item.value\">\n                        {{item.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div class=\"setting_list\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">{{'AVAILBILITY'| translate}}</div>\n                    <div class=\"col-md-6 alignright\">\n                        <mat-slide-toggle formControlName=\"isAvailable\" ></mat-slide-toggle>\n                    </div>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">{{'SAVE' | translate}}</button>\n            </div>\n        </form>\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 5px solid whitesmoke;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9hZGRzdGFmZi9hZGRzdGFmZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zdGFmZi9hZGRzdGFmZi9hZGRzdGFmZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQWlCLHdCQUFBO0VBQXlCLHVCQUFBO0VBQTBCLHNCQUFBO0VBQXdCLDJCQUFBO0VBQTZCLDRCQUFBO0VBQ3JILGtCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURMQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7QUNlNUc7O0FEYkE7RUFBc0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBb0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsK0JBQUE7RUFBZ0MsbUJBQUE7QUN5Qm5MOztBRHhCQTtFQUEyQixlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUN1Qy9NOztBRHJDQTtFQUE2QixrQkFBQTtFQUFrQixzQkFBQTtFQUF3QixTQUFBO0VBQVUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixtQkFBQTtBQzhDcEg7O0FEN0NBO0VBQWtDLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixpQkFBQTtBQzREdE47O0FEMURBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUM2REo7O0FEM0RBO0VBQVUsa0JBQUE7RUFBbUIscUJBQUE7RUFBcUIsa0JBQUE7QUNpRWxEOztBRGhFQTtFQUFZLGNBQUE7QUNvRVo7O0FEbkVBO0VBQW9CLGlCQUFBO0FDdUVwQjs7QUQzQ0E7RUFBNEIsZ0NBQUE7QUMrQzVCOztBRDlDQTtFQUF3QixvQ0FBQTtFQUFxQyxrQkFBQTtFQUFtQixtQkFBQTtBQ29EaEY7O0FEbERBO0VBQXVELFlBQUE7QUNzRHZEIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdGFmZi9hZGRzdGFmZi9hZGRzdGFmZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX2lucHV0IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuaW1nLmZpbGVfdXBsb2FkMntoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICBtYXJnaW46IDVweCAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7IGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDt9XG4uY3VzdG9tX3VwbG9hZDF7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDBweDtoZWlnaHQ6IDEwMCU7Y3Vyc29yOiBwb2ludGVyO29wYWNpdHk6IDA7dGV4dC1pbmRlbnQ6IC0xMTBweDt6LWluZGV4OiA5OTA7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG57cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDogI2Y5NmFiMztjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDtwYWRkaW5nOiA1cHggMjBweDtib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW57Y3Vyc29yOiBwb2ludGVyO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMHB4O2JhY2tncm91bmQ6ICNGRjI2MjY7aGVpZ2h0OiAyMnB4O3dpZHRoOiAyMnB4O2JvcmRlci1yYWRpdXM6IDUwJTsgZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA2MDA7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDFweCAwcHg7bGluZS1oZWlnaHQ6IDE4cHg7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9we3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCBzcGFue2N1cnNvcjogcG9pbnRlcjtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDBweDtiYWNrZ3JvdW5kOiAjRkYyNjI2O2hlaWdodDogMjJweDt3aWR0aDogMjJweDtib3JkZXItcmFkaXVzOiA1MCU7IGZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNjAwO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAxcHggMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O31cblxuLnVwbG9hZC1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbn1cbi5maWxlX2Rpdntwb3NpdGlvbjogcmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OiAxNXB4O31cbmxhYmVsLmJsb2Nre2Rpc3BsYXk6IGJsb2NrfVxuLndvcmtfZ2FsbGVyeSBsYWJlbHtkaXNwbGF5OiBjb250ZW50c31cblxuLy8gLnVwbG9hZC1pbWFnZSB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gIC5wcm9maWxlICB7XG4vLyAgICAgZGlzcGxheTpub25lO1xuLy8gICAgIG1hcmdpbjoxMHB4O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgICsgbGFiZWwge1xuLy8gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuLy8gICAgIG1hcmdpbjoyMHB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAzMnB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4vLyAgICAgYm9yZGVyOnNvbGlkIDFweCAjNjY2Rjc3O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICBjb2xvcjojNjY2Rjc3O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgOmFjdGl2ZSArIGxhYmVsIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzJENkM3QTtcbi8vICAgICBjb2xvcjojRkZGRkZGO1xuLy8gICAgIH1cblxuLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2Rpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50fVxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3R7Ym9yZGVyOiAxcHggc29saWQgI2RhZDlkOSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDRweDttYXJnaW4tYm90dG9tOiAxMHB4O31cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxke2JvcmRlcjpub25lfSIsIi5maWxlX2lucHV0IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG5pbWcuZmlsZV91cGxvYWQyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV91cGxvYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWluZGVudDogLTExMHB4O1xuICB6LWluZGV4OiA5OTA7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y5NmFiMztcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4ICNmOTZhYjM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRjI2MjY7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9wIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGMjYyNjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbn1cblxuLmZpbGVfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxubGFiZWwuYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndvcmtfZ2FsbGVyeSBsYWJlbCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

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
        this.url = 'assets/images/change.png';
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
        if (!this.httpService.arraySearch(this.sendServ, state)) {
            this.chips.push({ id: state._id, cat_name: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)) });
            this.sendServ.push(state._id);
            return;
        }
        else {
        }
    }
    remove(service) {
        const index = this.chips.indexOf(service);
        this.chips.splice(index, 1);
        this.sendServ.splice(index, 1);
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
//# sourceMappingURL=43-es2015.js.map