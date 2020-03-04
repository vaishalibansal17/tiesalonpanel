(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-breadcrumb></app-breadcrumb> -->\n<div class=\"main-card\">\n    <div class=\"row\">\n\n        <div class=\"col-md-3 left_listing\">\n            <div class=\"col-md-12 space_bot\">\n                <form action=\"\" class=\"search_field\">\n                  <mat-form-field>\n                    <span class=\"email-img search\"><img src=\"assets/images/search.png\" alt=\"envelope\"></span>\n                    <input matInput placeholder=\"Search\" class=\"form-control\">\n                  </mat-form-field>\n                </form>\n              </div>\n              <div class=\"chat_mgmt\">\n                <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Jane Doe <span class=\"alignright\">Feb 18, 2020</span></div>\n                            <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"notifi_list unread_active\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Christine<span class=\"alignright\">Feb 18, 2020</span></div>\n                            <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Jane Doe <span class=\"alignright\">Feb 10, 2020</span></div>\n                            <div class=\"message\">Hello</div> <div class=\"count\">1</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Jane Doe <span class=\"alignright\">Jan 18, 2020</span></div>\n                            <div class=\"message\">Hello</div> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Jane Doe <span class=\"alignright\">Jan 12, 2020</span></div>\n                            <div class=\"message\">Hello</div> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"notifi_list\">\n                    <div class=\"noti_left\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\"></div>\n                    <div class=\"noti_right\">\n                        <div class=\"sub_rightsection\">\n                            <div class=\"author-review\">Christine<span class=\"alignright\">Jan 10, 2020</span></div>\n                            <div class=\"message\">Hello</div> \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-9 right_chat_detail\">\n            <div class=\"top_chat\">\n                <div class=\"left_name\"><img src=\"assets/images/noti-pro.png\" alt=\"Notification Profile\">John Doe <span class=\"status\">8 mins ago</span></div>\n                <div class=\"right_more\">\n                <button mat-button [matMenuTriggerFor]=\"more_menu\" [disableRipple]=\"true\"><img src=\"assets/images/more.png\" alt=\"More\"></button>\n                  <mat-menu #more_menu=\"matMenu\" xPosition=\"before\">\n                    <button mat-menu-item><img src=\"assets/images/delete_grey.png\" alt=\"Delete\"> Delete</button>\n                  </mat-menu>\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"message_chat received\">Hello <span class=\"right_time\">10:21 AM</span></div>\n                <div class=\"message_chat sent\">Hi, how can I help you? <span class=\"right_time\">10:21 AM</span></div>\n            </div>\n            <div class=\"type_msg\">\n               <input type=\"text\" placeholder=\"Type message\"> \n               <span class=\"right\"><img src=\"assets/images/send.png\" alt=\"Send\"></span>\n            </div>\n        </div>\n\n      </div>\n\n\n\n</div>");

/***/ }),

/***/ "./src/app/home/chat-management/chat-management-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ChatManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementRoutingModule", function() { return ChatManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-management.component */ "./src/app/home/chat-management/chat-management.component.ts");




const routes = [{ path: '', component: _chat_management_component__WEBPACK_IMPORTED_MODULE_3__["ChatManagementComponent"] }];
let ChatManagementRoutingModule = class ChatManagementRoutingModule {
};
ChatManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatManagementRoutingModule);



/***/ }),

