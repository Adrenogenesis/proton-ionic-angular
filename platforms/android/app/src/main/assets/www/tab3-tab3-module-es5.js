function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>\n        Produits\n      </ion-title>\n    </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n\n       <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/logo.png\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>E-commerce</ion-card-subtitle>\n      <ion-card-title>Paiement avec Stripe</ion-card-title>\n      <ion-row>\n        <ion-col>\n          Total Achat\n        </ion-col>\n        <ion-col>\n          {{currencyIcon}}{{paymentAmount}}\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"payWithStripe()\">Payer avec Stripe</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Ressources</ion-label>\n    </ion-list-header>\n    <ion-item href=\"https://ionicframework.com/docs/native/stripe\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Stripe Plugin Documentation</ion-label>\n    </ion-item>\n    <ion-item href=\"https://github.com/zyramedia/cordova-plugin-stripe\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n      <ion-label>Stripe Plugin Repository</ion-label>\n    </ion-item>\n    <ion-item href=\"https://medium.com/enappd/ionic-4-stripe-payment-integration-for-apps-and-pwa-d2bfbf1a7e46\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n      <ion-label>Ionic 4 - Stripe Integration</ion-label>\n    </ion-item>\n    <ion-item href=\"https://store.enappd.com\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n      <ion-label>More Enappd Starters</ion-label>\n    </ion-item>\n  </ion-list>\n\n      \n      <div class=\"ion-padding\">\n        Les actualite sur Twitter\n        <!-- <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p> -->\n         <a href=\"https://twitter.com/protonwebmaster?ref_src=twsrc%5Etfw\" class=\"twitter-follow-button\" data-show-count=\"false\">Suivre @protonwebmaster</a>\n        <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> \n        <!-- <a class=\"twitter-timeline\" href=\"https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw\">National Park Tweets - Curated tweets by TwitterDev</a> -->\n         <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> \n       \n      </div>\n    </ion-content>\n    ";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bob2Jvcy9kZXYyL2lvdGFiMjAyMC9pb3RhYi9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var Tab3Page =
    /*#__PURE__*/
    function () {
      function Tab3Page(stripe, http) {
        _classCallCheck(this, Tab3Page);

        this.stripe = stripe;
        this.http = http;
        this.paymentAmount = '2.99';
        this.currency = 'EUR';
        this.currencyIcon = '€'; // tslint:disable-next-line: variable-name

        this.stripe_key = '';
        this.cardDetails = {};
      }

      _createClass(Tab3Page, [{
        key: "payWithStripe",
        value: function payWithStripe() {
          var _this = this;

          this.stripe.setPublishableKey(this.stripe_key);
          this.cardDetails = {
            number: '4242424242424242',
            expMonth: 12,
            expYear: 2020,
            cvc: '220'
          };
          this.stripe.createCardToken(this.cardDetails).then(function (token) {
            console.log(token);

            _this.makePayment(token.id);
          }).catch(function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "makePayment",
        value: function makePayment(token) {
          this.http.post('https://us-central1-ionic-4-firebase-crud-de-55a43.cloudfunctions.net/payWithStripe', {
            token: token.id
          }).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map