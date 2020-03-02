(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
                break;
            case 34:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['PROMOALRDYEXIST']);
                break;
            case 32:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['STAFFALRDYEXIST']);
                break;
            case 15:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONALRDYEXIST']);
                break;
            case 39:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
                break;
            case 41:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DEACTIVE']);
                break;
            case 42:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DELSALONACC']);
                break;
            case 51:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['NOBOOK']);
                break;
            case 56:
                this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SLNEXIST']);
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



/***/ }),

/***/ "./src/app/shared/service/validation-service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/service/validation-service.ts ***!
  \******************************************************/
/*! exports provided: ValidationService, passValidator, PassValid, date, DateValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passValidator", function() { return passValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassValid", function() { return PassValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidators", function() { return DateValidators; });
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
        if (control.value && control.value.match(/^[0-9]{7,12}$/)) {
            return null;
        }
        else {
            return { Invalidphone: true };
        }
    }
    static date(control) {
        console.log(control);
        if (control && (control.value !== null || control.value !== undefined)) {
            let frm = control.get("frm").value || "";
            let to = control.get("to").value || "";
            // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
            console.log(frm && !to);
            if (frm && !to) {
                control.get('to').enable();
                return null;
            }
            else if (frm && to) {
                new Date(frm) > new Date(to);
                return { invalid: true };
            }
            else
                return { invalid: true };
        }
        return null;
    }
    static numberValidator(control) {
        // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
        if (control.value && String(control.value).match(/^[0-9]*$/)) {
            return null;
        }
        else if (!control.value) {
            return null;
        }
        else
            return { invalid: true };
    }
    static codeValidator(control) {
        // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
        if (control.value && control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        }
        else if (control.value) {
            return null;
        }
        else
            return { invalid: true };
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
function date(control) {
    console.log(control);
    if (control && (control.value !== null || control.value !== undefined)) {
        let frm = control.get("frm").value || "";
        let to = control.get("to").value || "";
        // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
        console.log(frm && !to);
        if (frm && !to) {
            control.get('to').enable();
            return null;
        }
        else if (frm && to) {
            new Date(frm) > new Date(to);
            return { invalid: true };
        }
        else
            return { invalid: true };
    }
    return false;
}
class DateValidators {
    static valid(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            let frm = control.get("frm").value || "";
            let to = control.get("to").value || "";
            // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\
            console.log(frm && !to);
            if (frm && !to) {
                control.get('to').enable();
                return null;
            }
            else if (frm && to) {
                new Date(frm) > new Date(to);
                return { invalid: true };
            }
            else
                return { invalid: true };
        }
        return null;
    }
}


/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map