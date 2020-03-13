function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tableau de bord.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<style>\nion-icon {\n  font-size: 64px;\n}\n</style>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Votre projet.</ion-card-subtitle>\n    <ion-card-title>Envoyez nous vos donnees.</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    Pour une etude rapide de votre projet, faites nous part de vos informations de base.\n  </ion-card-content>\n</ion-card>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        Bienvenue sur votre tableau de bord !\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        Votre identifiant de connexion: {{userEmail}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n  \n  <ion-card-header>\n      <ion-card-subtitle>Envoyez ici vos informations.</ion-card-subtitle>\n      <ion-card-title></ion-card-title>\n    </ion-card-header>\n  \n  \n  \n    <ion-grid>\n  \n        <ion-row class=\"ion-justify-content-center\">\n            <ion-col>\n              <div>\n               \n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  <ion-card *ngFor=\"let file of files | async\">\n                      <ion-card-header>\n                          {{ file.created | date:'medium' }}\n                      </ion-card-header>\n                   \n                      <ion-card-content>\n                   \n                        <button ion-button block icon-left outline (click)=\"viewFile(file.url)\">\n                          <ion-icon name=\"eye\"></ion-icon>\n                          {{ file.fullPath }}\n                        </button>\n                   \n                        <button ion-button block outline icon-left color=\"danger\" (click)=\"deleteFile(file)\">\n                          <ion-icon name=\"trash\"></ion-icon> Effacer\n                        </button>\n                   \n                      </ion-card-content>\n                   \n                    </ion-card>\n                   \n                    <ion-fab right bottom>\n                      <button ion-fab color=\"primary\" (click)=\"addFile()\">\n                        <ion-icon name=\"cloud-upload\"></ion-icon>\n                      </button>\n                    </ion-fab>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n               \n              </div>\n            </ion-col>\n           </ion-row>\n  \n        </ion-grid>  \n  \n     \n  \n \n</ion-content>\n\n\n<ion-footer (click)=\"logout()\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title >Deconnexion</ion-title>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }];

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set variables for all modes */\n:root {\n  /* Set the background of the entire app */\n  --ion-background-color: #a4e2ff;\n  /* Set the font family of the entire app */\n  --ion-font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n/* Set text color of the entire app for iOS only */\n.ios {\n  --ion-text-color: #000;\n}\n/* Set text color of the entire app for Material Design only */\n.md {\n  --ion-text-color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bob2Jvcy9kZXYyL2lvdGFiMjAyMC9pb3RhYi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxnQ0FBQTtBQUNBO0VBQ0kseUNBQUE7RUFDQSwrQkFBQTtFQUVBLDBDQUFBO0VBQ0EsNEZBQUE7QUNESjtBRElFLGtEQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ0RKO0FESUUsOERBQUE7QUFDQTtFQUNFLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogU2V0IHZhcmlhYmxlcyBmb3IgYWxsIG1vZGVzICovXG46cm9vdCB7XG4gICAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbnRpcmUgYXBwICovXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2E0ZTJmZjtcbiAgXG4gICAgLyogU2V0IHRoZSBmb250IGZhbWlseSBvZiB0aGUgZW50aXJlIGFwcCAqL1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLyogU2V0IHRleHQgY29sb3Igb2YgdGhlIGVudGlyZSBhcHAgZm9yIGlPUyBvbmx5ICovXG4gIC5pb3Mge1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC8qIFNldCB0ZXh0IGNvbG9yIG9mIHRoZSBlbnRpcmUgYXBwIGZvciBNYXRlcmlhbCBEZXNpZ24gb25seSAqL1xuICAubWQge1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMyMjI7XG4gIH1cbiAgXG4gICIsIi8qIFNldCB2YXJpYWJsZXMgZm9yIGFsbCBtb2RlcyAqL1xuOnJvb3Qge1xuICAvKiBTZXQgdGhlIGJhY2tncm91bmQgb2YgdGhlIGVudGlyZSBhcHAgKi9cbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2E0ZTJmZjtcbiAgLyogU2V0IHRoZSBmb250IGZhbWlseSBvZiB0aGUgZW50aXJlIGFwcCAqL1xuICAtLWlvbi1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFNldCB0ZXh0IGNvbG9yIG9mIHRoZSBlbnRpcmUgYXBwIGZvciBpT1Mgb25seSAqL1xuLmlvcyB7XG4gIC0taW9uLXRleHQtY29sb3I6ICMwMDA7XG59XG5cbi8qIFNldCB0ZXh0IGNvbG9yIG9mIHRoZSBlbnRpcmUgYXBwIGZvciBNYXRlcmlhbCBEZXNpZ24gb25seSAqL1xuLm1kIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzIyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! .././data.service */
    "./src/app/data.service.ts"); //import { InAppBrowser } from '@ionic-native/in-app-browser';


    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(navCtrl, authService, dataService, alertCtrl, toastCtrl, iab) {
        _classCallCheck(this, DashboardPage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.files = this.dataService.getFiles();
      }

      _createClass(DashboardPage, [{
        key: "addFile",
        value: function addFile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var inputAlert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    inputAlert = this.alertCtrl.create({
                      //title: 'Store new information',
                      inputs: [{
                        name: 'info',
                        placeholder: 'Vos informations...'
                      }],
                      buttons: [{
                        text: 'Annuler',
                        role: 'cancel'
                      }, {
                        text: 'Sauver',
                        handler: function handler(data) {
                          _this.uploadInformation(data.info);
                        }
                      }]
                    });
                    _context.next = 3;
                    return inputAlert;

                  case 3:
                    _context.sent.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "uploadInformation",
        value: function uploadInformation(text) {
          var _this2 = this;

          var upload = this.dataService.uploadToStorage(text); // Perhaps this syntax might change, it's no error here!

          upload.then().then(function (res) {
            _this2.dataService.storeInfoToDatabase(res.metadata).then(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                var toast;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        toast = this.toastCtrl.create({
                          message: 'Element ajoute !',
                          duration: 3000
                        });
                        _context2.next = 3;
                        return toast;

                      case 3:
                        _context2.sent.present();

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          });
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(file) {
          var _this3 = this;

          this.dataService.deleteFile(file).subscribe(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      toast = this.toastCtrl.create({
                        message: 'Element efface !',
                        duration: 3000
                      });
                      _context3.next = 3;
                      return toast;

                    case 3:
                      _context3.sent.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "viewFile",
        value: function viewFile(url) {
          this.iab.create(url);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
          } else {
            this.navCtrl.navigateBack('/login');
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          this.authService.logoutUser().then(function (res) {
            console.log(res);

            _this4.navCtrl.navigateBack('/login');
          }).catch(function (error) {
            console.log(error);
          });
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map