(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/edit/edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/edit/edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='promo' (ngSubmit)='edit()'>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/category_form.png\" alt=\"Code\"></span>\n                <input matInput placeholder=\"Coupon Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'COUPNNAME'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTPROMONNAME'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/category_form.png\" alt=\"Code\"></span>\n                <input matInput placeholder=\"Coupon Code\" class=\"form-control\" formControlName=\"code\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.code.dirty|| getControl.code.touched) && getControl.code.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.code.errors.required\">{{'CODEREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.code.errors.required && getControl.code.errors.invalid\">\n                    {{'CODEINVLID'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/price_form.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Discount\" class=\"form-control\" formControlName=\"discount\" maxlength=\"10\">\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.discount.dirty|| getControl.discount.touched) && getControl.discount.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.discount.errors.required\">{{'CODEREQ'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.discount.errors.required && getControl.discount.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Min. Amount\" class=\"form-control\" formControlName=\"min_price\"\n                    maxlength=\"10\">\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.min_price.dirty|| getControl.min_price.touched) && getControl.min_price.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.min_price.errors.required\">{{'MINPRCREQ'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.min_price.errors.required && getControl.min_price.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/icon_sr.png\" alt=\"Discount\"></span>\n                <input matInput placeholder=\"Max. Discount Amount\" class=\"form-control\" formControlName=\"upto\"\n                    maxlength=\"10\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.upto.dirty|| getControl.upto.touched) && getControl.upto.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.upto.errors.required\">{{'MAXPRCREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.upto.errors.required && getControl.upto.errors.invalid\">\n                    {{'ONLYNUM'| translate}}</p>\n            </div>\n            <mat-form-field class=\"multi_field\">\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service</mat-label>\n                <mat-select (selectionChange)=\"slctsrv($event)\" class=\"multiselect\">\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service\">\n                        {{service.cat_name | titlecase}}\n                    </mat-option>\n                </mat-select>\n                <div class=\"mat-chips\">\n                    <mat-chip-list aria-label=\"Fish selection\">\n                        <mat-chip [disableRipple]=\"true\" *ngFor=\"let chip of chips; let i =index\"\n                            [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(chip)\">\n                            {{chip.cat_name | titlecase}}\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                        </mat-chip>\n                    </mat-chip-list>\n                </div>\n            </mat-form-field>\n            <!-- <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"Added\"></span>\n                <input matInput placeholder=\"Added By\" class=\"form-control\" formControlName=\"desc\">\n            </mat-form-field> -->\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"Uses\"></span>\n                <input matInput placeholder=\"Total Uses\" class=\"form-control\" formControlName=\"uses\" maxlength=\"10\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.uses.dirty|| getControl.uses.touched) && getControl.uses.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.uses.errors.required\">{{'USEREQ'| translate}}</p>\n                <p class=\"color error\" *ngIf=\"!getControl.uses.errors.required && getControl.uses.errors.invalid\">\n                    {{'CODEINVLID'| translate}}</p>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 left\">\n                    <mat-form-field>\n                        <span class=\"email-img pass\"><img src=\"assets/images/calendar_form.png\" alt=\"From\"></span>\n                        <input matInput placeholder=\"From\" class=\"form-control\" [min]=\"todaydate\" [matDatepicker]=\"fromDatepicker\"\n                            formControlName=\"frm\" disabled>\n                        <mat-datepicker-toggle matSuffix [for]=\"fromDatepicker\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #fromDatepicker disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                    <div *ngIf=\"(submitted || getControl.frm.dirty|| getControl.frm.touched) && getControl.frm.errors\">\n                        <p class=\"color error\" *ngIf=\"getControl.frm.errors.required\">{{'FRMREQ'| translate}}</p>\n                        <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                            {{'INCRTSALONNAME'| translate}}</p> -->\n                    </div>\n                    <p class=\"color error\" *ngIf=\"!validDte\">{{'INVALIDDATE'| translate}}</p>\n                </div>\n                <div class=\"col-md-6 right\">\n                    <mat-form-field>\n                        <span class=\"email-img pass\"><img src=\"assets/images/calendar_form.png\" alt=\"From\"></span>\n                        <input matInput placeholder=\"To\" class=\"form-control\" [min]=\"todaydate\" [matDatepicker]=\"toDatepicker\"\n                            formControlName=\"to\" disabled>\n                        <mat-datepicker-toggle matSuffix [for]=\"toDatepicker\">\n                            <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #toDatepicker disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                    <div *ngIf=\"(submitted || getControl.to.dirty|| getControl.to.touched) && getControl.to.errors\">\n                        <p class=\"color error\" *ngIf=\"getControl.to.errors.required\">{{'TOREQ'| translate}}</p>\n                        <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                            {{'INCRTSALONNAME'| translate}}</p> -->\n                    </div>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"desc\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.desc.dirty|| getControl.desc.touched) && getControl.desc.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.desc.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.desc.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/promocode/edit/edit-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/promocode/edit/edit-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoutingModule", function() { return EditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.component */ "./src/app/home/promocode/edit/edit.component.ts");




const routes = [{ path: '', component: _edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] }];
let EditRoutingModule = class EditRoutingModule {
};
EditRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditRoutingModule);



/***/ }),

