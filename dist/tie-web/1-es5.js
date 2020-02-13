function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "./node_modules/ngx-stars/fesm2015/ngx-stars.js":
  /*!******************************************************!*\
    !*** ./node_modules/ngx-stars/fesm2015/ngx-stars.js ***!
    \******************************************************/

  /*! exports provided: NgxStarsComponent, EditableStar, NgxStarsModule */

  /***/
  function node_modulesNgxStarsFesm2015NgxStarsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxStarsComponent", function () {
      return NgxStarsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableStar", function () {
      return EditableStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxStarsModule", function () {
      return NgxStarsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxStarsComponent =
    /*#__PURE__*/
    function () {
      function NgxStarsComponent() {
        var _this = this;

        _classCallCheck(this, NgxStarsComponent);

        this.maxStars = 5;
        this.initialStars = 0;
        this.animationSpeed = 100;
        this.wholeStars = false;
        this.ratingOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customClassIdentifier = Math.random().toString(36).substring(2);

        this.safeSize = function () {
          return Number.isInteger(_this.size) && _this.size > 0 && _this.size < 6 ? _this.size : 1;
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgxStarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupStarImages();
          this.editableStars = Array.from(new Array(this.maxStars)).map(function (elem, index) {
            return new EditableStar(index);
          });
          this.setRating(this.initialStars);

          if (this.animation) {
            this.animationInterval = setInterval(this.starAnimation.bind(this), this.animationSpeed);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // remove the three custom classes we created if custom image urls were provided
          if (this.customCssClasses) {
            this.customCssClasses.forEach(function (style) {
              if (style && style.parentNode) {
                style.parentNode.removeChild(style);
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setupStarImages",
        value: function setupStarImages() {
          var _this2 = this;

          if (this.customStarIcons) {
            this.customCssClasses = [];
            Object.keys(this.customStarIcons).map(function (key) {
              return (
                /** @type {?} */
                key
              );
            }).forEach(function (starType) {
              /** @type {?} */
              var classname = _this2.getStarClass(starType);

              _this2.createCssClass(classname, starType);
            });
          }
        }
        /**
         * @param {?} classname
         * @param {?} starType
         * @return {?}
         */

      }, {
        key: "createCssClass",
        value: function createCssClass(classname, starType) {
          /** @type {?} */
          var clazz = document.createElement('style');
          clazz.type = 'text/css';
          clazz.innerHTML = ".".concat(classname, " {\n      -webkit-mask-image: url(").concat(this.customStarIcons[starType], ");\n      mask-image: url(").concat(this.customStarIcons[starType], ");\n    }");
          document.getElementsByTagName('head')[0].appendChild(clazz);
          this.customCssClasses.push(clazz);
        }
        /**
         * @return {?}
         */

      }, {
        key: "starPadding",
        value: function starPadding() {
          return {
            'margin-right': this.customPadding || "0.".concat(this.safeSize(), "rem")
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starColorAndSize",
        value: function starColorAndSize() {
          return Object.assign({}, this.starColor(), this.starSize());
        }
        /**
         * @return {?}
         */

      }, {
        key: "starColor",
        value: function starColor() {
          return {
            'background-color': this.color || 'crimson'
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starSize",
        value: function starSize() {
          return {
            height: "".concat(15 * this.safeSize(), "px"),
            width: "".concat(16 * this.safeSize(), "px")
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starAnimation",
        value: function starAnimation() {
          this.animationRunning = true;

          if (this.rating < this.maxStars) {
            this.setRating(this.rating += 0.5);
          } else {
            this.setRating(0);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelStarAnimation",
        value: function cancelStarAnimation() {
          if (this.animationRunning) {
            clearInterval(this.animationInterval);
            this.rating = 0;
            this.animationRunning = false;
          }
        }
        /**
         * @param {?} rating
         * @return {?}
         */

      }, {
        key: "setRating",
        value: function setRating(rating) {
          this.rating = Math.round(rating * 2) / 2;
          this.onStarsUnhover();
        }
        /**
         * @param {?} event
         * @param {?} clickedStar
         * @return {?}
         */

      }, {
        key: "onStarHover",
        value: function onStarHover(event, clickedStar) {
          var _this3 = this;

          this.cancelStarAnimation();
          /** @type {?} */

          var clickedInFirstHalf = this.clickedInFirstHalf(event); // fill in either a half or whole star depending on where user clicked

          clickedStar.classname = !this.wholeStars && clickedInFirstHalf ? this.getStarClass('half') : this.getStarClass('full'); // fill in all stars in previous positions and clear all in later ones

          this.editableStars.forEach(function (star) {
            if (star.position > clickedStar.position) {
              star.classname = _this3.getStarClass('empty');
            } else if (star.position < clickedStar.position) {
              star.classname = _this3.getStarClass('full');
            }
          });
        }
        /**
         * @param {?} event
         * @param {?} clickedStar
         * @return {?}
         */

      }, {
        key: "onStarClick",
        value: function onStarClick(event, clickedStar) {
          this.cancelStarAnimation();
          /** @type {?} */

          var clickedInFirstHalf = this.clickedInFirstHalf(event);
          this.rating = clickedStar.position + (!this.wholeStars && clickedInFirstHalf ? 0.5 : 1);
          this.ratingOutput.emit(this.rating);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onZeroStarClick",
        value: function onZeroStarClick() {
          this.setRating(0);
          this.ratingOutput.emit(this.rating);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onZeroStarHover",
        value: function onZeroStarHover() {
          var _this4 = this;

          // clear all stars
          this.editableStars.forEach(function (star) {
            return star.classname = _this4.getStarClass('empty');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "onStarsUnhover",
        value: function onStarsUnhover() {
          var _this5 = this;

          // when user stops hovering we want to make stars reflect the last rating applied by clicking
          this.editableStars.forEach(function (star) {
            /** @type {?} */
            var starNumber = star.position + 1;

            if (_this5.rating >= starNumber) {
              star.classname = _this5.getStarClass('full');
            } else if (_this5.rating > starNumber - 1 && _this5.rating < starNumber) {
              star.classname = _this5.getStarClass('half');
            } else {
              star.classname = _this5.getStarClass('empty');
            }
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "clickedInFirstHalf",
        value: function clickedInFirstHalf(event) {
          /** @type {?} */
          var starIcon =
          /** @type {?} */
          event.target;
          return event.pageX < starIcon.getBoundingClientRect().left + starIcon.offsetWidth / 2;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noop",
        value: function noop() {}
        /**
         * @param {?} starType
         * @return {?}
         */

      }, {
        key: "getStarClass",
        value: function getStarClass(starType) {
          if (this.customCssClasses) {
            return "ngx-stars-star-".concat(starType, "-").concat(this.customClassIdentifier);
          }

          return "star-".concat(starType);
        }
      }]);

      return NgxStarsComponent;
    }();

    NgxStarsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-stars',
        template: "<div class=\"stars-line\" (mouseleave)=\"readonly ? noop() : onStarsUnhover()\">\n  <span class=\"star zero-star\" [ngStyle]=\"starSize()\" aria-hidden=\"true\" (click)=\"onZeroStarClick()\" (mousemove)=\"readonly ? noop() : onZeroStarHover()\"></span>\n  <div *ngFor=\"let star of editableStars;\" [ngStyle]=\"starPadding()\" (click)=\"readonly ? noop() : onStarClick($event, star)\" (mousemove)=\"readonly ? noop() : onStarHover($event, star)\">\n    <span class=\"star\" [ngClass]=\"star.classname\" [ngStyle]=\"starColorAndSize()\" aria-hidden=\"true\"></span>\n  </div>\n</div>\n",
        styles: [".stars-line{display:flex;align-items:center;position:relative}.stars-line>div{z-index:999}.zero-star{color:transparent;position:absolute;left:-16px}.star{display:inline-block;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.star-empty{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'%3E%3C/path%3E%3C/svg%3E%0A\");mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'%3E%3C/path%3E%3C/svg%3E%0A\")}.star-half{-webkit-mask-image:url(\"data:image/svg+xml,%3C!-- had to hack this one's viewbox otherwise it didn't line up with the other two --%3E%3C!-- changed viewbox from '0 0 536 512' to '-20 0 576 512' --%3E%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star-half-alt' class='svg-inline--fa fa-star-half-alt fa-w-17' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='-20 0 576 512'%3E%3Cpath fill='currentColor' d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'%3E%3C/path%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C!-- had to hack this one's viewbox otherwise it didn't line up with the other two --%3E%3C!-- changed viewbox from '0 0 536 512' to '-20 0 576 512' --%3E%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star-half-alt' class='svg-inline--fa fa-star-half-alt fa-w-17' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='-20 0 576 512'%3E%3Cpath fill='currentColor' d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'%3E%3C/path%3E%3C/svg%3E\")}.star-full{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'%3E%3C/path%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'%3E%3C/path%3E%3C/svg%3E\")}"]
      }]
    }];
    NgxStarsComponent.propDecorators = {
      maxStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customPadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      wholeStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customStarIcons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ratingOutput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    var EditableStar =
    /**
     * @param {?} position
     */
    function EditableStar(position) {
      _classCallCheck(this, EditableStar);

      this.position = position;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxStarsModule = function NgxStarsModule() {
      _classCallCheck(this, NgxStarsModule);
    };

    NgxStarsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [NgxStarsComponent],
        exports: [NgxStarsComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc3RhcnMvbGliL25neC1zdGFycy5jb21wb25lbnQudHMiLCJuZzovL25neC1zdGFycy9saWIvbmd4LXN0YXJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN0YXJzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3RhcnMtbGluZVwiIChtb3VzZWxlYXZlKT1cInJlYWRvbmx5ID8gbm9vcCgpIDogb25TdGFyc1VuaG92ZXIoKVwiPlxuICA8c3BhbiBjbGFzcz1cInN0YXIgemVyby1zdGFyXCIgW25nU3R5bGVdPVwic3RhclNpemUoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljayk9XCJvblplcm9TdGFyQ2xpY2soKVwiIChtb3VzZW1vdmUpPVwicmVhZG9ubHkgPyBub29wKCkgOiBvblplcm9TdGFySG92ZXIoKVwiPjwvc3Bhbj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgc3RhciBvZiBlZGl0YWJsZVN0YXJzO1wiIFtuZ1N0eWxlXT1cInN0YXJQYWRkaW5nKClcIiAoY2xpY2spPVwicmVhZG9ubHkgPyBub29wKCkgOiBvblN0YXJDbGljaygkZXZlbnQsIHN0YXIpXCIgKG1vdXNlbW92ZSk9XCJyZWFkb25seSA/IG5vb3AoKSA6IG9uU3RhckhvdmVyKCRldmVudCwgc3RhcilcIj5cbiAgICA8c3BhbiBjbGFzcz1cInN0YXJcIiBbbmdDbGFzc109XCJzdGFyLmNsYXNzbmFtZVwiIFtuZ1N0eWxlXT1cInN0YXJDb2xvckFuZFNpemUoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Auc3RhcnMtbGluZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfS5zdGFycy1saW5lPmRpdnt6LWluZGV4Ojk5OX0uemVyby1zdGFye2NvbG9yOnRyYW5zcGFyZW50O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTE2cHh9LnN0YXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1tYXNrLXJlcGVhdDpuby1yZXBlYXQ7bWFzay1yZXBlYXQ6bm8tcmVwZWF0fS5zdGFyLWVtcHR5ey13ZWJraXQtbWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFyJyBkYXRhLWljb249J3N0YXInIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyIGZhLXctMTgnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTUyOC4xIDE3MS41TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNnpNMzg4LjYgMzEyLjNsMjMuNyAxMzguNEwyODggMzg1LjRsLTEyNC4zIDY1LjMgMjMuNy0xMzguNC0xMDAuNi05OCAxMzktMjAuMiA2Mi4yLTEyNiA2Mi4yIDEyNiAxMzkgMjAuMi0xMDAuNiA5OHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFJTBBXCIpO21hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcicgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J001MjguMSAxNzEuNUwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDBMMTk0IDE1MC4yIDQ3LjkgMTcxLjVjLTI2LjIgMy44LTM2LjcgMzYuMS0xNy43IDU0LjZsMTA1LjcgMTAzLTI1IDE0NS41Yy00LjUgMjYuMyAyMy4yIDQ2IDQ2LjQgMzMuN0wyODggNDM5LjZsMTMwLjcgNjguN2MyMy4yIDEyLjIgNTAuOS03LjQgNDYuNC0zMy43bC0yNS0xNDUuNSAxMDUuNy0xMDNjMTktMTguNSA4LjUtNTAuOC0xNy43LTU0LjZ6TTM4OC42IDMxMi4zbDIzLjcgMTM4LjRMMjg4IDM4NS40bC0xMjQuMyA2NS4zIDIzLjctMTM4LjQtMTAwLjYtOTggMTM5LTIwLjIgNjIuMi0xMjYgNjIuMiAxMjYgMTM5IDIwLjItMTAwLjYgOTh6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRSUwQVwiKX0uc3Rhci1oYWxmey13ZWJraXQtbWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDIS0tIGhhZCB0byBoYWNrIHRoaXMgb25lJ3Mgdmlld2JveCBvdGhlcndpc2UgaXQgZGlkbid0IGxpbmUgdXAgd2l0aCB0aGUgb3RoZXIgdHdvIC0tJTNFJTNDIS0tIGNoYW5nZWQgdmlld2JveCBmcm9tICcwIDAgNTM2IDUxMicgdG8gJy0yMCAwIDU3NiA1MTInIC0tJTNFJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFzJyBkYXRhLWljb249J3N0YXItaGFsZi1hbHQnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyLWhhbGYtYWx0IGZhLXctMTcnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMjAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNTA4LjU1IDE3MS41MUwzNjIuMTggMTUwLjIgMjk2Ljc3IDE3LjgxQzI5MC44OSA1Ljk4IDI3OS40MiAwIDI2Ny45NSAwYy0xMS40IDAtMjIuNzkgNS45LTI4LjY5IDE3LjgxbC02NS40MyAxMzIuMzgtMTQ2LjM4IDIxLjI5Yy0yNi4yNSAzLjgtMzYuNzcgMzYuMDktMTcuNzQgNTQuNTlsMTA1Ljg5IDEwMy0yNS4wNiAxNDUuNDhDODYuOTggNDk1LjMzIDEwMy41NyA1MTIgMTIyLjE1IDUxMmM0LjkzIDAgMTAtMS4xNyAxNC44Ny0zLjc1bDEzMC45NS02OC42OCAxMzAuOTQgNjguN2M0Ljg2IDIuNTUgOS45MiAzLjcxIDE0LjgzIDMuNzEgMTguNiAwIDM1LjIyLTE2LjYxIDMxLjY2LTM3LjRsLTI1LjAzLTE0NS40OSAxMDUuOTEtMTAyLjk4YzE5LjA0LTE4LjUgOC41Mi01MC44LTE3LjczLTU0LjZ6bS0xMjEuNzQgMTIzLjJsLTE4LjEyIDE3LjYyIDQuMjggMjQuODggMTkuNTIgMTEzLjQ1LTEwMi4xMy01My41OS0yMi4zOC0xMS43NC4wMy0zMTcuMTkgNTEuMDMgMTAzLjI5IDExLjE4IDIyLjYzIDI1LjAxIDMuNjQgMTE0LjIzIDE2LjYzLTgyLjY1IDgwLjM4eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7bWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDIS0tIGhhZCB0byBoYWNrIHRoaXMgb25lJ3Mgdmlld2JveCBvdGhlcndpc2UgaXQgZGlkbid0IGxpbmUgdXAgd2l0aCB0aGUgb3RoZXIgdHdvIC0tJTNFJTNDIS0tIGNoYW5nZWQgdmlld2JveCBmcm9tICcwIDAgNTM2IDUxMicgdG8gJy0yMCAwIDU3NiA1MTInIC0tJTNFJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFzJyBkYXRhLWljb249J3N0YXItaGFsZi1hbHQnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyLWhhbGYtYWx0IGZhLXctMTcnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMjAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNTA4LjU1IDE3MS41MUwzNjIuMTggMTUwLjIgMjk2Ljc3IDE3LjgxQzI5MC44OSA1Ljk4IDI3OS40MiAwIDI2Ny45NSAwYy0xMS40IDAtMjIuNzkgNS45LTI4LjY5IDE3LjgxbC02NS40MyAxMzIuMzgtMTQ2LjM4IDIxLjI5Yy0yNi4yNSAzLjgtMzYuNzcgMzYuMDktMTcuNzQgNTQuNTlsMTA1Ljg5IDEwMy0yNS4wNiAxNDUuNDhDODYuOTggNDk1LjMzIDEwMy41NyA1MTIgMTIyLjE1IDUxMmM0LjkzIDAgMTAtMS4xNyAxNC44Ny0zLjc1bDEzMC45NS02OC42OCAxMzAuOTQgNjguN2M0Ljg2IDIuNTUgOS45MiAzLjcxIDE0LjgzIDMuNzEgMTguNiAwIDM1LjIyLTE2LjYxIDMxLjY2LTM3LjRsLTI1LjAzLTE0NS40OSAxMDUuOTEtMTAyLjk4YzE5LjA0LTE4LjUgOC41Mi01MC44LTE3LjczLTU0LjZ6bS0xMjEuNzQgMTIzLjJsLTE4LjEyIDE3LjYyIDQuMjggMjQuODggMTkuNTIgMTEzLjQ1LTEwMi4xMy01My41OS0yMi4zOC0xMS43NC4wMy0zMTcuMTkgNTEuMDMgMTAzLjI5IDExLjE4IDIyLjYzIDI1LjAxIDMuNjQgMTE0LjIzIDE2LjYzLTgyLjY1IDgwLjM4eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIil9LnN0YXItZnVsbHstd2Via2l0LW1hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcycgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO21hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcycgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdGFyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBtYXhTdGFyczogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKVxuICBpbml0aWFsU3RhcnM6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGFuaW1hdGlvblNwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tUGFkZGluZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHdob2xlU3RhcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjdXN0b21TdGFySWNvbnM6IHsgZW1wdHk6IHN0cmluZywgaGFsZjogc3RyaW5nLCBmdWxsOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KClcbiAgcmF0aW5nT3V0cHV0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByYXRpbmc6IG51bWJlcjtcbiAgZWRpdGFibGVTdGFyczogRWRpdGFibGVTdGFyW107XG4gIGFuaW1hdGlvbkludGVydmFsOiBhbnk7XG4gIGFuaW1hdGlvblJ1bm5pbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjdXN0b21Dc3NDbGFzc2VzOiBIVE1MU3R5bGVFbGVtZW50W107XG4gIHByaXZhdGUgY3VzdG9tQ2xhc3NJZGVudGlmaWVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dXBTdGFySW1hZ2VzKCk7XG4gICAgdGhpcy5lZGl0YWJsZVN0YXJzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkodGhpcy5tYXhTdGFycykpLm1hcCgoZWxlbSwgaW5kZXgpID0+IG5ldyBFZGl0YWJsZVN0YXIoaW5kZXgpKTtcbiAgICB0aGlzLnNldFJhdGluZyh0aGlzLmluaXRpYWxTdGFycyk7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnN0YXJBbmltYXRpb24uYmluZCh0aGlzKSwgdGhpcy5hbmltYXRpb25TcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gcmVtb3ZlIHRoZSB0aHJlZSBjdXN0b20gY2xhc3NlcyB3ZSBjcmVhdGVkIGlmIGN1c3RvbSBpbWFnZSB1cmxzIHdlcmUgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5jdXN0b21Dc3NDbGFzc2VzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNzc0NsYXNzZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZSAmJiBzdHlsZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBTdGFySW1hZ2VzKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVN0YXJJY29ucykge1xuICAgICAgdGhpcy5jdXN0b21Dc3NDbGFzc2VzID0gW107XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbVN0YXJJY29ucykubWFwKGtleSA9PiBrZXkgYXMgU3RhclR5cGUpLmZvckVhY2goc3RhclR5cGUgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcyhzdGFyVHlwZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ3NzQ2xhc3MoY2xhc3NuYW1lLCBzdGFyVHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNzc0NsYXNzKGNsYXNzbmFtZTogc3RyaW5nLCBzdGFyVHlwZTogU3RhclR5cGUpIHtcbiAgICBjb25zdCBjbGF6eiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY2xhenoudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgY2xhenouaW5uZXJIVE1MID0gYC4ke2NsYXNzbmFtZX0ge1xuICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHt0aGlzLmN1c3RvbVN0YXJJY29uc1tzdGFyVHlwZV19KTtcbiAgICAgIG1hc2staW1hZ2U6IHVybCgke3RoaXMuY3VzdG9tU3Rhckljb25zW3N0YXJUeXBlXX0pO1xuICAgIH1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoY2xhenopO1xuICAgIHRoaXMuY3VzdG9tQ3NzQ2xhc3Nlcy5wdXNoKGNsYXp6KTtcbiAgfVxuXG4gIHN0YXJQYWRkaW5nKCk6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4geyAnbWFyZ2luLXJpZ2h0JzogdGhpcy5jdXN0b21QYWRkaW5nIHx8IGAwLiR7dGhpcy5zYWZlU2l6ZSgpfXJlbWAgfTtcbiAgfVxuXG4gIHN0YXJDb2xvckFuZFNpemUoKTogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXJDb2xvcigpLCB0aGlzLnN0YXJTaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFyQ29sb3IoKTogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5jb2xvciB8fCAnY3JpbXNvbicgfTtcbiAgfVxuXG4gIHN0YXJTaXplKCk6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBgJHsxNSAqIHRoaXMuc2FmZVNpemUoKX1weGAsXG4gICAgICB3aWR0aDogYCR7MTYgKiB0aGlzLnNhZmVTaXplKCl9cHhgLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNhZmVTaXplID0gKCkgPT4gKE51bWJlci5pc0ludGVnZXIodGhpcy5zaXplKSAmJiB0aGlzLnNpemUgPiAwICYmIHRoaXMuc2l6ZSA8IDYpID8gdGhpcy5zaXplIDogMTtcblxuICBzdGFyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uUnVubmluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMucmF0aW5nIDwgdGhpcy5tYXhTdGFycykge1xuICAgICAgdGhpcy5zZXRSYXRpbmcodGhpcy5yYXRpbmcgKz0gMC41KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFJhdGluZygwKTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWxTdGFyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvblJ1bm5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltYXRpb25JbnRlcnZhbCk7XG4gICAgICB0aGlzLnJhdGluZyA9IDA7XG4gICAgICB0aGlzLmFuaW1hdGlvblJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nICogMikgLyAyO1xuICAgIHRoaXMub25TdGFyc1VuaG92ZXIoKTtcbiAgfVxuXG4gIG9uU3RhckhvdmVyKGV2ZW50OiBNb3VzZUV2ZW50LCBjbGlja2VkU3RhcjogRWRpdGFibGVTdGFyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxTdGFyQW5pbWF0aW9uKCk7XG5cbiAgICBjb25zdCBjbGlja2VkSW5GaXJzdEhhbGYgPSB0aGlzLmNsaWNrZWRJbkZpcnN0SGFsZihldmVudCk7XG5cbiAgICAvLyBmaWxsIGluIGVpdGhlciBhIGhhbGYgb3Igd2hvbGUgc3RhciBkZXBlbmRpbmcgb24gd2hlcmUgdXNlciBjbGlja2VkXG4gICAgY2xpY2tlZFN0YXIuY2xhc3NuYW1lID0gKCF0aGlzLndob2xlU3RhcnMgJiYgY2xpY2tlZEluRmlyc3RIYWxmKSA/IHRoaXMuZ2V0U3RhckNsYXNzKCdoYWxmJykgOiB0aGlzLmdldFN0YXJDbGFzcygnZnVsbCcpO1xuXG4gICAgLy8gZmlsbCBpbiBhbGwgc3RhcnMgaW4gcHJldmlvdXMgcG9zaXRpb25zIGFuZCBjbGVhciBhbGwgaW4gbGF0ZXIgb25lc1xuICAgIHRoaXMuZWRpdGFibGVTdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgaWYgKHN0YXIucG9zaXRpb24gPiBjbGlja2VkU3Rhci5wb3NpdGlvbikge1xuICAgICAgICBzdGFyLmNsYXNzbmFtZSA9IHRoaXMuZ2V0U3RhckNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3Rhci5wb3NpdGlvbiA8IGNsaWNrZWRTdGFyLnBvc2l0aW9uKSB7XG4gICAgICAgIHN0YXIuY2xhc3NuYW1lID0gdGhpcy5nZXRTdGFyQ2xhc3MoJ2Z1bGwnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU3RhckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBjbGlja2VkU3RhcjogRWRpdGFibGVTdGFyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxTdGFyQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBsb2NrIGluIGN1cnJlbnQgcmF0aW5nXG4gICAgY29uc3QgY2xpY2tlZEluRmlyc3RIYWxmID0gdGhpcy5jbGlja2VkSW5GaXJzdEhhbGYoZXZlbnQpO1xuICAgIHRoaXMucmF0aW5nID0gY2xpY2tlZFN0YXIucG9zaXRpb24gKyAoKCF0aGlzLndob2xlU3RhcnMgJiYgY2xpY2tlZEluRmlyc3RIYWxmKSA/IDAuNSA6IDEpO1xuICAgIHRoaXMucmF0aW5nT3V0cHV0LmVtaXQodGhpcy5yYXRpbmcpO1xuICB9XG5cbiAgLy8gaGlkZGVuIHN0YXIgdG8gbGVmdCBvZiBmaXJzdCBzdGFyIGxldHMgdXNlciBjbGljayB0aGVyZSB0byBzZXQgdG8gMFxuICBvblplcm9TdGFyQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRSYXRpbmcoMCk7XG4gICAgdGhpcy5yYXRpbmdPdXRwdXQuZW1pdCh0aGlzLnJhdGluZyk7XG4gIH1cblxuICBvblplcm9TdGFySG92ZXIoKTogdm9pZCB7XG4gICAgLy8gY2xlYXIgYWxsIHN0YXJzXG4gICAgdGhpcy5lZGl0YWJsZVN0YXJzLmZvckVhY2goc3RhciA9PiBzdGFyLmNsYXNzbmFtZSA9IHRoaXMuZ2V0U3RhckNsYXNzKCdlbXB0eScpKTtcbiAgfVxuXG4gIG9uU3RhcnNVbmhvdmVyKCkge1xuICAgIC8vIHdoZW4gdXNlciBzdG9wcyBob3ZlcmluZyB3ZSB3YW50IHRvIG1ha2Ugc3RhcnMgcmVmbGVjdCB0aGUgbGFzdCByYXRpbmcgYXBwbGllZCBieSBjbGlja2luZ1xuICAgIHRoaXMuZWRpdGFibGVTdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgY29uc3Qgc3Rhck51bWJlciA9IHN0YXIucG9zaXRpb24gKyAxO1xuICAgICAgaWYgKHRoaXMucmF0aW5nID49IHN0YXJOdW1iZXIpIHtcbiAgICAgICAgc3Rhci5jbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcygnZnVsbCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5yYXRpbmcgPiBzdGFyTnVtYmVyIC0gMSAmJiB0aGlzLnJhdGluZyA8IHN0YXJOdW1iZXIpIHtcbiAgICAgICAgc3Rhci5jbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcygnaGFsZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXIuY2xhc3NuYW1lID0gdGhpcy5nZXRTdGFyQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsaWNrZWRJbkZpcnN0SGFsZihldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0YXJJY29uID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiBldmVudC5wYWdlWCA8IHN0YXJJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBzdGFySWNvbi5vZmZzZXRXaWR0aCAvIDI7XG4gIH1cblxuICBub29wKCk6IHZvaWQge31cblxuICBwcml2YXRlIGdldFN0YXJDbGFzcyhzdGFyVHlwZTogU3RhclR5cGUpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Dc3NDbGFzc2VzKSB7XG4gICAgICByZXR1cm4gYG5neC1zdGFycy1zdGFyLSR7c3RhclR5cGV9LSR7dGhpcy5jdXN0b21DbGFzc0lkZW50aWZpZXJ9YDtcbiAgICB9XG4gICAgcmV0dXJuIGBzdGFyLSR7c3RhclR5cGV9YDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdGFyVHlwZSA9ICdlbXB0eScgfCAnaGFsZicgfCAnZnVsbCc7XG5cbmV4cG9ydCBjbGFzcyBFZGl0YWJsZVN0YXIge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBjbGFzc25hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4U3RhcnNDb21wb25lbnQgfSBmcm9tICcuL25neC1zdGFycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hTdGFyc0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4U3RhcnNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdGFyc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFhYSxpQkFBaUI7O1FBRTVCLGdCQUNtQixDQUFDLENBQUM7UUFFckIsb0JBQ3VCLENBQUMsQ0FBQztRQWN6QixzQkFDeUIsR0FBRyxDQUFDO1FBSzdCLGtCQUNzQixLQUFLLENBQUM7UUFLNUIsb0JBQ3FDLElBQUksWUFBWSxFQUFFLENBQUM7cUNBUXhCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkErRHBELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7Ozs7O0lBN0R4RyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FB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

    /***/
  }
}]);
//# sourceMappingURL=1-es5.js.map