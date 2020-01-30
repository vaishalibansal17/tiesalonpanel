(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-select\">\n    <button mat-button [matMenuTriggerFor]=\"lan_menu\" [disableRipple]=\"true\">{{lang=='en'?\"En\":\"Ar\"}} <img src=\"{{lang=='en'?'assets/images/flag_en.png':'assets/images/flag_ar.png'}}\" alt=\"England\"><img class=\"drop_img\" src=\"assets/images/dropdown.png\" alt=\"\"></button>\n    <mat-menu #lan_menu=\"matMenu\" xPosition=\"before\">\n    <button class=\"flag_drop\" mat-menu-item (click)=\"setLang('ua')\">Ar <img src=\"assets/images/flag_ar.png\" alt=\"England\"></button>\n    <button class=\"flag_drop\" mat-menu-item (click)=\"setLang('en')\">En <img src=\"assets/images/flag_en.png\" alt=\"England\"></button>\n    </mat-menu>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-header/auth-header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth/auth-header/auth-header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1oZWFkZXIvYXV0aC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/auth-header/auth-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-header/auth-header.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderComponent", function() { return AuthHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/translate.service */ "./src/app/shared/service/translate.service.ts");



let AuthHeaderComponent = class AuthHeaderComponent {
    constructor(trns) {
        this.trns = trns;
        this.lang = localStorage.getItem('lang');
    }
    ngOnInit() {
        console.log("dfghjkl;");
    }
    setLang(lang) {
        localStorage.setItem('lang', lang);
        this.lang = lang;
        this.trns.use(this.lang);
    }
};
AuthHeaderComponent.ctorParameters = () => [
    { type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AuthHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-header.component.scss */ "./src/app/auth/auth-header/auth-header.component.scss")).default]
    })
], AuthHeaderComponent);



/***/ }),

/***/ "./src/app/auth/auth-header/auth-header.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/auth-header/auth-header.module.ts ***!
  \********************************************************/
/*! exports provided: AuthHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderModule", function() { return AuthHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _auth_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-header.component */ "./src/app/auth/auth-header/auth-header.component.ts");





let AuthHeaderModule = class AuthHeaderModule {
};
AuthHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auth_header_component__WEBPACK_IMPORTED_MODULE_4__["AuthHeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ],
        exports: [_auth_header_component__WEBPACK_IMPORTED_MODULE_4__["AuthHeaderComponent"]]
    })
], AuthHeaderModule);



/***/ }),

/***/ "./src/app/shared/service/validation-service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/service/validation-service.ts ***!
  \******************************************************/
/*! exports provided: ValidationService, passValidator, PassValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passValidator", function() { return passValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassValid", function() { return PassValid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ValidationService {
    static validateWebsite(control) {
        // RFC 2822 compliant regex
        if (control.value &&
            control.value.match('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')) {
            return null;
        }
        else {
            return { invalidWebsite: true };
        }
    }
    static validateEmail(control) {
        // RFC 2822 compliant regex
        if (control.value &&
            control.value.match(/^[A-Z0-9a-z_.~+-{|}!#$%&()/:;<=>?@`\'",]{1,}@[A-Z0-9a-z-]{2,}[.]{1}[A-Za-z.]{2,6}$/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && control.value.match("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!^&*-+(){}:;~`/?<>.,_| ]).{6,20})")) {
            return null;
        }
        else {
            return { invalidPassword: true };
        }
    }
    static namevalidator(control) {
        // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
        if (control.value && control.value.match(/^[^-\s][a-zA-Z_\s-]{0,50}$/)) {
            return null;
        }
        else {
            return { invalidName: true };
        }
    }
    static addressvalidator(control) {
        // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
        if (control.value &&
            control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?()":!;*_\s-]{3,100}$/)) {
            return null;
        }
        else {
            return { invalidAddress: true };
        }
    }
    static descriptionvalidator(control) {
        // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
        if (control.value &&
            control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?":()!;*_\s-]{4,1000}$/)) {
            return null;
        }
        else {
            return { invalidDescription: true };
        }
    }
    static phonevalidator(control) {
        // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
        // if (control.value && control.value.match(/^[^-\s][0-9_\s-]+$/)) {
        if (control && control.value && control.value.match(/^[0-9]{7,12}$/)) {
            return null;
        }
        else {
            return { Invalidphone: true };
        }
    }
    static numberValidator(control) {
        // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
        if (control.value && control.value.match(/^[0-9]*$/)) {
            return null;
        }
        else {
            return { InvalidNumber: true };
        }
    }
    static dateValidator(control) {
        // for yyyy-mm-dd formate
        // if (control.value && control.value.match(/[0-9]{0,4}-[0-9]{0,2}-[0-9]{0,2}/)) {
        if (control.value &&
            control.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/gm)) {
            return null;
        }
        else {
            return { InvalidDate: true };
        }
    }
    static passNewValidator(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const cnfpassValue = control.value;
            const passControl = control.root.get("old_pass");
            if (passControl) {
                const passValue = passControl.value;
                if (passValue === cnfpassValue || passValue === "") {
                    return {
                        isError: true
                    };
                }
            }
        }
    }
}
function passValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;
        const passControl = control.root.get('newPassword'); // magic is this
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}
class PassValid {
    static MatchPassword(AC) {
        let password = AC.get("newPassword").value || ""; // to get value in input tag
        let confirmPassword = AC.get("confirmPassword").value || ""; // to get value in input tagc
        console.log(confirmPassword, '========');
        // if (confirmPassword.length < 0)
        //   return AC.get("confirmPassword").setErrors({ required: true });
        if (password.length >= 1 && confirmPassword.length <= 20) {
            if (password && confirmPassword && password === confirmPassword) {
                return AC.get("confirmPassword").setErrors(null);
            }
            else {
                return AC.get("confirmPassword").setErrors({ MatchPassword: true });
            }
        }
        return null;
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map