/***/ "./src/app/home/promocode/edit/edit.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/promocode/edit/edit.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field.multi_field {\n  display: inline-table !important;\n}\n\n.mat-select.multiselect {\n  border: 1px solid #dad9d9 !important;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.custom_form mat-form-field.mat-form-field.multi_field {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9tb2NvZGUvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb21vY29kZS9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsZ0NBQUE7QUNFNUI7O0FEREE7RUFBd0Isb0NBQUE7RUFBcUMsa0JBQUE7RUFBbUIsbUJBQUE7QUNPaEY7O0FETEE7RUFBdUQsWUFBQTtBQ1N2RCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvbW9jb2RlL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZHtkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudH1cbi5tYXQtc2VsZWN0Lm11bHRpc2VsZWN0e2JvcmRlcjogMXB4IHNvbGlkICNkYWQ5ZDkgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA0cHg7bWFyZ2luLWJvdHRvbTogMTBweDt9XG5cbi5jdXN0b21fZm9ybSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tdWx0aV9maWVsZHtib3JkZXI6bm9uZX0iLCIubWF0LWZvcm0tZmllbGQubXVsdGlfZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zZWxlY3QubXVsdGlzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkOWQ5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmN1c3RvbV9mb3JtIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm11bHRpX2ZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/promocode/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/promocode/edit/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
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










let EditComponent = class EditComponent {
    constructor(httpService, router, routes, helper, errorserv, trns) {
        this.httpService = httpService;
        this.router = router;
        this.routes = routes;
        this.helper = helper;
        this.errorserv = errorserv;
        this.trns = trns;
        this.todaydate = new Date();
        this.services = [];
        this.chips = [];
        this.submitted = false;
        this.dataSource = [];
        this.selectable = true;
        this.removable = true;
        this.sendServ = [];
        this.validDte = true;
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getServices();
        this.getUserProfile();
        this.promo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].namevalidator]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].codeValidator]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            upto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            min_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"].numberValidator]),
            frm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            uses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]),
            cat_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    getServices() {
        this.httpService.getRequest('GET', 'SERVICES', '')
            .subscribe((response) => {
            if (response.status === 1)
                this.services = response.res.services;
            else {
                if (response.err)
                    this.errorserv.handleError(response.err.errCode);
            }
        }, (error) => {
            console.log(error);
        });
    }
    edit() {
        this.submitted = true;
        // return false
        console.log(this.promo);
        // return
        var startDateUtc = this.promo.value.frm && this.helper.parseDate(this.promo.value.frm, new Date(new Date().setHours(0, 0, 0, 0)));
        var endDateUtc = this.promo.value.to && this.helper.parseDate(this.promo.value.to, new Date(new Date().setHours(23, 59, 59)));
        if (!(startDateUtc < endDateUtc)) {
            this.validDte = false;
        }
        else
            this.validDte = true;
        if (this.promo.valid) {
            // if (this.promo.value.cat_ids)
            //   this.promo.value.cat_ids = JSON.stringify(this.sendServ);
            // else
            //   this.promo.value.cat_ids = JSON.stringify([]);
            this.promo.value.cat_ids = JSON.stringify(this.sendServ);
            if (!this.validDte)
                return false;
            var currentdate = new Date();
            let data = new Date(this.promo.value.frm);
            if (data.getDate() == currentdate.getDate() && data.getMonth() == currentdate.getMonth())
                this.promo.value.frm = new Date();
            this.httpService.getRequest('PUT', 'PROMO', this.promo.value, this.id)
                .subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    this.router.navigateByUrl('/promocode').then(() => {
                        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('PROMOCODEUPSUCC'));
                    });
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
            console.log(this.promo);
        }
    }
    get getControl() { return this.promo.controls; }
    getUserProfile() {
        this.httpService.getRequest('GET_PARMS', 'PROMO_DETAIL', this.id, '')
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
                this.promo.patchValue({
                    name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
                    code: this.detail.hasOwnProperty('code') ? this.detail.code : '',
                    min_price: this.detail.hasOwnProperty('min_price') ? this.detail.min_price : 0,
                    discount: this.detail.hasOwnProperty('discount') ? this.detail.discount : 0,
                    uses: this.detail.hasOwnProperty('uses') ? this.detail.uses : 0,
                    upto: this.detail.hasOwnProperty('upto') ? this.detail.upto : 0,
                    desc: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
                    frm: this.detail.hasOwnProperty('frm') ? this.detail.frm : '',
                    to: this.detail.hasOwnProperty('to') ? this.detail.to : '',
                });
                this.todaydate = new Date(this.promo.value.frm);
                this.chips.push(...this.detail.service);
                for (let index = 0; index < this.detail.service.length; index++) {
                    this.sendServ.push(this.detail.service[index]['cat_id']);
                }
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
        if (!this.arraySearch(this.sendServ, state)) {
            this.chips.push({ _id: state._id, cat_id: state.cat_id, cat_name: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)), title: lodash__WEBPACK_IMPORTED_MODULE_9__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"](state.cat_name)) });
            this.sendServ.push(state.cat_id);
            return;
        }
        else {
        }
    }
    remove(data) {
        this.chips = this.chips.filter(v => v._id !== data._id);
        this.sendServ = this.sendServ.filter(v => v !== data.cat_id);
    }
    arraySearch(arr, value) {
        let isFound = false;
        if (arr.length) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] === value.cat_id) {
                    isFound = true;
                    break;
                }
            }
            return isFound;
        }
        return false;
    }
};
EditComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_5__["Helper"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promocode/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/home/promocode/edit/edit.component.scss")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/home/promocode/edit/edit.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/promocode/edit/edit.module.ts ***!
  \****************************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/home/promocode/edit/edit-routing.module.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.component */ "./src/app/home/promocode/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









let EditModule = class EditModule {
};
EditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_6__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]]
    })
], EditModule);



/***/ })

}]);
//# sourceMappingURL=38-es2015.js.map