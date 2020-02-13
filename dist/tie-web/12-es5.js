function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/ng-starrating/fesm2015/ng-starrating.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ng-starrating/fesm2015/ng-starrating.js ***!
    \**************************************************************/

  /*! exports provided: RatingModule, StarRatingComponent, ɵa */

  /***/
  function node_modulesNgStarratingFesm2015NgStarratingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingModule", function () {
      return RatingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function () {
      return StarRatingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { StarRatingComponent } from '../components/star-rating/star-rating.component'


    var RatingComponent =
    /*#__PURE__*/
    function () {
      function RatingComponent() {
        _classCallCheck(this, RatingComponent);
      }
      /**
       * @return {?}
       */


      _createClass(RatingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RatingComponent;
    }();

    RatingComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'lib-rating',
        template: "\n    <p>\n      rating works!\n    </p>\n  "
      }]
    }];
    /** @nocollapse */

    RatingComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StarRatingComponent =
    /*#__PURE__*/
    function () {
      function StarRatingComponent() {
        var _this = this;

        _classCallCheck(this, StarRatingComponent);

        this.stars = [];
        this._readOnly = false;
        this._totalStars = 5;
        this.rate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (!this.onStarsCountChange) {
          this.onStarsCountChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onStarsCountChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.setStars();

            _this.generateRating(true);

            _this.applySizeAllStars();

            _this.applyColorStyleAllStars(false);

            _this.addRemoveEvents();
          });
        }

        if (!this.onValueChange) {
          this.onValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onValueChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.generateRating();

            _this.applySizeAllStars();
          });
        }

        if (!this.onCheckedColorChange) {
          this.onCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onCheckedColorChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.applyColorStyleAllStars(true);
          });
        }

        if (!this.onUnCheckedColorChange) {
          this.onUnCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onUnCheckedColorChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.applyColorStyleAllStars(false);
          });
        }

        if (!this.onSizeChange) {
          this.onSizeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onSizeChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.applySizeAllStars();
          });
        }

        if (!this.onReadOnlyChange) {
          this.onReadOnlyChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onReadOnlyChange.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.addRemoveEvents();
          });
        }
      }
      /**
       * @return {?}
       */


      _createClass(StarRatingComponent, [{
        key: "makeEditable",

        /**
         * @private
         * @return {?}
         */
        value: function makeEditable() {
          var _this2 = this;

          this.mainElement.nativeElement.addEventListener('mouseleave', this.offStar.bind(this));
          this.mainElement.nativeElement.style.cursor = "pointer";
          this.mainElement.nativeElement.title = this.value;
          this.stars.forEach(
          /**
          * @param {?} star
          * @return {?}
          */
          function (star) {
            star.addEventListener('click', _this2.onRate.bind(_this2));
            star.addEventListener('mouseenter', _this2.onStar.bind(_this2));
            star.style.cursor = "pointer";
            star.title = star.dataset.index;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "makeReadOnly",
        value: function makeReadOnly() {
          this.mainElement.nativeElement.__zone_symbol__mouseleavefalse = null;
          this.mainElement.nativeElement.style.cursor = "default";
          this.mainElement.nativeElement.title = this.value;
          this.stars.forEach(
          /**
          * @param {?} star
          * @return {?}
          */
          function (star) {
            star.__zone_symbol__clickfalse = null;
            star.__zone_symbol__mouseenterfalse = null;
            star.style.cursor = "default";
            star.title = "";
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "addRemoveEvents",
        value: function addRemoveEvents() {
          if (this.readonly) {
            this.makeReadOnly();
          } else {
            this.makeEditable();
            this.onValueChange.next(this.value);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onRate",
        value: function onRate(event) {
          /** @type {?} */
          var star =
          /** @type {?} */
          event.srcElement;
          /** @type {?} */

          var oldValue = this.value;
          this.value = parseInt(star.dataset.index);

          if (this.value == 0) {
            this.value = 1;
          }
          /** @type {?} */


          var rateValues = {
            oldValue: oldValue,
            newValue: this.value,
            starRating: this
          };
          this.rate.emit(rateValues);
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onStar",
        value: function onStar(event) {
          /** @type {?} */
          var star =
          /** @type {?} */
          event.srcElement;
          /** @type {?} */

          var currentIndex = parseInt(star.dataset.index);

          for (var index = 0; index < currentIndex; index++) {
            this.stars[index].className = "";
            this.addDefaultClass(this.stars[index]);
            this.addCheckedStarClass(this.stars[index]);
          }

          for (var _index = currentIndex; _index < this.stars.length; _index++) {
            this.stars[_index].className = "";
            this.addDefaultClass(this.stars[_index]);
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "offStar",
        value: function offStar(event) {
          this.generateRating();
        }
        /**
         * @private
         * @param {?} star
         * @return {?}
         */

      }, {
        key: "addDefaultClass",
        value: function addDefaultClass(star) {
          star.classList.add(StarRatingComponent.CLS_DEFAULT_STAR);
        }
        /**
         * @private
         * @param {?} star
         * @return {?}
         */

      }, {
        key: "addCheckedStarClass",
        value: function addCheckedStarClass(star) {
          star.classList.add(StarRatingComponent.CLS_CHECKED_STAR);
        }
        /**
         * @private
         * @param {?} star
         * @return {?}
         */

      }, {
        key: "addHalfStarClass",
        value: function addHalfStarClass(star) {
          star.classList.add(StarRatingComponent.CLS_HALF_STAR);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setStars",
        value: function setStars() {
          var _this3 = this;

          /** @type {?} */
          var starContainer = this.mainElement.nativeElement;
          /** @type {?} */

          var maxStars = _toConsumableArray(Array(Number(this.totalstars)).keys());

          this.stars.length = 0;
          starContainer.innerHTML = "";
          maxStars.forEach(
          /**
          * @param {?} starNumber
          * @return {?}
          */
          function (starNumber) {
            /** @type {?} */
            var starElement = document.createElement("span");
            starElement.dataset.index = (starNumber + 1).toString();
            starElement.title = starElement.dataset.index;
            starContainer.appendChild(starElement);

            _this3.stars.push(starElement);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "applySizeAllStars",
        value: function applySizeAllStars() {
          var _this4 = this;

          if (this._size) {
            this.stars.length == 0 && this.setStars();
            this.stars.forEach(
            /**
            * @param {?} star
            * @return {?}
            */
            function (star) {
              /** @type {?} */
              var newSize = _this4.size.match(/\d+/)[0];
              /** @type {?} */


              var halfSize = parseInt(newSize) * 10 / 24;
              /** @type {?} */

              var halfMargin = 0 - parseInt(newSize) * 20 / 24;
              star.style.setProperty(StarRatingComponent.VAR_SIZE, _this4.size);

              if (star.classList.contains(StarRatingComponent.CLS_HALF_STAR)) {
                star.style.setProperty(StarRatingComponent.VAR_HALF_WIDTH, "".concat(halfSize, "px"));
                star.style.setProperty(StarRatingComponent.VAR_HALF_MARGIN, "".concat(halfMargin, "px"));
              }
            });
          }
        }
        /**
         * @private
         * @param {?} setChecked
         * @return {?}
         */

      }, {
        key: "applyColorStyleAllStars",
        value: function applyColorStyleAllStars(setChecked) {
          var _this5 = this;

          this.stars.length == 0 && this.setStars();
          this.stars.forEach(
          /**
          * @param {?} star
          * @return {?}
          */
          function (star) {
            if (setChecked) {
              _this5.applyCheckedColorStyle(star);
            } else {
              _this5.applyUnCheckedColorStyle(star);
            }
          });
        }
        /**
         * @private
         * @param {?} starElement
         * @return {?}
         */

      }, {
        key: "applyColorStyle",
        value: function applyColorStyle(starElement) {
          this.applyCheckedColorStyle(starElement);
          this.applyUnCheckedColorStyle(starElement);
        }
        /**
         * @private
         * @param {?} starElement
         * @return {?}
         */

      }, {
        key: "applyCheckedColorStyle",
        value: function applyCheckedColorStyle(starElement) {
          starElement.style.setProperty(StarRatingComponent.VAR_CHECKED_COLOR, this.checkedcolor);
        }
        /**
         * @private
         * @param {?} starElement
         * @return {?}
         */

      }, {
        key: "applyUnCheckedColorStyle",
        value: function applyUnCheckedColorStyle(starElement) {
          starElement.style.setProperty(StarRatingComponent.VAR_UNCHECKED_COLOR, this.uncheckedcolor);
        }
        /**
         * @private
         * @param {?=} forceGenerate
         * @return {?}
         */

      }, {
        key: "generateRating",
        value: function generateRating() {
          var _this6 = this;

          var forceGenerate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.readonly && !forceGenerate) {
            return;
          }

          this.stars.length == 0 && this.setStars();

          if (this.value >= 0) {
            this.mainElement.nativeElement.title = this.value;
            /** @type {?} */

            var hasDecimals = (Number.parseFloat(this.value.toString()) % 1).toString().substring(3, 2) ? true : false;
            /** @type {?} */

            var i = 1;
            this.stars.forEach(
            /**
            * @param {?} star
            * @return {?}
            */
            function (star) {
              star.className = "";

              _this6.applyColorStyle(star);

              _this6.addDefaultClass(star);

              if (_this6.value >= i) {
                // star on
                _this6.addCheckedStarClass(star);
              } else {
                // half star
                if (hasDecimals) {
                  _this6.addHalfStarClass(star);

                  hasDecimals = false;
                }
              }

              i++;
            });
          }
        }
      }, {
        key: "checkedcolor",
        get: function get() {
          return this._checkedColor;
        }
        /**
         * @return {?}
         */
        ,

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._checkedColor = value;
          this._checkedColor && this.onCheckedColorChange.next(this._checkedColor);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "uncheckedcolor",
        get: function get() {
          return this._unCheckedColor;
        }
        /**
         * @return {?}
         */
        ,
        set: function set(value) {
          this._unCheckedColor = value;
          this._unCheckedColor && this.onUnCheckedColorChange.next(this._unCheckedColor);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @return {?}
         */
        ,
        set: function set(value) {
          value = !value || value == null ? 0 : value;
          value > this.stars.length && (value = this.stars.length);
          this._value = value;
          this._value >= 0 && this.onValueChange.next(this._value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "size",
        get: function get() {
          return this._size.concat(!this._size.includes("px") ? "px" : "");
        }
        /**
         * @return {?}
         */
        ,
        set: function set(value) {
          value = !value || value == null || value == "0px" ? "24px" : value;
          this._size = value;
          this.onSizeChange.next(this._size);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "readonly",
        get: function get() {
          return String(this._readOnly) === "true";
        }
        /**
         * @return {?}
         */
        ,
        set: function set(value) {
          this._readOnly = value;
          this.onReadOnlyChange.next(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "totalstars",
        get: function get() {
          return this._totalStars;
        },
        set: function set(value) {
          this._totalStars = value <= 0 ? 5 : value;
          this.onStarsCountChange.next(Number(value));
        }
      }]);

      return StarRatingComponent;
    }();

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
    StarRatingComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'star-rating',
        template: "<div #starMain>\r\n</div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [":root{--checkedColor:gold;--unCheckedColor:gray;--size:24px;--halfWidth:10px;--halfMargin:-20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:'\\2605'}.star.on{color:var(--checkedColor)}.star.half:after{content:'\\2605';color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}"]
      }]
    }];
    /** @nocollapse */

    StarRatingComponent.ctorParameters = function () {
      return [];
    };

    StarRatingComponent.propDecorators = {
      mainElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['starMain', {
          static: true
        }]
      }],
      rate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      checkedcolor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_CHECKED_COLOR]
      }],
      uncheckedcolor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_UNCHECKED_COLOR]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_VALUE]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_SIZE]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_READONLY]
      }],
      totalstars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: [StarRatingComponent.INP_TOTALSTARS]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var RatingModule =
    /*#__PURE__*/
    function () {
      function RatingModule() {
        _classCallCheck(this, RatingModule);
      }

      _createClass(RatingModule, [{
        key: "ngDoBootstrap",

        /**
         * @return {?}
         */
        value: function ngDoBootstrap() {}
      }]);

      return RatingModule;
    }();

    RatingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [RatingComponent, StarRatingComponent],
        exports: [StarRatingComponent],
        entryComponents: [StarRatingComponent]
      }]
    }]; //# sourceMappingURL=ng-starrating.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeStaffStaffreviewStaffreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3>{{'RATING' | translate}}</h3>\n        </div>\n        <div class=\"col-md-6 alignright\">\n            <div class=\"rating\"><span class=\"big\">{{detail && detail.avg_rating?(detail.avg_rating | round):0}}</span><span class=\"small\">(5)</span></div>\n            <div class=\"reviews\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"detail.avg_rating ? (detail.avg_rating | round):0\"></ngx-stars>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 rating_head\">{{'PROFESS' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_pro? (detail.avg_pro | prcnt) :0 }}\" class=\"high\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_pro? (detail.avg_pro | round):0 }}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'CUSTMRSRV' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_cus? (detail.avg_cus | prcnt):0}}\" class=\"average\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_cus? detail.avg_cus:0 }}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'CLEANES' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_cln? (detail.avg_cln | prcnt):0}}\" class=\"equalhigh\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_cln? detail.avg_cln:0}}/5</div>\n\n        <div class=\"col-md-3 rating_head\">{{'TIMING' | translate}}</div>\n        <div class=\"col-md-6 rating_mat\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{detail && detail.avg_tmg? (detail.avg_tmg | prcnt):0}}\" class=\"lesshigh\"></mat-progress-bar>\n        </div>\n        <div class=\"col-md-3 rating_mark\">{{detail && detail.avg_tmg? detail.avg_tmg:0}}/5</div>\n        <div class=\"clearfix space\">&nbsp;</div>\n        <div class=\"col-md-12\">\n            <h3>{{'RCNTREVIW' | translate}}:</h3>\n        </div>\n        <div class=\"staffdetail_notifi\" *ngIf=\"detail\">\n            <div class=\"notifi_list\" *ngFor=\"let review of detail.reviews\">\n                <div class=\"noti_left\"><img [src]=\"review.img? (detail.usr_bp + review.img):usrurl\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                        <div class=\"author\">{{review.name | titlecase}}</div>\n                        <div class=\"reviews\">\n                            <div class=\"staffdetail_staff\"><ngx-stars [readonly]=\"true\" [color]=\"'#f7c133'\" [size]=\"5\" [initialStars]=\"review.rvw_rt\"></ngx-stars></div>\n                        </div>\n                    </div>\n                    {{review.comment}}\n                </div>\n            </div>\n            <div class=\"text-center\"><button type=\"button\" class=\"btn btn-submit\" (click)=\"paginate()\">Load More</button></div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/staff/staffreview/staffreview-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/staff/staffreview/staffreview-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: StaffreviewRoutingModule */

  /***/
  function srcAppHomeStaffStaffreviewStaffreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffreviewRoutingModule", function () {
      return StaffreviewRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _staffreview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staffreview.component */
    "./src/app/home/staff/staffreview/staffreview.component.ts");

    var routes = [{
      path: '',
      component: _staffreview_component__WEBPACK_IMPORTED_MODULE_3__["StaffreviewComponent"]
    }];

    var StaffreviewRoutingModule = function StaffreviewRoutingModule() {
      _classCallCheck(this, StaffreviewRoutingModule);
    };

    StaffreviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StaffreviewRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/staff/staffreview/staffreview.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/home/staff/staffreview/staffreview.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeStaffStaffreviewStaffreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reviews {\n  text-align: right;\n  float: right;\n}\n\n.staffdetail_notifi {\n  width: 100%;\n}\n\n.btn.btn-submit {\n  margin: 10px auto 0px;\n  font-size: 15px;\n  padding: 10px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGlCQUFBO0VBQWtCLFlBQUE7QUNHM0I7O0FERkE7RUFBb0IsV0FBQTtBQ01wQjs7QURMQTtFQUFrQixxQkFBQTtFQUFzQixlQUFBO0VBQWdCLGtCQUFBO0FDV3hEIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdGFmZi9zdGFmZnJldmlldy9zdGFmZnJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXdze3RleHQtYWxpZ246IHJpZ2h0O2Zsb2F0OiByaWdodDt9XG4uc3RhZmZkZXRhaWxfbm90aWZpe3dpZHRoOiAxMDAlO31cbi5idG4uYnRuLXN1Ym1pdCB7IG1hcmdpbjogMTBweCBhdXRvIDBweDtmb250LXNpemU6IDE1cHg7cGFkZGluZzogMTBweCA1MHB4O31cblxuIiwiLnJldmlld3Mge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3RhZmZkZXRhaWxfbm90aWZpIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4uYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbjogMTBweCBhdXRvIDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/staff/staffreview/staffreview.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/staff/staffreview/staffreview.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StaffreviewComponent */

  /***/
  function srcAppHomeStaffStaffreviewStaffreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffreviewComponent", function () {
      return StaffreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");

    var StaffreviewComponent =
    /*#__PURE__*/
    function () {
      function StaffreviewComponent(routes, httpService, error) {
        _classCallCheck(this, StaffreviewComponent);

        this.routes = routes;
        this.httpService = httpService;
        this.error = error;
        this.limitPage = 5;
        this.url = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
        this.usrurl = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["IMG"].PRO;
        this.page = 0;
      }

      _createClass(StaffreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.routes.snapshot.params.id;
          this.getStaffReview();
        }
      }, {
        key: "getStaffReview",
        value: function getStaffReview() {
          var _this7 = this;

          this.httpService.getRequest('GET_PARMS', 'STAFF_REVIEW', this.id, "".concat('limit=' + this.limitPage)).subscribe(function (response) {
            if (response.status === 1) {
              _this7.detail = response.res;
            } else {
              if (response.err) {
                _this7.error.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            _this7.error.handleError(0); // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);

          });
        }
      }, {
        key: "paginate",
        value: function paginate() {
          this.limitPage = this.limitPage + 5;
          this.getStaffReview();
        }
      }]);

      return StaffreviewComponent;
    }();

    StaffreviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
      }];
    };

    StaffreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staffreview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./staffreview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/staff/staffreview/staffreview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./staffreview.component.scss */
      "./src/app/home/staff/staffreview/staffreview.component.scss")).default]
    })], StaffreviewComponent);
    /***/
  },

  /***/
  "./src/app/home/staff/staffreview/staffreview.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home/staff/staffreview/staffreview.module.ts ***!
    \**************************************************************/

  /*! exports provided: StaffreviewModule */

  /***/
  function srcAppHomeStaffStaffreviewStaffreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffreviewModule", function () {
      return StaffreviewModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _staffreview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staffreview-routing.module */
    "./src/app/home/staff/staffreview/staffreview-routing.module.ts");
    /* harmony import */


    var _staffreview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./staffreview.component */
    "./src/app/home/staff/staffreview/staffreview.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
    /* harmony import */


    var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-stars */
    "./node_modules/ngx-stars/fesm2015/ngx-stars.js");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var StaffreviewModule = function StaffreviewModule() {
      _classCallCheck(this, StaffreviewModule);
    };

    StaffreviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_staffreview_component__WEBPACK_IMPORTED_MODULE_4__["StaffreviewComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _staffreview_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffreviewRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"], ngx_stars__WEBPACK_IMPORTED_MODULE_7__["NgxStarsModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]]
    })], StaffreviewModule);
    /***/
  }
}]);
//# sourceMappingURL=12-es5.js.map