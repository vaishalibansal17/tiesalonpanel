function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng2-slim-loading-bar [height]=\"'5px'\" [color]=\"'#F96BB3'\"></ng2-slim-loading-bar>\n<p-toast></p-toast>\n<p-toast key=\"myKey1\" position=\"bottom-center\"></p-toast>\n<router-outlet>\n</router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInvoiceInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style media=\"print\">\n    @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');\n    @page \n        {\n            size: auto;   /* auto is the current printer page size */\n            margin: 0mm;  /* this affects the margin in the printer settings */\n        }\n    body {\n        margin: 0px !important;\n        color: #000;\n        font-size: 14px !important;\n        background: #efefef !important;\n    }\n\n    table tr th {\n        text-align: left;\n    }\n\n    .text-center button {\n        background: #000;\n        border: none;\n        padding: 6px 20px;\n        margin: 10px 5px;\n        color: #fff;\n        border-radius: 5px;\n        font-size: 13px;\n    }\n</style>\n<div class=\"text-center\">\n    <button (click)=\"htmlToPDF()\">Download PDF</button>\n    <button (click)=\"onPrintInvoice()\">Print PDF</button>\n</div>\n\n<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\"\n    style=\"margin:0 auto; min-width:320px; max-width:700px; border:2px solid #f2f2f2;background:#fff;padding:25px;font-size: 14px;\"\n    width=\"100%\" #content>\n    <tr>\n        <td style=\"font-size: 26px;font-weight: 600;padding: 20px 15px 0px;\">\n            <p style=\"margin-bottom: 0px;\">Tie Salon : Summary and Invoice <span class=\"right\" style=\"float: right;position: relative;top: -10px;\"><img\n                        src=\"../../assets/tie_invoice/tie_logo.png\" alt=\"Logo\"></span> </p>\n        </td>\n    </tr>\n    <tr>\n        <td style=\"background: #fff;font-size: 14px;padding: 5px 15px 5px;\">\n            <table style=\"width: 100%;\">\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Booking Id:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.booking_id || 'NA'}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Service Date:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">\n                        {{detail?.bookDateTime | date : 'dd, MMM yyyy h:mm a'}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Customer Name:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.fullname || 'NA' | titlecase}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Customer Contact:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.pno || 'NA' }}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Service location:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.service_at == 1?'Home': detail?.service_at==2? (detail?.type==3?'Clinic' : 'Salon'):'Both'}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Salon Name:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.slnme || 'NA' | titlecase}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 185px;line-height: 26px;\">Staff Name:</td>\n                    <td style=\"color: #909090;line-height: 26px;\">{{detail?.staf || 'NA' | titlecase}}</td>\n                </tr>\n            </table>\n\n        </td>\n    </tr>\n    <tr>\n        <td style=\"padding: 10px 15px 0px;\">\n            <table\n                style=\"width: 100%;font-size: 14px;margin-top: 15px;border-bottom: 1px solid #e8e8e8;border-collapse: collapse;\">\n                <tr>\n                    <th style=\"padding: 8px 5px;background: #ccc;color: #fff;\">Service Detail</th>\n                    <th style=\"padding: 8px 5px;background: #ccc;color: #fff;\">Total</th>\n                </tr>\n                <tr *ngFor=\"let element of detail?.service; let i =index\">\n                    <td style=\"padding: 8px 5px\">{{element.title}}</td>\n                    <td style=\"padding: 8px 5px\">{{element.cost}}</td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n    <tr>\n        <td style=\"padding: 10px 15px 0px;\">\n            <table\n                style=\"padding-top: 10px;font-size: 14px; width: 100%;text-align: right;border-collapse: collapse;margin-bottom:5px;\">\n                <tr>\n                    <td style=\"width: 370px;line-height: 26px;\">Total:</td>\n                    <td style=\"width: 110px;line-height: 26px;\">{{ttlamt}}</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 370px;line-height: 26px;\">VAT:</td>\n                    <td style=\"width: 110px;line-height: 26px;\">5% Vat Inclusive</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 370px;line-height: 26px;background: #ccc;color:#fff;\">Total:</td>\n                    <td style=\"width: 110px;line-height: 26px;background: #ccc;color:#fff;\">{{ttlmt}}</td>\n                </tr>\n            </table>\n\n        </td>\n    </tr>\n    <tr>\n        <td style=\"padding: 10px 15px;\">\n            <p style=\"line-height: 25px;\"><strong>Terms & Conditions:</strong><br>\n                The total amount reflected on this invoice shall be paid within six days from the date of purchase</p>\n        </td>\n    </tr>\n\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"error_page\"><h1><span>404</span>Page Not Found!!!</h1></div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/guard/auth.guard */
    "./src/app/shared/guard/auth.guard.ts");
    /* harmony import */


    var _shared_guard_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/guard/login.guard */
    "./src/app/shared/guard/login.guard.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invoice/invoice.component */
    "./src/app/invoice/invoice.component.ts");

    var routes = [// { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      },
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        54).then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      },
      canActivate: [_shared_guard_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    }, {
      path: 'reset-freelancer/:token',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(53)]).then(__webpack_require__.bind(null,
        /*! ./reset-freelancer/reset-freelancer.module */
        "./src/app/reset-freelancer/reset-freelancer.module.ts")).then(function (m) {
          return m.ResetFreelancerModule;
        });
      }
    }, {
      path: 'invoice/:id',
      component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tie-web';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, setupTranslateFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function () {
      return setupTranslateFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_interceptor_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/interceptor/api.prefix.interceptor */
    "./src/app/shared/interceptor/api.prefix.interceptor.ts");
    /* harmony import */


    var _shared_interceptor_offline_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/interceptor/offline.interceptor */
    "./src/app/shared/interceptor/offline.interceptor.ts");
    /* harmony import */


    var _shared_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/interceptor/loader.interceptor */
    "./src/app/shared/interceptor/loader.interceptor.ts");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/index.js");
    /* harmony import */


    var _shared_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/interceptor/error.interceptor */
    "./src/app/shared/interceptor/error.interceptor.ts");
    /* harmony import */


    var _shared_service_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/service/helper.service */
    "./src/app/shared/service/helper.service.ts");
    /* harmony import */


    var _shared_service_translate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/service/translate.service */
    "./src/app/shared/service/translate.service.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/module/applicationpipe/applicationpipe.module */
    "./src/app/shared/module/applicationpipe/applicationpipe.module.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./invoice/invoice.component */
    "./src/app/invoice/invoice.component.ts"); // import { ToastrModule } from 'ngx-toastr';
    // import { ToastrModule } from 'ngx-toastr';


    function HttpLoaderFactory(httpClient) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](httpClient);
    }

    function setupTranslateFactory(service) {
      return function () {
        return service.use('en');
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_11__["SlimLoadingBarModule"].forRoot(), // ToastrModule.forRoot({
      //   timeOut: 10000,
      //   positionClass: 'toast-bottom-right',
      //   preventDuplicates: true,
      //   countDuplicates: true,
      //   maxOpened: 3,
      //   autoDismiss: true
      // }),
      _shared_module_applicationpipe_applicationpipe_module__WEBPACK_IMPORTED_MODULE_16__["ApplicationpipeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
      providers: [_shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_6__["HttpRequestService"], _shared_service_helper_service__WEBPACK_IMPORTED_MODULE_13__["Helper"], _shared_service_translate_service__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], primeng_api__WEBPACK_IMPORTED_MODULE_18__["MessageService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptor_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__["ApiPrefixInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptor_offline_interceptor__WEBPACK_IMPORTED_MODULE_9__["OfflineInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_10__["LoaderInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: setupTranslateFactory,
        deps: [_shared_service_translate_service__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/invoice/invoice.component.scss":
  /*!************************************************!*\
    !*** ./src/app/invoice/invoice.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInvoiceInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media print {\n  button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFpbm1vYmltYWMvQWJoaXNoZWsvYW5ndWxhci90aWUtd2ViL3NyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGFBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5IDogIG5vbmU7XG4gICAgfVxufVxuIiwiQG1lZGlhIHByaW50IHtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/invoice/invoice.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/invoice/invoice.component.ts ***!
    \**********************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function srcAppInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
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


    var _shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/error.service */
    "./src/app/shared/service/error.service.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    window.html2canvas = html2canvas__WEBPACK_IMPORTED_MODULE_6___default.a;

    var InvoiceComponent =
    /*#__PURE__*/
    function () {
      function InvoiceComponent(httpService, titleService, routes, errsrv) {
        _classCallCheck(this, InvoiceComponent);

        this.httpService = httpService;
        this.titleService = titleService;
        this.routes = routes;
        this.errsrv = errsrv;
      }

      _createClass(InvoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.routes.snapshot.params.id;
          this.getUserProfile();
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this = this;

          this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '').subscribe(function (response) {
            if (response.status === 1) {
              _this.detail = response.res;
              _this.detail['slnme'] = JSON.parse(localStorage.getItem('salon')).name;
              _this.ttlamt = _this.detail.service.reduce(function (acc, val) {
                return acc.cost + val.cost;
              });
              _this.ttlamt = _this.detail.service.length == 1 ? _this.ttlamt.cost : _this.ttlamt;
            } else {
              if (response.err) {
                _this.errsrv.handleError(response.err.errCode);
              }
            }
          }, function (error) {
            _this.errsrv.handleError(0); // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);

          });
        }
      }, {
        key: "loadImage",
        value: function loadImage(url) {
          return new Promise(function (resolve) {
            var img = new Image();

            img.onload = function () {
              return resolve(img);
            };

            img.src = url;
          });
        }
      }, {
        key: "htmlToPDF",
        value: function htmlToPDF() {
          var _this2 = this;

          // let doc = new jspdf();
          // console.log('------------');
          // doc.addHTML(this.content.nativeElement, function() {
          //   console.log('------------ppppppp');
          //    doc.save("obrz.pdf");
          // });
          var element = this.content.nativeElement;
          var HTML_Width = element.scrollWidth;
          var HTML_Height = element.scrollHeight + 100;
          var top_left_margin = 15;
          var PDF_Width = HTML_Width + top_left_margin * 2;
          var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
          var canvas_image_width = HTML_Width;
          var canvas_image_height = HTML_Height;
          var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1; // this.httpService.infoTostr("Please be patient we're processing the pdf", "PDF Processing!");

          return html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(element, {
            scale: 2
          }).then(function (canvas) {
            canvas.getContext('2d');
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'pt', [PDF_Width, PDF_Height]); //  pdf.addImage(logo, 'JPEG',  400, 3, 400, 60);

            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin + 40, canvas_image_width, canvas_image_height);

            for (var i = 1; i <= totalPDFPages; i++) {
              pdf.addPage(PDF_Width, PDF_Height);
              pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + top_left_margin * 4, canvas_image_width, canvas_image_height);
            }

            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
            pdf.save(name + ' ' + datePipe.transform(new Date(), 'MMM-dd-yyyy') + '.pdf'); // Generated PDF

            _this2.httpService.sucsTostr("Successfull", "Download Complete.");

            return true;
          });
        }
      }, {
        key: "onPrintInvoice",
        value: function onPrintInvoice() {
          // let  date = new Date()
          // let newTitle = 'Invoice' + date.getDate()+'_'+date.getMonth()+'_'+date.getFullYear();
          // this.titleService.setTitle( newTitle );
          window.print(); // this.titleService.setTitle( "TieWeb" );
        }
      }]);

      return InvoiceComponent;
    }();

    InvoiceComponent.ctorParameters = function () {
      return [{
        type: _shared_service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      static: true
    })], InvoiceComponent.prototype, "content", void 0);
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invoice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invoice.component.scss */
      "./src/app/invoice/invoice.component.scss")).default]
    })], InvoiceComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error_page {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: url('page_bg.jpg') no-repeat center;\n    background-size: cover;\n    left: 0;\n    top: 0;\n}\n\n.error_page h1 {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #fff;\n    margin: 0;\n    line-height: 1;\n    text-align: center;\n    font-size: 34px;\n}\n\n.error_page h1 span{\n    display: block;\n    font-size: 150px;\n    font-weight: 600;\n}\n\n@media(max-width:993px){\n    .error_page h1 span{font-size: 80px;}\n    .error_page h1{font-size: 18px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLCtDQUFpRTtJQUNqRSxzQkFBc0I7SUFDdEIsT0FBTztJQUNQLE1BQU07QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLG9CQUFvQixlQUFlLENBQUM7SUFDcEMsZUFBZSxlQUFlLENBQUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yX3BhZ2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFnZV9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbn1cblxuLmVycm9yX3BhZ2UgaDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM0cHg7XG59XG5cbi5lcnJvcl9wYWdlIGgxIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6OTkzcHgpe1xuICAgIC5lcnJvcl9wYWdlIGgxIHNwYW57Zm9udC1zaXplOiA4MHB4O31cbiAgICAuZXJyb3JfcGFnZSBoMXtmb250LXNpemU6IDE4cHg7fVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/_pipes/translate.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/_pipes/translate.pipe.ts ***!
    \*************************************************/

  /*! exports provided: TranslatePipe */

  /***/
  function srcAppShared_pipesTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
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


    var _service_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/translate.service */
    "./src/app/shared/service/translate.service.ts");

    var TranslatePipe =
    /*#__PURE__*/
    function () {
      function TranslatePipe(translate) {
        _classCallCheck(this, TranslatePipe);

        this.translate = translate;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(key) {
          return this.translate.data[key] || key;
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ctorParameters = function () {
      return [{
        type: _service_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate',
      pure: false
    })], TranslatePipe);
    /***/
  },

  /***/
  "./src/app/shared/apiurl/apiurl.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/apiurl/apiurl.ts ***!
    \*****************************************/

  /*! exports provided: BASE_URL, APIURLS */

  /***/
  function srcAppSharedApiurlApiurlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
      return BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIURLS", function () {
      return APIURLS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].END_POINT;
    var APIURLS = {
      LOGIN: BASE_URL + 'salon/login',
      RESET: BASE_URL + 'salon/reset/pass',
      FORGOT: BASE_URL + 'salon/forgot/pass',
      CHANGEPASS: BASE_URL + 'salon/change/pass',
      PROFILE: BASE_URL + 'salon/detail',
      EDIT: BASE_URL + 'salon',
      WRKNGHRS: BASE_URL + 'salon/working/hour',
      FREELNCERESET: BASE_URL + 'freelance/reset/pass',
      STAFF: BASE_URL + 'staff',
      STAFF_REVIEW: BASE_URL + 'staff/user/review',
      STAFF_DETAIL: BASE_URL + 'staff/detail',
      SERVICES: BASE_URL + 'service',
      WALKING: BASE_URL + 'walking',
      WLK_DETAIL: BASE_URL + 'walking/booking',
      WALKING_CHK: BASE_URL + 'walking/check',
      WALKING_ADD: BASE_URL + 'walking/user',
      WALKING_BOOK: BASE_URL + 'walking/booking',
      PROMO: BASE_URL + 'promocode',
      PROMO_DETAIL: BASE_URL + 'promocode/detail',
      BOOKING: BASE_URL + 'salon/booking/list',
      BOOKING_VIEW: BASE_URL + 'booking/salon',
      FEEDBCK: BASE_URL + 'feedback',
      CANCELPOLICY: BASE_URL + 'salon/policy',
      HELP_CENTER: BASE_URL + 'compPortfolio',
      SLOT: BASE_URL + 'salon/slot/duration',
      DASHBOARD: BASE_URL + 'salon/dashboard',
      BOOKING_ACPT: BASE_URL + 'booking/accept/reject',
      BOOKING_SLOT: BASE_URL + 'booking/slot',
      SND_MAIL: BASE_URL + 'booking/send/invoice',
      NOTI_LIST: BASE_URL + 'notification/salon/list',
      NOTI_READ: BASE_URL + 'notification/salon/read',
      WLKBOOKING_ACPT: BASE_URL + 'walking/accept/reject',
      REPORT: BASE_URL + 'salon/report/list'
    };
    /***/
  },

  /***/
  "./src/app/shared/guard/auth.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/guard/auth.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(HttpService, myRoute) {
        _classCallCheck(this, AuthGuard);

        this.HttpService = HttpService;
        this.myRoute = myRoute;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.HttpService.isLoggednIn()) {
            this.myRoute.navigate(['auth']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/guard/login.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guard/login.guard.ts ***!
    \*********************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppSharedGuardLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
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


    var _service_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(HttpService, myRoute) {
        _classCallCheck(this, LoginGuard);

        this.HttpService = HttpService;
        this.myRoute = myRoute;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.HttpService.isLoggednIn()) {
            this.myRoute.navigate(['']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _service_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);
    /***/
  },

  /***/
  "./src/app/shared/interceptor/api.prefix.interceptor.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/interceptor/api.prefix.interceptor.ts ***!
    \**************************************************************/

  /*! exports provided: ApiPrefixInterceptor */

  /***/
  function srcAppSharedInterceptorApiPrefixInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function () {
      return ApiPrefixInterceptor;
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


    var _service_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/http-request.service */
    "./src/app/shared/service/http-request.service.ts");
    /**
     * Prefixes all requests with `environment.serverUrl`.
     */


    var ApiPrefixInterceptor =
    /*#__PURE__*/
    function () {
      function ApiPrefixInterceptor(HttpService) {
        _classCallCheck(this, ApiPrefixInterceptor);

        this.HttpService = HttpService;
      }

      _createClass(ApiPrefixInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var tkn = this.HttpService.isLoggednIn();
          request = request.clone({
            setHeaders: {
              Accept: 'application/json',
              Authorization: "Basic dGllU2Fsb246I0B7dH1pL2UvfClTJSYo",
              accessToken: tkn ? tkn : ''
            }
          });
          return next.handle(request);
        }
      }]);

      return ApiPrefixInterceptor;
    }();

    ApiPrefixInterceptor.ctorParameters = function () {
      return [{
        type: _service_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]
      }];
    };

    ApiPrefixInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApiPrefixInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/interceptor/error.interceptor.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/interceptor/error.interceptor.ts ***!
    \*********************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppSharedInterceptorErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { HttpRequestService } from '../service/http-request.service'


    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor() {
        _classCallCheck(this, ErrorInterceptor);
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // server-side error
              errorMessage = "Error Status: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/interceptor/loader.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/interceptor/loader.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcAppSharedInterceptorLoaderInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/do */
    "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
    /* harmony import */


    var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/delay */
    "./node_modules/rxjs-compat/_esm2015/add/operator/delay.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/index.js");

    var LoaderInterceptor =
    /*#__PURE__*/
    function () {
      function LoaderInterceptor(_loadingBar) {
        _classCallCheck(this, LoaderInterceptor);

        this._loadingBar = _loadingBar;
      }

      _createClass(LoaderInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this3 = this;

          // start our loader here
          this._loadingBar.start();

          return next.handle(req).do(function (event) {
            // if the event is for http response
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              // stop our loader here
              _this3._loadingBar.complete();
            }
          }, function (err) {
            // if any error (not for just HttpResponse) we stop our loader bar
            _this3._loadingBar.complete();
          });
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"]
      }];
    };

    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/interceptor/offline.interceptor.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/interceptor/offline.interceptor.ts ***!
    \***********************************************************/

  /*! exports provided: OfflineInterceptor */

  /***/
  function srcAppSharedInterceptorOfflineInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfflineInterceptor", function () {
      return OfflineInterceptor;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/observable/throw.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var OfflineInterceptor =
    /*#__PURE__*/
    function () {
      function OfflineInterceptor(messageService) {
        _classCallCheck(this, OfflineInterceptor);

        this.messageService = messageService;
      }

      _createClass(OfflineInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (!window.navigator.onLine) {
            this.messageService.add({
              key: 'myKey1',
              severity: 'warn',
              summary: 'No Internet Connection.',
              detail: 'Please check your internet connection and try again.'
            });
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_3__["_throw"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({
              error: 'Internet is required.'
            })); // return _throw(new HttpErrorResponse({ error: 'Internet is required.' }));
          } else {
            // else return the normal request
            return next.handle(request);
          }
        }
      }]);

      return OfflineInterceptor;
    }();

    OfflineInterceptor.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };

    OfflineInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], OfflineInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/module/applicationpipe/applicationpipe.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/module/applicationpipe/applicationpipe.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ApplicationpipeModule */

  /***/
  function srcAppSharedModuleApplicationpipeApplicationpipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationpipeModule", function () {
      return ApplicationpipeModule;
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


    var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_pipes/translate.pipe */
    "./src/app/shared/_pipes/translate.pipe.ts");

    var ApplicationpipeModule = function ApplicationpipeModule() {
      _classCallCheck(this, ApplicationpipeModule);
    };

    ApplicationpipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [// dep modules
      ],
      declarations: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      exports: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]]
    })], ApplicationpipeModule);
    /***/
  },

  /***/
  "./src/app/shared/service/error.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/service/error.service.ts ***!
    \*************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppSharedServiceErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
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


    var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/shared/service/translate.service.ts");
    /* harmony import */


    var _http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-request.service */
    "./src/app/shared/service/http-request.service.ts"); // import { TranslatePipe } from '../_pipes/translate.pipe';


    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService(helper, trns) {
        _classCallCheck(this, ErrorService);

        this.helper = helper;
        this.trns = trns;
      }

      _createClass(ErrorService, [{
        key: "handleError",
        value: function handleError() {
          var errCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          switch (errCode) {
            case 0:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
              break;

            case 1:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INTERNLERR']);
              break;

            case 4:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
              break;

            case 5:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['TKNREQ']);
              break;

            case 6:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDPASS']);
              break;

            case 7:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDOLDPASS']);
              break;

            case 8:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['LINKEXP']);
              break;

            case 9:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['INVALIDLINK']);
              break;

            case 31:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONOTEXIST']);
              break;

            case 34:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['PROMOALRDYEXIST']);
              break;

            case 32:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['STAFFALRDYEXIST']);
              break;

            case 15:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SALONALRDYEXIST']);
              break;

            case 39:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['MAXFILE']);
              break;

            case 41:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DEACTIVE']);
              break;

            case 42:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['DELSALONACC']);
              break;

            case 51:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['NOBOOK']);
              break;

            case 56:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SLNEXIST']);
              break;

            case 57:
              this.helper.errTostr(this.trns.data['ERROR'], this.trns.data['SLNOFF']);
              break;

            default:
              break;
          }
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ctorParameters = function () {
      return [{
        type: _http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]
      }, {
        type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  },

  /***/
  "./src/app/shared/service/helper.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/service/helper.service.ts ***!
    \**************************************************/

  /*! exports provided: Helper */

  /***/
  function srcAppSharedServiceHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
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


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var Helper =
    /*#__PURE__*/
    function () {
      function Helper(messageService) {
        _classCallCheck(this, Helper);

        this.messageService = messageService;
      }

      _createClass(Helper, [{
        key: "convertTimestampToISODate",
        value: function convertTimestampToISODate(value) {
          var year = new Date(value).getFullYear();
          var month = new Date(value).getMonth() + 1 < 10 ? '0' + (new Date(value).getMonth() + 1) : new Date(value).getMonth() + 1;
          var day = new Date(value).getDate() < 10 ? '0' + new Date(value).getDate() : new Date(value).getDate();
          return year + '-' + month + '-' + day;
        }
      }, {
        key: "isLoggednIn",
        value: function isLoggednIn() {
          return localStorage.getItem("access_token");
        }
      }, {
        key: "isImage",
        value: function isImage(fileType) {
          var fileExtention = ['image/jpeg', 'image/bmp', 'image/jpg', 'image/png'];
          return fileExtention.includes(fileType);
        }
      }, {
        key: "parseObject",
        value: function parseObject(data) {
          return JSON.parse(data);
        }
      }, {
        key: "checkDateFormat",
        value: function checkDateFormat(value) {
          var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

          if (reg.test(value)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "parseDate",
        value: function parseDate(data, time) {
          var date = new Date(data),
              mnth = ("0" + date.getMonth()).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          var bac = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.utc(date);
          console.log(bac, '---------');
          return bac.valueOf();
        }
      }, {
        key: "utcDate",
        value: function utcDate(data, time) {
          var isUTC = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var date = new Date(data),
              mnth = ("0" + date.getMonth()).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          var dateTime = new Date(time);
          var timeStamp = new Date(Number(date.getFullYear()), Number(mnth), Number(day), 5, 30, 0);
          var bac = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.utc(timeStamp);
          if (isUTC) return bac.valueOf();else return timeStamp.getTime();
        }
      }, {
        key: "parsehhmm",
        value: function parsehhmm(data) {
          if (data !== null) {
            var date = new Date(data);
            var bac = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.utc(date);
            console.log(bac.toDate(), '-----', bac.format(), '-----');
            bac = bac.toDate();
            return {
              hh: bac.getUTCHours(),
              mm: bac.getUTCMinutes()
            };
          } else {
            return {
              hh: null,
              mm: null
            };
          }
        }
      }, {
        key: "getTimeZone",
        value: function getTimeZone(dateTime, timeZone) {
          var testDateUtc = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(dateTime, timeZone).format('DD-MM-YYYY H:mm:s');
          return new Date(new Date(dateTime).toLocaleString("en-US", {
            timeZone: timeZone
          }));
        }
      }, {
        key: "errTostr",
        value: function errTostr(title, msg) {
          this.messageService.add({
            severity: 'error',
            summary: title,
            detail: msg
          }); // this.toastr.error(msg, title,
          //     {
          //         timeOut: 5000,
          //         closeButton: true,
          //         progressBar: true,
          //         progressAnimation: 'decreasing',
          //         positionClass: 'toast-bottom-left'
          //     });
        }
      }, {
        key: "sucsTostr",
        value: function sucsTostr(title, msg) {
          this.messageService.clear();
          this.messageService.add({
            severity: 'success',
            summary: title,
            detail: msg,
            sticky: true
          }); // this.toastr.success(msg, title,
          //     {
          //         timeOut: 5000,
          //         closeButton: true,
          //         progressBar: true,
          //         progressAnimation: 'decreasing',
          //         positionClass: 'toast-bottom-left'
          //     });
        }
      }, {
        key: "checkImageValidationMultiple",
        value: function checkImageValidationMultiple(event) {
          var files = event.target.files;

          if (files) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var file = _step.value;

                if (files && files[0]) {
                  if (files[0].size > 5000000) {
                    this.errTostr('', 'error');
                    return false;
                  } else if (this.isImage(files[0].type)) {
                    return true;
                  } else {
                    this.errTostr('', 'image error');
                    return false;
                  }
                }
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
          }
        }
      }]);

      return Helper;
    }();

    Helper.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    Helper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Helper);
    /***/
  },

  /***/
  "./src/app/shared/service/http-request.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/service/http-request.service.ts ***!
    \********************************************************/

  /*! exports provided: HttpRequestService */

  /***/
  function srcAppSharedServiceHttpRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequestService", function () {
      return HttpRequestService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _apiurl_apiurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../apiurl/apiurl */
    "./src/app/shared/apiurl/apiurl.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/shared/service/translate.service.ts");

    var HttpRequestService =
    /*#__PURE__*/
    function () {
      function HttpRequestService(http, myRoute, messageService, trns) {
        _classCallCheck(this, HttpRequestService);

        this.http = http;
        this.myRoute = myRoute;
        this.messageService = messageService;
        this.trns = trns;
      }

      _createClass(HttpRequestService, [{
        key: "getApi",
        value: function getApi(apiName) {
          var Url = _apiurl_apiurl__WEBPACK_IMPORTED_MODULE_4__["APIURLS"][apiName];
          return Url;
        }
      }, {
        key: "getRequest",
        value: function getRequest(type, requestUrl, data, queryParams) {
          if (type === 'GET') {
            return this.http.get(this.getApi(requestUrl) + '?' + data);
          } else if (type === 'GET_PARMS') {
            return this.http.get(this.getApi(requestUrl) + '/' + data + (queryParams ? "?".concat(queryParams) : ''));
          } else if (type === 'POST') {
            return this.http.post(this.getApi(requestUrl), data);
            ;
          } else if (type === 'POST_WITHDATA') {
            return this.http.post(this.getApi(requestUrl) + '/' + queryParams, data);
            ;
          } else if (type === 'PUT') {
            return this.http.put(this.getApi(requestUrl) + '/' + queryParams, data);
            ;
          } else if (type === 'DELETE') {
            return this.http.delete(this.getApi(requestUrl) + '/' + data);
            ;
          }
        }
        /**
         * Logs out the user and clear credentials.
         */

      }, {
        key: "logout",
        value: function logout() {
          // Customize credentials invalidation here
          var lang = localStorage.getItem('lang');
          localStorage.clear();
          console.log(lang);
          localStorage.setItem('lang', lang);
          this.myRoute.navigate(['/auth']);
        }
      }, {
        key: "isLoggednIn",
        value: function isLoggednIn() {
          return localStorage.getItem('acsTkn');
        }
      }, {
        key: "errTostr",
        value: function errTostr(title, msg) {
          this.messageService.clear();
          this.messageService.add({
            severity: 'error',
            summary: title,
            detail: msg
          });
        }
      }, {
        key: "sucsTostr",
        value: function sucsTostr(title, msg) {
          this.messageService.clear();
          this.messageService.add({
            severity: 'success',
            summary: title,
            detail: msg
          });
        }
      }, {
        key: "infoTostr",
        value: function infoTostr(title, msg) {
          this.messageService.clear();
          this.messageService.add({
            severity: 'info',
            summary: title,
            detail: msg
          });
        }
      }, {
        key: "toggleRoute",
        value: function toggleRoute(route) {
          this.myRoute.navigate(['/main/event/' + route + '/' + localStorage.getItem('editEventId')]);
        }
      }, {
        key: "arraySearch",
        value: function arraySearch(arr, value) {
          console.log(arr, value);
          var isFound = false;

          if (arr.length) {
            for (var k = 0; k < arr.length; k++) {
              if (arr[k] === value._id) {
                isFound = true;
                break;
              }
            }

            return isFound;
          }

          return false;
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(api) {
          var _this4 = this;

          var finalData = [];
          var obj;
          var i = 0;
          this.getRequest('GET', api, "?all=true").subscribe(function (rs) {
            console.log(rs); //   rs.forEach(element => {
            // 	obj = {
            // 	  "Serial": ++i,
            // 	  "Name": element.name,
            // 	  "Email": element.email
            // 	};
            // 	finalData.push(obj);
            //   });
            //   var options = { noDownload: false, headers: ["Serial", "Name", "Email"] };
            //   new Angular5Csv(finalData, 'staff_list', options);

            _this4.sucsTostr(_this4.trns.data['SUCCESS'], _this4.trns.data['EXPORTD']);
          });
        }
      }]);

      return HttpRequestService;
    }();

    HttpRequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }, {
        type: _translate_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    HttpRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpRequestService);
    /***/
  },

  /***/
  "./src/app/shared/service/translate.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/service/translate.service.ts ***!
    \*****************************************************/

  /*! exports provided: TranslateService */

  /***/
  function srcAppSharedServiceTranslateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
      return TranslateService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TranslateService =
    /*#__PURE__*/
    function () {
      function TranslateService(http) {
        _classCallCheck(this, TranslateService);

        this.http = http;
        this.data = {};
      }

      _createClass(TranslateService, [{
        key: "use",
        value: function use(lang) {
          var _this5 = this;

          // console.log(localStorage.getItem('lang'), lang,'-----------');
          return new Promise(function (resolve, reject) {
            // lang = localStorage.getItem('lang');
            var langPath = "assets/i18n/".concat(lang || 'en', ".json");

            _this5.http.get(langPath).subscribe(function (translation) {
              _this5.data = Object.assign({}, translation || {});
              resolve(_this5.data);
            }, function (error) {
              _this5.data = {};
              resolve(_this5.data);
            });
          });
        }
      }]);

      return TranslateService;
    }();

    TranslateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TranslateService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      'END_POINT': 'http://15.185.106.117:2020/api/v2/',
      'SOKET_END_POINT': 'http://15.185.106.117:2020/api/v2/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/brainmobimac/Abhishek/angular/tie-web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map