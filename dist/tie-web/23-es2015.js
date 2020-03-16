(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-list/chat-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-list/chat-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-3 left_listing\">\n        <div class=\"col-md-12 space_bot\">\n            <form action=\"\" class=\"search_field\">\n              <mat-form-field>\n                <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n                <input matInput placeholder=\"Search\" class=\"form-control\">\n              </mat-form-field>\n            </form>\n          </div>\n          <div class=\"chat_mgmt\">\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Jane Doe <span class=\"alignright\">Feb 18, 2020</span></div>\n                        <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"notifi_list unread_active\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Christine<span class=\"alignright\">Feb 18, 2020</span></div>\n                        <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Jane Doe <span class=\"alignright\">Feb 10, 2020</span></div>\n                        <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Jane Doe <span class=\"alignright\">Jan 18, 2020</span></div>\n                        <div class=\"message\">Hello</div> \n                    </div>\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Jane Doe <span class=\"alignright\">Jan 12, 2020</span></div>\n                        <div class=\"message\">Hello</div> \n                    </div>\n                </div>\n            </div>\n            <div class=\"notifi_list\">\n                <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                <div class=\"noti_right\">\n                    <div class=\"sub_rightsection\">\n                        <div class=\"author-review\">Christine<span class=\"alignright\">Jan 10, 2020</span></div>\n                        <div class=\"message\">Hello</div> \n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n        \n        <div class=\"col-md-9 right_chat_detail\">\n            <app-chat-detail></app-chat-detail>\n        </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./src/app/home/chat-management/chat-list/chat-list-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/chat-management/chat-list/chat-list-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ChatListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListRoutingModule", function() { return ChatListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-list.component */ "./src/app/home/chat-management/chat-list/chat-list.component.ts");




const routes = [{ path: '', component: _chat_list_component__WEBPACK_IMPORTED_MODULE_3__["ChatListComponent"] }];
let ChatListRoutingModule = class ChatListRoutingModule {
};
ChatListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatListRoutingModule);



/***/ }),

/***/ "./src/app/home/chat-management/chat-list/chat-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/chat-management/chat-list/chat-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hhdC1tYW5hZ2VtZW50L2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/chat-management/chat-list/chat-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/chat-management/chat-list/chat-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatListComponent = class ChatListComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-list/chat-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/home/chat-management/chat-list/chat-list.component.scss")).default]
    })
], ChatListComponent);



/***/ }),

/***/ "./src/app/home/chat-management/chat-list/chat-list.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/chat-management/chat-list/chat-list.module.ts ***!
  \********************************************************************/
/*! exports provided: ChatListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListModule", function() { return ChatListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-list-routing.module */ "./src/app/home/chat-management/chat-list/chat-list-routing.module.ts");
/* harmony import */ var _chat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-list.component */ "./src/app/home/chat-management/chat-list/chat-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_detail_chat_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-detail/chat-detail.component */ "./src/app/home/chat-management/chat-detail/chat-detail.component.ts");







let ChatListModule = class ChatListModule {
};
ChatListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"], _chat_detail_chat_detail_component__WEBPACK_IMPORTED_MODULE_6__["ChatDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ChatListModule);



/***/ })

}]);
//# sourceMappingURL=23-es2015.js.map