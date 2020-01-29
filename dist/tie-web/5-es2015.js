(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-simple-slideshow/ng-simple-slideshow.js ***!
  \*****************************************************************/
/*! exports provided: SlideshowModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowModule", function() { return SlideshowModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SlideshowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SwipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




class SwipeService {
    /**
     * \@description detect the direction of the swipe, and return a -1 or 1 if the duration is long enough
     *              else return a 0 to do nothing
     * @param {?} e
     * @param {?} when
     * @return {?}
     */
    swipe(e, when) {
        const /** @type {?} */ coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const /** @type {?} */ time = new Date().getTime();
        if (when === 'start') {
            this._swipeCoord = coord;
            this._swipeTime = time;
        }
        else if (when === 'end') {
            const /** @type {?} */ direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]];
            const /** @type {?} */ duration = time - this._swipeTime;
            if (duration < 1000 // Short enough
                && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
                && Math.abs(direction[0]) > 30) {
                return direction[0] < 0 ? 1 : -1;
            }
        }
        return 0;
    }
}
SwipeService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
SwipeService.ctorParameters = () => [];

const FIRST_SLIDE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('firstSlide');
class SlideshowComponent {
    /**
     * @param {?} _swipeService
     * @param {?} _renderer
     * @param {?} _transferState
     * @param {?} _ngZone
     * @param {?} sanitizer
     * @param {?} platform_id
     * @param {?} document
     */
    constructor(_swipeService, _renderer, _transferState, _ngZone, sanitizer, platform_id, document) {
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
    get safeStyleDotColor() {
        return this.sanitizer.bypassSecurityTrustStyle(`--dot-color: ${this.dotColor}`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.debug !== undefined) {
            console.warn('[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0');
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
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
        }
        else if (this.hideOnNoSlides === true) {
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
    onSlide(indexDirection, isSwipe) {
        this.handleAutoPlay(this.stopAutoPlayOnSlide);
        this.slide(indexDirection, isSwipe);
    }
    /**
     * \@description Use the swipe service to detect swipe events from phone and tablets
     * @param {?} e
     * @param {?} when
     * @return {?}
     */
    onSwipe(e, when) {
        if (this.disableSwiping === true) {
            return;
        }
        const /** @type {?} */ indexDirection = this._swipeService.swipe(e, when);
        // handle a failed swipe
        if (indexDirection === 0) {
            return;
        }
        else {
            this.onSlide(indexDirection, true);
        }
    }
    /**
     * \@description Redirect to current slide "href" if defined
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        const /** @type {?} */ currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];
        if (currentSlide && currentSlide.image.clickAction) {
            currentSlide.image.clickAction();
        }
        else if (currentSlide && currentSlide.image.href) {
            this.document.location.href = currentSlide.image.href;
        }
    }
    /**
     * \@description set the index to the desired index - 1 and simulate a right slide
     * @param {?} index
     * @return {?}
     */
    goToSlide(index) {
        const /** @type {?} */ beforeClickIndex = this.slideIndex;
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
    getSlideStyle(index) {
        const /** @type {?} */ slide = this.slides[index];
        if (slide.loaded) {
            return {
                "background-image": 'url(' + slide.image.url + ')',
                "background-size": slide.image.backgroundSize || this.backgroundSize,
                "background-position": slide.image.backgroundPosition || this.backgroundPosition,
                "background-repeat": slide.image.backgroundRepeat || this.backgroundRepeat
            };
        }
        else {
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
    exitFullScreen(e) {
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
    slide(indexDirection, isSwipe) {
        const /** @type {?} */ oldIndex = this.slideIndex;
        this.setSlideIndex(indexDirection);
        if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
        }
        if (indexDirection === 1) {
            this.slideRight(oldIndex, isSwipe);
        }
        else {
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
    setSlideIndex(indexDirection) {
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
    slideLeft(oldIndex, isSwipe) {
        if (isSwipe === true) {
            this.onSwipeLeft.emit(this.slideIndex);
        }
        else {
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
    slideRight(oldIndex, isSwipe) {
        if (isSwipe === true) {
            this.onSwipeRight.emit(this.slideIndex);
        }
        else {
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
    setSlides() {
        if (this.imageUrls) {
            if (this.checkCache() || this._initial === true) {
                this._initial = false;
                this._urlCache = Array.from(this.imageUrls);
                this.slides = [];
                if (this.lazyLoad === true) {
                    this.buildLazyLoadSlideArray();
                }
                else {
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
    buildLazyLoadSlideArray() {
        for (let /** @type {?} */ image of this.imageUrls) {
            this.slides.push({
                image: (typeof image === 'string' ? { url: null } : { url: null, href: image.href || '' }),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: false
            });
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
    buildSlideArray() {
        for (let /** @type {?} */ image of this.imageUrls) {
            this.slides.push({
                image: (typeof image === 'string' ? { url: image } : image),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: true
            });
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
    loadFirstSlide() {
        const /** @type {?} */ tmpIndex = this.slideIndex;
        const /** @type {?} */ tmpImage = this.imageUrls[tmpIndex];
        // if server side, we don't need to worry about the rest of the slides
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
            this.slides[tmpIndex].loaded = true;
            this._transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
        }
        else {
            const /** @type {?} */ firstSlideFromTransferState = this._transferState.get(FIRST_SLIDE_KEY, /** @type {?} */ (null));
            // if the first slide didn't finish loading on the server side, we need to load it
            if (firstSlideFromTransferState === null) {
                let /** @type {?} */ loadImage = new Image();
                loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                loadImage.addEventListener('load', () => {
                    this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                    this.slides[tmpIndex].loaded = true;
                });
            }
            else {
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
    loadRemainingSlides() {
        for (let /** @type {?} */ i = 0; i < this.slides.length; i++) {
            if (!this.slides[i].loaded) {
                new Promise((resolve) => {
                    const /** @type {?} */ tmpImage = this.imageUrls[i];
                    let /** @type {?} */ loadImage = new Image();
                    loadImage.addEventListener('load', () => {
                        this.slides[i].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                        this.slides[i].loaded = true;
                        resolve();
                    });
                    loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                });
            }
        }
    }
    /**
     * \@description Start or stop autoPlay, don't do it at all server side
     * @param {?=} stopAutoPlay
     * @return {?}
     */
    handleAutoPlay(stopAutoPlay) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            return;
        }
        if (stopAutoPlay === true || this.autoPlay === false) {
            if (this._autoplayIntervalId) {
                this._ngZone.runOutsideAngular(() => clearInterval(this._autoplayIntervalId));
                this._autoplayIntervalId = null;
            }
        }
        else if (!this._autoplayIntervalId) {
            this._ngZone.runOutsideAngular(() => {
                this._autoplayIntervalId = setInterval(() => {
                    if (!this.autoPlayWaitForLazyLoad || (this.autoPlayWaitForLazyLoad && this.slides[this.slideIndex].loaded)) {
                        this._ngZone.run(() => this.slide(1));
                    }
                }, this.autoPlayInterval);
            });
        }
    }
    /**
     * \@description Keep the styles up to date with the input
     * @return {?}
     */
    setStyles() {
        if (this.fullscreen) {
            this._renderer.setStyle(this.container.nativeElement, 'height', '100%');
            // Would be nice to make it configurable
            this._renderer.setStyle(this.container.nativeElement, 'background-color', 'white');
        }
        else {
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
    checkCache() {
        return !(this._urlCache.length === this.imageUrls.length && this._urlCache.every((cacheElement, i) => cacheElement === this.imageUrls[i]));
    }
    /**
     * \@description get the index for the slide to the left of the new slide
     * @param {?=} i
     * @return {?}
     */
    getLeftSideIndex(i) {
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
    getRightSideIndex(i) {
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
    trackByFn(index, slide) {
        return slide.image;
    }
}
SlideshowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'slideshow',
                template: `
    <!-- fullscreen bar -->
    <div [class.display-none]="!fullscreen"
         class="fs-container"
         (click)="exitFullScreen($event)">
      <i title="Back"
         class="arrow-exitfs prev"></i>
    </div>
    <div #container
         (touchstart)="onSwipe($event, 'start')"
         (touchend)="onSwipe($event, 'end')"
         class="slideshow-container"
         [class.slideshow-container-fs]="fullscreen">
      <!-- slides -->
      <a *ngFor="let slide of slides; index as i; trackBy: trackByFn"
         class="slides"
         href="{{slide?.image?.clickAction ? '#' : slide?.image?.href}}"
         title="{{slide?.image?.title}}"
         [ngStyle]="getSlideStyle(i)"
         [class.selected]="slide?.selected"
         [class.hide-slide]="!slide?.selected && !slide?.leftSide && !slide?.rightSide"
         [class.left-side]="slide?.leftSide"
         [class.right-side]="slide?.rightSide"
         [class.slide-in-left]="slide?.action === 'slideInLeft'"
         [class.slide-in-right]="slide?.action === 'slideInRight'"
         [class.slide-out-left]="slide?.action === 'slideOutLeft'"
         [class.slide-out-right]="slide?.action === 'slideOutRight'"
         [class.link]="slide?.image?.clickAction || slide?.image?.href"
         (click)="onClick($event)">
        <div class="loader"
             *ngIf="!slide?.loaded"></div>
        <div *ngIf="showCaptions && slide?.image?.caption"
             class="caption"
             [ngStyle]="{
               'color': captionColor,
               'background-color': captionBackground
              }"
             [innerHTML]="slide?.image?.caption">
        </div>
      </a>
      <!-- left arrow -->
      <div [class.display-none]="!this.showArrows"
           (click)="onSlide(-1)"
           class="arrow-container prev">
        <i #prevArrow
           title="Previous"
           class="arrow prev"></i>
      </div>
      <!-- right arrow -->
      <div [class.display-none]="!this.showArrows"
           (click)="onSlide(1)"
           class="arrow-container next">
        <i #nextArrow
           title="Next"
           class="arrow next"></i>
      </div>
      <!-- dots -->
      <ul class="slick-dots"
          *ngIf="showDots">
        <li *ngFor="let slide of slides; index as i; trackBy: trackByFn"
            (click)="goToSlide(i)"
            [class.slick-active]="slide.selected">
          <button type="button"
                  [attr.style]="safeStyleDotColor">
            {{i}}
          </button>
        </li>
      </ul>
    </div>
  `,
                styles: [`
    /*
     styles adapted from https://www.w3schools.com/w3css/4/w3.css
     arrow styles adapted from https://codepen.io/minustalent/pen/Frhaw
     */
    .display-none {
      display: none !important; }

    .fs-container {
      display: block;
      cursor: pointer;
      position: fixed;
      z-index: 1;
      top: 16px;
      left: 16px;
      width: 46px;
      height: 46px;
      text-align: center;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.2);
      -webkit-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out; }
      .fs-container:hover {
        background-color: rgba(0, 0, 0, 0.33); }
      .fs-container .arrow-exitfs {
        display: block;
        width: 30px;
        height: 30px;
        background: transparent;
        border-top: 2px solid #f2f2f2;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out; }
        .fs-container .arrow-exitfs.prev {
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
          position: relative;
          left: 18px;
          top: 18px; }
        .fs-container .arrow-exitfs:after {
          content: '';
          width: 30px;
          height: 30px;
          background: transparent;
          border-top: 2px solid #f2f2f2;
          -webkit-transform: rotate(90deg);
                  transform: rotate(90deg);
          position: absolute;
          left: -15px;
          top: -17px; }

    .slideshow-container.slideshow-container-fs {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%; }

    .slideshow-container {
      position: relative;
      display: block;
      margin: auto;
      height: 100%;
      width: 100%;
      overflow: hidden; }
      .slideshow-container .hide-slide {
        visibility: hidden;
        position: absolute;
        top: -100vw;
        left: -100vw;
        opacity: 0; }
      .slideshow-container .slides {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        visibility: visible;
        opacity: 1;
        display: block; }
        .slideshow-container .slides.selected {
          left: 0; }
        .slideshow-container .slides.left-slide {
          left: -100%; }
        .slideshow-container .slides.right-slide {
          left: 100%; }
        .slideshow-container .slides.slide-in-left {
          left: 0;
          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-in-right {
          left: 0;
          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-out-left {
          left: -100%;
          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-out-right {
          left: 100%;
          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.link {
          cursor: pointer; }
        .slideshow-container .slides:not(.link) {
          cursor: default; }
      .slideshow-container .caption {
        position: absolute;
        bottom: 0;
        padding: 10px;
        width: 100%; }
      .slideshow-container .arrow-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        position: absolute;
        top: 0;
        height: 100%;
        width: auto;
        cursor: pointer;
        background-size: 100%;
        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
        background-image: linear-gradient(transparent, transparent);
        z-index: 100;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none; }
        .slideshow-container .arrow-container:before {
          display: block;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: 100%;
          z-index: -100;
          -webkit-transition: opacity 0.45s;
          transition: opacity 0.45s; }
        .slideshow-container .arrow-container.prev {
          left: 0; }
          .slideshow-container .arrow-container.prev:before {
            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));
            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));
            content: ''; }
        .slideshow-container .arrow-container.next {
          right: 0; }
          .slideshow-container .arrow-container.next:before {
            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));
            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));
            content: ''; }
        .slideshow-container .arrow-container .arrow {
          display: block;
          margin: auto;
          width: 30px;
          height: 30px;
          background: transparent;
          border-top: 2px solid #f2f2f2;
          border-left: 2px solid #f2f2f2;
          -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none; }
          .slideshow-container .arrow-container .arrow:before {
            display: block;
            height: 200%;
            width: 200%;
            margin-left: -50%;
            margin-top: -50%;
            content: "";
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg); }
          .slideshow-container .arrow-container .arrow.prev {
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: relative;
            left: 20px;
            margin-right: 10px; }
          .slideshow-container .arrow-container .arrow.next {
            -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
            position: relative;
            right: 20px;
            margin-left: 10px; }
      .slideshow-container .slick-dots {
        display: block;
        bottom: 15px;
        z-index: 1;
        text-align: center;
        position: absolute;
        padding: 0;
        left: 0;
        right: 0;
        margin: 0 auto; }
        .slideshow-container .slick-dots li {
          display: inline;
          margin: 0;
          padding: 0; }
          .slideshow-container .slick-dots li button {
            border: none;
            background: none;
            text-indent: -9999px;
            font-size: 0;
            width: 20px;
            height: 20px;
            outline: none;
            position: relative;
            z-index: 1;
            cursor: pointer; }
            .slideshow-container .slick-dots li button:before {
              content: '';
              width: 4px;
              height: 4px;
              background: var(--dot-color, #FFF);
              border-radius: 4px;
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
                      transform: translate(-50%, -50%);
              opacity: .7;
              -webkit-transition: all .5s ease-out;
              transition: all .5s ease-out; }
          .slideshow-container .slick-dots li.slick-active button:before {
            -webkit-transform: translate(-50%, -50%) scale(1.4);
                    transform: translate(-50%, -50%) scale(1.4);
            opacity: 1; }

    @media screen and (min-width: 768px) {
      .slideshow-container .arrow-container:hover:before {
        opacity: 1; }
      .slideshow-container .arrow-container:hover .arrow {
        border-width: 4px; }
      .slideshow-container .arrow-container .arrow:hover {
        border-width: 4px; } }

    @-webkit-keyframes slideInRight {
      0% {
        left: -100%; }
      100% {
        left: 0; } }

    @keyframes slideInRight {
      0% {
        left: -100%; }
      100% {
        left: 0; } }

    @-webkit-keyframes slideInLeft {
      0% {
        left: 100%; }
      100% {
        left: 0; } }

    @keyframes slideInLeft {
      0% {
        left: 100%; }
      100% {
        left: 0; } }

    @-webkit-keyframes slideOutRight {
      0% {
        left: 0; }
      100% {
        left: -100%; } }

    @keyframes slideOutRight {
      0% {
        left: 0; }
      100% {
        left: -100%; } }

    @-webkit-keyframes slideOutLeft {
      0% {
        left: 0; }
      100% {
        left: 100%; } }

    @keyframes slideOutLeft {
      0% {
        left: 0; }
      100% {
        left: 100%; } }

    .loader {
      position: absolute;
      left: 50%;
      margin-left: -20px;
      top: 50%;
      margin-top: -20px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #555;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 1s linear infinite;
              animation: spin 1s linear infinite; }

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }

    @keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }
  `]
            },] },
];
/**
 * @nocollapse
 */
SlideshowComponent.ctorParameters = () => [
    { type: SwipeService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
];
SlideshowComponent.propDecorators = {
    'imageUrls': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minHeight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'arrowSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showArrows': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disableSwiping': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlayInterval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'stopAutoPlayOnSlide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlayWaitForLazyLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'debug': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundRepeat': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showDots': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'dotColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showCaptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'captionColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'captionBackground': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lazyLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hideOnNoSlides': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fullscreen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onSlideLeft': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSlideRight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSwipeLeft': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSwipeRight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onFullscreenExit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onIndexChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] },],
    'prevArrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['prevArrow',] },],
    'nextArrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nextArrow',] },],
};

class SlideshowModule {
}
SlideshowModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"]
                ],
                declarations: [
                    SlideshowComponent
                ],
                exports: [
                    SlideshowComponent
                ],
                providers: [
                    SwipeService
                ]
            },] },
];
/**
 * @nocollapse
 */
SlideshowModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-simple-slideshow.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
  \************************************************************************************************/
/*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return BsComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class BsComponentRef {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class ContentRef {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    constructor(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef, 
    /* tslint:disable-next-line: no-any */
    componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ComponentLoader {
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
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
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
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        /* tslint:disable-next-line: no-unnecessary-type-assertion */
        this._elementRef = ((/** @type {?} */ (opts.target))) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */
            const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                const selectedElement = document.querySelector(this.container) ||
                    document.querySelector(this.containerDefaultSelector);
                selectedElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
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
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        const componentEl = this._componentRef.location.nativeElement;
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
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
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
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        /** @type {?} */
        const hide = (this._listenOpts.hide = (/**
         * @return {?}
         */
        () => listenOpts.hide ? listenOpts.hide() : void this.hide()));
        /** @type {?} */
        const show = (this._listenOpts.show = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        }));
        /** @type {?} */
        const toggle = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        });
        this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    /**
     * @return {?}
     */
    _removeGlobalListener() {
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
    attachInline(vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    /**
     * @return {?}
     */
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: (/**
                     * @return {?}
                     */
                    () => this._listenOpts.hide())
                });
            }));
        }
        if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: (/**
                 * @return {?}
                 */
                () => this._listenOpts.hide())
            });
        }
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this.onShown.subscribe((/**
         * @return {?}
         */
        () => {
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        }));
        this._zoneSubscription = this._ngZone.onStable.subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._componentRef) {
                return;
            }
            this._posService.calcPosition();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribePositioning() {
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
    _getContentRef(
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
                const _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            const modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            /** @type {?} */
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
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
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
];


//# sourceMappingURL=ngx-bootstrap-component-loader.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \**************************************************************************/
/*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalRef {
    constructor() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
}
BsModalRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBackdropOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalOptions {
}
ModalOptions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @type {?} */
const modalConfigDefaults = {
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
const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }), this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
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
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.bsModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            this.bsModalService.hide(this.level);
            this.isModalHiding = false;
        }), this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true'
                }
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ModalContainerComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
        // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                host: { class: CLASS_NAME.BACKDROP }
            }] }
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRANSITION_DURATION = 300;
/** @type {?} */
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    constructor(_element, _viewContainerRef, _renderer, clf) {
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
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
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
    ngOnDestroy() {
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
    ngOnInit() {
        this._config = this._config || this.getConfig();
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._config.show) {
                this.show();
            }
        }), 0);
    }
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
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
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            this.showElement();
        }));
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout((/**
             * @return {?}
             */
            () => this.hideModal()), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
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
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        /** @type {?} */
        const transitionComplete = (/**
         * @return {?}
         */
        () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        });
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            if (!this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        }));
    }
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            const callbackRemove = (/**
             * @return {?}
             */
            () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            });
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    removeBackdrop() {
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
    focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        /** @type {?} */
        const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
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
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @protected
     * @return {?}
     */
    setScrollbar() {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    resetScrollbar() {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[bsModal]',
                exportAs: 'bs-modal'
            },] }
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];
ModalDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     */
    constructor(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
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
    show(content, config) {
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
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(level);
            this.removeLoaders(level);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = (/**
         * @return {?}
         */
        () => {
            modalContainerRef.instance.hide();
        });
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        });
        return bsModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        /** @type {?} */
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
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
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        (loader, i) => {
            loader.instance.level = i + 1;
        }));
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @return {?}
         */
        () => {
            to.emit(this.lastDismissReason);
        }));
    }
}
BsModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-modal.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
  \**************************************************************************************/
