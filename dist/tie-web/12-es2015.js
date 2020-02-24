(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/ng-starrating/fesm2015/ng-starrating.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng-starrating/fesm2015/ng-starrating.js ***!
  \**************************************************************/
/*! exports provided: RatingModule, StarRatingComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { StarRatingComponent } from '../components/star-rating/star-rating.component'
class RatingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-rating',
                template: `
    <p>
      rating works!
    </p>
  `
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingComponent {
    constructor() {
        this.stars = [];
        this._readOnly = false;
        this._totalStars = 5;
        this.rate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this.onStarsCountChange) {
            this.onStarsCountChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onStarsCountChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.setStars();
                this.generateRating(true);
                this.applySizeAllStars();
                this.applyColorStyleAllStars(false);
                this.addRemoveEvents();
            }));
        }
        if (!this.onValueChange) {
            this.onValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onValueChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.generateRating();
                this.applySizeAllStars();
            }));
        }
        if (!this.onCheckedColorChange) {
            this.onCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onCheckedColorChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applyColorStyleAllStars(true);
            }));
        }
        if (!this.onUnCheckedColorChange) {
            this.onUnCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onUnCheckedColorChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applyColorStyleAllStars(false);
            }));
        }
        if (!this.onSizeChange) {
            this.onSizeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onSizeChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applySizeAllStars();
            }));
        }
        if (!this.onReadOnlyChange) {
            this.onReadOnlyChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onReadOnlyChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.addRemoveEvents();
            }));
        }
    }
    /**
     * @return {?}
     */
    get checkedcolor() {
        return this._checkedColor;
    }
    /**
     * @return {?}
     */
    get uncheckedcolor() {
        return this._unCheckedColor;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size.concat((!this._size.includes("px") ? "px" : ""));
    }
    /**
     * @return {?}
     */
    get readonly() {
        return String(this._readOnly) === "true";
    }
    /**
     * @return {?}
     */
    get totalstars() {
        return this._totalStars;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkedcolor(value) {
        this._checkedColor = value;
        this._checkedColor && this.onCheckedColorChange.next(this._checkedColor);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set uncheckedcolor(value) {
        this._unCheckedColor = value;
        this._unCheckedColor && this.onUnCheckedColorChange.next(this._unCheckedColor);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        value = (!value || value == null) ? 0 : value;
        value > this.stars.length && (value = this.stars.length);
        this._value = value;
        this._value >= 0 && this.onValueChange.next(this._value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        value = (!value || value == null || value == "0px") ? "24px" : value;
        this._size = value;
        this.onSizeChange.next(this._size);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set readonly(value) {
        this._readOnly = value;
        this.onReadOnlyChange.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set totalstars(value) {
        this._totalStars = value <= 0 ? 5 : value;
        this.onStarsCountChange.next(Number(value));
    }
    /**
     * @private
     * @return {?}
     */
    makeEditable() {
        this.mainElement.nativeElement.addEventListener('mouseleave', this.offStar.bind(this));
        this.mainElement.nativeElement.style.cursor = "pointer";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            star.addEventListener('click', this.onRate.bind(this));
            star.addEventListener('mouseenter', this.onStar.bind(this));
            star.style.cursor = "pointer";
            star.title = star.dataset.index;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    makeReadOnly() {
        this.mainElement.nativeElement.__zone_symbol__mouseleavefalse = null;
        this.mainElement.nativeElement.style.cursor = "default";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            star.__zone_symbol__clickfalse = null;
            star.__zone_symbol__mouseenterfalse = null;
            star.style.cursor = "default";
            star.title = "";
        }));
    }
    /**
     * @private
     * @return {?}
     */
    addRemoveEvents() {
        if (this.readonly) {
            this.makeReadOnly();
        }
        else {
            this.makeEditable();
            this.onValueChange.next(this.value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onRate(event) {
        /** @type {?} */
        let star = (/** @type {?} */ (event.srcElement));
        /** @type {?} */
        let oldValue = this.value;
        this.value = parseInt(star.dataset.index);
        if (this.value == 0) {
            this.value = 1;
        }
        /** @type {?} */
        let rateValues = { oldValue: oldValue, newValue: this.value, starRating: this };
        this.rate.emit(rateValues);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onStar(event) {
        /** @type {?} */
        let star = (/** @type {?} */ (event.srcElement));
        /** @type {?} */
        let currentIndex = parseInt(star.dataset.index);
        for (let index = 0; index < currentIndex; index++) {
            this.stars[index].className = "";
            this.addDefaultClass(this.stars[index]);
            this.addCheckedStarClass(this.stars[index]);
        }
        for (let index = currentIndex; index < this.stars.length; index++) {
            this.stars[index].className = "";
            this.addDefaultClass(this.stars[index]);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    offStar(event) {
        this.generateRating();
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addDefaultClass(star) {
        star.classList.add(StarRatingComponent.CLS_DEFAULT_STAR);
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addCheckedStarClass(star) {
        star.classList.add(StarRatingComponent.CLS_CHECKED_STAR);
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addHalfStarClass(star) {
        star.classList.add(StarRatingComponent.CLS_HALF_STAR);
    }
    /**
     * @private
     * @return {?}
     */
    setStars() {
        /** @type {?} */
        let starContainer = this.mainElement.nativeElement;
        /** @type {?} */
        let maxStars = [...Array(Number(this.totalstars)).keys()];
        this.stars.length = 0;
        starContainer.innerHTML = "";
        maxStars.forEach((/**
         * @param {?} starNumber
         * @return {?}
         */
        starNumber => {
            /** @type {?} */
            let starElement = document.createElement("span");
            starElement.dataset.index = (starNumber + 1).toString();
            starElement.title = starElement.dataset.index;
            starContainer.appendChild(starElement);
            this.stars.push(starElement);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    applySizeAllStars() {
        if (this._size) {
            this.stars.length == 0 && this.setStars();
            this.stars.forEach((/**
             * @param {?} star
             * @return {?}
             */
            (star) => {
                /** @type {?} */
                let newSize = this.size.match(/\d+/)[0];
                /** @type {?} */
                let halfSize = (parseInt(newSize) * 10) / 24;
                /** @type {?} */
                let halfMargin = 0 - ((parseInt(newSize) * 20) / 24);
                star.style.setProperty(StarRatingComponent.VAR_SIZE, this.size);
                if (star.classList.contains(StarRatingComponent.CLS_HALF_STAR)) {
                    star.style.setProperty(StarRatingComponent.VAR_HALF_WIDTH, `${halfSize}px`);
                    star.style.setProperty(StarRatingComponent.VAR_HALF_MARGIN, `${halfMargin}px`);
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} setChecked
     * @return {?}
     */
    applyColorStyleAllStars(setChecked) {
        this.stars.length == 0 && this.setStars();
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            if (setChecked) {
                this.applyCheckedColorStyle(star);
            }
            else {
                this.applyUnCheckedColorStyle(star);
            }
        }));
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyColorStyle(starElement) {
        this.applyCheckedColorStyle(starElement);
        this.applyUnCheckedColorStyle(starElement);
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyCheckedColorStyle(starElement) {
        starElement.style.setProperty(StarRatingComponent.VAR_CHECKED_COLOR, this.checkedcolor);
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyUnCheckedColorStyle(starElement) {
        starElement.style.setProperty(StarRatingComponent.VAR_UNCHECKED_COLOR, this.uncheckedcolor);
    }
    /**
     * @private
     * @param {?=} forceGenerate
     * @return {?}
     */
    generateRating(forceGenerate = false) {
        if (this.readonly && !forceGenerate) {
            return;
        }
        this.stars.length == 0 && this.setStars();
        if (this.value >= 0) {
            this.mainElement.nativeElement.title = this.value;
            /** @type {?} */
            let hasDecimals = ((Number.parseFloat(this.value.toString()) % 1)
                .toString()
                .substring(3, 2)) ? true : false;
            /** @type {?} */
            let i = 1;
            this.stars.forEach((/**
             * @param {?} star
             * @return {?}
             */
            (star) => {
                star.className = "";
                this.applyColorStyle(star);
                this.addDefaultClass(star);
                if (this.value >= i) {
                    // star on
                    this.addCheckedStarClass(star);
                }
                else {
                    // half star
                    if (hasDecimals) {
                        this.addHalfStarClass(star);
                        hasDecimals = false;
                    }
                }
                i++;
            }));
        }
    }
}
StarRatingComponent.VAR_CHECKED_COLOR = '--checkedColor';
StarRatingComponent.VAR_UNCHECKED_COLOR = '--unCheckedColor';
StarRatingComponent.VAR_SIZE = '--size';
StarRatingComponent.VAR_HALF_WIDTH = '--halfWidth';
StarRatingComponent.VAR_HALF_MARGIN = '--halfMargin';
StarRatingComponent.CLS_CHECKED_STAR = 'on';
StarRatingComponent.CLS_DEFAULT_STAR = 'star';
StarRatingComponent.CLS_HALF_STAR = 'half';
StarRatingComponent.INP_CHECKED_COLOR = 'checkedcolor';
StarRatingComponent.INP_UNCHECKED_COLOR = 'uncheckedcolor';
StarRatingComponent.INP_VALUE = 'value';
StarRatingComponent.INP_SIZE = 'size';
StarRatingComponent.INP_READONLY = 'readonly';
StarRatingComponent.INP_TOTALSTARS = 'totalstars';
StarRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'star-rating',
                template: "<div #starMain>\r\n</div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [":root{--checkedColor:gold;--unCheckedColor:gray;--size:24px;--halfWidth:10px;--halfMargin:-20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:'\\2605'}.star.on{color:var(--checkedColor)}.star.half:after{content:'\\2605';color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}"]
            }] }
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [];
StarRatingComponent.propDecorators = {
    mainElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['starMain', { static: true },] }],
    rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    checkedcolor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_CHECKED_COLOR,] }],
    uncheckedcolor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_UNCHECKED_COLOR,] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_VALUE,] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_SIZE,] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_READONLY,] }],
    totalstars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_TOTALSTARS,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RatingModule {
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
RatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    RatingComponent,
                    StarRatingComponent
                ],
                exports: [StarRatingComponent],
                entryComponents: [StarRatingComponent]
            },] }
];


//# sourceMappingURL=ng-starrating.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3>{{'RATING' | translate}}</h3>\n        </div>\n        <div class=\"col-md-6 alignright\">\n            <div class=\"rating\"><span class=\"big\">{{detail && detail.avg_rating?(detail.avg_rating | round):0}}</span><span class=\"small\">(5)</span></div>\n            <div class=\"reviews\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"detail?.avg_rating ? (detail?.avg_rating | round):0\"></ngx-stars>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 rating_head\">{{'PROFESS' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_pro? (detail.avg_pro | prcnt) :0 }}\" class=\"high\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_pro? (detail.avg_pro | round):0 }}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'CUSTMRSRV' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_cus? (detail.avg_cus | prcnt):0}}\" class=\"average\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_cus? detail.avg_cus:0 }}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'CLEANES' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_cln? (detail.avg_cln | prcnt):0}}\" class=\"equalhigh\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_cln? detail.avg_cln:0}}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'TIMING' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_tmg? (detail.avg_tmg | prcnt):0}}\" class=\"lesshigh\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_tmg? detail.avg_tmg:0}}/5</div>\n        <div class=\"clearfix space\">&nbsp;</div>\n        <div class=\"col-md-12\">\n            <h3>{{'RCNTREVIW' | translate}}:</h3>\n        </div>\n        <div class=\"staffdetail_notifi\" *ngIf=\"detail\">\n            <div class=\"notifi_list\" *ngFor=\"let review of detail.reviews\">\n                <div class=\"noti_left\"><img [src]=\"review.img? (detail.usr_bp + review.img):usrurl\" alt=\"Notification User\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                        <div class=\"author\">{{review.name | titlecase}}</div>\n                        <div class=\"reviews\">\n                            <div class=\"staffdetail_staff\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"review.rvw_rt\"></ngx-stars></div>\n                        </div>\n                    </div>\n                    {{review.comment}}\n                </div>\n            </div>\n            <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"paginate()\">Load More</button></div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/home/staff/staffreview/staffreview-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/staff/staffreview/staffreview-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: StaffreviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffreviewRoutingModule", function() { return StaffreviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _staffreview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffreview.component */ "./src/app/home/staff/staffreview/staffreview.component.ts");




console.log('+++++++++++');
const routes = [{
        path: '', component: _staffreview_component__WEBPACK_IMPORTED_MODULE_3__["StaffreviewComponent"]
    }];
let StaffreviewRoutingModule = class StaffreviewRoutingModule {
};
StaffreviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaffreviewRoutingModule);



/***/ }),

/***/ "./src/app/home/staff/staffreview/staffreview.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/staff/staffreview/staffreview.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reviews {\n  text-align: right;\n  float: right;\n}\n\n.staffdetail_notifi {\n  width: 100%;\n}\n\n.btn.btn-submit {\n  margin: 10px auto 0px;\n  font-size: 15px;\n  padding: 10px 50px;\n}\n\n@media (max-width: 992px) {\n  .staffdetail_notifi {\n    padding: 0px 12px;\n  }\n}\n\n@media (max-width: 480px) {\n  .reviews {\n    text-align: left;\n    float: left;\n    display: block;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGlCQUFBO0VBQWtCLFlBQUE7QUNHM0I7O0FERkE7RUFBb0IsV0FBQTtBQ01wQjs7QURMQTtFQUFrQixxQkFBQTtFQUFzQixlQUFBO0VBQWdCLGtCQUFBO0FDV3hEOztBRFRBO0VBQ0k7SUFBb0IsaUJBQUE7RUNhdEI7QUFDRjs7QURYQTtFQUNBO0lBQVUsZ0JBQUE7SUFBaUIsV0FBQTtJQUFhLGNBQUE7SUFBZSxXQUFBO0VDaUJyRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXdze3RleHQtYWxpZ246IHJpZ2h0O2Zsb2F0OiByaWdodDt9XG4uc3RhZmZkZXRhaWxfbm90aWZpe3dpZHRoOiAxMDAlO31cbi5idG4uYnRuLXN1Ym1pdCB7IG1hcmdpbjogMTBweCBhdXRvIDBweDtmb250LXNpemU6IDE1cHg7cGFkZGluZzogMTBweCA1MHB4O31cblxuQG1lZGlhKG1heC13aWR0aDo5OTJweCl7XG4gICAgLnN0YWZmZGV0YWlsX25vdGlmaXtwYWRkaW5nOiAwcHggMTJweDt9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpe1xuLnJldmlld3Mge3RleHQtYWxpZ246IGxlZnQ7ZmxvYXQ6IGxlZnQ7IGRpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO31cblxufSIsIi5yZXZpZXdzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN0YWZmZGV0YWlsX25vdGlmaSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLmJ0bi1zdWJtaXQge1xuICBtYXJnaW46IDEwcHggYXV0byAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnN0YWZmZGV0YWlsX25vdGlmaSB7XG4gICAgcGFkZGluZzogMHB4IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmV2aWV3cyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/staff/staffreview/staffreview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/staff/staffreview/staffreview.component.ts ***!
  \*****************************************************************/
/*! exports provided: StaffreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffreviewComponent", function() { return StaffreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");






let StaffreviewComponent = class StaffreviewComponent {
    constructor(routes, httpService, error) {
        this.routes = routes;
        this.httpService = httpService;
        this.error = error;
        this.limitPage = 5;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
        this.usrurl = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
        this.page = 0;
    }
    ngOnInit() {
        this.id = this.routes.snapshot.params.id;
        this.getStaffReview();
    }
    getStaffReview() {
        this.httpService.getRequest('GET_PARMS', 'STAFF_REVIEW', this.id, `${'limit=' + this.limitPage}`)
            .subscribe((response) => {
            if (response.status === 1) {
                this.detail = response.res;
            }
            else {
                if (response.err) {
                    this.error.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            this.error.handleError(0);
            // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
        });
    }
    paginate() {
        this.limitPage = this.limitPage + 5;
        this.getStaffReview();
    }
};
StaffreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }
];
StaffreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffreview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffreview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffreview.component.scss */ "./src/app/home/staff/staffreview/staffreview.component.scss")).default]
    })
], StaffreviewComponent);



/***/ }),

/***/ "./src/app/home/staff/staffreview/staffreview.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/staff/staffreview/staffreview.module.ts ***!
  \**************************************************************/
/*! exports provided: StaffreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffreviewModule", function() { return StaffreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _staffreview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffreview-routing.module */ "./src/app/home/staff/staffreview/staffreview-routing.module.ts");
/* harmony import */ var _staffreview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staffreview.component */ "./src/app/home/staff/staffreview/staffreview.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm2015/ngx-stars.js");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");










let StaffreviewModule = class StaffreviewModule {
};
StaffreviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_staffreview_component__WEBPACK_IMPORTED_MODULE_4__["StaffreviewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _staffreview_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffreviewRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"],
            ngx_stars__WEBPACK_IMPORTED_MODULE_7__["NgxStarsModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationpipeModule"]
        ], providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]]
    })
], StaffreviewModule);



/***/ })

}]);
//# sourceMappingURL=12-es2015.js.map