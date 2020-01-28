(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tableau de bord.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<style>\nion-icon {\n  font-size: 64px;\n}\n</style>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Votre projet.</ion-card-subtitle>\n    <ion-card-title>Envoyez nous vos donnees.</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    Pour une etude rapide de votre projet, faites nous part de vos informations de base.\n  </ion-card-content>\n</ion-card>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        Bienvenue sur votre tableau de bord !\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        Votre identifiant de connexion: {{userEmail}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n  \n  <ion-card-header>\n      <ion-card-subtitle>Envoyez ici vos informations.</ion-card-subtitle>\n      <ion-card-title></ion-card-title>\n    </ion-card-header>\n  \n  \n  \n    <ion-grid>\n  \n        <ion-row class=\"ion-justify-content-center\">\n            <ion-col>\n              <div>\n               \n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  <ion-card *ngFor=\"let file of files | async\">\n                      <ion-card-header>\n                          {{ file.created | date:'medium' }}\n                      </ion-card-header>\n                   \n                      <ion-card-content>\n                   \n                        <button ion-button block icon-left outline (click)=\"viewFile(file.url)\">\n                          <ion-icon name=\"eye\"></ion-icon>\n                          {{ file.fullPath }}\n                        </button>\n                   \n                        <button ion-button block outline icon-left color=\"danger\" (click)=\"deleteFile(file)\">\n                          <ion-icon name=\"trash\"></ion-icon> Effacer\n                        </button>\n                   \n                      </ion-card-content>\n                   \n                    </ion-card>\n                   \n                    <ion-fab right bottom>\n                      <button ion-fab color=\"primary\" (click)=\"addFile()\">\n                        <ion-icon name=\"cloud-upload\"></ion-icon>\n                      </button>\n                    </ion-fab>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n               \n              </div>\n            </ion-col>\n           </ion-row>\n  \n        </ion-grid>  \n  \n     \n  \n \n</ion-content>\n\n\n<ion-footer (click)=\"logout()\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title >Deconnexion</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set variables for all modes */\n:root {\n  /* Set the background of the entire app */\n  --ion-background-color: #a4e2ff;\n  /* Set the font family of the entire app */\n  --ion-font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n/* Set text color of the entire app for iOS only */\n.ios {\n  --ion-text-color: #000;\n}\n/* Set text color of the entire app for Material Design only */\n.md {\n  --ion-text-color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bob2Jvcy9kZXYvaW9uaWMvaW90YWIvZXh0cmFjdC9pb3RhYjEvaW90YWIvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZ0NBQUE7QUFDQTtFQUNJLHlDQUFBO0VBQ0EsK0JBQUE7RUFFQSwwQ0FBQTtFQUNBLDRGQUFBO0FDREo7QURJRSxrREFBQTtBQUNBO0VBQ0Usc0JBQUE7QUNESjtBRElFLDhEQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFNldCB2YXJpYWJsZXMgZm9yIGFsbCBtb2RlcyAqL1xuOnJvb3Qge1xuICAgIC8qIFNldCB0aGUgYmFja2dyb3VuZCBvZiB0aGUgZW50aXJlIGFwcCAqL1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNhNGUyZmY7XG4gIFxuICAgIC8qIFNldCB0aGUgZm9udCBmYW1pbHkgb2YgdGhlIGVudGlyZSBhcHAgKi9cbiAgICAtLWlvbi1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC8qIFNldCB0ZXh0IGNvbG9yIG9mIHRoZSBlbnRpcmUgYXBwIGZvciBpT1Mgb25seSAqL1xuICAuaW9zIHtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAvKiBTZXQgdGV4dCBjb2xvciBvZiB0aGUgZW50aXJlIGFwcCBmb3IgTWF0ZXJpYWwgRGVzaWduIG9ubHkgKi9cbiAgLm1kIHtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjMjIyO1xuICB9XG4gIFxuICAiLCIvKiBTZXQgdmFyaWFibGVzIGZvciBhbGwgbW9kZXMgKi9cbjpyb290IHtcbiAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbnRpcmUgYXBwICovXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNhNGUyZmY7XG4gIC8qIFNldCB0aGUgZm9udCBmYW1pbHkgb2YgdGhlIGVudGlyZSBhcHAgKi9cbiAgLS1pb24tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBTZXQgdGV4dCBjb2xvciBvZiB0aGUgZW50aXJlIGFwcCBmb3IgaU9TIG9ubHkgKi9cbi5pb3Mge1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjMDAwO1xufVxuXG4vKiBTZXQgdGV4dCBjb2xvciBvZiB0aGUgZW50aXJlIGFwcCBmb3IgTWF0ZXJpYWwgRGVzaWduIG9ubHkgKi9cbi5tZCB7XG4gIC0taW9uLXRleHQtY29sb3I6ICMyMjI7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././data.service */ "./src/app/data.service.ts");





//import { InAppBrowser } from '@ionic-native/in-app-browser';



var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, authService, dataService, alertCtrl, toastCtrl, iab) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.files = this.dataService.getFiles();
    }
    DashboardPage.prototype.addFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputAlert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputAlert = this.alertCtrl.create({
                            //title: 'Store new information',
                            inputs: [
                                {
                                    name: 'info',
                                    placeholder: 'Vos informations...'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Annuler',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Sauver',
                                    handler: function (data) {
                                        _this.uploadInformation(data.info);
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, inputAlert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.uploadInformation = function (text) {
        var _this = this;
        var upload = this.dataService.uploadToStorage(text);
        // Perhaps this syntax might change, it's no error here!
        upload.then().then(function (res) {
            _this.dataService.storeInfoToDatabase(res.metadata).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            toast = this.toastCtrl.create({
                                message: 'Element ajoute !',
                                duration: 3000
                            });
                            return [4 /*yield*/, toast];
                        case 1:
                            (_a.sent()).present();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    DashboardPage.prototype.deleteFile = function (file) {
        var _this = this;
        this.dataService.deleteFile(file).subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toast = this.toastCtrl.create({
                            message: 'Element efface !',
                            duration: 3000
                        });
                        return [4 /*yield*/, toast];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DashboardPage.prototype.viewFile = function (url) {
        this.iab.create(url);
    };
    DashboardPage.prototype.ngOnInit = function () {
        if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
        }
        else {
            this.navCtrl.navigateBack('/login');
        }
    };
    DashboardPage.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.navigateBack('/login');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map