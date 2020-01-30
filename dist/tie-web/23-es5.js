function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/reviews/reviews.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/reviews/reviews.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeReviewsReviewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-card\">\n    <div class=\"row\">\n    <div class=\"col-md-6\"><h3>Rating</h3></div>\n    <div class=\"col-md-6 alignright\"><div class=\"rating\"><span class=\"big\">4.0</span><span class=\"small\">(25)</span></div><div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div></div>\n    \n        <div class=\"col-md-3 rating_head\">Professionalism</div>\n        <div class=\"col-md-6 rating_mat\"><mat-progress-bar mode=\"determinate\" value=\"100\" class=\"high\"></mat-progress-bar></div>\n        <div class=\"col-md-3 rating_mark\">5/5</div>\n            \n        <div class=\"col-md-3 rating_head\">Customer Service</div>\n        <div class=\"col-md-6 rating_mat\"><mat-progress-bar mode=\"determinate\" value=\"70\" class=\"average\"></mat-progress-bar></div>\n        <div class=\"col-md-3 rating_mark\">3/5</div>\n            \n        <div class=\"col-md-3 rating_head\">Cleanness</div>\n        <div class=\"col-md-6 rating_mat\"><mat-progress-bar mode=\"determinate\" value=\"85\" class=\"equalhigh\"></mat-progress-bar></div>\n        <div class=\"col-md-3 rating_mark\">4.5/5</div>\n            \n        <div class=\"col-md-3 rating_head\">Timing</div>\n        <div class=\"col-md-6 rating_mat\"><mat-progress-bar mode=\"determinate\" value=\"80\" class=\"lesshigh\"></mat-progress-bar></div>\n        <div class=\"col-md-3 rating_mark\">4/5</div>\n        <div class=\"clearfix space\">&nbsp;</div>\n        <div class=\"col-md-12\">\n            <h3>Recent Reviews:</h3>\n        </div>\n        <div class=\"staffdetail_notifi\">\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                Lorem ipsum is placeholder text commonly used in the graphic, print. Lorem ipsum is placeholder text.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                Lorem ipsum is placeholder text commonly used in the graphic, print. Lorem ipsum is placeholder text.\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"author-review\">\n                    <div class=\"author\">James Walker</div>\n                    <div class=\"reviews\"><img src=\"assets/images/reviews-star.png\" alt=\"Review\"></div>\n                </div>\n                    Lorem ipsum is placeholder text commonly used in the graphic, print.\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/reviews/reviews-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/reviews/reviews-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ReviewsRoutingModule */

  /***/
  function srcAppHomeReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsRoutingModule", function () {
      return ReviewsRoutingModule;
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


    var _reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reviews.component */
    "./src/app/home/reviews/reviews.component.ts");

    var routes = [{
      path: '',
      component: _reviews_component__WEBPACK_IMPORTED_MODULE_3__["ReviewsComponent"]
    }];

    var ReviewsRoutingModule = function ReviewsRoutingModule() {
      _classCallCheck(this, ReviewsRoutingModule);
    };

    ReviewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReviewsRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/reviews/reviews.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/home/reviews/reviews.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeReviewsReviewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/reviews/reviews.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/reviews/reviews.component.ts ***!
    \***************************************************/

  /*! exports provided: ReviewsComponent */

  /***/
  function srcAppHomeReviewsReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function () {
      return ReviewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReviewsComponent =
    /*#__PURE__*/
    function () {
      function ReviewsComponent() {
        _classCallCheck(this, ReviewsComponent);
      }

      _createClass(ReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReviewsComponent;
    }();

    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reviews',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reviews.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/reviews/reviews.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reviews.component.scss */
      "./src/app/home/reviews/reviews.component.scss")).default]
    })], ReviewsComponent);
    /***/
  },

  /***/
  "./src/app/home/reviews/reviews.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home/reviews/reviews.module.ts ***!
    \************************************************/

  /*! exports provided: ReviewsModule */

  /***/
  function srcAppHomeReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsModule", function () {
      return ReviewsModule;
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


    var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reviews-routing.module */
    "./src/app/home/reviews/reviews-routing.module.ts");
    /* harmony import */


    var _reviews_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reviews.component */
    "./src/app/home/reviews/reviews.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ReviewsModule = function ReviewsModule() {
      _classCallCheck(this, ReviewsModule);
    };

    ReviewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReviewsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ReviewsModule);
    /***/
  }
}]);
//# sourceMappingURL=23-es5.js.map