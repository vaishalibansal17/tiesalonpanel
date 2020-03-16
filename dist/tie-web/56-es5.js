function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56], {
  /***/
  "./src/app/home/chat-management/chat-detail/chat-detail-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/chat-management/chat-detail/chat-detail-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ChatDetailRoutingModule */

  /***/
  function srcAppHomeChatManagementChatDetailChatDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDetailRoutingModule", function () {
      return ChatDetailRoutingModule;
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


    var _chat_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-detail.component */
    "./src/app/home/chat-management/chat-detail/chat-detail.component.ts");

    var routes = [{
      path: '',
      component: _chat_detail_component__WEBPACK_IMPORTED_MODULE_3__["ChatDetailComponent"]
    }];

    var ChatDetailRoutingModule = function ChatDetailRoutingModule() {
      _classCallCheck(this, ChatDetailRoutingModule);
    };

    ChatDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatDetailRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/chat-management/chat-detail/chat-detail.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/chat-management/chat-detail/chat-detail.module.ts ***!
    \************************************************************************/

  /*! exports provided: ChatDetailModule */

  /***/
  function srcAppHomeChatManagementChatDetailChatDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDetailModule", function () {
      return ChatDetailModule;
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


    var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-detail-routing.module */
    "./src/app/home/chat-management/chat-detail/chat-detail-routing.module.ts");
    /* harmony import */


    var _chat_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-detail.component */
    "./src/app/home/chat-management/chat-detail/chat-detail.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ChatDetailModule = function ChatDetailModule() {
      _classCallCheck(this, ChatDetailModule);
    };

    ChatDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_chat_detail_component__WEBPACK_IMPORTED_MODULE_4__["ChatDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatDetailRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ChatDetailModule);
    /***/
  }
}]);
//# sourceMappingURL=56-es5.js.map