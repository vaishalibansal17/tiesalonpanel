function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/angular5-csv/dist/Angular5-csv.js":
  /*!********************************************************!*\
    !*** ./node_modules/angular5-csv/dist/Angular5-csv.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngular5CsvDistAngular5CsvJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var CsvConfigConsts = function () {
      function CsvConfigConsts() {}

      CsvConfigConsts.EOL = "\r\n";
      CsvConfigConsts.BOM = "\uFEFF";
      CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
      CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
      CsvConfigConsts.DEFAULT_QUOTE = '"';
      CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
      CsvConfigConsts.DEFAULT_TITLE = 'My Report';
      CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
      CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
      CsvConfigConsts.DEFAULT_USE_BOM = true;
      CsvConfigConsts.DEFAULT_HEADER = [];
      CsvConfigConsts.DEFAULT_NO_DOWNLOAD = false;
      CsvConfigConsts.DEFAULT_NULL_TO_EMPTY_STRING = false;
      return CsvConfigConsts;
    }();

    exports.CsvConfigConsts = CsvConfigConsts;
    exports.ConfigDefaults = {
      filename: CsvConfigConsts.DEFAULT_FILENAME,
      fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
      quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
      decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
      showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
      showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
      title: CsvConfigConsts.DEFAULT_TITLE,
      useBom: CsvConfigConsts.DEFAULT_USE_BOM,
      headers: CsvConfigConsts.DEFAULT_HEADER,
      noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD,
      nullToEmptyString: CsvConfigConsts.DEFAULT_NULL_TO_EMPTY_STRING
    };

    var Angular5Csv = function () {
      function Angular5Csv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);

        if (this._options.filename) {
          this._options.filename = filename;
        }

        this.generateCsv();
      }
      /**
       * Generate and Download Csv
       */


      Angular5Csv.prototype.generateCsv = function () {
        if (this._options.useBom) {
          this.csv += CsvConfigConsts.BOM;
        }

        if (this._options.showTitle) {
          this.csv += this._options.title + '\r\n\n';
        }

        this.getHeaders();
        this.getBody();

        if (this.csv == '') {
          console.log("Invalid data");
          return;
        }

        if (this._options.noDownload) {
          return this.csv;
        }

        var blob = new Blob([this.csv], {
          "type": "text/csv;charset=utf8;"
        });

        if (navigator.msSaveBlob) {
          var filename = this._options.filename.replace(/ /g, "_") + ".csv";
          navigator.msSaveBlob(blob, filename);
        } else {
          var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute('visibility', 'hidden');
          link.download = this._options.filename.replace(/ /g, "_") + ".csv";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
      /**
       * Create Headers
       */


      Angular5Csv.prototype.getHeaders = function () {
        var _this = this;

        if (this._options.headers.length > 0) {
          var headers = this._options.headers;
          var row = headers.reduce(function (headerRow, header) {
            return headerRow + header + _this._options.fieldSeparator;
          }, '');
          row = row.slice(0, -1);
          this.csv += row + CsvConfigConsts.EOL;
        }
      };
      /**
       * Create Body
       */


      Angular5Csv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
          var row = "";

          for (var index in this.data[i]) {
            row += this.formatData(this.data[i][index]) + this._options.fieldSeparator;
          }

          row = row.slice(0, -1);
          this.csv += row + CsvConfigConsts.EOL;
        }
      };
      /**
       * Format Data
       * @param {any} data
       */


      Angular5Csv.prototype.formatData = function (data) {
        if (this._options.decimalseparator === 'locale' && Angular5Csv.isFloat(data)) {
          return data.toLocaleString();
        }

        if (this._options.decimalseparator !== '.' && Angular5Csv.isFloat(data)) {
          return data.toString().replace('.', this._options.decimalseparator);
        }

        if (typeof data === 'string') {
          data = data.replace(/"/g, '""');

          if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
            data = this._options.quoteStrings + data + this._options.quoteStrings;
          }

          return data;
        }

        if (this._options.nullToEmptyString) {
          if (data === null) {
            return data = '';
          }

          return data;
        }

        if (typeof data === 'boolean') {
          return data ? 'TRUE' : 'FALSE';
        }

        return data;
      };
      /**
       * Check if is Float
       * @param {any} input
       */


      Angular5Csv.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
      };

      return Angular5Csv;
    }();

    exports.Angular5Csv = Angular5Csv;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    /**
     * Convet to Object
     * @param {any} val
     */

    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }

      return Object(val);
    }
    /**
     * Assign data  to new Object
     * @param {any}   target
     * @param {any[]} ...source
     */


    function objectAssign(target) {
      var source = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
      }

      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (Object.getOwnPropertySymbols) {
          symbols = Object.getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    } //# sourceMappingURL=Angular5-csv.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthHeaderAuthHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fixed-select\">\n    <button mat-button [matMenuTriggerFor]=\"lan_menu\" [disableRipple]=\"true\">{{lang=='en'?\"En\":\"Ar\"}} <img src=\"{{lang=='en'?'assets/images/flag_en.png':'assets/images/flag_ar.png'}}\" alt=\"England\"><img class=\"drop_img\" src=\"assets/images/dropdown.png\" alt=\"\"></button>\n    <mat-menu #lan_menu=\"matMenu\" xPosition=\"before\">\n    <button class=\"flag_drop\" mat-menu-item (click)=\"setLang('ua')\">Ar <img src=\"assets/images/flag_ar.png\" alt=\"England\"></button>\n    <button class=\"flag_drop\" mat-menu-item (click)=\"setLang('en')\">En <img src=\"assets/images/flag_en.png\" alt=\"England\"></button>\n    </mat-menu>\n</div>";
    /***/
  },

  /***/
  "./src/app/auth/auth-header/auth-header.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/auth/auth-header/auth-header.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthHeaderAuthHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1oZWFkZXIvYXV0aC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/auth-header/auth-header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/auth-header/auth-header.component.ts ***!
    \***********************************************************/

  /*! exports provided: AuthHeaderComponent */

  /***/
  function srcAppAuthAuthHeaderAuthHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthHeaderComponent", function () {
      return AuthHeaderComponent;
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


    var src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service/translate.service */
    "./src/app/shared/service/translate.service.ts");

    var AuthHeaderComponent =
    /*#__PURE__*/
    function () {
      function AuthHeaderComponent(trns) {
        _classCallCheck(this, AuthHeaderComponent);

        this.trns = trns;
        this.lang = localStorage.getItem('lang') || 'en';
      }

      _createClass(AuthHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("dfghjkl;");
        }
      }, {
        key: "setLang",
        value: function setLang(lang) {
          localStorage.setItem('lang', lang);
          this.lang = lang;
          this.trns.use(this.lang);
        }
      }]);

      return AuthHeaderComponent;
    }();

    AuthHeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    AuthHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-header/auth-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-header.component.scss */
      "./src/app/auth/auth-header/auth-header.component.scss")).default]
    })], AuthHeaderComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth-header/auth-header.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/auth-header/auth-header.module.ts ***!
    \********************************************************/

  /*! exports provided: AuthHeaderModule */

  /***/
  function srcAppAuthAuthHeaderAuthHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthHeaderModule", function () {
      return AuthHeaderModule;
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


    var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/material/material.module */
    "./src/app/shared/material/material.module.ts");
    /* harmony import */


    var _auth_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-header.component */
    "./src/app/auth/auth-header/auth-header.component.ts");

    var AuthHeaderModule = function AuthHeaderModule() {
      _classCallCheck(this, AuthHeaderModule);
    };

    AuthHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_header_component__WEBPACK_IMPORTED_MODULE_4__["AuthHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
      exports: [_auth_header_component__WEBPACK_IMPORTED_MODULE_4__["AuthHeaderComponent"]]
    })], AuthHeaderModule);
    /***/
  },

  /***/
  "./src/app/shared/constants/constant.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/constants/constant.ts ***!
    \**********************************************/

  /*! exports provided: ERROR_MSG, LIMIT, IMG, MESSAGE, DELETE */

  /***/
  function srcAppSharedConstantsConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function () {
      return ERROR_MSG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIMIT", function () {
      return LIMIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMG", function () {
      return IMG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGE", function () {
      return MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ERROR_MSG = {
      HTTP_SUBSCRIBER_ERROR: 'Network Error.',
      UNAUTHURIZED_ERROR: 'You are not an authorized user.'
    };
    var LIMIT = [10, 20, 30];
    var IMG = {
      PRO: 'assets/images/change.png',
      USR: 'assets/images/noti-pro.png'
    };
    var MESSAGE = {
      SUCCESS: 'SUCCESS',
      FORGOT_SUC: 'Forgot Password Link has been sent successfully.',
      FORGOT_FAIL: 'Admin not found'
    };
    var DELETE = {
      DELETE_TITLE: '',
      DELETE_MSG: 'You wont be able to revert this!',
      DELETE_CONFIRM_TEXT: 'Yes, delete it!'
    };
    /***/
  },

  /***/
  "./src/app/shared/service/list/list.dataSource.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/service/list/list.dataSource.ts ***!
    \********************************************************/

  /*! exports provided: ListDataSource */

  /***/
  function srcAppSharedServiceListListDataSourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListDataSource", function () {
      return ListDataSource;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ListDataSource =
    /*#__PURE__*/
    function () {
      function ListDataSource(listService) {
        _classCallCheck(this, ListDataSource);

        this.listService = listService;
        this.usersData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.loadingUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.countInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.extra = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.loading$ = this.loadingUsers.asObservable();
        this.totalCount$ = this.countInfo.asObservable();
        this.extra$ = this.extra.asObservable();
      }

      _createClass(ListDataSource, [{
        key: "load",
        value: function load(listObj, dataObj) {
          var _this2 = this;

          this.loadingUsers.next(true);
          this.listService.staffListing(listObj, dataObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([err]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            return _this2.loadingUsers.next(false);
          })).subscribe(function (data) {
            if (data['res'] && data['res']['list']) {
              _this2.usersData.next(data['res']['list']);

              if (!listObj.search) {
                _this2.countInfo.next(data['res']['total']);
              } else {
                if (data['res']['total'] === 0) {
                  _this2.countInfo.next(1);
                } else {
                  _this2.countInfo.next(data['res']['total']);
                }
              }

              _this2.extra.next(data['res']['bp']);
            }
          });
        }
      }, {
        key: "connect",
        value: function connect(collectionViewer) {
          return this.usersData.asObservable();
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {
          this.usersData.complete();
          this.loadingUsers.complete();
          this.countInfo.complete();
          this.extra.complete();
        }
      }]);

      return ListDataSource;
    }();
    /***/

  },

  /***/
  "./src/app/shared/service/list/list.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/service/list/list.service.ts ***!
    \*****************************************************/

  /*! exports provided: ListService */

  /***/
  function srcAppSharedServiceListListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListService", function () {
      return ListService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ListService =
    /*#__PURE__*/
    function () {
      function ListService(httpService) {
        _classCallCheck(this, ListService);

        this.httpService = httpService;
      }

      _createClass(ListService, [{
        key: "staffListing",
        value: function staffListing(listObj, dataObj) {
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();

          for (var key in listObj) {
            // if (key != ('api' || 'id')) {
            // queryParams = (listObj[key] === 'asc') ? queryParams.set(key, '1') : queryParams.set(key, '-1');
            queryParams = queryParams.set(key, listObj[key]); // }
          }

          return this.httpService.getRequest('GET', dataObj.api, queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            res.res.list = res.res['staffs'] || res.res['wlkUsr'] || res.res['promo'];
            delete res.res['staffs'] || res.res['wlkUsr'] || res.res['promo'];
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            if (err.status === 401) {}

            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.statusText);
          }));
        }
      }]);

      return ListService;
    }();

    ListService.ctorParameters = function () {
      return [{
        type: _http_request_service__WEBPACK_IMPORTED_MODULE_4__["HttpRequestService"]
      }];
    };

    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ListService);
    /***/
  },

  /***/
  "./src/app/shared/service/validation-service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/service/validation-service.ts ***!
    \******************************************************/

  /*! exports provided: ValidationService, passValidator, PassValid, date, DateValidators */

  /***/
  function srcAppSharedServiceValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
      return ValidationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passValidator", function () {
      return passValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassValid", function () {
      return PassValid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "date", function () {
      return date;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateValidators", function () {
      return DateValidators;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValidationService =
    /*#__PURE__*/
    function () {
      function ValidationService() {
        _classCallCheck(this, ValidationService);
      }

      _createClass(ValidationService, null, [{
        key: "validateWebsite",
        value: function validateWebsite(control) {
          // RFC 2822 compliant regex
          if (control.value && control.value.match('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')) {
            return null;
          } else {
            return {
              invalidWebsite: true
            };
          }
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(control) {
          // RFC 2822 compliant regex
          if (control.value && control.value.match(/^[A-Z0-9a-z_.~+-{|}!#$%&()/:;<=>?@`\'",]{1,}@[A-Z0-9a-z-]{2,}[.]{1}[A-Za-z.]{2,6}$/)) {
            return null;
          } else {
            return {
              invalidEmailAddress: true
            };
          }
        }
      }, {
        key: "passwordValidator",
        value: function passwordValidator(control) {
          // {6,100}           - Assert password is between 6 and 100 characters
          // (?=.*[0-9])       - Assert a string has at least one number
          if (control.value && control.value.match("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!^&*-+(){}:;~`/?<>.,_| ]).{6,20})")) {
            return null;
          } else {
            return {
              invalidPassword: true
            };
          }
        }
      }, {
        key: "namevalidator",
        value: function namevalidator(control) {
          // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
          if (control.value && control.value.match(/^[^-\s][a-zA-Z_\s-]{0,50}$/)) {
            return null;
          } else {
            return {
              invalidName: true
            };
          }
        }
      }, {
        key: "addressvalidator",
        value: function addressvalidator(control) {
          // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
          if (control.value && control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?()":!;*_\s-]{3,100}$/)) {
            return null;
          } else {
            return {
              invalidAddress: true
            };
          }
        }
      }, {
        key: "descriptionvalidator",
        value: function descriptionvalidator(control) {
          // if (control.value && control.value.match(/^[a-zA-Z]*$/)) {
          if (control.value && control.value.match(/^[^-\s][a-zA-Z0-9,./-`~=+?":()!;*_\s-]{4,1000}$/)) {
            return null;
          } else {
            return {
              invalidDescription: true
            };
          }
        }
      }, {
        key: "phonevalidator",
        value: function phonevalidator(control) {
          // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
          // if (control.value && control.value.match(/^[^-\s][0-9_\s-]+$/)) {
          if (control.value && control.value.match(/^[0-9]{7,12}$/)) {
            return null;
          } else {
            return {
              Invalidphone: true
            };
          }
        }
      }, {
        key: "date",
        value: function date(control) {
          console.log(control);

          if (control && (control.value !== null || control.value !== undefined)) {
            var frm = control.get("frm").value || "";
            var to = control.get("to").value || ""; // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\

            console.log(frm && !to);

            if (frm && !to) {
              control.get('to').enable();
              return null;
            } else if (frm && to) {
              new Date(frm) > new Date(to);
              return {
                invalid: true
              };
            } else return {
              invalid: true
            };
          }

          return null;
        }
      }, {
        key: "numberValidator",
        value: function numberValidator(control) {
          // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
          if (control.value && String(control.value).match(/^[0-9]*$/)) {
            return null;
          } else if (control.value) {
            return null;
          } else return {
            invalid: true
          };
        }
      }, {
        key: "codeValidator",
        value: function codeValidator(control) {
          // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {
          if (control.value && control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
          } else if (control.value) {
            return null;
          } else return {
            invalid: true
          };
        }
      }, {
        key: "dateValidator",
        value: function dateValidator(control) {
          // for yyyy-mm-dd formate
          // if (control.value && control.value.match(/[0-9]{0,4}-[0-9]{0,2}-[0-9]{0,2}/)) {
          if (control.value && control.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/gm)) {
            return null;
          } else {
            return {
              InvalidDate: true
            };
          }
        }
      }, {
        key: "passNewValidator",
        value: function passNewValidator(control) {
          if (control && (control.value !== null || control.value !== undefined)) {
            var cnfpassValue = control.value;
            var passControl = control.root.get("old_pass");

            if (passControl) {
              var passValue = passControl.value;

              if (passValue === cnfpassValue || passValue === "") {
                return {
                  isError: true
                };
              }
            }
          }
        }
      }]);

      return ValidationService;
    }();

    function passValidator(control) {
      if (control && (control.value !== null || control.value !== undefined)) {
        var cnfpassValue = control.value;
        var passControl = control.root.get('newPassword'); // magic is this

        if (passControl) {
          var passValue = passControl.value;

          if (passValue !== cnfpassValue || passValue === '') {
            return {
              isError: true
            };
          }
        }
      }

      return null;
    }

    var PassValid =
    /*#__PURE__*/
    function () {
      function PassValid() {
        _classCallCheck(this, PassValid);
      }

      _createClass(PassValid, null, [{
        key: "MatchPassword",
        value: function MatchPassword(AC) {
          var password = AC.get("newPassword").value || ""; // to get value in input tag

          var confirmPassword = AC.get("confirmPassword").value || ""; // to get value in input tagc
          // if (confirmPassword.length < 0)
          //   return AC.get("confirmPassword").setErrors({ required: true });

          if (password.length >= 1 && confirmPassword.length <= 20) {
            if (password && confirmPassword && password === confirmPassword) {
              return AC.get("confirmPassword").setErrors(null);
            } else {
              return AC.get("confirmPassword").setErrors({
                MatchPassword: true
              });
            }
          }

          return null;
        }
      }]);

      return PassValid;
    }();

    function date(control) {
      console.log(control);

      if (control && (control.value !== null || control.value !== undefined)) {
        var frm = control.get("frm").value || "";
        var to = control.get("to").value || ""; // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\

        console.log(frm && !to);

        if (frm && !to) {
          control.get('to').enable();
          return null;
        } else if (frm && to) {
          new Date(frm) > new Date(to);
          return {
            invalid: true
          };
        } else return {
          invalid: true
        };
      }

      return false;
    }

    var DateValidators =
    /*#__PURE__*/
    function () {
      function DateValidators() {
        _classCallCheck(this, DateValidators);
      }

      _createClass(DateValidators, null, [{
        key: "valid",
        value: function valid(control) {
          if (control && (control.value !== null || control.value !== undefined)) {
            var frm = control.get("frm").value || "";
            var to = control.get("to").value || ""; // if (control.value && control.value.match(/^0|[1-9]\d*$/)) {\

            console.log(frm && !to);

            if (frm && !to) {
              control.get('to').enable();
              return null;
            } else if (frm && to) {
              new Date(frm) > new Date(to);
              return {
                invalid: true
              };
            } else return {
              invalid: true
            };
          }

          return null;
        }
      }]);

      return DateValidators;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map