/*! exports provided: Positioning, PositioningService, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




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
    }
    // NOTE: 1 DOM access here
    /** @type {?} */
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const css = window.getComputedStyle(element, null);
    return property ? css[(/** @type {?} */ (property))] : css;
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
    }
    // Firefox want us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
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
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
const isIE10 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && /MSIE 10/.test(((/** @type {?} */ (navigator))).userAgent));
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
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    let offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    let sibling;
    while (offsetParent === noOffsetParent
        && element.nextElementSibling
        && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
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
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
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
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    /* tslint:disable-next-line: no-bitwise */
    /** @type {?} */
    const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    /** @type {?} */
    const start = order ? element1 : element2;
    /** @type {?} */
    const end = order ? element2 : element1;
    // Get common ancestor container
    /** @type {?} */
    const range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    const { commonAncestorContainer } = range;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    /** @type {?} */
    const element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
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
    const sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ (`border${sideA}Width`))]) +
        parseFloat(styles[(/** @type {?} */ (`border${sideB}Width`))]));
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
    return Math.max(((/** @type {?} */ (body)))[`offset${axis}`], ((/** @type {?} */ (body)))[`scroll${axis}`], ((/** @type {?} */ (html)))[`client${axis}`], ((/** @type {?} */ (html)))[`offset${axis}`], ((/** @type {?} */ (html)))[`scroll${axis}`], isIE(10)
        ? (parseInt(((/** @type {?} */ (html)))[`offset${axis}`], 10) +
            parseInt(computedStyle[(/** @type {?} */ (`margin${axis === 'Height' ? 'Top' : 'Left'}`))], 10) +
            parseInt(computedStyle[(/** @type {?} */ (`margin${axis === 'Height' ? 'Bottom' : 'Right'}`))], 10))
        : 0);
}
/**
 * @param {?} document
 * @return {?}
 */
