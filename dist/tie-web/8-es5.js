function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/ng-simple-slideshow/ng-simple-slideshow.js ***!
    \*****************************************************************/

  /*! exports provided: SlideshowModule, ɵa, ɵb */

  /***/
  function node_modulesNgSimpleSlideshowNgSimpleSlideshowJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowModule", function () {
      return SlideshowModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SlideshowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SwipeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var SwipeService =
    /*#__PURE__*/
    function () {
      function SwipeService() {
        _classCallCheck(this, SwipeService);
      }

      _createClass(SwipeService, [{
        key: "swipe",

        /**
         * \@description detect the direction of the swipe, and return a -1 or 1 if the duration is long enough
         *              else return a 0 to do nothing
         * @param {?} e
         * @param {?} when
         * @return {?}
         */
        value: function swipe(e, when) {
          var
          /** @type {?} */
          coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
          var
          /** @type {?} */
          time = new Date().getTime();

          if (when === 'start') {
            this._swipeCoord = coord;
            this._swipeTime = time;
          } else if (when === 'end') {
            var
            /** @type {?} */
            direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]];
            var
            /** @type {?} */
            duration = time - this._swipeTime;

            if (duration < 1000 // Short enough
            && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
            && Math.abs(direction[0]) > 30) {
              return direction[0] < 0 ? 1 : -1;
            }
          }

          return 0;
        }
      }]);

      return SwipeService;
    }();

    SwipeService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @nocollapse
     */

    SwipeService.ctorParameters = function () {
      return [];
    };

    var FIRST_SLIDE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('firstSlide');

    var SlideshowComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _swipeService
       * @param {?} _renderer
       * @param {?} _transferState
       * @param {?} _ngZone
       * @param {?} sanitizer
       * @param {?} platform_id
       * @param {?} document
       */
      function SlideshowComponent(_swipeService, _renderer, _transferState, _ngZone, sanitizer, platform_id, document) {
        _classCallCheck(this, SlideshowComponent);

        this._swipeService = _swipeService;
        this._renderer = _renderer;
        this._transferState = _transferState;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.platform_id = platform_id;
        this.document = document;
        this.slideIndex = -1;
        this.slides = [];
        this._initial = true;
        this._isHidden = false;
        this.imageUrls = [];
        this.height = '100%';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = false;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.autoPlayWaitForLazyLoad = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.fullscreen = false;
        this.onSlideLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlideRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFullscreenExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(SlideshowComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.debug !== undefined) {
            console.warn('[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          // if this is the first being called, create a copy of the input
          if (this.imageUrls && this.imageUrls.length > 0) {
            if (this._initial === true) {
              this._urlCache = Array.from(this.imageUrls);
            }

            if (this._isHidden === true) {
              this._renderer.removeStyle(this.container.nativeElement, 'display');

              this._isHidden = false;
            }

            this.setSlides();
          } else if (this.hideOnNoSlides === true) {
            this._renderer.setStyle(this.container.nativeElement, 'display', 'none');

            this._isHidden = true;
          }

          this.setStyles();
          this.handleAutoPlay();
        }
        /**
         * \@description this is the function that should be called to make the slides change.
         *              indexDirection to move back is -1, to move forward is 1, and to stay in place is 0.
         *              0 is taken into account for failed swipes
         * @param {?} indexDirection
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "onSlide",
        value: function onSlide(indexDirection, isSwipe) {
          this.handleAutoPlay(this.stopAutoPlayOnSlide);
          this.slide(indexDirection, isSwipe);
        }
        /**
         * \@description Use the swipe service to detect swipe events from phone and tablets
         * @param {?} e
         * @param {?} when
         * @return {?}
         */

      }, {
        key: "onSwipe",
        value: function onSwipe(e, when) {
          if (this.disableSwiping === true) {
            return;
          }

          var
          /** @type {?} */
          indexDirection = this._swipeService.swipe(e, when); // handle a failed swipe


          if (indexDirection === 0) {
            return;
          } else {
            this.onSlide(indexDirection, true);
          }
        }
        /**
         * \@description Redirect to current slide "href" if defined
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick(e) {
          e.preventDefault();
          var
          /** @type {?} */
          currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];

          if (currentSlide && currentSlide.image.clickAction) {
            currentSlide.image.clickAction();
          } else if (currentSlide && currentSlide.image.href) {
            this.document.location.href = currentSlide.image.href;
          }
        }
        /**
         * \@description set the index to the desired index - 1 and simulate a right slide
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "goToSlide",
        value: function goToSlide(index) {
          var
          /** @type {?} */
          beforeClickIndex = this.slideIndex;
          this.slideIndex = index - 1;
          this.setSlideIndex(1);

          if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
          }

          this.handleAutoPlay(this.stopAutoPlayOnSlide);
          this.slideRight(beforeClickIndex);
          this.slides[beforeClickIndex].selected = false;
          this.slides[this.slideIndex].selected = true;
        }
        /**
         * \@description set the index to the desired index - 1 and simulate a right slide
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "getSlideStyle",
        value: function getSlideStyle(index) {
          var
          /** @type {?} */
          slide = this.slides[index];

          if (slide.loaded) {
            return {
              "background-image": 'url(' + slide.image.url + ')',
              "background-size": slide.image.backgroundSize || this.backgroundSize,
              "background-position": slide.image.backgroundPosition || this.backgroundPosition,
              "background-repeat": slide.image.backgroundRepeat || this.backgroundRepeat
            };
          } else {
            // doesn't compile correctly if returning an empty object, sooooo.....
            return {
              "background-image": undefined,
              "background-size": undefined,
              "background-position": undefined,
              "background-repeat": undefined
            };
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "exitFullScreen",
        value: function exitFullScreen(e) {
          e.preventDefault();
          this.fullscreen = false;
          this.onFullscreenExit.emit(true);
        }
        /**
         * \@description Set the new slide index, then make the transition happen.
         * @param {?} indexDirection
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slide",
        value: function slide(indexDirection, isSwipe) {
          var
          /** @type {?} */
          oldIndex = this.slideIndex;
          this.setSlideIndex(indexDirection);

          if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
          }

          if (indexDirection === 1) {
            this.slideRight(oldIndex, isSwipe);
          } else {
            this.slideLeft(oldIndex, isSwipe);
          }

          this.slides[oldIndex].selected = false;
          this.slides[this.slideIndex].selected = true;
        }
        /**
         * \@description This is just treating the url array like a circular list.
         * @param {?} indexDirection
         * @return {?}
         */

      }, {
        key: "setSlideIndex",
        value: function setSlideIndex(indexDirection) {
          this.slideIndex += indexDirection;

          if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
          }

          if (this.slideIndex >= this.slides.length) {
            this.slideIndex = 0;
          }

          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description This function handles the variables to move the CSS classes around accordingly.
         *              In order to correctly handle animations, the new slide as well as the slides to
         *              the left and right are assigned classes.
         * @param {?} oldIndex
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slideLeft",
        value: function slideLeft(oldIndex, isSwipe) {
          if (isSwipe === true) {
            this.onSwipeLeft.emit(this.slideIndex);
          } else {
            this.onSlideLeft.emit(this.slideIndex);
          }

          this.slides[this.getLeftSideIndex(oldIndex)].leftSide = false;
          this.slides[oldIndex].leftSide = true;
          this.slides[oldIndex].action = 'slideOutLeft';
          this.slides[this.slideIndex].rightSide = false;
          this.slides[this.getRightSideIndex()].rightSide = true;
          this.slides[this.slideIndex].action = 'slideInRight';
        }
        /**
         * \@description This function handles the variables to move the CSS classes around accordingly.
         *              In order to correctly handle animations, the new slide as well as the slides to
         *              the left and right are assigned classes.
         * @param {?} oldIndex
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slideRight",
        value: function slideRight(oldIndex, isSwipe) {
          if (isSwipe === true) {
            this.onSwipeRight.emit(this.slideIndex);
          } else {
            this.onSlideRight.emit(this.slideIndex);
          }

          this.slides[this.getRightSideIndex(oldIndex)].rightSide = false;
          this.slides[oldIndex].rightSide = true;
          this.slides[oldIndex].action = 'slideOutRight';
          this.slides[this.slideIndex].leftSide = false;
          this.slides[this.getLeftSideIndex()].leftSide = true;
          this.slides[this.slideIndex].action = 'slideInLeft';
        }
        /**
         * \@description Check to make sure slide images have been set or haven't changed
         * @return {?}
         */

      }, {
        key: "setSlides",
        value: function setSlides() {
          if (this.imageUrls) {
            if (this.checkCache() || this._initial === true) {
              this._initial = false;
              this._urlCache = Array.from(this.imageUrls);
              this.slides = [];

              if (this.lazyLoad === true) {
                this.buildLazyLoadSlideArray();
              } else {
                this.buildSlideArray();
              }
            }
          }
        }
        /**
         * \@description create the slides without background urls, which will be added in
         *              for the "lazy load," then load only the first slide
         * @return {?}
         */

      }, {
        key: "buildLazyLoadSlideArray",
        value: function buildLazyLoadSlideArray() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.imageUrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var image = _step.value;
              this.slides.push({
                image: typeof image === 'string' ? {
                  url: null
                } : {
                  url: null,
                  href: image.href || ''
                },
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: false
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.slideIndex = 0;
          this.slides[this.slideIndex].selected = true;
          this.loadFirstSlide();
          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description create the slides with background urls all at once
         * @return {?}
         */

      }, {
        key: "buildSlideArray",
        value: function buildSlideArray() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.imageUrls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var image = _step2.value;
              this.slides.push({
                image: typeof image === 'string' ? {
                  url: image
                } : image,
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: true
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.slideIndex = 0;
          this.slides[this.slideIndex].selected = true;
          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description load the first slide image if lazy loading
         *              this takes server side and browser side into account
         * @return {?}
         */

      }, {
        key: "loadFirstSlide",
        value: function loadFirstSlide() {
          var _this = this;

          var
          /** @type {?} */
          tmpIndex = this.slideIndex;
          var
          /** @type {?} */
          tmpImage = this.imageUrls[tmpIndex]; // if server side, we don't need to worry about the rest of the slides

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            this.slides[tmpIndex].image = typeof tmpImage === 'string' ? {
              url: tmpImage
            } : tmpImage;
            this.slides[tmpIndex].loaded = true;

            this._transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
          } else {
            var
            /** @type {?} */
            firstSlideFromTransferState = this._transferState.get(FIRST_SLIDE_KEY,
            /** @type {?} */
            null); // if the first slide didn't finish loading on the server side, we need to load it


            if (firstSlideFromTransferState === null) {
              var
              /** @type {?} */
              loadImage = new Image();
              loadImage.src = typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
              loadImage.addEventListener('load', function () {
                _this.slides[tmpIndex].image = typeof tmpImage === 'string' ? {
                  url: tmpImage
                } : tmpImage;
                _this.slides[tmpIndex].loaded = true;
              });
            } else {
              this.slides[tmpIndex] = firstSlideFromTransferState;

              this._transferState.remove(FIRST_SLIDE_KEY);
            }
          }
        }
        /**
         * \@description if lazy loading in browser, start loading remaining slides
         * \@todo: figure out how to not show the spinner if images are loading fast enough
         * @return {?}
         */

      }, {
        key: "loadRemainingSlides",
        value: function loadRemainingSlides() {
          var _this2 = this;

          var _loop = function _loop(i) {
            if (!_this2.slides[i].loaded) {
              new Promise(function (resolve) {
                var
                /** @type {?} */
                tmpImage = _this2.imageUrls[i];
                var
                /** @type {?} */
                loadImage = new Image();
                loadImage.addEventListener('load', function () {
                  _this2.slides[i].image = typeof tmpImage === 'string' ? {
                    url: tmpImage
                  } : tmpImage;
                  _this2.slides[i].loaded = true;
                  resolve();
                });
                loadImage.src = typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
              });
            }
          };

          for (var
          /** @type {?} */
          i = 0; i < this.slides.length; i++) {
            _loop(i);
          }
        }
        /**
         * \@description Start or stop autoPlay, don't do it at all server side
         * @param {?=} stopAutoPlay
         * @return {?}
         */

      }, {
        key: "handleAutoPlay",
        value: function handleAutoPlay(stopAutoPlay) {
          var _this3 = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            return;
          }

          if (stopAutoPlay === true || this.autoPlay === false) {
            if (this._autoplayIntervalId) {
              this._ngZone.runOutsideAngular(function () {
                return clearInterval(_this3._autoplayIntervalId);
              });

              this._autoplayIntervalId = null;
            }
          } else if (!this._autoplayIntervalId) {
            this._ngZone.runOutsideAngular(function () {
              _this3._autoplayIntervalId = setInterval(function () {
                if (!_this3.autoPlayWaitForLazyLoad || _this3.autoPlayWaitForLazyLoad && _this3.slides[_this3.slideIndex].loaded) {
                  _this3._ngZone.run(function () {
                    return _this3.slide(1);
                  });
                }
              }, _this3.autoPlayInterval);
            });
          }
        }
        /**
         * \@description Keep the styles up to date with the input
         * @return {?}
         */

      }, {
        key: "setStyles",
        value: function setStyles() {
          if (this.fullscreen) {
            this._renderer.setStyle(this.container.nativeElement, 'height', '100%'); // Would be nice to make it configurable


            this._renderer.setStyle(this.container.nativeElement, 'background-color', 'white');
          } else {
            // Would be nice to make it configurable
            this._renderer.removeStyle(this.container.nativeElement, 'background-color');

            if (this.height) {
              this._renderer.setStyle(this.container.nativeElement, 'height', this.height);
            }

            if (this.minHeight) {
              this._renderer.setStyle(this.container.nativeElement, 'min-height', this.minHeight);
            }
          }

          if (this.arrowSize) {
            this._renderer.setStyle(this.prevArrow.nativeElement, 'height', this.arrowSize);

            this._renderer.setStyle(this.prevArrow.nativeElement, 'width', this.arrowSize);

            this._renderer.setStyle(this.nextArrow.nativeElement, 'height', this.arrowSize);

            this._renderer.setStyle(this.nextArrow.nativeElement, 'width', this.arrowSize);
          }
        }
        /**
         * \@description compare image array to the cache, returns false if no changes
         * @return {?}
         */

      }, {
        key: "checkCache",
        value: function checkCache() {
          var _this4 = this;

          return !(this._urlCache.length === this.imageUrls.length && this._urlCache.every(function (cacheElement, i) {
            return cacheElement === _this4.imageUrls[i];
          }));
        }
        /**
         * \@description get the index for the slide to the left of the new slide
         * @param {?=} i
         * @return {?}
         */

      }, {
        key: "getLeftSideIndex",
        value: function getLeftSideIndex(i) {
          if (i === undefined) {
            i = this.slideIndex;
          }

          if (--i < 0) {
            i = this.slides.length - 1;
          }

          return i;
        }
        /**
         * \@description get the index for the slide to the right of the new slide
         * @param {?=} i
         * @return {?}
         */

      }, {
        key: "getRightSideIndex",
        value: function getRightSideIndex(i) {
          if (i === undefined) {
            i = this.slideIndex;
          }

          if (++i >= this.slides.length) {
            i = 0;
          }

          return i;
        }
        /**
         * \@description a trackBy function for the ngFor loops
         * @param {?} index
         * @param {?} slide
         * @return {?}
         */

      }, {
        key: "trackByFn",
        value: function trackByFn(index, slide) {
          return slide.image;
        }
      }, {
        key: "safeStyleDotColor",
        get: function get() {
          return this.sanitizer.bypassSecurityTrustStyle("--dot-color: ".concat(this.dotColor));
        }
      }]);

      return SlideshowComponent;
    }();

    SlideshowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'slideshow',
        template: "\n    <!-- fullscreen bar -->\n    <div [class.display-none]=\"!fullscreen\"\n         class=\"fs-container\"\n         (click)=\"exitFullScreen($event)\">\n      <i title=\"Back\"\n         class=\"arrow-exitfs prev\"></i>\n    </div>\n    <div #container\n         (touchstart)=\"onSwipe($event, 'start')\"\n         (touchend)=\"onSwipe($event, 'end')\"\n         class=\"slideshow-container\"\n         [class.slideshow-container-fs]=\"fullscreen\">\n      <!-- slides -->\n      <a *ngFor=\"let slide of slides; index as i; trackBy: trackByFn\"\n         class=\"slides\"\n         href=\"{{slide?.image?.clickAction ? '#' : slide?.image?.href}}\"\n         title=\"{{slide?.image?.title}}\"\n         [ngStyle]=\"getSlideStyle(i)\"\n         [class.selected]=\"slide?.selected\"\n         [class.hide-slide]=\"!slide?.selected && !slide?.leftSide && !slide?.rightSide\"\n         [class.left-side]=\"slide?.leftSide\"\n         [class.right-side]=\"slide?.rightSide\"\n         [class.slide-in-left]=\"slide?.action === 'slideInLeft'\"\n         [class.slide-in-right]=\"slide?.action === 'slideInRight'\"\n         [class.slide-out-left]=\"slide?.action === 'slideOutLeft'\"\n         [class.slide-out-right]=\"slide?.action === 'slideOutRight'\"\n         [class.link]=\"slide?.image?.clickAction || slide?.image?.href\"\n         (click)=\"onClick($event)\">\n        <div class=\"loader\"\n             *ngIf=\"!slide?.loaded\"></div>\n        <div *ngIf=\"showCaptions && slide?.image?.caption\"\n             class=\"caption\"\n             [ngStyle]=\"{\n               'color': captionColor,\n               'background-color': captionBackground\n              }\"\n             [innerHTML]=\"slide?.image?.caption\">\n        </div>\n      </a>\n      <!-- left arrow -->\n      <div [class.display-none]=\"!this.showArrows\"\n           (click)=\"onSlide(-1)\"\n           class=\"arrow-container prev\">\n        <i #prevArrow\n           title=\"Previous\"\n           class=\"arrow prev\"></i>\n      </div>\n      <!-- right arrow -->\n      <div [class.display-none]=\"!this.showArrows\"\n           (click)=\"onSlide(1)\"\n           class=\"arrow-container next\">\n        <i #nextArrow\n           title=\"Next\"\n           class=\"arrow next\"></i>\n      </div>\n      <!-- dots -->\n      <ul class=\"slick-dots\"\n          *ngIf=\"showDots\">\n        <li *ngFor=\"let slide of slides; index as i; trackBy: trackByFn\"\n            (click)=\"goToSlide(i)\"\n            [class.slick-active]=\"slide.selected\">\n          <button type=\"button\"\n                  [attr.style]=\"safeStyleDotColor\">\n            {{i}}\n          </button>\n        </li>\n      </ul>\n    </div>\n  ",
        styles: ["\n    /*\n     styles adapted from https://www.w3schools.com/w3css/4/w3.css\n     arrow styles adapted from https://codepen.io/minustalent/pen/Frhaw\n     */\n    .display-none {\n      display: none !important; }\n\n    .fs-container {\n      display: block;\n      cursor: pointer;\n      position: fixed;\n      z-index: 1;\n      top: 16px;\n      left: 16px;\n      width: 46px;\n      height: 46px;\n      text-align: center;\n      padding: 0;\n      background-color: rgba(0, 0, 0, 0.2);\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n      .fs-container:hover {\n        background-color: rgba(0, 0, 0, 0.33); }\n      .fs-container .arrow-exitfs {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background: transparent;\n        border-top: 2px solid #f2f2f2;\n        -webkit-transition: all .2s ease-in-out;\n        transition: all .2s ease-in-out; }\n        .fs-container .arrow-exitfs.prev {\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          position: relative;\n          left: 18px;\n          top: 18px; }\n        .fs-container .arrow-exitfs:after {\n          content: '';\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          -webkit-transform: rotate(90deg);\n                  transform: rotate(90deg);\n          position: absolute;\n          left: -15px;\n          top: -17px; }\n\n    .slideshow-container.slideshow-container-fs {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n    .slideshow-container {\n      position: relative;\n      display: block;\n      margin: auto;\n      height: 100%;\n      width: 100%;\n      overflow: hidden; }\n      .slideshow-container .hide-slide {\n        visibility: hidden;\n        position: absolute;\n        top: -100vw;\n        left: -100vw;\n        opacity: 0; }\n      .slideshow-container .slides {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        visibility: visible;\n        opacity: 1;\n        display: block; }\n        .slideshow-container .slides.selected {\n          left: 0; }\n        .slideshow-container .slides.left-slide {\n          left: -100%; }\n        .slideshow-container .slides.right-slide {\n          left: 100%; }\n        .slideshow-container .slides.slide-in-left {\n          left: 0;\n          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-in-right {\n          left: 0;\n          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-out-left {\n          left: -100%;\n          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-out-right {\n          left: 100%;\n          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.link {\n          cursor: pointer; }\n        .slideshow-container .slides:not(.link) {\n          cursor: default; }\n      .slideshow-container .caption {\n        position: absolute;\n        bottom: 0;\n        padding: 10px;\n        width: 100%; }\n      .slideshow-container .arrow-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: auto;\n        cursor: pointer;\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));\n        background-image: linear-gradient(transparent, transparent);\n        z-index: 100;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .slideshow-container .arrow-container:before {\n          display: block;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0;\n          opacity: 0;\n          width: 100%;\n          z-index: -100;\n          -webkit-transition: opacity 0.45s;\n          transition: opacity 0.45s; }\n        .slideshow-container .arrow-container.prev {\n          left: 0; }\n          .slideshow-container .arrow-container.prev:before {\n            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container .arrow-container.next {\n          right: 0; }\n          .slideshow-container .arrow-container.next:before {\n            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container .arrow-container .arrow {\n          display: block;\n          margin: auto;\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          border-left: 2px solid #f2f2f2;\n          -webkit-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none; }\n          .slideshow-container .arrow-container .arrow:before {\n            display: block;\n            height: 200%;\n            width: 200%;\n            margin-left: -50%;\n            margin-top: -50%;\n            content: \"\";\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n          .slideshow-container .arrow-container .arrow.prev {\n            -webkit-transform: rotate(-45deg);\n                    transform: rotate(-45deg);\n            position: relative;\n            left: 20px;\n            margin-right: 10px; }\n          .slideshow-container .arrow-container .arrow.next {\n            -webkit-transform: rotate(135deg);\n                    transform: rotate(135deg);\n            position: relative;\n            right: 20px;\n            margin-left: 10px; }\n      .slideshow-container .slick-dots {\n        display: block;\n        bottom: 15px;\n        z-index: 1;\n        text-align: center;\n        position: absolute;\n        padding: 0;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n        .slideshow-container .slick-dots li {\n          display: inline;\n          margin: 0;\n          padding: 0; }\n          .slideshow-container .slick-dots li button {\n            border: none;\n            background: none;\n            text-indent: -9999px;\n            font-size: 0;\n            width: 20px;\n            height: 20px;\n            outline: none;\n            position: relative;\n            z-index: 1;\n            cursor: pointer; }\n            .slideshow-container .slick-dots li button:before {\n              content: '';\n              width: 4px;\n              height: 4px;\n              background: var(--dot-color, #FFF);\n              border-radius: 4px;\n              display: block;\n              position: absolute;\n              top: 50%;\n              left: 50%;\n              -webkit-transform: translate(-50%, -50%);\n                      transform: translate(-50%, -50%);\n              opacity: .7;\n              -webkit-transition: all .5s ease-out;\n              transition: all .5s ease-out; }\n          .slideshow-container .slick-dots li.slick-active button:before {\n            -webkit-transform: translate(-50%, -50%) scale(1.4);\n                    transform: translate(-50%, -50%) scale(1.4);\n            opacity: 1; }\n\n    @media screen and (min-width: 768px) {\n      .slideshow-container .arrow-container:hover:before {\n        opacity: 1; }\n      .slideshow-container .arrow-container:hover .arrow {\n        border-width: 4px; }\n      .slideshow-container .arrow-container .arrow:hover {\n        border-width: 4px; } }\n\n    @-webkit-keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @-webkit-keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    @keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    .loader {\n      position: absolute;\n      left: 50%;\n      margin-left: -20px;\n      top: 50%;\n      margin-top: -20px;\n      border: 5px solid #f3f3f3;\n      border-top: 5px solid #555;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      -webkit-animation: spin 1s linear infinite;\n              animation: spin 1s linear infinite; }\n\n    @-webkit-keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n\n    @keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n  "]
      }]
    }];
    /**
     * @nocollapse
     */

    SlideshowComponent.ctorParameters = function () {
      return [{
        type: SwipeService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    SlideshowComponent.propDecorators = {
      'imageUrls': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'height': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'minHeight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'arrowSize': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showArrows': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'disableSwiping': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlay': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlayInterval': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'stopAutoPlayOnSlide': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlayWaitForLazyLoad': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'debug': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundSize': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundPosition': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundRepeat': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showDots': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'dotColor': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showCaptions': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'captionColor': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'captionBackground': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'lazyLoad': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'hideOnNoSlides': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'fullscreen': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'onSlideLeft': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSlideRight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSwipeLeft': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSwipeRight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onFullscreenExit': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onIndexChanged': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'container': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['container']
      }],
      'prevArrow': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['prevArrow']
      }],
      'nextArrow': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['nextArrow']
      }]
    };

    var SlideshowModule = function SlideshowModule() {
      _classCallCheck(this, SlideshowModule);
    };

    SlideshowModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"]],
        declarations: [SlideshowComponent],
        exports: [SlideshowComponent],
        providers: [SwipeService]
      }]
    }];
    /**
     * @nocollapse
     */

    SlideshowModule.ctorParameters = function () {
      return [];
    };
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-simple-slideshow.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
    \************************************************************************************************/

  /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */

  /***/
  function node_modulesNgxBootstrapComponentLoaderFesm2015NgxBootstrapComponentLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsComponentRef", function () {
      return BsComponentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoader", function () {
      return ComponentLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function () {
      return ComponentLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRef", function () {
      return ContentRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var BsComponentRef = function BsComponentRef() {
      _classCallCheck(this, BsComponentRef);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var ContentRef =
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef,
    /* tslint:disable-next-line: no-any */
    componentRef) {
      _classCallCheck(this, ContentRef);

      this.nodes = nodes;
      this.viewRef = viewRef;
      this.componentRef = componentRef;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var ComponentLoader =
    /*#__PURE__*/
    function () {
      /**
       * Do not use this directly, it should be instanced via
       * `ComponentLoadFactory.attach`
       * \@internal
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _injector
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _applicationRef
       * @param {?} _posService
       */
      // tslint:disable-next-line
      function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        _classCallCheck(this, ComponentLoader);

        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */

        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
      }
      /**
       * @return {?}
       */


      _createClass(ComponentLoader, [{
        key: "attach",

        /**
         * @param {?} compType
         * @return {?}
         */
        value: function attach(compType) {
          this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
          return this;
        } // todo: add behaviour: to target element, `body`, custom element

        /**
         * @param {?=} container
         * @return {?}
         */

      }, {
        key: "to",
        value: function to(container) {
          this.container = container || this.container;
          return this;
        }
        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "position",
        value: function position(opts) {
          this.attachment = opts.attachment || this.attachment;
          /* tslint:disable-next-line: no-unnecessary-type-assertion */

          this._elementRef =
          /** @type {?} */
          opts.target || this._elementRef;
          return this;
        }
        /**
         * @param {?} provider
         * @return {?}
         */

      }, {
        key: "provide",
        value: function provide(provider) {
          this._providers.push(provider);

          return this;
        } // todo: appendChild to element or document.querySelector(this.container)

        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._subscribePositioning();

          this._innerComponent = null;

          if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });

            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

            this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);

            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
              this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (typeof this.container === 'string' && typeof document !== 'undefined') {
              /** @type {?} */
              var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
              selectedElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
              this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            } // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy


            if (this._contentRef.componentRef) {
              this._innerComponent = this._contentRef.componentRef.instance;

              this._contentRef.componentRef.changeDetectorRef.markForCheck();

              this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }

            this._componentRef.changeDetectorRef.markForCheck();

            this._componentRef.changeDetectorRef.detectChanges();

            this.onShown.emit(this._componentRef.instance);
          }

          this._registerOutsideClick();

          return this._componentRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (!this._componentRef) {
            return this;
          }

          this._posService.deletePositionElement(this._componentRef.location);

          this.onBeforeHide.emit(this._componentRef.instance);
          /** @type {?} */

          var componentEl = this._componentRef.location.nativeElement;
          componentEl.parentNode.removeChild(componentEl);

          if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
          }

          this._componentRef.destroy();

          if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
          }

          if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
          }

          this._contentRef = null;
          this._componentRef = null;

          this._removeGlobalListener();

          this.onHidden.emit();
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isShown) {
            this.hide();
            return;
          }

          this.show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.isShown) {
            this.hide();
          }

          this._unsubscribePositioning();

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }
        }
        /**
         * @param {?} listenOpts
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen(listenOpts) {
          var _this5 = this;

          this.triggers = listenOpts.triggers || this.triggers;
          this._listenOpts.outsideClick = listenOpts.outsideClick;
          this._listenOpts.outsideEsc = listenOpts.outsideEsc;
          listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
          /** @type {?} */

          var hide = this._listenOpts.hide =
          /**
          * @return {?}
          */
          function () {
            return listenOpts.hide ? listenOpts.hide() : void _this5.hide();
          };
          /** @type {?} */


          var show = this._listenOpts.show =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this5.show(registerHide);
            registerHide();
          };
          /** @type {?} */


          var toggle =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function toggle(registerHide) {
            _this5.isShown ? hide() : show(registerHide);
          };

          this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
          });
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalListener) {
            this._globalListener();

            this._globalListener = null;
          }
        }
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */

      }, {
        key: "attachInline",
        value: function attachInline(vRef,
        /* tslint:disable-next-line: no-any*/
        template) {
          this._inlineViewRef = vRef.createEmbeddedView(template);
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_registerOutsideClick",
        value: function _registerOutsideClick() {
          var _this6 = this;

          if (!this._componentRef || !this._componentRef.location) {
            return;
          } // why: should run after first event bubble


          if (this._listenOpts.outsideClick) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this6._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this6._renderer, {
                targets: [target, _this6._elementRef.nativeElement],
                outsideClick: _this6._listenOpts.outsideClick,
                hide:
                /**
                * @return {?}
                */
                function hide() {
                  return _this6._listenOpts.hide();
                }
              });
            });
          }

          if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var _target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
              targets: [_target, this._elementRef.nativeElement],
              outsideEsc: this._listenOpts.outsideEsc,
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this6._listenOpts.hide();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInnerComponent",
        value: function getInnerComponent() {
          return this._innerComponent;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribePositioning",
        value: function _subscribePositioning() {
          var _this7 = this;

          if (this._zoneSubscription || !this.attachment) {
            return;
          }

          this.onShown.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._posService.position({
              element: _this7._componentRef.location,
              target: _this7._elementRef,
              attachment: _this7.attachment,
              appendToBody: _this7.container === 'body'
            });
          });
          this._zoneSubscription = this._ngZone.onStable.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this7._componentRef) {
              return;
            }

            _this7._posService.calcPosition();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribePositioning",
        value: function _unsubscribePositioning() {
          if (!this._zoneSubscription) {
            return;
          }

          this._zoneSubscription.unsubscribe();

          this._zoneSubscription = null;
        }
        /**
         * @private
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(
        /* tslint:disable-next-line: no-any*/
        content,
        /* tslint:disable-next-line: no-any*/
        context,
        /* tslint:disable-next-line: no-any*/
        initialState) {
          if (!content) {
            return new ContentRef([]);
          }

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
              /** @type {?} */
              var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

              _viewRef.markForCheck();

              return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */


            var viewRef = content.createEmbeddedView({});

            this._applicationRef.attachView(viewRef);

            return new ContentRef([viewRef.rootNodes], viewRef);
          }

          if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */


            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });
            /** @type {?} */


            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);

            this._applicationRef.attachView(componentRef.hostView);

            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
          }

          return new ContentRef([[this._renderer.createText("".concat(content))]]);
        }
      }, {
        key: "isShown",
        get: function get() {
          if (this._isHiding) {
            return false;
          }

          return !!this._componentRef;
        }
      }]);

      return ComponentLoader;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ComponentLoaderFactory =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _injector
       * @param {?} _posService
       * @param {?} _applicationRef
       */
      function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        _classCallCheck(this, ComponentLoaderFactory);

        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
      }
      /**
       *
       * @template T
       * @param {?} _elementRef
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @return {?}
       */


      _createClass(ComponentLoaderFactory, [{
        key: "createLoader",
        value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
          return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
        }
      }]);

      return ComponentLoaderFactory;
    }();

    ComponentLoaderFactory.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    ComponentLoaderFactory.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    }; //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js ***!
    \**************************************************************************/

  /*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */

  /***/
  function node_modulesNgxBootstrapModalFesm2015NgxBootstrapModalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalRef", function () {
      return BsModalRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalService", function () {
      return BsModalService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function () {
      return ModalBackdropComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function () {
      return ModalBackdropOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () {
      return ModalContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return ModalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
      return ModalOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CLASS_NAME;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsModalRef = function BsModalRef() {
      _classCallCheck(this, BsModalRef);

      /**
       * Hides the modal
       */
      this.hide = Function;
      /**
       * Sets new class to modal window
       */

      this.setClass = Function;
    };

    BsModalRef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ModalBackdropOptions =
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
      _classCallCheck(this, ModalBackdropOptions);

      this.animate = true;
      Object.assign(this, options);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalOptions = function ModalOptions() {
      _classCallCheck(this, ModalOptions);
    };

    ModalOptions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @type {?} */

    var modalConfigDefaults = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      animated: true,
      initialState: {}
    };
    /** @type {?} */

    var CLASS_NAME = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      IN: 'in',
      // bs3
      SHOW: 'show' // bs4

    };
    /** @type {?} */

    var TRANSITION_DURATIONS = {
      MODAL: 300,
      BACKDROP: 150
    };
    /** @type {?} */

    var DISMISS_REASONS = {
      BACKRDOP: 'backdrop-click',
      ESC: 'esc'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ModalContainerComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} options
       * @param {?} _element
       * @param {?} _renderer
       */
      function ModalContainerComponent(options, _element, _renderer) {
        _classCallCheck(this, ModalContainerComponent);

        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
      }
      /**
       * @return {?}
       */


      _createClass(ModalContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
          }

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this8.isShown = true;

            _this8._renderer.addClass(_this8._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
          }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

          if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
              this.bsModalService.checkScrollbar();
              this.bsModalService.setScrollbar();
            }

            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
          }

          if (this._element.nativeElement) {
            this._element.nativeElement.focus();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
          }

          this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
          this.hide();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this.isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.isShown) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this9 = this;

          if (this.isModalHiding || !this.isShown) {
            return;
          }

          this.isModalHiding = true;

          this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this9.isShown = false;

            if (document && document.body && _this9.bsModalService.getModalsCount() === 1) {
              _this9._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }

            _this9.bsModalService.hide(_this9.level);

            _this9.isModalHiding = false;
          }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
        }
      }]);

      return ModalContainerComponent;
    }();

    ModalContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'modal-container',
        template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
        host: {
          class: 'modal',
          role: 'dialog',
          tabindex: '-1',
          '[attr.aria-modal]': 'true'
        }
      }]
    }];
    /** @nocollapse */

    ModalContainerComponent.ctorParameters = function () {
      return [{
        type: ModalOptions
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    ModalContainerComponent.propDecorators = {
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:keydown.esc', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This component will be added as background layout for modals if enabled
     */

    var ModalBackdropComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} renderer
       */
      function ModalBackdropComponent(element, renderer) {
        _classCallCheck(this, ModalBackdropComponent);

        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
      }
      /**
       * @return {?}
       */


      _createClass(ModalBackdropComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
          }

          this.isShown = true;
        }
      }, {
        key: "isAnimated",
        get: function get() {
          return this._isAnimated;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isShown = value;

          if (value) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          } else {
            this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          }

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            } else {
              this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            }
          }
        }
      }]);

      return ModalBackdropComponent;
    }();

    ModalBackdropComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-modal-backdrop',
        template: ' ',
        host: {
          class: CLASS_NAME.BACKDROP
        }
      }]
    }];
    /** @nocollapse */

    ModalBackdropComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TRANSITION_DURATION = 300;
    /** @type {?} */

    var BACKDROP_TRANSITION_DURATION = 150;
    /**
     * Mark any code with directive to show it's content in modal
     */

    var ModalDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} clf
       */
      function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        _classCallCheck(this, ModalDirective);

        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
      }
      /**
       * allows to set modal configuration via element property
       * @param {?} conf
       * @return {?}
       */


      _createClass(ModalDirective, [{
        key: "onClick",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onClick(event) {
          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
          }

          this.dismissReason = DISMISS_REASONS.BACKRDOP;
          this.hide(event);
        } // todo: consider preventing default and stopping propagation

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this._isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.config = void 0;

          if (this._isShown) {
            this._isShown = false;
            this.hideModal();

            this._backdrop.dispose();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this._config = this._config || this.getConfig();
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this10._config.show) {
              _this10.show();
            }
          }, 0);
        }
        /* Public methods */

        /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          return this._isShown ? this.hide() : this.show();
        }
        /**
         * Allows to manually open modal
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this11 = this;

          this.dismissReason = null;
          this.onShow.emit(this);

          if (this._isShown) {
            return;
          }

          clearTimeout(this.timerHideModal);
          clearTimeout(this.timerRmBackDrop);
          this._isShown = true;
          this.checkScrollbar();
          this.setScrollbar();

          if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
              this.isNested = true;
            } else {
              this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
          }

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            _this11.showElement();
          });
        }
        /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(event) {
          var _this12 = this;

          if (event) {
            event.preventDefault();
          }

          this.onHide.emit(this); // todo: add an option to prevent hiding

          if (!this._isShown) {
            return;
          }

          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
          this._isShown = false;

          this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
          } // this._addClassIn = false;


          if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this12.hideModal();
            }, TRANSITION_DURATION);
          } else {
            this.hideModal();
          }
        }
        /**
         * Private methods \@internal
         * @protected
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig(config) {
          return Object.assign({}, modalConfigDefaults, config);
        }
        /**
         *  Show dialog
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "showElement",
        value: function showElement() {
          var _this13 = this;

          // todo: replace this with component loader usage
          if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
          }

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

          this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

          if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
          } // this._addClassIn = true;


          this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
          }
          /** @type {?} */


          var transitionComplete =
          /**
          * @return {?}
          */
          function transitionComplete() {
            if (_this13._config.focus) {
              _this13._element.nativeElement.focus();
            }

            _this13.onShown.emit(_this13);
          };

          if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
          } else {
            transitionComplete();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "hideModal",
        value: function hideModal() {
          var _this14 = this;

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            if (!_this14.isNested) {
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                _this14._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
              }

              _this14.resetScrollbar();
            }

            _this14.resetAdjustments();

            _this14.focusOtherModal();

            _this14.onHidden.emit(_this14);
          });
        } // todo: original show was calling a callback when done, but we can use
        // promise

        /**
         * \@internal
         * @protected
         * @param {?=} callback
         * @return {?}
         */

      }, {
        key: "showBackdrop",
        value: function showBackdrop(callback) {
          var _this15 = this;

          if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();

            this._backdrop.attach(ModalBackdropComponent).to('body').show({
              isAnimated: this._config.animated
            });

            this.backdrop = this._backdrop._componentRef;

            if (!callback) {
              return;
            }

            if (!this._config.animated) {
              callback();
              return;
            }

            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
          } else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */

            var callbackRemove =
            /**
            * @return {?}
            */
            function callbackRemove() {
              _this15.removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if (this.backdrop.instance.isAnimated) {
              this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdrop.hide();
        }
        /**
         * Events tricks
         * @protected
         * @return {?}
         */
        // no need for it
        // protected setEscapeEvent():void {
        //   if (this._isShown && this._config.keyboard) {
        //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
        //       if (event.which === 27) {
        //         this.hide()
        //       }
        //     })
        //
        //   } else if (!this._isShown) {
        //     $(this._element).off(Event.KEYDOWN_DISMISS)
        //   }
        // }
        // protected setResizeEvent():void {
        // console.log(this.renderer.listenGlobal('', Event.RESIZE));
        // if (this._isShown) {
        //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
        // } else {
        //   $(window).off(Event.RESIZE)
        // }
        // }

      }, {
        key: "focusOtherModal",
        value: function focusOtherModal() {
          if (this._element.nativeElement.parentElement == null) {
            return;
          }
          /** @type {?} */


          var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

          if (!otherOpenedModals.length) {
            return;
          }

          otherOpenedModals[otherOpenedModals.length - 1].focus();
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "resetAdjustments",
        value: function resetAdjustments() {
          this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

          this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
        }
        /** Scroll bar tricks */

        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
          }

          this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue('padding-right') || 0, 10);

          if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);

          return scrollbarWidth;
        }
      }, {
        key: "config",
        set: function set(conf) {
          this._config = this.getConfig(conf);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._config;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
      }]);

      return ModalDirective;
    }();

    ModalDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[bsModal]',
        exportAs: 'bs-modal'
      }]
    }];
    /** @nocollapse */

    ModalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };

    ModalDirective.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown.esc', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BsModalService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rendererFactory
       * @param {?} clf
       */
      function BsModalService(rendererFactory, clf) {
        _classCallCheck(this, BsModalService);

        this.clf = clf; // constructor props

        this.config = modalConfigDefaults; // tslint:disable-next-line:no-any

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
      }
      /**
       * Shows a modal
       * @param {?} content
       * @param {?=} config
       * @return {?}
       */
      // tslint:disable-next-line:no-any


      _createClass(BsModalService, [{
        key: "show",
        value: function show(content, config) {
          this.modalsCount++;

          this._createLoaders();

          this.config = Object.assign({}, modalConfigDefaults, config);

          this._showBackdrop();

          this.lastDismissReason = null;
          return this._showModal(content);
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(level) {
          var _this16 = this;

          if (this.modalsCount === 1) {
            this._hideBackdrop();

            this.resetScrollbar();
          }

          this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this16._hideModal(level);

            _this16.removeLoaders(level);
          }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_showBackdrop",
        value: function _showBackdrop() {
          /** @type {?} */
          var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
          /** @type {?} */

          var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

          if (this.modalsCount === 1) {
            this.removeBackdrop();

            if (isBackdropEnabled && isBackdropInDOM) {
              this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
                isAnimated: this.config.animated
              });

              this.backdropRef = this._backdropLoader._componentRef;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideBackdrop",
        value: function _hideBackdrop() {
          var _this17 = this;

          if (!this.backdropRef) {
            return;
          }

          this.backdropRef.instance.isShown = false;
          /** @type {?} */

          var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this17.removeBackdrop();
          }, duration);
        } // tslint:disable-next-line:no-any

        /**
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "_showModal",
        value: function _showModal(content) {
          /** @type {?} */
          var modalLoader = this.loaders[this.loaders.length - 1];
          /** @type {?} */

          var bsModalRef = new BsModalRef();
          /** @type {?} */

          var modalContainerRef = modalLoader.provide({
            provide: ModalOptions,
            useValue: this.config
          }).provide({
            provide: BsModalRef,
            useValue: bsModalRef
          }).attach(ModalContainerComponent).to('body').show({
            content: content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this
          });
          modalContainerRef.instance.level = this.getModalsCount();

          bsModalRef.hide =
          /**
          * @return {?}
          */
          function () {
            modalContainerRef.instance.hide();
          };

          bsModalRef.content = modalLoader.getInnerComponent() || null;

          bsModalRef.setClass =
          /**
          * @param {?} newClass
          * @return {?}
          */
          function (newClass) {
            modalContainerRef.instance.config.class = newClass;
          };

          return bsModalRef;
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "_hideModal",
        value: function _hideModal(level) {
          /** @type {?} */
          var modalLoader = this.loaders[level - 1];

          if (modalLoader) {
            modalLoader.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getModalsCount",
        value: function getModalsCount() {
          return this.modalsCount;
        }
        /**
         * @param {?} reason
         * @return {?}
         */

      }, {
        key: "setDismissReason",
        value: function setDismissReason(reason) {
          this.lastDismissReason = reason;
        }
        /**
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdropLoader.hide();

          this.backdropRef = null;
        }
        /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */

        /** Scroll bar tricks */

        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!document) {
            return;
          }

          this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

          if (this.isBodyOverflowing) {
            document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(document.body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(document.body, scrollDiv);

          return scrollbarWidth;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLoaders",
        value: function _createLoaders() {
          /** @type {?} */
          var loader = this.clf.createLoader(null, null, null);
          this.copyEvent(loader.onBeforeShow, this.onShow);
          this.copyEvent(loader.onShown, this.onShown);
          this.copyEvent(loader.onBeforeHide, this.onHide);
          this.copyEvent(loader.onHidden, this.onHidden);
          this.loaders.push(loader);
        }
        /**
         * @private
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "removeLoaders",
        value: function removeLoaders(level) {
          this.loaders.splice(level - 1, 1);
          this.loaders.forEach(
          /**
          * @param {?} loader
          * @param {?} i
          * @return {?}
          */
          function (loader, i) {
            loader.instance.level = i + 1;
          });
        } // tslint:disable-next-line:no-any

        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */

      }, {
        key: "copyEvent",
        value: function copyEvent(from, to) {
          var _this18 = this;

          from.subscribe(
          /**
          * @return {?}
          */
          function () {
            to.emit(_this18.lastDismissReason);
          });
        }
      }]);

      return BsModalService;
    }();

    BsModalService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BsModalService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalModule =
    /*#__PURE__*/
    function () {
      function ModalModule() {
        _classCallCheck(this, ModalModule);
      }

      _createClass(ModalModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
          };
        }
      }]);

      return ModalModule;
    }();

    ModalModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
        exports: [ModalBackdropComponent, ModalDirective],
        entryComponents: [ModalBackdropComponent, ModalContainerComponent]
      }]
    }]; //# sourceMappingURL=ngx-bootstrap-modal.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
    \**************************************************************************************/

  /*! exports provided: Positioning, PositioningService, positionElements */

  /***/
  function node_modulesNgxBootstrapPositioningFesm2015NgxBootstrapPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositioningService", function () {
      return PositioningService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */


    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      } // NOTE: 1 DOM access here

      /** @type {?} */


      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var css = window.getComputedStyle(element, null);
      return property ? css[
      /** @type {?} */
      property] : css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */


    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }

      return element.parentNode || element.host;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }

      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;

        case '#document':
          return element.body;

        default:
      } // Firefox want us to check `-x` and `-y` variations as well


      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

      if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
      }

      return getScrollParent(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isIE11 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext &&
    /** @type {?} */
    document.documentMode);
    /** @type {?} */

    var isIE10 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext && /MSIE 10/.test(
    /** @type {?} */
    navigator.userAgent));
    /**
     * @param {?=} version
     * @return {?}
     */

    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }

      if (version === 10) {
        return isIE10;
      }

      return isIE11 || isIE10;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
      /** @type {?} */


      var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

      /** @type {?} */

      var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

      /** @type {?} */

      var sibling;

      while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
      }
      /** @type {?} */


      var nodeName = offsetParent && offsetParent.nodeName;

      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
      } // .offsetParent will return the closest TH, TD or TABLE in case


      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }

      return offsetParent;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isOffsetContainer(element) {
      var nodeName = element.nodeName;

      if (nodeName === 'BODY') {
        return false;
      }

      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */


    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }

      return node;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */


    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      } // Here we make sure to give as "start" the element that comes first in the DOM

      /* tslint:disable-next-line: no-bitwise */

      /** @type {?} */


      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      /** @type {?} */

      var start = order ? element1 : element2;
      /** @type {?} */

      var end = order ? element2 : element1; // Get common ancestor container

      /** @type {?} */

      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
      } // one of the nodes is inside shadowDOM, find which one

      /** @type {?} */


      var element1root = getRoot(element1);

      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to detect borders of a given element
     */

    /**
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */


    function getBordersSize(styles, axis) {
      /** @type {?} */
      var sideA = axis === 'x' ? 'Left' : 'Top';
      /** @type {?} */

      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(styles[
      /** @type {?} */
      "border".concat(sideA, "Width")]) + parseFloat(styles[
      /** @type {?} */
      "border".concat(sideB, "Width")]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */


    function getSize(axis, body, html, computedStyle) {
      return Math.max(
      /** @type {?} */
      body["offset".concat(axis)],
      /** @type {?} */
      body["scroll".concat(axis)],
      /** @type {?} */
      html["client".concat(axis)],
      /** @type {?} */
      html["offset".concat(axis)],
      /** @type {?} */
      html["scroll".concat(axis)], isIE(10) ? parseInt(
      /** @type {?} */
      html["offset".concat(axis)], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */


    function getWindowSizes(document) {
      /** @type {?} */
      var body = document.body;
      /** @type {?} */

      var html = document.documentElement;
      /** @type {?} */

      var computedStyle = isIE(10) && getComputedStyle(html);
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */


    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

      /** @type {?} */
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      /** @type {?} */

      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }

      return element[upperSide];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} offsets
     * @return {?}
     */


    function getClientRect(offsets) {
      return Object.assign({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getBoundingClientRect(element) {
      /** @type {?} */
      var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11

      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          /** @type {?} */

          var scrollTop = getScroll(element, 'top');
          /** @type {?} */

          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {
        return undefined;
      }
      /** @type {?} */


      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      }; // subtract scrollbar size from sizes

      /** @type {?} */

      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      /** @type {?} */

      var width = sizes.width || element.clientWidth || result.right - result.left;
      /** @type {?} */

      var height = sizes.height || element.clientHeight || result.bottom - result.top;
      /** @type {?} */

      var horizScrollbar = element.offsetWidth - width;
      /** @type {?} */

      var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons

      if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }

      return getClientRect(result);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */


    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var scrollTop = getScroll(element, 'top');
      /** @type {?} */

      var scrollLeft = getScroll(element, 'left');
      /** @type {?} */

      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var isIE10 = isIE(10);
      /** @type {?} */

      var isHTML = parent.nodeName === 'HTML';
      /** @type {?} */

      var childrenRect = getBoundingClientRect(children);
      /** @type {?} */

      var parentRect = getBoundingClientRect(parent);
      /** @type {?} */

      var scrollParent = getScrollParent(children);
      /** @type {?} */

      var styles = getStyleComputedProperty(parent);
      /** @type {?} */

      var borderTopWidth = parseFloat(styles.borderTopWidth);
      /** @type {?} */

      var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      /** @type {?} */


      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.

      if (!isIE10 && isHTML) {
        /** @type {?} */
        var marginTop = parseFloat(styles.marginTop);
        /** @type {?} */

        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }

      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }

      return offsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */


    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var html = element.ownerDocument.documentElement;
      /** @type {?} */

      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      /** @type {?} */

      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      /** @type {?} */

      var height = Math.max(html.clientHeight, window.innerHeight || 0);
      /** @type {?} */

      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      /** @type {?} */

      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
      /** @type {?} */

      var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
      };
      return getClientRect(offset);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isFixed(element) {
      /** @type {?} */
      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }

      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }

      return isFixed(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      /** @type {?} */


      var el = element.parentElement;

      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }

      return el || document.documentElement;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getBoundaries(target, host) {
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // NOTE: 1 DOM access here
      // NOTE: 1 DOM access here

      /** @type {?} */
      var boundaries = {
        top: 0,
        left: 0
      };
      /** @type {?} */

      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries

        /** @type {?} */
        var boundariesNode;

        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(host));

          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = target.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = target.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
        /** @type {?} */


        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(target.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = Number(height) + Number(offsets.top);
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = Number(width) + Number(offsets.left);
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      } // Add paddings


      boundaries.left += padding;
      boundaries.top += padding;
      boundaries.right -= padding;
      boundaries.bottom -= padding;
      return boundaries;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */


    function computeAutoPlacement(placement, refRect, target, host) {
      var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
      var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
      var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      if (placement.indexOf('auto') === -1) {
        return placement;
      }
      /** @type {?} */


      var boundaries = getBoundaries(target, host, padding, boundariesElement);
      /** @type {?} */

      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
      /** @type {?} */

      var sortedAreas = Object.keys(rects).map(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return Object.assign({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(
      /**
      * @param {?} a
      * @param {?} b
      * @return {?}
      */
      function (a, b) {
        return b.area - a.area;
      });
      /** @type {?} */

      var filteredAreas = sortedAreas.filter(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= target.clientWidth && height >= target.clientHeight;
      });
      filteredAreas = filteredAreas.filter(
      /**
      * @param {?} position
      * @return {?}
      */
      function (position) {
        return allowedPositions.some(
        /**
        * @param {?} allowedPosition
        * @return {?}
        */
        function (allowedPosition) {
          return allowedPosition === position.key;
        });
      });
      /** @type {?} */

      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
      /** @type {?} */

      var variation = placement.split(' ')[1]; // for tooltip on auto position

      target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
      return computedPlacement + (variation ? "-".concat(variation) : '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function getOffsets(data) {
      return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */


    function getOppositePlacement(placement) {
      /** @type {?} */
      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      return placement.replace(/left|right|bottom|top/g,
      /**
      * @param {?} matched
      * @return {?}
      */
      function (matched) {
        return (
          /** @type {?} */
          hash[matched]
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */


    function getOppositeVariation(variation) {
      if (variation === 'right') {
        return 'left';
      } else if (variation === 'left') {
        return 'right';
      }

      return variation;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */


    function getOuterSizes(element) {
      /** @type {?} */
      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var styles = window.getComputedStyle(element);
      /** @type {?} */

      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      /** @type {?} */

      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getReferenceOffsets(target, host) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      /** @type {?} */
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
      return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */


    function getTargetOffsets(target, hostOffsets, position) {
      /** @type {?} */
      var placement = position.split(' ')[0]; // Get target node sizes

      /** @type {?} */

      var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

      /** @type {?} */

      var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
      }; // depending by the target placement we have to compute its offsets slightly differently

      /** @type {?} */

      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      /** @type {?} */

      var mainSide = isHoriz ? 'top' : 'left';
      /** @type {?} */

      var secondarySide = isHoriz ? 'left' : 'top';
      /** @type {?} */

      var measurement = isHoriz ? 'height' : 'width';
      /** @type {?} */

      var secondaryMeasurement = !isHoriz ? 'height' : 'width';

      /** @type {?} */
      targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

      /** @type {?} */
      targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
      /** @type {?} */
      hostOffsets[getOppositePlacement(secondarySide)];
      return targetOffsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */


    function isModifierEnabled(options, modifierName) {
      return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */


    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */


    function updateContainerClass(data, renderer) {
      /** @type {?} */
      var target = data.instance.target;
      /** @type {?} */

      var containerClass = target.className;

      if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
        containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
        containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
          containerClass += ' popover-auto';
        }

        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
          containerClass += ' tooltip-auto';
        }
      }

      containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

      if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
      }

      target.className = containerClass;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */


    function setStyles(element, styles, renderer) {
      Object.keys(styles).forEach(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        /** @type {?} */
        var unit = ''; // add unit if the value is numeric and is one of the following

        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }

        if (renderer) {
          renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
          return;
        }

        element.style[prop] = String(styles[prop]) + unit;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function arrow(data) {
      var _data$offsets$arrow;

      /** @type {?} */
      var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

      /** @type {?} */

      var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
      /** @type {?} */


      var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
      /** @type {?} */

      var len = isVertical ? 'height' : 'width';
      /** @type {?} */

      var sideCapitalized = isVertical ? 'Top' : 'Left';
      /** @type {?} */

      var side = sideCapitalized.toLowerCase();
      /** @type {?} */

      var altSide = isVertical ? 'left' : 'top';
      /** @type {?} */

      var opSide = isVertical ? 'bottom' : 'right';
      /** @type {?} */

      var arrowElementSize = getOuterSizes(arrowElement)[len]; // top/left side

      if (data.offsets.host[opSide] - arrowElementSize <
      /** @type {?} */
      targetOffsets[side]) {
        /** @type {?} */
        targetOffsets[side] -=
        /** @type {?} */
        targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
      } // bottom/right side


      if (Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(arrowElementSize) >
      /** @type {?} */
      targetOffsets[opSide]) {
        /** @type {?} */
        targetOffsets[side] += Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) - Number(
        /** @type {?} */
        targetOffsets[opSide]);
      }

      targetOffsets = getClientRect(targetOffsets); // compute center of the target

      /** @type {?} */

      var center = Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2); // Compute the sideValue using the updated target offsets
      // take target margin in account because we don't have this info available

      /** @type {?} */

      var css = getStyleComputedProperty(data.instance.target);
      /** @type {?} */

      var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
      /** @type {?} */

      var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]);
      /** @type {?} */

      var sideValue = center -
      /** @type {?} */
      targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

      sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
      data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
      data.instance.arrow = arrowElement;
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function flip(data) {
      data.offsets.target = getClientRect(data.offsets.target);

      if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
      }
      /** @type {?} */


      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'viewport', false // positionFixed
      );
      /** @type {?} */

      var placement = data.placement.split(' ')[0];
      /** @type {?} */

      var variation = data.placement.split(' ')[1] || '';
      /** @type {?} */

      var offsetsHost = data.offsets.host;
      /** @type {?} */

      var target = data.instance.target;
      /** @type {?} */

      var host = data.instance.host;
      /** @type {?} */

      var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
      /** @type {?} */

      var flipOrder = [placement, adaptivePosition];
      /* tslint:disable-next-line: cyclomatic-complexity */

      flipOrder.forEach(
      /**
      * @param {?} step
      * @param {?} index
      * @return {?}
      */
      function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }

        placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

        /** @type {?} */

        var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
        /** @type {?} */

        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */

        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */

        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */

        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

        /** @type {?} */

        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */

        var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }

          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }

          data.placement = placement + (variation ? " ".concat(variation) : '');
          data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */


    function initData(targetElement, hostElement, position, options) {
      /** @type {?} */
      var hostElPosition = getReferenceOffsets(targetElement, hostElement);

      if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
      }
      /** @type {?} */


      var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

      /** @type {?} */

      var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position;
      /** @type {?} */

      var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
      placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
      return {
        options: options,
        instance: {
          target: targetElement,
          host: hostElement,
          arrow: null
        },
        offsets: {
          target: targetOffset,
          host: hostElPosition,
          arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function preventOverflow(data) {
      if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
      } // NOTE: DOM access here
      // resets the targetOffsets's position so that the document size can be calculated excluding
      // the size of the targetOffsets element itself

      /** @type {?} */


      var transformProp = 'transform';
      /** @type {?} */

      var targetStyles = data.instance.target.style; // assignment to help minification

      var top = targetStyles.top,
          left = targetStyles.left,
          transform = targetStyles[transformProp];
      targetStyles.top = '';
      targetStyles.left = '';
      targetStyles[transformProp] = '';
      /** @type {?} */

      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'scrollParent', false // positionFixed
      ); // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed

      targetStyles.top = top;
      targetStyles.left = left;
      targetStyles[transformProp] = transform;
      /** @type {?} */

      var order = ['left', 'right', 'top', 'bottom'];
      /** @type {?} */

      var check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary: function primary(placement) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data.offsets.target[placement];

          if (
          /** @type {?} */
          data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
          ) {
              value = Math.max(
              /** @type {?} */
              data.offsets.target[placement], boundaries[placement]);
            }

          return _defineProperty({}, placement, value);
        },

        /**
         * @param {?} placement
         * @return {?}
         */
        secondary: function secondary(placement) {
          /** @type {?} */
          var mainSide = placement === 'right' ? 'left' : 'top';
          /** @type {?} */

          var value = data.offsets.target[mainSide];

          if (
          /** @type {?} */
          data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
          ) {
              value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }

          return _defineProperty({}, mainSide, value);
        }
      };
      /** @type {?} */

      var side;
      order.forEach(
      /**
      * @param {?} placement
      * @return {?}
      */
      function (placement) {
        side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target,
        /** @type {?} */
        check[side](placement));
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function shift(data) {
      /** @type {?} */
      var placement = data.placement;
      /** @type {?} */

      var basePlacement = placement.split(' ')[0];
      /** @type {?} */

      var shiftvariation = placement.split(' ')[1];

      if (shiftvariation) {
        var _data$offsets = data.offsets,
            host = _data$offsets.host,
            target = _data$offsets.target;
        /** @type {?} */

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */

        var side = isVertical ? 'left' : 'top';
        /** @type {?} */

        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */

        var shiftOffsets = {
          start: _defineProperty({}, side, host[side]),
          end: _defineProperty({}, side, host[side] + host[measurement] - target[measurement])
        };
        data.offsets.target = Object.assign({}, target,
        /** @type {?} */
        shiftOffsets[shiftvariation]);
      }

      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Positioning =
    /*#__PURE__*/
    function () {
      function Positioning() {
        _classCallCheck(this, Positioning);
      }

      _createClass(Positioning, [{
        key: "position",

        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        value: function position(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.offset(hostElement, targetElement, false);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "offset",
        value: function offset(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return getReferenceOffsets(targetElement, hostElement);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "positionElements",
        value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
          /** @type {?} */
          var chainOfModifiers = [flip, shift, preventOverflow, arrow];
          return chainOfModifiers.reduce(
          /**
          * @param {?} modifiedData
          * @param {?} modifier
          * @return {?}
          */
          function (modifiedData, modifier) {
            return modifier(modifiedData);
          }, initData(targetElement, hostElement, position, options));
        }
      }]);

      return Positioning;
    }();
    /** @type {?} */


    var positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */

    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
      /** @type {?} */
      var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
      /** @type {?} */

      var offsets = getOffsets(data);
      setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
      }, renderer);

      if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
      }

      updateContainerClass(data, renderer);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PositioningService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ngZone
       * @param {?} rendererFactory
       * @param {?} platformId
       */
      function PositioningService(ngZone, rendererFactory, platformId) {
        var _this19 = this;

        _classCallCheck(this, PositioningService);

        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();
        this.isDisabled = false;

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this19.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', {
              passive: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', {
              passive: true
            }),
            /* tslint:disable-next-line: deprecation */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), _this19.update$$);

            _this19.triggerEvent$.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this19.isDisabled) {
                return;
              }

              _this19.positionElements
              /* tslint:disable-next-line: no-any */
              .forEach(
              /**
              * @param {?} positionElement
              * @return {?}
              */
              function (positionElement) {
                positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this19.options, rendererFactory.createRenderer(null, null));
              });
            });
          });
        }
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(PositioningService, [{
        key: "position",
        value: function position(options) {
          this.addPositionElement(options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disable",

        /**
         * @return {?}
         */
        value: function disable() {
          this.isDisabled = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          this.isDisabled = false;
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "addPositionElement",
        value: function addPositionElement(options) {
          this.positionElements.set(_getHtmlElement(options.element), options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "calcPosition",
        value: function calcPosition() {
          this.update$$.next();
        }
        /**
         * @param {?} elRef
         * @return {?}
         */

      }, {
        key: "deletePositionElement",
        value: function deletePositionElement(elRef) {
          this.positionElements.delete(_getHtmlElement(elRef));
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          this.options = options;
        }
      }, {
        key: "event$",
        get: function get() {
          return this.triggerEvent$;
        }
      }]);

      return PositioningService;
    }();

    PositioningService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    PositioningService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: Number,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /**
     * @param {?} element
     * @return {?}
     */


    function _getHtmlElement(element) {
      // it means that we got a selector
      if (typeof element === 'string') {
        return document.querySelector(element);
      }

      if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
      }

      return element;
    } //# sourceMappingURL=ngx-bootstrap-positioning.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js ***!
    \**************************************************************************/

  /*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */

  /***/
  function node_modulesNgxBootstrapUtilsFesm2015NgxBootstrapUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
      return LinkedList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnChange", function () {
      return OnChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Trigger", function () {
      return Trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "document", function () {
      return document$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isBs3", function () {
      return isBs3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggers", function () {
      return listenToTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function () {
      return listenToTriggersV2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTriggers", function () {
      return parseTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerEscClick", function () {
      return registerEscClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function () {
      return registerOutsideClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setTheme", function () {
      return setTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "warnOnce", function () {
      return warnOnce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "window", function () {
      return win;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var Trigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} open
       * @param {?=} close
       */
      function Trigger(open, close) {
        _classCallCheck(this, Trigger);

        this.open = open;
        this.close = close || open;
      }
      /**
       * @return {?}
       */


      _createClass(Trigger, [{
        key: "isManual",
        value: function isManual() {
          return this.open === 'manual' || this.close === 'manual';
        }
      }]);

      return Trigger;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_ALIASES = {
      hover: ['mouseover', 'mouseout'],
      focus: ['focusin', 'focusout']
    };
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */

    function parseTriggers(triggers) {
      var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

      /** @type {?} */
      var trimmedTriggers = (triggers || '').trim();

      if (trimmedTriggers.length === 0) {
        return [];
      }
      /** @type {?} */


      var parsedTriggers = trimmedTriggers.split(/\s+/).map(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        return trigger.split(':');
      }).map(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
      });
      /** @type {?} */

      var manualTriggers = parsedTriggers.filter(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        return triggerPair.isManual();
      });

      if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
      }

      if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
      }

      return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */


    function listenToTriggers(renderer,
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(triggers);
      /* tslint:disable-next-line: no-any */

      /** @type {?} */

      var listeners = [];

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      }

      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        if (trigger.open === trigger.close) {
          listeners.push(renderer.listen(target, trigger.open, toggleFn));
          return;
        }

        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function listenToTriggersV2(renderer, options) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(options.triggers);
      /** @type {?} */

      var target = options.target; // do nothing

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      } // all listeners

      /* tslint:disable-next-line: no-any */

      /** @type {?} */


      var listeners = []; // lazy listeners registration

      /** @type {?} */

      var _registerHide = [];
      /** @type {?} */

      var registerHide =
      /**
      * @return {?}
      */
      function registerHide() {
        // add hide listeners to unregister array
        _registerHide.forEach(
        /**
        * @param {?} fn
        * @return {?}
        */
        function (fn) {
          return listeners.push(fn());
        }); // register hide events only once


        _registerHide.length = 0;
      }; // register open\close\toggle listeners


      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */

        var showFn = useToggle ? options.toggle : options.show;

        if (!useToggle) {
          _registerHide.push(
          /**
          * @return {?}
          */
          function () {
            return renderer.listen(target, trigger.close, options.hide);
          });
        }

        listeners.push(renderer.listen(target, trigger.open,
        /**
        * @return {?}
        */
        function () {
          return showFn(registerHide);
        }));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerOutsideClick(renderer, options) {
      if (!options.outsideClick) {
        return Function.prototype;
      }
      /* tslint:disable-next-line: no-any */


      return renderer.listen('document', 'click',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerEscClick(renderer, options) {
      if (!options.outsideEsc) {
        return Function.prototype;
      }

      return renderer.listen('document', 'keyup.esc',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */


    var win = typeof window !== 'undefined' && window ||
    /** @type {?} */
    {};
    /** @type {?} */

    var document$1 = win.document;
    /** @type {?} */

    var location = win.location;
    /** @type {?} */

    var gc = win.gc ?
    /**
    * @return {?}
    */
    function () {
      return win.gc();
    } :
    /**
    * @return {?}
    */
    function () {
      return null;
    };
    /** @type {?} */

    var performance = win.performance ? win.performance : null;
    /** @type {?} */

    var Event = win.Event;
    /** @type {?} */

    var MouseEvent = win.MouseEvent;
    /** @type {?} */

    var KeyboardEvent = win.KeyboardEvent;
    /** @type {?} */

    var EventTarget = win.EventTarget;
    /** @type {?} */

    var History = win.History;
    /** @type {?} */

    var Location = win.Location;
    /** @type {?} */

    var EventListener = win.EventListener;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var guessedVersion;
    /**
     * @return {?}
     */

    function _guessBsVersion() {
      if (typeof document === 'undefined') {
        return null;
      }
      /** @type {?} */


      var spanEl = document.createElement('span');
      spanEl.innerText = 'test bs version';
      document.body.appendChild(spanEl);
      spanEl.classList.add('d-none');
      /** @type {?} */

      var rect = spanEl.getBoundingClientRect();
      document.body.removeChild(spanEl);

      if (!rect) {
        return 'bs3';
      }

      return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */


    function setTheme(theme) {
      guessedVersion = theme;
    } // todo: in ngx-bootstrap, bs4 will became a default one

    /**
     * @return {?}
     */


    function isBs3() {
      if (typeof win === 'undefined') {
        return true;
      }

      if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
          return guessedVersion === 'bs3';
        }

        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
      }

      return win.__theme !== 'bs4';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var LinkedList =
    /*#__PURE__*/
    function () {
      function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.length = 0;
        this.asArray = []; // Array methods overriding END
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(LinkedList, [{
        key: "get",
        value: function get(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current.value;
        }
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(value) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

          if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
          }
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */


          var node = {
            value: value,
            next: undefined,
            previous: undefined
          };

          if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
          } else {
            if (position === 0) {
              // first node
              node.next = this.head;
              this.head.previous = node;
              this.head = node;
            } else if (position === this.length) {
              // last node
              this.tail.next = node;
              node.previous = this.tail;
              this.tail = node;
            } else {
              // node in middle

              /** @type {?} */
              var currentPreviousNode = this.getNode(position - 1);
              /** @type {?} */

              var currentNextNode = currentPreviousNode.next;
              currentPreviousNode.next = node;
              currentNextNode.previous = node;
              node.previous = currentPreviousNode;
              node.next = currentNextNode;
            }
          }

          this.length++;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }

          if (position === 0) {
            // first node
            this.head = this.head.next;

            if (this.head) {
              // there is no second node
              this.head.previous = undefined;
            } else {
              // there is no second node
              this.tail = undefined;
            }
          } else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
          } else {
            // middle node

            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
          }

          this.length--;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(position, value) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var node = this.getNode(position);
          node.value = value;
          this.createInternalArrayRepresentation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toArray",
        value: function toArray() {
          return this.asArray;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findAll",
        value: function findAll(fn) {
          /** @type {?} */
          var current = this.head;
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */

          var result = [];

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result.push({
                index: index,
                value: current.value
              });
            }

            current = current.next;
          }

          return result;
        } // Array methods overriding start

        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "push",
        value: function push() {
          var _this20 = this;

          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          /* tslint:disable-next-line: no-any*/
          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this20.add(arg);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pop",
        value: function pop() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var last = this.tail;
          this.remove(this.length - 1);
          return last.value;
        }
        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "unshift",
        value: function unshift() {
          var _this21 = this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          args.reverse();
          /* tslint:disable-next-line: no-any*/

          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this21.add(arg, 0);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var lastItem = this.head.value;
          this.remove();
          return lastItem;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          /** @type {?} */
          var current = this.head;

          for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "indexOf",
        value: function indexOf(value) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var position = 0;

          for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
              position = index;
              break;
            }

            current = current.next;
          }

          return position;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "some",
        value: function some(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = false;

          while (current && !result) {
            if (fn(current.value)) {
              result = true;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "every",
        value: function every(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = true;

          while (current && result) {
            if (!fn(current.value)) {
              result = false;
            }

            current = current.next;
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          return '[Linked List]';
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "find",
        value: function find(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = current.value;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findIndex",
        value: function findIndex(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = index;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @protected
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "getNode",
        value: function getNode(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "createInternalArrayRepresentation",
        value: function createInternalArrayRepresentation() {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var outArray = [];
          /** @type {?} */

          var current = this.head;

          while (current) {
            outArray.push(current.value);
            current = current.next;
          }

          this.asArray = outArray;
        }
      }]);

      return LinkedList;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*tslint:disable:no-invalid-this */

    /* tslint:disable-next-line: no-any */

    /**
     * @param {?=} defaultValue
     * @return {?}
     */


    function OnChange(defaultValue) {
      /** @type {?} */
      var sufix = 'Change';
      /* tslint:disable-next-line: no-any */

      return (
        /**
        * @param {?} target
        * @param {?} propertyKey
        * @return {?}
        */
        function OnChangeHandler(target, propertyKey) {
          /** @type {?} */
          var _key = " __".concat(propertyKey, "Value");

          Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */

            /**
             * @return {?}
             */
            get: function get() {
              return this[_key];
            },

            /* tslint:disable-next-line: no-any */

            /**
             * @param {?} value
             * @return {?}
             */
            set: function set(value) {
              /** @type {?} */
              var prevValue = this[_key];
              this[_key] = value;

              if (prevValue !== value && this[propertyKey + sufix]) {
                this[propertyKey + sufix].emit(value);
              }
            }
          });
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Utils =
    /*#__PURE__*/
    function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "reflow",

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} element
         * @return {?}
         */
        value: function reflow(element) {
          /* tslint:disable-next-line: no-any */
          (
          /**
          * @param {?} bs
          * @return {?}
          */
          function (bs) {
            return bs;
          })(element.offsetHeight);
        } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} elem
         * @return {?}
         */

      }, {
        key: "getStyles",
        value: function getStyles(elem) {
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

          /** @type {?} */
          var view = elem.ownerDocument.defaultView;

          if (!view || !view.opener) {
            view = win;
          }

          return view.getComputedStyle(elem);
        }
      }]);

      return Utils;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _messagesHash = {};
    /** @type {?} */

    var _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */


    function warnOnce(msg) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
      }

      _messagesHash[msg] = true;
      /*tslint:disable-next-line*/

      console.warn(msg);
    } //# sourceMappingURL=ngx-bootstrap-utils.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeProfileEditprofileEditprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='update()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"File\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'CHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Salon Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.name.errors.required\">{{'INCRTSALONNAME'| translate}}</p>\n                <!-- <p class=\"color error\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'INCRTSALONNAME'| translate}}</p> -->\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\" readonly>\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color error\"\n                    *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">\n                    {{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/location.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Location\" class=\"form-control\" #search autocorrect=\"off\"\n                    autocapitalize=\"off\" spellcheck=\"off\" formControlName=\"location\">\n                <div\n                    *ngIf=\"(submitted || getControl.location.dirty|| getControl.location.touched) && getControl.location.errors\">\n                    <p class=\"color error\" *ngIf=\"getControl.location.errors.required\">{{'LOCREQ' | translate}}</p>\n                </div>\n                <!-- <img class=\"full_width\" src=\"assets/images/maps.png\" alt=\"Maps\"> -->\n                <div class=\"map full_width\">\n                    <agm-map [latitude]=\"location.lat\" [longitude]=\"location.lng\" [(zoom)]=\"location.zoom\"\n                        [zoomControl]=\"true\">\n                        <agm-marker [latitude]=\"location.lat\" [longitude]=\"location.lng\"></agm-marker>\n                    </agm-map>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color error\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"work_gallery\">\n                <label for=\"\" class=\"block\">{{'WORKGALLERY'| translate}}</label>\n                <div class=\"form-group form-primary custom_formgroup\">\n\n                    <label class=\"detail_content\">\n                        <a class=\"margin_top\" *ngFor=\"let image of salonImageUrlArray; index as i\">\n                            <img class=\"file_upload2\" [src]=\"image\" alt=\"Upload\">\n                            <span (click)=\"removeSalonImages(image,i)\">x</span> </a>\n                    </label>\n                    <span class=\"file_div\">\n                        <input type=\"file\" class=\"custom_upload1\" multiple\n                            accept=\"image/x-png,image/gif,image/jpeg,image/jpg\" (change)=\"readUrlMultipleImage($event)\"\n                            formControlName='multiImage'>\n                        <img class=\"file_upload1\" src=\"assets/images/add-edit.png\" alt=\"Upload\">\n                    </span>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/web.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Website\" class=\"form-control\" formControlName=\"website\">\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.website.dirty|| getControl.website.touched) && getControl.website.errors\">\n                <p class=\"color error\" *ngIf=\"getControl.website.errors.invalidWebsite \">{{'WBSTINVLD' | translate}}</p>\n            </div>\n            <!-- <div class=\"setting_list\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">{{'ONLINBOOKING'| translate}}</div>\n                    <div class=\"col-md-6 alignright\">\n                        <mat-slide-toggle></mat-slide-toggle>\n                    </div>\n                </div>\n            </div> -->\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service At</mat-label>\n                <mat-select formControlName='serviceat'>\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service.value\">\n                        {{service.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <a [routerLink]=\"['/staff']\">\n                <mat-form-field>\n                    <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"envelope\"></span>\n                    <input matInput placeholder=\"{{'MANAGESTAFF'| translate}}\" class=\"form-control cursor\" disabled>\n                </mat-form-field>\n            </a>\n            <a [routerLink]=\"['/profile/business-hours']\">\n                <mat-form-field>\n                    <span class=\"email-img pass\"><img src=\"assets/images/time.png\" alt=\"envelope\"></span>\n                    <input matInput placeholder=\"{{'BUSINESSHOURS'| translate}}\" class=\"form-control cursor\" disabled>\n                </mat-form-field>\n            </a>\n\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">{{'SAVE'| translate}}</button>\n            </div>\n        </form>\n    </div>\n    <!-- <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        \n                     \n                        <ng-container matColumnDef=\"No.\">\n                          <th mat-header-cell *matHeaderCellDef>No.</th>\n                          <td mat-cell *matCellDef=\"let element\">{{1}}</td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"name\">\n                          <th mat-header-cell *matHeaderCellDef>Name</th>\n                          <td mat-cell *matCellDef=\"let element\">{{element.cat_name}}</td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"price\">\n                          <th mat-header-cell *matHeaderCellDef>Price</th>\n                          <td mat-cell *matCellDef=\"let element\">{{element.price}}</td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"discount_price\">\n                          <th mat-header-cell *matHeaderCellDef>Discount</th>\n                          <td mat-cell *matCellDef=\"let element\">{{element.discount_price}}</td>\n                        </ng-container>\n                      \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                      </table> -->\n    <!-- <button mat-raised-button (click)=\"openModal(template)\">Pick one</button> -->\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-content px-5\">\n        <h4 class=\"mt-3 text-left\">Salon Images</h4>\n        <div class=\"modal-body px-0\">\n            <slideshow #slideshow [imageUrls]=\"slide\" [height]=\"height\" [minHeight]=\"'200px'\" [autoPlay]=\"false\"\n                [showArrows]=\"true\" [lazyLoad]=\"true\" [backgroundSize]=\"'auto'\" [imageUrls]=\"imageSources\"\n                [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\"></slideshow>\n        </div>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./src/app/home/profile/editprofile/editprofile-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/profile/editprofile/editprofile-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: EditprofileRoutingModule */

  /***/
  function srcAppHomeProfileEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofileRoutingModule", function () {
      return EditprofileRoutingModule;
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


    var _editprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editprofile.component */
    "./src/app/home/profile/editprofile/editprofile.component.ts");

    var routes = [{
      path: '',
      component: _editprofile_component__WEBPACK_IMPORTED_MODULE_3__["EditprofileComponent"]
    }];

    var EditprofileRoutingModule = function EditprofileRoutingModule() {
      _classCallCheck(this, EditprofileRoutingModule);
    };

    EditprofileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditprofileRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/profile/editprofile/editprofile.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home/profile/editprofile/editprofile.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeProfileEditprofileEditprofileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".file_input img {\n  border-radius: 50%;\n  height: 110px;\n  width: 110px;\n  border: 5px solid #e3e3e3;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid #e3e3e3;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 100px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -110px;\n  z-index: 990;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  background: #FF2626;\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 1px 0px;\n  line-height: 18px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-indent: -110px;\n}\n\n.file_div {\n  position: relative;\n  display: inline-block;\n  margin-right: 15px;\n}\n\nlabel.block {\n  display: block;\n}\n\n.work_gallery label {\n  display: contents;\n}\n\n.setting {\n  top: 16px;\n}\n\n.main-card .setting_list {\n  margin-bottom: 15px;\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9maWxlL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qix5QkFBQTtFQUNySCxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEE7RUFBZ0Isa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFlBQUE7RUFBYSxlQUFBO0VBQWdCLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0FDZTVHOztBRGJBO0VBQXNCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXdCLFNBQUE7RUFBVSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLCtCQUFBO0VBQWdDLG1CQUFBO0FDeUJuTDs7QUR4QkE7RUFBMkIsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FDdUMvTTs7QURyQ0E7RUFBNkIsa0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsbUJBQUE7QUM4Q3BIOztBRDdDQTtFQUFrQyxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUM0RHROOztBRDFEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDNkRKOztBRDNEQTtFQUFVLGtCQUFBO0VBQW1CLHFCQUFBO0VBQXFCLGtCQUFBO0FDaUVsRDs7QURoRUE7RUFBWSxjQUFBO0FDb0VaOztBRG5FQTtFQUFvQixpQkFBQTtBQ3VFcEI7O0FEM0NBO0VBQVMsU0FBQTtBQytDVDs7QUQ5Q0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0MsZ0JBQUE7QUNpREwiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2ZpbGUvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV9pbnB1dCBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlM2UzZTM7XG59XG5cbmltZy5maWxlX3VwbG9hZDJ7aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O3dpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgbWFyZ2luOiA1cHggIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBib3JkZXI6IDVweCBzb2xpZCAjZTNlM2UzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7fVxuLmN1c3RvbV91cGxvYWQxe3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwcHg7aGVpZ2h0OiAxMDAlO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAwO3RleHQtaW5kZW50OiAtMTEwcHg7ei1pbmRleDogOTkwO31cblxuLmRldGFpbF9jb250ZW50IGEuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6ICNmOTZhYjM7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgbWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTdweDttYXJnaW4tcmlnaHQ6IDE1cHg7cGFkZGluZzogNXB4IDIwcHg7Ym94LXNoYWRvdzogMnB4IDJweCA3cHggI2Y5NmFiMzttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLmJ0biBzcGFue2N1cnNvcjogcG9pbnRlcjtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDBweDtiYWNrZ3JvdW5kOiAjRkYyNjI2O2hlaWdodDogMjJweDt3aWR0aDogMjJweDtib3JkZXItcmFkaXVzOiA1MCU7IGZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNjAwO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAxcHggMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O31cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDttYXJnaW4tYm90dG9tOiAxNXB4O31cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbntjdXJzb3I6IHBvaW50ZXI7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwcHg7YmFja2dyb3VuZDogI0ZGMjYyNjtoZWlnaHQ6IDIycHg7d2lkdGg6IDIycHg7Ym9yZGVyLXJhZGl1czogNTAlOyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogMXB4IDBweDtsaW5lLWhlaWdodDogMThweDt9XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG4uZmlsZV9kaXZ7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDogMTVweDt9XG5sYWJlbC5ibG9ja3tkaXNwbGF5OiBibG9ja31cbi53b3JrX2dhbGxlcnkgbGFiZWx7ZGlzcGxheTogY29udGVudHN9XG5cbi8vIC51cGxvYWQtaW1hZ2Uge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vICAucHJvZmlsZSAge1xuLy8gICAgIGRpc3BsYXk6bm9uZTtcbi8vICAgICBtYXJnaW46MTBweDtcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlICArIGxhYmVsIHtcbi8vICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbi8vICAgICBtYXJnaW46MjBweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMzJweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuLy8gICAgIGJvcmRlcjpzb2xpZCAxcHggIzY2NkY3Nztcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgY29sb3I6IzY2NkY3Nztcbi8vICAgICB9XG4vLyAgICAgIC5wcm9maWxlIDphY3RpdmUgKyBsYWJlbCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRDZDN0E7XG4vLyAgICAgY29sb3I6I0ZGRkZGRjtcbi8vICAgICB9XG5cbi5zZXR0aW5ne3RvcDoxNnB4fVxuLm1haW4tY2FyZCAuc2V0dGluZ19saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICBib3JkZXItYm90dG9tOiAwOyBcbn0iLCIuZmlsZV9pbnB1dCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbn1cblxuaW1nLmZpbGVfdXBsb2FkMiB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2UzZTNlMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jdXN0b21fdXBsb2FkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0xMTBweDtcbiAgei1pbmRleDogOTkwO1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmOTZhYjM7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkYyNjI2O1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRjI2MjY7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udXBsb2FkLWltYWdlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRleHQtaW5kZW50OiAtMTEwcHg7XG59XG5cbi5maWxlX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmxhYmVsLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53b3JrX2dhbGxlcnkgbGFiZWwge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnNldHRpbmcge1xuICB0b3A6IDE2cHg7XG59XG5cbi5tYWluLWNhcmQgLnNldHRpbmdfbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/profile/editprofile/editprofile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/profile/editprofile/editprofile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EditprofileComponent */

  /***/
  function srcAppHomeProfileEditprofileEditprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function () {
      return EditprofileComponent;
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


    var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/service/validation-service */
    "./src/app/shared/service/validation-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/service/message.service */
    "./src/app/shared/service/message.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var EditprofileComponent =
    /*#__PURE__*/
    function () {
      function EditprofileComponent(httpService, router, helper, mapsApiLoader, zone, messageService, modalService, errorserv, trns) {
        _classCallCheck(this, EditprofileComponent);

        this.httpService = httpService;
        this.router = router;
        this.helper = helper;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.messageService = messageService;
        this.modalService = modalService;
        this.errorserv = errorserv;
        this.trns = trns;
        this.services = [{
          value: '1',
          viewValue: 'Home'
        }, {
          value: '2',
          viewValue: 'Salon'
        }, {
          value: '3',
          viewValue: 'Both'
        }];
        this.clinics = [{
          value: '2',
          viewValue: 'Clinic'
        }];
        this.displayedColumns = ['No.', 'name', 'price', 'discount_price'];
        this.location = {
          lat: 28.7041,
          lng: 77.1025,
          marker: {
            lat: 28.7041,
            lng: 77.1025,
            draggable: true
          },
          zoom: 12
        };
        this.loader = false;
        this.submitted = false;
        this.url = 'assets/images/change.png';
        this.salonImageUrlArray = [];
        this.salonImageArray = [];
        this.deletedImageArray = [];
        this.dataSource = [];
        this.slide = [];
      }

      _createClass(EditprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.salonid = localStorage.getItem('salonid');
          this.searchPlace();
          this.getUserProfile();
          this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].namevalidator]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].validateEmail]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].phonevalidator]),
            // clinic: new FormControl(null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(500)]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].validateWebsite]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this22 = this;

          this.submitted = true; // return false

          this.formData = new FormData();

          if (this.salonImageUrlArray.length > 10) {
            this.errorserv.handleError(39);
            return;
          } else if (this.profile.valid) {
            if (this.profileImage) this.formData.append('salon_logo', this.profileImage, this.profileImage.name);

            for (var i = 0; i < this.salonImageArray.length; i++) {
              this.formData.append('salon_imgs', this.salonImageArray[i]);
            }

            if (this.deletedImageArray.length) this.formData.append('del_imgs', JSON.stringify(this.deletedImageArray));
            this.formData.append('name', this.profile.value.name); // this.formData.append('email', this.profile.value.email);

            this.formData.append('phone', this.profile.value.phone);
            this.formData.append('website', this.profile.value.website ? this.profile.value.website : '');
            this.formData.append('desc', this.profile.value.description ? this.profile.value.description : '');
            this.formData.append('address', this.location.full_address ? this.location.full_address : this.profile.value.location);
            this.formData.append('city', this.location ? this.location.address_level_2 : "");
            this.formData.append('state', this.location ? this.location.address_state : "");
            this.formData.append('pincode', this.location ? this.location.address_zip : "");
            this.formData.append('country', this.location ? this.location.address_country : "");
            this.formData.append('lat', this.location ? String(this.location.lat) : "");
            this.formData.append('lng', this.location ? String(this.location.lng) : "");
            this.formData.append('service_at', this.profile.value.serviceat);
            this.httpService.getRequest('PUT', 'EDIT', this.formData, '').subscribe(function (response) {
              if (response.status === 1) {
                _this22.submitted = true;
                localStorage.setItem('salon', JSON.stringify({
                  name: _this22.profile.value.name,
                  logo: response.res.logo ? response.res.logo : _this22.detail.logo
                }));

                _this22.messageService.sendMessage('profile changed');

                _this22.router.navigateByUrl('/profile').then(function () {
                  _this22.httpService.sucsTostr(_this22.trns.transform('SUCCESS'), _this22.trns.transform('SALONSUCCESS'));
                });
              } else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(response.err)) {
                  _this22.errorserv.handleError(response.err.errCode);
                }
              }
            }, function (error) {
              _this22.errorserv.handleError(0);
            });
          } else {
            console.log(this.profile);
          }
        }
      }, {
        key: "readUrlMultipleImage",
        value: function readUrlMultipleImage(event) {
          var _this23 = this;

          var imageData = this.helper.checkImageValidationMultiple(event);

          if (imageData == true) {
            var files = event.target.files;

            if (files.length) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = files[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var file = _step3.value;
                  var reader = new FileReader();

                  reader.onload = function (e) {
                    _this23.salonImageUrlArray.push(e.target.result);
                  };

                  reader.readAsDataURL(file);
                  this.salonImageArray.push(file);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "removeSalonImages",
        value: function removeSalonImages(value, itemIndex) {
          var _this24 = this;

          this.salonImageUrlArray = this.salonImageUrlArray.filter(function (item, index) {
            if (index == itemIndex && item.includes("https://tieimg.s3.me-south-1.amazonaws.com")) {
              var image = item.split("/").pop();

              _this24.deletedImageArray.push(image);
            }

            console.log(_this24.salonImageUrlArray);
            return index !== itemIndex;
          });

          if (typeof this.salonImageArray[itemIndex] === 'object') {
            var deleteIndex = itemIndex - this.deletedImageArray.length;
            this.salonImageArray.splice(deleteIndex, 1);
          }
        }
      }, {
        key: "readUrl",
        value: function readUrl(event) {
          var _this25 = this;

          //  var fileResponse= this.fileUpload.readUrl(event);
          //  console.log(fileResponse);
          //  this.url = fileResponse['url'];
          //  this.profileImage = fileResponse['fileObject '];
          if (event.target.files && event.target.files[0]) {
            if (this.helper.isImage(event.target.files[0].type)) {
              var reader = new FileReader();

              reader.onload = function (event) {
                _this25.url = event.target.result;
              };

              reader.readAsDataURL(event.target.files[0]);
              this.profileImage = event.target.files[0];
            } else {// this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
            }
          }
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this26 = this;

          this.httpService.getRequest('GET', 'PROFILE', '').subscribe(function (response) {
            _this26.loader = false;

            if (response.status === 1) {
              _this26.detail = response.res;

              _this26.profile.patchValue({
                name: _this26.detail.hasOwnProperty('name') ? _this26.detail.name : '',
                email: _this26.detail.hasOwnProperty('email') ? _this26.detail.email : '',
                phone: _this26.detail.hasOwnProperty('phone') ? _this26.detail.phone : '',
                location: _this26.detail.hasOwnProperty('address') ? _this26.detail.address : '',
                // company details
                website: _this26.detail.hasOwnProperty('website') ? _this26.detail.website : '',
                description: _this26.detail.hasOwnProperty('desc') ? _this26.detail.desc : '',
                serviceat: _this26.detail.hasOwnProperty('service_at') ? String(_this26.detail.service_at) : ''
              });

              _this26.location.address_level_2 = _this26.detail.city;
              _this26.location.address_state = _this26.detail.state;
              _this26.location.address_zip = _this26.detail.pincode;
              _this26.location.address_country = _this26.detail.country;
              _this26.location.lat = _this26.detail.lat;
              _this26.location.lng = _this26.detail.lng;
              _this26.url = _this26.detail.logo ? _this26.detail.logo : _this26.url;
              _this26.dataSource = _this26.detail.services;
              _this26.services = _this26.detail.type !== 2 ? _this26.clinics : _this26.services;

              if (_this26.detail && _this26.detail.imgs) {
                _this26.detail.imgs.map(function (item) {
                  item = _this26.detail.bp + item;

                  _this26.salonImageUrlArray.push(item);

                  _this26.salonImageArray.push(item);

                  _this26.slide = [].concat(_toConsumableArray(_this26.slide), [{
                    'url': item,
                    clickAction: function clickAction() {
                      return alert('custom click function');
                    }
                  }]); // this.slide.push({'url':item});
                });
              }
            } else {
              if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(response.err)) {
                _this26.errorserv.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "searchPlace",
        value: function searchPlace() {
          var _this27 = this;

          this.mapsApiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this27.searchElementRef.nativeElement, {
              types: ['establishment']
            });
            autocomplete.addListener("place_changed", function () {
              _this27.zone.run(function () {
                //get the place result
                var place = autocomplete.getPlace();

                for (var i = 0; i < place.address_components.length; i++) {
                  var types = place.address_components[i].types;

                  if (types.indexOf('locality') != -1) {
                    _this27.location.address_level_2 = place.address_components[i].long_name;
                  } else if (types.indexOf('administrative_area_level_1') != -1) {
                    _this27.location.address_level_2 = place.address_components[i].long_name;
                  }

                  if (types.indexOf('country') != -1) {
                    _this27.location.address_country = place.address_components[i].long_name;
                  }

                  if (types.indexOf('postal_code') != -1) {
                    _this27.location.address_zip = place.address_components[i].long_name;
                  }

                  if (types.indexOf('administrative_area_level_1') != -1) {
                    _this27.location.address_state = place.address_components[i].long_name;
                  }
                } // console.log(this.location.address_level_2);
                // console.log(place);


                if (place.formatted_address) {
                  _this27.location.full_address = place.formatted_address;
                }

                if (place.geometry.location) {
                  _this27.location.lat = place.geometry.location.lat();
                  _this27.location.lng = place.geometry.location.lng();
                  _this27.location.marker.lat = place.geometry.location.lat();
                  _this27.location.marker.lng = place.geometry.location.lng();
                  _this27.location.marker.draggable = true;
                  _this27.location.viewport = place.geometry.viewport;
                } //verify result


                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }
              });
            });
          });
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          var config = {
            backdrop: true,
            ignoreBackdropClick: true
          };
          console.log(this.slideshow); // this.slideshow.goToSlide(3);

          this.modalRef = this.modalService.show(template, config);
        }
      }, {
        key: "getControl",
        get: function get() {
          return this.profile.controls;
        }
      }]);

      return EditprofileComponent;
    }();

    EditprofileComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__["Helper"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
      }, {
        type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"]
      }, {
        type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search", {
      static: false
    })], EditprofileComponent.prototype, "searchElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideshow', {
      static: true
    })], EditprofileComponent.prototype, "slideshow", void 0);
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editprofile.component.scss */
      "./src/app/home/profile/editprofile/editprofile.component.scss")).default]
    })], EditprofileComponent);
    /***/
  },

  /***/
  "./src/app/home/profile/editprofile/editprofile.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/profile/editprofile/editprofile.module.ts ***!
    \****************************************************************/

  /*! exports provided: EditprofileModule */

  /***/
  function srcAppHomeProfileEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofileModule", function () {
      return EditprofileModule;
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


    var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editprofile-routing.module */
    "./src/app/home/profile/editprofile/editprofile-routing.module.ts");
    /* harmony import */


    var _editprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editprofile.component */
    "./src/app/home/profile/editprofile/editprofile.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-simple-slideshow */
    "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/breadcrumb/breadcrumb.module */
    "./src/app/shared/breadcrumb/breadcrumb.module.ts");
    /* harmony import */


    var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var EditprofileModule = function EditprofileModule() {
      _classCallCheck(this, EditprofileModule);
    };

    EditprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_editprofile_component__WEBPACK_IMPORTED_MODULE_4__["EditprofileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditprofileRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDiESz5lmd8ZNxAGBg3ILiQ8w9SFuYwAB8',
        libraries: ["places"]
      }), ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__["SlideshowModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__["ApplicationpipeModule"]],
      providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]]
    })], EditprofileModule);
    /***/
  }
}]);
//# sourceMappingURL=8-es5.js.map