/***/ "./src/app/home/chat-management/chat-management.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar {\n  width: 6px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #f96bb3;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #ff9bce;\n}\n\n.main-card {\n  padding: 0 !important;\n}\n\n.main-card .row {\n  margin: 0;\n}\n\n.main-card .left_listing {\n  border-right: 1px solid rgba(191, 191, 191, 0.3);\n  padding: 20px 0px 0px;\n  min-height: 600px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list {\n  margin-bottom: 5px;\n  padding: 0px 25px 0px 10px;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_left {\n  width: 54px;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_left img {\n  width: 50px !important;\n  height: 50px !important;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_right {\n  padding-top: 0px;\n  color: #999999;\n  font-size: 13px;\n  width: calc(100% - 65px);\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_right .message {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  float: left;\n  width: calc(100% - 25px);\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_right .count {\n  width: 19px;\n  background: #f96bb3;\n  color: #fff;\n  height: 19px;\n  border-radius: 50%;\n  padding: 0px 7px;\n  text-align: center;\n  float: right;\n  font-size: 12px;\n  line-height: 19px;\n  margin-top: 2px;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_right .author-review {\n  font-size: 14px;\n  color: #000;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list .noti_right .author-review .alignright {\n  text-align: right;\n  float: right;\n  color: #999;\n  font-size: 11px;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list:last-child .noti_right {\n  border-bottom: none;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active {\n  background: #F96BB3;\n  padding-top: 12px;\n  margin-top: -12px;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active .noti_right {\n  border-bottom: none;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active .noti_right .author-review {\n  color: #fff;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active .noti_right .count {\n  background: #000;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active .noti_right .author-review .alignright {\n  color: #fff;\n}\n\n.main-card .left_listing .chat_mgmt .notifi_list.unread_active .noti_right .message {\n  color: #fff;\n}\n\n.mat-form-field {\n  display: block;\n}\n\nform {\n  display: initial;\n}\n\n.space_bot {\n  margin-bottom: 25px;\n  padding: 0px 15px;\n}\n\n@media (max-width: 380px) {\n  form {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaG9tZS9jaGF0LW1hbmFnZW1lbnQvY2hhdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoYXQtbWFuYWdlbWVudC9jaGF0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUUsVUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDQ0o7O0FERUUsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREFJO0VBQ0ksU0FBQTtBQ0VSOztBREFJO0VBQ0ksZ0RBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFRO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0VaOztBRERZO0VBQ0ksV0FBQTtBQ0doQjs7QURGZ0I7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FDSXBCOztBREFZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRWhCOztBRERnQjtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0dwQjs7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR3BCOztBRERnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDR3BCOztBREZvQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSXhCOztBRE9BO0VBQXdFLG1CQUFBO0FDSnhFOztBREtBO0VBQStELG1CQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGlCQUFBO0FDQ3JHOztBREFBO0VBQTJFLG1CQUFBO0FDSTNFOztBREhBO0VBQTBGLFdBQUE7QUNPMUY7O0FETkE7RUFBa0YsZ0JBQUE7QUNVbEY7O0FEVEE7RUFBc0csV0FBQTtBQ2F0Rzs7QURaQTtFQUFvRixXQUFBO0FDZ0JwRjs7QURmQTtFQUFnQixjQUFBO0FDbUJoQjs7QURmQTtFQUFLLGdCQUFBO0FDbUJMOztBRGxCQTtFQUFXLG1CQUFBO0VBQW9CLGlCQUFBO0FDdUIvQjs7QURyQkE7RUFDSTtJQUFLLGdCQUFBO0VDeUJQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoYXQtbWFuYWdlbWVudC9jaGF0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG4gIFxuICAvKiBUcmFjayAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gICBcbiAgLyogSGFuZGxlICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNmOTZiYjM7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY5YmNlOyBcbiAgfVxuXG4ubWFpbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLnJvd3tcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAubGVmdF9saXN0aW5ne1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDE5MSwgMTkxLCAxOTEsIC4zKTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLmNoYXRfbWdtdHtcbiAgICAgICAgLm5vdGlmaV9saXN0e1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1cHggMHB4IDEwcHg7XG4gICAgICAgICAgICAubm90aV9sZWZ0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm90aV9yaWdodHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2V7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRob3ItcmV2aWV3e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAuYWxpZ25yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0X2J0bnt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3Q6bGFzdC1jaGlsZCAubm90aV9yaWdodHtib3JkZXItYm90dG9tOiBub25lO31cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZle2JhY2tncm91bmQ6ICNGOTZCQjM7cGFkZGluZy10b3A6IDEycHg7bWFyZ2luLXRvcDogLTEycHg7fVxuLm1haW4tY2FyZCAubGVmdF9saXN0aW5nIC5jaGF0X21nbXQgLm5vdGlmaV9saXN0LnVucmVhZF9hY3RpdmUgLm5vdGlfcmlnaHR7Ym9yZGVyLWJvdHRvbTogbm9uZTt9XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QudW5yZWFkX2FjdGl2ZSAubm90aV9yaWdodCAuYXV0aG9yLXJldmlld3tjb2xvcjogI2ZmZjt9XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QudW5yZWFkX2FjdGl2ZSAubm90aV9yaWdodCAuY291bnR7YmFja2dyb3VuZDogIzAwMDt9XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QudW5yZWFkX2FjdGl2ZSAubm90aV9yaWdodCAuYXV0aG9yLXJldmlldyAuYWxpZ25yaWdodHtjb2xvcjogI2ZmZjt9XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QudW5yZWFkX2FjdGl2ZSAubm90aV9yaWdodCAubWVzc2FnZXtjb2xvcjogI2ZmZjt9XG4ubWF0LWZvcm0tZmllbGR7ZGlzcGxheTogYmxvY2t9XG5cblxuXG5mb3Jte2Rpc3BsYXk6IGluaXRpYWw7fVxuLnNwYWNlX2JvdHttYXJnaW4tYm90dG9tOiAyNXB4O3BhZGRpbmc6IDBweCAxNXB4O31cblxuQG1lZGlhKG1heC13aWR0aDozODBweCl7XG4gICAgZm9ybXttYXJnaW4tbGVmdDogMHB4O31cbn0iLCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZjk2YmIzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5YmNlO1xufVxuXG4ubWFpbi1jYXJkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLm1haW4tY2FyZCAucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW4tY2FyZCAubGVmdF9saXN0aW5nIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjMpO1xuICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDEwcHg7XG59XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QgLm5vdGlfbGVmdCB7XG4gIHdpZHRoOiA1NHB4O1xufVxuLm1haW4tY2FyZCAubGVmdF9saXN0aW5nIC5jaGF0X21nbXQgLm5vdGlmaV9saXN0IC5ub3RpX2xlZnQgaW1nIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QgLm5vdGlfcmlnaHQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG59XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QgLm5vdGlfcmlnaHQgLm1lc3NhZ2Uge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbn1cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdCAubm90aV9yaWdodCAuY291bnQge1xuICB3aWR0aDogMTlweDtcbiAgYmFja2dyb3VuZDogI2Y5NmJiMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHggN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLm1haW4tY2FyZCAubGVmdF9saXN0aW5nIC5jaGF0X21nbXQgLm5vdGlmaV9saXN0IC5ub3RpX3JpZ2h0IC5hdXRob3ItcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdCAubm90aV9yaWdodCAuYXV0aG9yLXJldmlldyAuYWxpZ25yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3Q6bGFzdC1jaGlsZCAubm90aV9yaWdodCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0Y5NkJCMztcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuXG4ubWFpbi1jYXJkIC5sZWZ0X2xpc3RpbmcgLmNoYXRfbWdtdCAubm90aWZpX2xpc3QudW5yZWFkX2FjdGl2ZSAubm90aV9yaWdodCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZlIC5ub3RpX3JpZ2h0IC5hdXRob3ItcmV2aWV3IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZlIC5ub3RpX3JpZ2h0IC5jb3VudCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZlIC5ub3RpX3JpZ2h0IC5hdXRob3ItcmV2aWV3IC5hbGlnbnJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluLWNhcmQgLmxlZnRfbGlzdGluZyAuY2hhdF9tZ210IC5ub3RpZmlfbGlzdC51bnJlYWRfYWN0aXZlIC5ub3RpX3JpZ2h0IC5tZXNzYWdlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cblxuLnNwYWNlX2JvdCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/chat-management/chat-management.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementComponent", function() { return ChatManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatManagementComponent = class ChatManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/chat-management/chat-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-management.component.scss */ "./src/app/home/chat-management/chat-management.component.scss")).default]
    })
], ChatManagementComponent);



/***/ }),

/***/ "./src/app/home/chat-management/chat-management.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/chat-management/chat-management.module.ts ***!
  \****************************************************************/
/*! exports provided: ChatManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementModule", function() { return ChatManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-management-routing.module */ "./src/app/home/chat-management/chat-management-routing.module.ts");
/* harmony import */ var _chat_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-management.component */ "./src/app/home/chat-management/chat-management.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ChatManagementModule = class ChatManagementModule {
};
ChatManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_management_component__WEBPACK_IMPORTED_MODULE_4__["ChatManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatManagementRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ChatManagementModule);



/***/ })

}]);
//# sourceMappingURL=27-es2015.js.map