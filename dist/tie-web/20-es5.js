function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeChatManagementChatManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-breadcrumb></app-breadcrumb> -->\n<div class=\"main-card\">\n    <div class=\"row\">\n        <div class=\"col-md-12 space_bot\">\n          <form action=\"\" class=\"search_field\">\n            <mat-form-field>\n              <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n              <input matInput placeholder=\"Search\" class=\"form-control\">\n            </mat-form-field>\n          </form>\n        </div>\n      </div>\n\n    <div class=\"chat_mgmt\">\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n    <div class=\"notifi_list\">\n        <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n        <div class=\"noti_right\">\n            <div class=\"sub_rightsection\">\n                <div class=\"author-review\">Jane Doe <span class=\"alignright\">12:43 PM</span></div>\n                Hello...\n            </div>\n        </div>\n    </div>\n</div>\n<ul class=\"pagination\">\n    <li><a href=\"#\"><i class=\"fa fa-angle-left\"></i></a></li>\n    <li class=\"active\"><a href=\"#\">1</a></li>\n    <li><a href=\"#\">2</a></li>\n    <li><a href=\"#\">3</a></li>\n    <li><a href=\"#\">4</a></li>\n    <li><a href=\"#\">5</a></li>\n    <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n  </ul>\n</div>";
    /***/
  },

  /***/
  "./src/app/home/chat-management/chat-management-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/chat-management/chat-management-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ChatManagementRoutingModule */

  /***/
  function srcAppHomeChatManagementChatManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatManagementRoutingModule", function () {
      return ChatManagementRoutingModule;
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


    var _chat_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-management.component */
    "./src/app/home/chat-management/chat-management.component.ts");

    var routes = [{
      path: '',
      component: _chat_management_component__WEBPACK_IMPORTED_MODULE_3__["ChatManagementComponent"]
    }];

    var ChatManagementRoutingModule = function ChatManagementRoutingModule() {
      _classCallCheck(this, ChatManagementRoutingModule);
    };

    ChatManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatManagementRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/chat-management/chat-management.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home/chat-management/chat-management.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeChatManagementChatManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-card {\n  padding: 30px 30px 30px 15px !important;\n}\n.main-card .chat_mgmt .notifi_list {\n  margin-bottom: 5px;\n}\n.main-card .chat_mgmt .notifi_list .noti_right {\n  padding-top: 0px;\n  color: #999999;\n  font-size: 13px;\n}\n.main-card .chat_mgmt .notifi_list .noti_right .author-review {\n  font-size: 15px;\n  color: #000;\n}\n.main-card .chat_mgmt .notifi_list .noti_right .author-review .alignright {\n  text-align: right;\n  float: right;\n  color: #999;\n  font-size: 13px;\n}\n.main-card ul.pagination {\n  margin-top: 15px;\n}\nform {\n  display: initial;\n}\n.space_bot {\n  margin-bottom: 15px;\n}\n@media (max-width: 380px) {\n  form {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9jaGF0LW1hbmFnZW1lbnQvY2hhdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoYXQtbWFuYWdlbWVudC9jaGF0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQ0NKO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FER1k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRGhCO0FERWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNBcEI7QURDb0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0N4QjtBRE1JO0VBQ0ksZ0JBQUE7QUNKUjtBRFFBO0VBQUssZ0JBQUE7QUNKTDtBREtBO0VBQVcsbUJBQUE7QUNEWDtBREdBO0VBQ0k7SUFBSyxnQkFBQTtFQ0NQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoYXQtbWFuYWdlbWVudC9jaGF0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgLmNoYXRfbWdtdHtcbiAgICAgICAgLm5vdGlmaV9saXN0e1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgLm5vdGlfbGVmdHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vdGlfcmlnaHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgLmF1dGhvci1yZXZpZXd7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIC5hbGlnbnJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHRfYnRue31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1bC5wYWdpbmF0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbn1cblxuZm9ybXtkaXNwbGF5OiBpbml0aWFsO31cbi5zcGFjZV9ib3R7bWFyZ2luLWJvdHRvbTogMTVweDt9XG5cbkBtZWRpYShtYXgtd2lkdGg6MzgwcHgpe1xuICAgIGZvcm17bWFyZ2luLWxlZnQ6IDBweDt9XG59IiwiLm1haW4tY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDE1cHggIWltcG9ydGFudDtcbn1cbi5tYWluLWNhcmQgLmNoYXRfbWdtdCAubm90aWZpX2xpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbi1jYXJkIC5jaGF0X21nbXQgLm5vdGlmaV9saXN0IC5ub3RpX3JpZ2h0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluLWNhcmQgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QgLm5vdGlfcmlnaHQgLmF1dGhvci1yZXZpZXcge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1haW4tY2FyZCAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdCAubm90aV9yaWdodCAuYXV0aG9yLXJldmlldyAuYWxpZ25yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbi1jYXJkIHVsLnBhZ2luYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cblxuLnNwYWNlX2JvdCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICBmb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/chat-management/chat-management.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/chat-management/chat-management.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChatManagementComponent */

  /***/
  function srcAppHomeChatManagementChatManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatManagementComponent", function () {
      return ChatManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatManagementComponent =
    /*#__PURE__*/
    function () {
      function ChatManagementComponent() {
        _classCallCheck(this, ChatManagementComponent);
      }

      _createClass(ChatManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatManagementComponent;
    }();

    ChatManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-management.component.scss */
      "./src/app/home/chat-management/chat-management.component.scss")).default]
    })], ChatManagementComponent);
    /***/
  },

  /***/
  "./src/app/home/chat-management/chat-management.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/chat-management/chat-management.module.ts ***!
    \****************************************************************/

  /*! exports provided: ChatManagementModule */

  /***/
  function srcAppHomeChatManagementChatManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatManagementModule", function () {
      return ChatManagementModule;
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


    var _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-management-routing.module */
    "./src/app/home/chat-management/chat-management-routing.module.ts");
    /* harmony import */


    var _chat_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-management.component */
    "./src/app/home/chat-management/chat-management.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ChatManagementModule = function ChatManagementModule() {
      _classCallCheck(this, ChatManagementModule);
    };

    ChatManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_chat_management_component__WEBPACK_IMPORTED_MODULE_4__["ChatManagementComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatManagementRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ChatManagementModule);
    /***/
  }
}]);
//# sourceMappingURL=20-es5.js.map