function getWindowSizes(document) {
    /** @type {?} */
    const body = document.body;
    /** @type {?} */
    const html = document.documentElement;
    /** @type {?} */
    const computedStyle = isIE(10) && getComputedStyle(html);
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
function getScroll(element, side = 'top') {
    /** @type {?} */
    const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    /** @type {?} */
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        const html = element.ownerDocument.documentElement;
        /** @type {?} */
        const scrollingElement = element.ownerDocument.scrollingElement || html;
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
    return Object.assign({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
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
    let rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            /** @type {?} */
            const scrollTop = getScroll(element, 'top');
            /** @type {?} */
            const scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) {
        return undefined;
    }
    /** @type {?} */
    const result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    /** @type {?} */
    const sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    /** @type {?} */
    const width = sizes.width || element.clientWidth || result.right - result.left;
    /** @type {?} */
    const height = sizes.height || element.clientHeight || result.bottom - result.top;
    /** @type {?} */
    let horizScrollbar = element.offsetWidth - width;
    /** @type {?} */
    let vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        const styles = getStyleComputedProperty(element);
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
function includeScroll(rect, element, subtract = false) {
    /** @type {?} */
    const scrollTop = getScroll(element, 'top');
    /** @type {?} */
    const scrollLeft = getScroll(element, 'left');
    /** @type {?} */
    const modifier = subtract ? -1 : 1;
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
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    /** @type {?} */
    const isIE10 = isIE(10);
    /** @type {?} */
    const isHTML = parent.nodeName === 'HTML';
    /** @type {?} */
    const childrenRect = getBoundingClientRect(children);
    /** @type {?} */
    const parentRect = getBoundingClientRect(parent);
    /** @type {?} */
    const scrollParent = getScrollParent(children);
    /** @type {?} */
    const styles = getStyleComputedProperty(parent);
    /** @type {?} */
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    /** @type {?} */
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    /** @type {?} */
    let offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        /** @type {?} */
        const marginTop = parseFloat(styles.marginTop);
        /** @type {?} */
        const marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
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
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    /** @type {?} */
    const html = element.ownerDocument.documentElement;
    /** @type {?} */
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    /** @type {?} */
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    /** @type {?} */
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    /** @type {?} */
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    /** @type {?} */
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    /** @type {?} */
    const offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width,
        height
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
    const nodeName = element.nodeName;
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
    let el = element.parentElement;
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
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    // NOTE: 1 DOM access here
    /** @type {?} */
    let boundaries = { top: 0, left: 0 };
    /** @type {?} */
    const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        /** @type {?} */
        let boundariesNode;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        /** @type {?} */
        const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
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
function getArea({ width, height }) {
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
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'bottom', 'right', 'left'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    const rects = {
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
    const sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => (Object.assign({ key }, rects[key], { area: getArea(rects[key]) }))))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => b.area - a.area));
    /** @type {?} */
    let filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    ({ width, height }) => {
        return width >= target.clientWidth
            && height >= target.clientHeight;
    }));
    filteredAreas = filteredAreas.filter((/**
     * @param {?} position
     * @return {?}
     */
    (position) => {
        return allowedPositions
            .some((/**
         * @param {?} allowedPosition
         * @return {?}
         */
        (allowedPosition) => {
            return allowedPosition === position.key;
        }));
    }));
    /** @type {?} */
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    const variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${computedPlacement}`);
    return computedPlacement + (variation ? `-${variation}` : '');
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
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, (/**
     * @param {?} matched
     * @return {?}
     */
    matched => ((/** @type {?} */ (hash)))[matched]));
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
    }
    else if (variation === 'left') {
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
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const styles = window.getComputedStyle(element);
    /** @type {?} */
    const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    /** @type {?} */
    const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
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
function getReferenceOffsets(target, host, fixedPosition = null) {
    /** @type {?} */
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
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
    const placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    const mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    const secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    const measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
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
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
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
    const target = data.instance.target;
    /** @type {?} */
    let containerClass = target.className;
    if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
        containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
        containerClass = containerClass.replace(/\sauto/g, ` ${data.placement}`);
        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
        }
        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
        }
    }
    containerClass = containerClass.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`);
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
    Object.keys(styles).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    (prop) => {
        /** @type {?} */
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    }));
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
    /** @type {?} */
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    const isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    /** @type {?} */
    const len = isVertical ? 'height' : 'width';
    /** @type {?} */
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    const side = sideCapitalized.toLowerCase();
    /** @type {?} */
    const altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    const opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < ((/** @type {?} */ (targetOffsets)))[side]) {
        ((/** @type {?} */ (targetOffsets)))[side] -=
            ((/** @type {?} */ (targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) > ((/** @type {?} */ (targetOffsets)))[opSide]) {
        ((/** @type {?} */ (targetOffsets)))[side] +=
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) - Number(((/** @type {?} */ (targetOffsets)))[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    /** @type {?} */
    const center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    /** @type {?} */
    const css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    /** @type {?} */
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    /** @type {?} */
    let sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
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
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    let placement = data.placement.split(' ')[0];
    /** @type {?} */
    let variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    const offsetsHost = data.offsets.host;
    /** @type {?} */
    const target = data.instance.target;
    /** @type {?} */
    const host = data.instance.host;
    /** @type {?} */
    const adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    /** @type {?} */
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    (step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
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
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)
        && !position.match(/^(left|right|top|bottom)*\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
    }
    /** @type {?} */
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    let placement = position.match(/auto\s(left|right|top|bottom)/)
        ? position.split(' ')[1] || 'auto'
        : position;
    /** @type {?} */
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
    return {
        options,
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
        placement,
        placementAuto
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
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    const transformProp = 'transform';
    /** @type {?} */
    const targetStyles = data.instance.target.style;
    // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    const order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    const check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            /** @type {?} */
            let value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            /** @type {?} */
            const mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            let value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    /** @type {?} */
    let side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target, ((/** @type {?} */ (check)))[side](placement));
    }));
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
    const placement = data.placement;
    /** @type {?} */
    const basePlacement = placement.split(' ')[0];
    /** @type {?} */
    const shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        const { host, target } = data.offsets;
        /** @type {?} */
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        const side = isVertical ? 'left' : 'top';
        /** @type {?} */
        const measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        const shiftOffsets = {
            start: { [side]: host[side] },
            end: {
                [side]: host[side] + host[measurement] - target[measurement]
            }
        };
        data.offsets.target = Object.assign({}, target, ((/** @type {?} */ (shiftOffsets)))[shiftvariation]);
    }
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
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
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        (modifiedData, modifier) => modifier(modifiedData)), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
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
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    /** @type {?} */
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
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
class PositioningService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory
     * @param {?} platformId
     */
    constructor(ngZone, rendererFactory, platformId) {
        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', { passive: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', { passive: true }), 
                /* tslint:disable-next-line: deprecation */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), this.update$$);
                this.triggerEvent$.subscribe((/**
                 * @return {?}
                 */
                () => {
                    if (this.isDisabled) {
                        return;
                    }
                    this.positionElements
                        /* tslint:disable-next-line: no-any */
                        .forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    (positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
    }
    /**
     * @return {?}
     */
    get event$() {
        return this.triggerEvent$;
    }
    /**
     * @return {?}
     */
    disable() {
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    enable() {
        this.isDisabled = false;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @return {?}
     */
    calcPosition() {
        this.update$$.next();
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
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
}


//# sourceMappingURL=ngx-bootstrap-positioning.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js ***!
  \**************************************************************************/
/*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEscClick", function() { return registerEscClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger {
    /**
     * @param {?} open
     * @param {?=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    isManual() {
        return this.open === 'manual' || this.close === 'manual';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    /** @type {?} */
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => trigger.split(':')))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => {
        /** @type {?} */
        const alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    const manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => triggerPair.isManual()));
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
    const parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    const parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    const target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    // lazy listeners registration
    /** @type {?} */
    const _registerHide = [];
    /** @type {?} */
    const registerHide = (/**
     * @return {?}
     */
    () => {
        // add hide listeners to unregister array
        _registerHide.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        (fn) => listeners.push(fn())));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        /** @type {?} */
        const useToggle = trigger.open === trigger.close;
        /** @type {?} */
        const showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push((/**
             * @return {?}
             */
            () => renderer.listen(target, trigger.close, options.hide)));
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        () => showFn(registerHide))));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
    });
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
    return renderer.listen('document', 'click', (/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
            return undefined;
        }
        options.hide();
    }));
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
    return renderer.listen('document', 'keyup.esc', (/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
            return undefined;
        }
        options.hide();
    }));
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
const win = (typeof window !== 'undefined' && window) || (/** @type {?} */ ({}));
/** @type {?} */
const document$1 = win.document;
/** @type {?} */
const location = win.location;
/** @type {?} */
const gc = win.gc ? (/**
 * @return {?}
 */
() => win.gc()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
const performance = win.performance ? win.performance : null;
/** @type {?} */
const Event = win.Event;
/** @type {?} */
const MouseEvent = win.MouseEvent;
/** @type {?} */
const KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
const EventTarget = win.EventTarget;
/** @type {?} */
const History = win.History;
/** @type {?} */
const Location = win.Location;
/** @type {?} */
const EventListener = win.EventListener;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    const spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    const rect = spanEl.getBoundingClientRect();
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
}
// todo: in ngx-bootstrap, bs4 will became a default one
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
class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const node = {
            value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                const currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                const currentNextNode = currentPreviousNode.next;
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
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            const removedNode = this.getNode(position);
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
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        const node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        /** @type {?} */
        let current = this.head;
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        /* tslint:disable-next-line: no-any*/
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg);
        }));
        return this.length;
    }
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg, 0);
        }));
        return this.length;
    }
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let position = 0;
        for (let index = 0; index < this.length; index++) {
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
    some(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = false;
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
    every(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = true;
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
    toString() {
        return '[Linked List]';
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
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
    findIndex(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
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
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @protected
     * @return {?}
     */
    createInternalArrayRepresentation() {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const outArray = [];
        /** @type {?} */
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}

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
    const sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */
    function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        const _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            /**
             * @return {?}
             */
            get() {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                /** @type {?} */
                const prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Utils {
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    static reflow(element) {
        /* tslint:disable-next-line: no-any */
        ((/**
         * @param {?} bs
         * @return {?}
         */
        (bs) => bs))(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _messagesHash = {};
/** @type {?} */
const _hideMsg = typeof console === 'undefined' || !('warn' in console);
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
}


//# sourceMappingURL=ngx-bootstrap-utils.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-card\">\n    <div class=\"custom_form\">\n        <form [formGroup]='profile' (ngSubmit)='update()'>\n            <div class=\"text-center\">\n                <div class=\"file_input\">\n                    <img [src]=\"url\" alt=\"\">\n                </div>\n                <label for=\"\" class=\"custom_label upload-image\">\n                    <input type=\"file\" accept=\"image/jpeg,image/png\" (change)=\"readUrl($event)\">\n                    {{'CHNGPIC'| translate}}</label>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/edit-user.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"User Name\" class=\"form-control\" formControlName=\"name\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.name.dirty|| getControl.name.touched) && getControl.name.errors\">\n                <p class=\"color\" *ngIf=\"getControl.name.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color\" *ngIf=\"!getControl.name.errors.required && getControl.name.errors.invalidName\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/email.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'EMAIL'| translate | titlecase}}\" class=\"form-control\"\n                    formControlName=\"email\" maxlength=\"100\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.email.dirty|| getControl.email.touched) && getControl.email.errors\">\n                <p class=\"color\" *ngIf=\"getControl.email.errors.required\">{{'LOGINEMAIL'| translate}}</p>\n                <p class=\"color\"\n                    *ngIf=\"!getControl.email.errors.required && getControl.email.errors.invalidEmailAddress\">\n                    {{'LOGINVALIDEMAIL'| translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img phone\"><img src=\"assets/images/mobile.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"{{'PHONE'| translate}}\"\n                    onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control\"\n                    formControlName=\"phone\" maxlength=\"12\">\n            </mat-form-field>\n            <div *ngIf=\"(submitted || getControl.phone.dirty|| getControl.phone.touched) && getControl.phone.errors\">\n                <p class=\"color\" *ngIf=\"getControl.phone.errors.required\">{{'PHNREQ'|translate}}</p>\n                <p class=\"color\" *ngIf=\"!getControl.phone.errors.required && getControl.phone.errors.Invalidphone \">{{'PHNLNGTH'|translate}}</p>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/location.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Location\" class=\"form-control\" #search autocorrect=\"off\"\n                    autocapitalize=\"off\" spellcheck=\"off\" formControlName=\"location\">\n                <div\n                    *ngIf=\"(submitted || getControl.location.dirty|| getControl.location.touched) && getControl.location.errors\">\n                    <p class=\"color\" *ngIf=\"getControl.location.errors.required\">{{'LOCREQ' | translate}}</p>\n                </div>\n                <!-- <img class=\"full_width\" src=\"assets/images/maps.png\" alt=\"\"> -->\n                <div class=\"map full_width\">\n                    <agm-map [latitude]=\"location.lat\" [longitude]=\"location.lng\" [(zoom)]=\"location.zoom\"\n                        [zoomControl]=\"true\">\n                        <agm-marker [latitude]=\"location.lat\" [longitude]=\"location.lng\"></agm-marker>\n                    </agm-map>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/description.png\" alt=\"envelope\"></span>\n                <textarea matInput placeholder=\"{{'DESCRIPTION'| translate}}\" class=\"form-control\"\n                    formControlName=\"description\" maxlength=\"500\"></textarea>\n            </mat-form-field>\n            <div\n                *ngIf=\"(submitted || getControl.description.dirty|| getControl.description.touched) && getControl.description.errors\">\n                <p class=\"color\" *ngIf=\"getControl.description.errors.required\">{{'DESCREQ' | translate}}</p>\n                <p class=\"color\" *ngIf=\"getControl.description.errors.minlength \">{{'DESCLNGTH'| translate}}</p>\n            </div>\n            <div class=\"work_gallery\">\n                <label for=\"\">{{'WORKGALLERY'| translate}}</label>\n                <div class=\"form-group form-primary custom_formgroup\">\n                    <input type=\"file\" class=\"custom_upload1\" multiple\n                        accept=\"image/x-png,image/gif,image/jpeg,image/jpg\" (change)=\"readUrlMultipleImage($event)\"\n                        formControlName='multiImage'>\n\n                    <label class=\"detail_content\"><a class=\"margin_top\"\n                            *ngFor=\"let image of salonImageUrlArray; index as i\" (click)=\"openModal(template)\">\n                            <img class=\"file_upload2\" [src]=\"image\" alt=\"Upload\">\n                            <span (click)=\"removeSalonImages(image,i)\">x</span> </a>\n                        <img class=\"file_upload1\" src=\"assets/images/add-edit.png\" alt=\"Upload\">\n                    </label>\n                    <br>\n                </div>\n            </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/web.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Website\" class=\"form-control\" formControlName=\"website\">\n            </mat-form-field>\n            <div\n            *ngIf=\"(submitted || getControl.website.dirty|| getControl.website.touched) && getControl.website.errors\">\n            <p class=\"color\" *ngIf=\"getControl.website.errors.invalidWebsite \">{{'WBSTINVLD' | translate}}</p>\n        </div>\n            <mat-form-field>\n                <span class=\"email-img pass\"><img src=\"assets/images/service.png\" alt=\"envelope\"></span>\n                <mat-label>Service At</mat-label>\n                <mat-select formControlName='serviceat'>\n                    <mat-option *ngFor=\"let service of services\" [value]=\"service.value\">\n                        {{service.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <a [routerLink]=\"['/staff']\">\n                <mat-form-field>\n                    <span class=\"email-img pass\"><img src=\"assets/images/edit-staff.png\" alt=\"envelope\"></span>\n                    <input matInput placeholder=\"{{'MANAGESTAFF'| translate}}\" class=\"form-control cursor\" disabled>\n                </mat-form-field>\n            </a>\n            <a [routerLink]=\"['/profile/business-hours']\">\n                <mat-form-field>\n                    <span class=\"email-img pass\"><img src=\"assets/images/time.png\" alt=\"envelope\"></span>\n                    <input matInput placeholder=\"{{'BUSINESSHOURS'| translate}}\" class=\"form-control cursor\" disabled>\n                </mat-form-field>\n            </a>\n\n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-submit\">Save</button>\n            </div>\n        </form>\n    </div>\n    <!-- <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        \n                     \n                        <ng-container matColumnDef=\"No.\">\n                          <th mat-header-cell *matHeaderCellDef> No. </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{1}} </td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"name\">\n                          <th mat-header-cell *matHeaderCellDef> Name </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.cat_name}} </td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"price\">\n                          <th mat-header-cell *matHeaderCellDef> Price </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                        </ng-container>\n                      \n                        \n                        <ng-container matColumnDef=\"discount_price\">\n                          <th mat-header-cell *matHeaderCellDef> Discount </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.discount_price}} </td>\n                        </ng-container>\n                      \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                      </table> -->\n    <!-- <button mat-raised-button (click)=\"openModal(template)\">Pick one</button> -->\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-content px-5\">\n        <h4 class=\"mt-3 text-left\">Salon Images</h4>\n        <div class=\"modal-body px-0\">\n            <slideshow #slideshow [imageUrls]=\"slide\" [height]=\"height\" [minHeight]=\"'200px'\" [autoPlay]=\"false\"\n                [showArrows]=\"true\" [lazyLoad]=\"true\" [backgroundSize]=\"'auto'\" [imageUrls]=\"imageSources\"\n                [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\"></slideshow>\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/home/profile/editprofile/editprofile-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/profile/editprofile/editprofile-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EditprofileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileRoutingModule", function() { return EditprofileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprofile.component */ "./src/app/home/profile/editprofile/editprofile.component.ts");




const routes = [{
        path: '', component: _editprofile_component__WEBPACK_IMPORTED_MODULE_3__["EditprofileComponent"]
    }];
let EditprofileRoutingModule = class EditprofileRoutingModule {
};
EditprofileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditprofileRoutingModule);



/***/ }),

/***/ "./src/app/home/profile/editprofile/editprofile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/profile/editprofile/editprofile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file_input img {\n  border-radius: 50%;\n  height: 153px;\n  width: 153px;\n  border: 5px solid whitesmoke;\n}\n\nimg.file_upload2 {\n  height: 100px !important;\n  width: 100px !important;\n  margin: 5px !important;\n  margin-left: 0px !important;\n  border: 5px solid whitesmoke;\n  position: relative;\n  border-radius: 7px;\n}\n\n.custom_upload1 {\n  position: absolute;\n  width: 10%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  text-indent: -100px;\n}\n\n.detail_content a.btn {\n  position: relative;\n  background: #f96ab3;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  padding: 5px 20px;\n  box-shadow: 2px 2px 7px #f96ab3;\n  margin-bottom: 15px;\n}\n\n.detail_content a.btn span {\n  position: absolute;\n  top: -9px;\n  right: -8px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.detail_content a.margin_top {\n  position: relative;\n  color: #fff !important;\n  margin: 0;\n  font-size: 17px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_content a.margin_top span {\n  cursor: pointer;\n  position: absolute;\n  right: 7px;\n  background: #e42525;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 7px;\n}\n\n.upload-image input[type=file] {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.upload-image {\n  position: relative;\n  height: 100%;\n  display: inline-block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9wcm9maWxlL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURHQTtFQUFpQix3QkFBQTtFQUF5Qix1QkFBQTtFQUEwQixzQkFBQTtFQUF3QiwyQkFBQTtFQUE2Qiw0QkFBQTtFQUVySCxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FESEE7RUFBZ0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFlBQUE7RUFBYSxlQUFBO0VBQWdCLFVBQUE7RUFBVyxtQkFBQTtBQ1l0Rjs7QURWQTtFQUFzQixrQkFBQTtFQUFrQixtQkFBQTtFQUFvQixzQkFBQTtFQUF3QixTQUFBO0VBQVUsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQiwrQkFBQTtFQUFnQyxtQkFBQTtBQ3NCbkw7O0FEckJBO0VBQTJCLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxXQUFBO0VBQVksbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGdCQUFBO0FDaUNwSjs7QUQvQkE7RUFBNkIsa0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsU0FBQTtFQUFVLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsbUJBQUE7QUN3Q3BIOztBRHZDQTtFQUFtQyxlQUFBO0VBQW1CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxtQkFBQTtFQUFvQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsaUJBQUE7QUNvRHJMOztBRGxEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDcURKOztBRGxEQTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNvREoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2ZpbGUvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZV9pbnB1dCBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTUzcHg7XG4gICAgd2lkdGg6IDE1M3B4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbi8vIGltZy5maWxlX3VwbG9hZDF7d2lkdGg6MTAlfVxuaW1nLmZpbGVfdXBsb2FkMntoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICBtYXJnaW46IDVweCAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7IGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICM4ODg4ODg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDt9XG4uY3VzdG9tX3VwbG9hZDF7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMCU7aGVpZ2h0OiAxMDAlO2N1cnNvcjogcG9pbnRlcjtvcGFjaXR5OiAwO3RleHQtaW5kZW50OiAtMTAwcHg7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG57cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDogI2Y5NmFiMztjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBtYXJnaW46IDA7Zm9udC1zaXplOiAxN3B4O21hcmdpbi1yaWdodDogMTVweDtwYWRkaW5nOiA1cHggMjBweDtib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEuYnRuIHNwYW57cG9zaXRpb246IGFic29sdXRlO3RvcDogLTlweDtyaWdodDogLThweDtiYWNrZ3JvdW5kOiAjZTQyNTI1O2hlaWdodDogMjBweDt3aWR0aDogMjBweDtib3JkZXItcmFkaXVzOiA1MCU7Zm9udC1zaXplOiAxM3B4O2ZvbnQtd2VpZ2h0OiA2MDA7fVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5tYXJnaW5fdG9we3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IG1hcmdpbjogMDtmb250LXNpemU6IDE3cHg7bWFyZ2luLXJpZ2h0OiAxNXB4O21hcmdpbi1ib3R0b206IDE1cHg7fVxuLmRldGFpbF9jb250ZW50IGEubWFyZ2luX3RvcCBzcGFueyBjdXJzb3I6IHBvaW50ZXI7ICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiA3cHg7YmFja2dyb3VuZDogI2U0MjUyNTtoZWlnaHQ6IDIwcHg7d2lkdGg6IDIwcHg7Ym9yZGVyLXJhZGl1czogNTAlO2ZvbnQtc2l6ZTogMTNweDtmb250LXdlaWdodDogNjAwO3BhZGRpbmctbGVmdDogN3B4O31cblxuLnVwbG9hZC1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnVwbG9hZC1pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLy8gIC5wcm9maWxlICB7XG4vLyAgICAgZGlzcGxheTpub25lO1xuLy8gICAgIG1hcmdpbjoxMHB4O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgICsgbGFiZWwge1xuLy8gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuLy8gICAgIG1hcmdpbjoyMHB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAzMnB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4vLyAgICAgYm9yZGVyOnNvbGlkIDFweCAjNjY2Rjc3O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICBjb2xvcjojNjY2Rjc3O1xuLy8gICAgIH1cbi8vICAgICAgLnByb2ZpbGUgOmFjdGl2ZSArIGxhYmVsIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzJENkM3QTtcbi8vICAgICBjb2xvcjojRkZGRkZGO1xuLy8gICAgIH1cblxuIiwiLmZpbGVfaW5wdXQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE1M3B4O1xuICB3aWR0aDogMTUzcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbmltZy5maWxlX3VwbG9hZDIge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uY3VzdG9tX3VwbG9hZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LWluZGVudDogLTEwMHB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmOTZhYjM7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDdweCAjZjk2YWIzO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsX2NvbnRlbnQgYS5idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOXB4O1xuICByaWdodDogLThweDtcbiAgYmFja2dyb3VuZDogI2U0MjUyNTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxfY29udGVudCBhLm1hcmdpbl90b3Agc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZTQyNTI1O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi51cGxvYWQtaW1hZ2UgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51cGxvYWQtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/profile/editprofile/editprofile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/profile/editprofile/editprofile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http-request.service */ "./src/app/shared/service/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/helper.service */ "./src/app/shared/service/helper.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/validation-service */ "./src/app/shared/service/validation-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/message.service */ "./src/app/shared/service/message.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/error.service */ "./src/app/shared/service/error.service.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");













let EditprofileComponent = class EditprofileComponent {
    constructor(httpService, router, helper, mapsApiLoader, zone, messageService, modalService, errorserv, trns) {
        this.httpService = httpService;
        this.router = router;
        this.helper = helper;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.messageService = messageService;
        this.modalService = modalService;
        this.errorserv = errorserv;
        this.trns = trns;
        this.services = [
            { value: '1', viewValue: 'Salon' },
            { value: '2', viewValue: 'Home' },
            { value: '3', viewValue: 'Both' },
        ];
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
    ngOnInit() {
        this.salonid = localStorage.getItem('salonid');
        this.searchPlace();
        this.getUserProfile();
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].namevalidator
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].validateEmail
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].phonevalidator,
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(500)
            ]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                src_app_shared_service_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].validateWebsite
            ]),
            multiImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            serviceat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
    }
    update() {
        this.submitted = true;
        // return false
        this.formData = new FormData();
        if (this.profile.valid) {
            if (this.profileImage)
                this.formData.append('salon_logo', this.profileImage, this.profileImage.name);
            for (let i = 0; i < this.salonImageArray.length; i++) {
                this.formData.append('salon_imgs', this.salonImageArray[i]);
            }
            if (this.deletedImageArray.length)
                this.formData.append('del_imgs', JSON.stringify(this.deletedImageArray));
            this.formData.append('name', this.profile.value.name);
            this.formData.append('email', this.profile.value.email);
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
            this.httpService.getRequest('PUT', 'EDIT', this.formData, '')
                .subscribe((response) => {
                if (response.status === 1) {
                    this.submitted = true;
                    localStorage.setItem('salon', JSON.stringify({ name: this.profile.value.name, logo: response.res.logo ? response.res.logo : this.detail.logo }));
                    this.messageService.sendMessage('profile changed');
                    this.router.navigateByUrl('/profile')
                        .then(() => {
                        this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('SALONSUCCESS'));
                    });
                }
                else {
                    if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(response.err)) {
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
    readUrlMultipleImage(event) {
        var imageData = this.helper.checkImageValidationMultiple(event);
        if (imageData == true) {
            let files = event.target.files;
            if (files.length) {
                for (let file of files) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        this.salonImageUrlArray.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                    this.salonImageArray.push(file);
                }
            }
        }
    }
    removeSalonImages(value, itemIndex) {
        this.salonImageUrlArray = this.salonImageUrlArray.filter((item, index) => {
            if ((index == itemIndex) && item.includes("https://tieimg.s3.me-south-1.amazonaws.com")) {
                let image = item.split("/").pop();
                this.deletedImageArray.push(image);
            }
            return index !== itemIndex;
        });
        if (typeof this.salonImageArray[itemIndex] === 'object') {
            let deleteIndex = itemIndex - this.deletedImageArray.length;
            this.salonImageArray.splice(deleteIndex, 1);
        }
    }
    readUrl(event) {
        //  var fileResponse= this.fileUpload.readUrl(event);
        //  console.log(fileResponse);
        //  this.url = fileResponse['url'];
        //  this.profileImage = fileResponse['fileObject '];
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
    getUserProfile() {
        this.httpService.getRequest('GET', 'PROFILE', '')
            .subscribe((response) => {
            this.loader = false;
            if (response.status === 1) {
                this.detail = response.res;
                this.profile.patchValue({
                    name: this.detail.hasOwnProperty('name') ? this.detail.name : '',
                    email: this.detail.hasOwnProperty('email') ? this.detail.email : '',
                    phone: this.detail.hasOwnProperty('phone') ? this.detail.phone : '',
                    location: this.detail.hasOwnProperty('address') ? this.detail.address : '',
                    // company details
                    website: this.detail.hasOwnProperty('website') ? this.detail.website : '',
                    description: this.detail.hasOwnProperty('desc') ? this.detail.desc : '',
                    serviceat: this.detail.hasOwnProperty('service_at') ? String(this.detail.service_at) : ''
                });
                this.location.address_level_2 = this.detail.city;
                this.location.address_state = this.detail.state;
                this.location.address_zip = this.detail.pincode;
                this.location.address_country = this.detail.country;
                this.location.lat = this.detail.lat;
                this.location.lng = this.detail.lng;
                this.url = this.detail.logo ? this.detail.logo : this.url;
                this.dataSource = this.detail.services;
                if (this.detail && this.detail.imgs) {
                    this.detail.imgs.map(item => {
                        item = this.detail.bp + item;
                        this.salonImageUrlArray.push(item);
                        this.salonImageArray.push(item);
                        this.slide = [...this.slide, { 'url': item, clickAction: () => alert('custom click function') }];
                        // this.slide.push({'url':item});
                    });
                }
            }
            else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(response.err)) {
                    this.errorserv.handleError(response.err.errCode);
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
    get getControl() { return this.profile.controls; }
    searchPlace() {
        this.mapsApiLoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['establishment']
            });
            autocomplete.addListener("place_changed", () => {
                this.zone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    for (var i = 0; i < place.address_components.length; i++) {
                        let types = place.address_components[i].types;
                        if (types.indexOf('locality') != -1) {
                            this.location.address_level_2 = place.address_components[i].long_name;
                        }
                        else if (types.indexOf('administrative_area_level_1') != -1) {
                            this.location.address_level_2 = place.address_components[i].long_name;
                        }
                        if (types.indexOf('country') != -1) {
                            this.location.address_country = place.address_components[i].long_name;
                        }
                        if (types.indexOf('postal_code') != -1) {
                            this.location.address_zip = place.address_components[i].long_name;
                        }
                        if (types.indexOf('administrative_area_level_1') != -1) {
                            this.location.address_state = place.address_components[i].long_name;
                        }
                    }
                    console.log(this.location.address_level_2);
                    console.log(place);
                    if (place.formatted_address) {
                        this.location.full_address = place.formatted_address;
                    }
                    if (place.geometry.location) {
                        this.location.lat = place.geometry.location.lat();
                        this.location.lng = place.geometry.location.lng();
                        this.location.marker.lat = place.geometry.location.lat();
                        this.location.marker.lng = place.geometry.location.lng();
                        this.location.marker.draggable = true;
                        this.location.viewport = place.geometry.viewport;
                    }
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    }
    openModal(template) {
        let config = {
            backdrop: true,
            ignoreBackdropClick: true
        };
        console.log(this.slideshow);
        // this.slideshow.goToSlide(3);
        this.modalRef = this.modalService.show(template, config);
    }
};
EditprofileComponent.ctorParameters = () => [
    { type: src_app_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_service_helper_service__WEBPACK_IMPORTED_MODULE_4__["Helper"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"] },
    { type: src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search", { static: false })
], EditprofileComponent.prototype, "searchElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideshow', { static: true })
], EditprofileComponent.prototype, "slideshow", void 0);
EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/editprofile/editprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.component.scss */ "./src/app/home/profile/editprofile/editprofile.component.scss")).default]
    })
], EditprofileComponent);



/***/ }),

/***/ "./src/app/home/profile/editprofile/editprofile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/editprofile/editprofile.module.ts ***!
  \****************************************************************/
/*! exports provided: EditprofileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileModule", function() { return EditprofileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprofile-routing.module */ "./src/app/home/profile/editprofile/editprofile-routing.module.ts");
/* harmony import */ var _editprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editprofile.component */ "./src/app/home/profile/editprofile/editprofile.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/breadcrumb/breadcrumb.module */ "./src/app/shared/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/module/applicationpipe/applicationpipe.module */ "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
/* harmony import */ var src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/_pipes/translate.pipe */ "./src/app/shared/_pipes/translate.pipe.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");














let EditprofileModule = class EditprofileModule {
};
EditprofileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_editprofile_component__WEBPACK_IMPORTED_MODULE_4__["EditprofileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditprofileRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAFagdwUB5_7TgN2G4Ss6q_qnwgg5BX3Qg',
                libraries: ["places"]
            }),
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__["SlideshowModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            src_app_shared_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
            src_app_shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_11__["ApplicationpipeModule"]
        ],
        providers: [src_app_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]]
    })
], EditprofileModule);



/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map