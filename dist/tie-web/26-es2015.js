(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/editstaff/editstaff.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form action=\"\">\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img src=\"assets/images/change.png\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label\">Change Profile Photo</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Full Name\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Email\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Mobile Number\" class=\"form-control\">\n            </mat-form-field>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service At</mat-label>\n                <mat-select>\n                  <mat-option *ngFor=\"let service of services\" [value]=\"service.value\">\n                    {{service.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"Description\" class=\"form-control\"></textarea>\n            </mat-form-field>\n            \n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhZmYvZWRpdHN0YWZmL2VkaXRzdGFmZi5jb21wb25lbnQuc2NzcyJ9 */");

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


let EditstaffComponent = class EditstaffComponent {
    constructor() {
        this.services = [
            { value: 'hair-cut', viewValue: 'Hair Cut' },
            { value: 'spa', viewValue: 'Spa' },
        ];
    }
    ngOnInit() {
    }
};
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






let EditstaffModule = class EditstaffModule {
};
EditstaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_editstaff_component__WEBPACK_IMPORTED_MODULE_4__["EditstaffComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _editstaff_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditstaffRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], EditstaffModule);



/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map